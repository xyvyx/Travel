---
title: Pythonを使った数値計算のコツ - Qiita
updated: 2018-03-18 11:36:17Z
created: 2018-03-18 11:36:17Z
source: https://qiita.com/shohirose/items/18d66a67be69df45186f
author: xyvyx10
tags:
  - SI
  - Web
---

# Pythonを使った数値計算のコツ

# はじめに

最近Qiitaでpython関係の記事を検索して読んでいるのですが、割とよくnumpyやscipyの良さを活かしきれていないコードを見かけます。おそらく私と同じくコンパイラ型言語のFortran, C, C++を使ってプログラミングを始めたために、インタープリタ型言語のPythonを使っても同じようなコードを書いてしまっているのだろうと思いますが、非常にもったいないです。そこで数値計算に特化して、どうやって速いコードを書くかを実例を示しながら説明していこうと思います。

追記：順を追って説明するようにしました。

# 計算を高速に実行するためのポイント

## forループを書かない

一番大事なことはforループを可能な限り避けることです。配列に対して計算を行うとき、Fortran, C, C++ではforループを使って各要素ごとに計算を行います。

// the multiplication of two vectors, v1 and v2
for (int i = 0; i < v.size(); ++i) {
v[i] = v1[i]*v2[i];
}

pythonでは、このようなforループを使った計算が**非常に遅いです**。その代わりとして、numpyに各種配列計算の機能・関数が用意されているので、可能な限りそれらを使うようにすることが大事です。

例えば上のベクトル要素の掛け算はnumpy.arrayを使うと簡単に表せてかつforループで書くよりも圧倒的に高速です。

# v1 and v2 are of type numpy.array

v = v1*v2
またこのようにforループを使わないことでコードの可読性も向上します。
例えば次の記事の問題を考えてみましょう。

[Pythonによる数値計算-1次元電子系のパイエルス転移](https://qiita.com/Show_Japan99/items/46bddff868ef69fbcfe6)

この記事ではnumpy.arrayではなくリストを用意し、forループを回して計算しています。
for i in range(step):

y[i] = (math.log(abs((x[i]+1)/(x[i]-1)))/x[i])/(math.log(abs((x[0]+1)/(x[0]-1)))/x[0])

この部分をnumpy.arrayを使って書き直したものがこちらになります。
（簡単のため発散を避ける部分はあえて除外しています。）
import numpy as np
def calc_chi(x):
return np.log(np.fabs((x + 1.0)/(x - 1.0))/x)
x0 = 0.0
x1 = 2.0
n = 100
x = np.linespace(x0, x1, n)
chi0 = calc_chi(x0)

# this line corresponds to the above for-loop

chi = calc_chi(x)/chi0
この問題は大した計算ではないため高速化のメリットはほとんどありませんが、コードの可読性が大きく向上しており、この点のメリットが大きいことがわかります。

### 一次元偏微分方程式

偏微分方程式を高速に解くには、線形な偏微分方程式を離散化すると行列の和・積の形に帰着するということを利用します。例えば一次元拡散方程式を[FTCS法](https://en.wikipedia.org/wiki/FTCS_scheme)で解くことを考えましょう。

∂u∂t=α∂2u∂x2∂u∂t=α∂2u∂x2
時間について前進差分、空間について中心差分を取ると
un+1i=uni+r(uni+1−2uni+uni−1)uin+1=uin+r(ui+1n−2uin+ui−1n)
となります。ここでr=αΔtΔx2r=αΔtΔx2です。これを単純に実装すると
for i in range(N):
u_new[i] = u[i] + r*(u[i + 1] - 2.0*u[i] + u[i - 1])
となります。当然ながらこれは遅いです。
もう一度離散化した式を見てみましょう。実はこの式は行列を使って表すことができます。
un+1=Aunun+1=Aun
ここでu=[u0,u1,⋯,uN−1]Tu=[u0,u1,⋯,uN−1]T、A=I+rBA=I+rBです。IIは単位行列、BBは次式で定義される帯行列です。
B=⎡⎣⎢⎢⎢⎢⎢⎢⎢−211−21⋱1−211−2⎤⎦⎥⎥⎥⎥⎥⎥⎥B=[−211−21⋱1−211−2]

したがって、行列AAを一度計算してしまえば、forループを使わずに時間発展を計算することが可能となります。行列AAは疎行列であり、scipyを利用すれば疎行列とベクトルの掛け算を高速に計算することができます。

import numpy as np
from scipy.sparse import dia_matrix identity

# construct matrix A

data = np.array([np.ones(N), -2.0*np.ones(N), np.ones(N)])
offsets = np.array([-1, 0, 1])
B = dia_matrix((data, offsets), shape=(N, N))
I = identity(N)
A = I + r*B
行列計算を使って修正したものが下記コードになります。

# calculate u at new time step

u_new = A.dot(u)

### 二次元偏微分方程式

二次元偏微分方程式も、一次元偏微分方程式と同様に離散化した式が行列で表されることを利用して高速に解くことができます。
例えばこちらの記事の問題を考えてみましょう。

[[Pythonによる科学・技術計算] 静電位に対する2次元ラプラス・ポアソン方程式のヤコビ法による数値解法，楕円型偏微分方程式，境界値問題](https://qiita.com/sci_Haru/items/6b80c7eb8d4754fb5c2d)

ヤコビ法を用いたときの離散化式は次のようになります。

ϕn+1i,j=14(ϕni+1,j+ϕni−1,j+ϕni,j+1+ϕni,j−1)ϕi,jn+1=14(ϕi+1,jn+ϕi−1,jn+ϕi,j+1n+ϕi,j−1n)

この式を素直にforループを使って実装すると、下のようになります。
laplace_original.py
for i in range(L+1):
for j in range(L+1):
if i == 0 or i == L or j == 0 or j == L:

# for boundary condition

phi2[i,j] = phi[i,j]
else: # for Jacobi method
phi2[i,j] = (phi[i+1,j] + phi[i-1,j] + phi[i,j+1] + phi[i,j-1])/4

毎反復ごとにこのループを回しつつ、さらにそのループの中で境界条件のための場合分けまで行っているため非常に遅くなります。（例えコンパイラ型言語だったとしても、速度が重要な場合はforループ内で場合分けするのは避けるべきです。）

さてもう一度離散化式を見てみましょう。この場合ϕϕが二次元配列で表されているため行列表現に書き換えるのは難しそうに見えます。しかし二次元配列は一次元配列に変換が可能です（(i,j)↔k(i,j)↔kとマップさせれば、ϕi,j↔ϕkϕi,j↔ϕkとなる）。よってこの式も

ϕn+1=Aϕnϕn+1=Aϕn
と行列で表すことが可能です。AAは疎行列です。

forループを使った上記記事のコードだと、私のPCではwhile文の部分の計算に約９秒かかりました。しかしϕϕを一次元配列に変換し、forループ部分の計算を疎行列の掛け算に変換したコードの場合、while文の部分の計算は約0.05秒で終わりました。約180倍高速になったわけです。forループを行列計算に変換した部分を下に示します。

（リファクタリングしたスクリプトは[GitHub](https://github.com/shohirose/qiita/tree/master/sci_Haru)にアップしました。）

laplace_refactored.py

# update field using Jacobi method

# A is sparse matrix

phi_new = A.dot(phi)
<s>続く</s>
続きました。

## ライブラリを使用する

自分が行いたい処理は、大抵の場合既にライブラリとして提供されています。スクリプトを書く前にググりましょう。
（その処理について勉強するためにあえてスクリプトを書く場合はこの限りではありませんが…）
ググるコツは

- その処理の一般的な名前で検索する
- その処理に関連する単語を加える
- 日本語でヒットしなければ英語で検索する

とかでしょうか。私の場合ほとんど英語で検索をかけるため、大体は本家レファレンスかStack Overflowが引っ掛かり答えを見つけることができます。
例えばヒストグラムを計算しようとしている記事

[情報処理の問題をfortranとpythonで書く！#08 0~1まで0.1区分でそれぞれの個数を求める](https://qiita.com/aira002/items/ff4b7809c60131fe93e4)

でコメントしたのですが、ヒストグラムを計算する関数numpy.histogramを使うとforループを使わず、わずか４行で処理が終わります。
import numpy as np
data = np.loadtxt('data.txt')
bin_edges = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
hist, bin_edges = np.histogram(data, bins=bin_edges)

また[Juliaの速さを体感する](https://qiita.com/ceptree/items/b5cfca180e85e61c42a8)という記事では、常微分方程式をforループを使って解いたときのJuliaとPythonの速度比較を行っています。ただ、scipy.integrate.odeintを使えばpythonでも容易にJulia並の速度を出すことができるので、forループを使った比較は実用上あまり意味がありません。

import numpy as np
from scipy.integrate import odeint

# discretization

t = np.linspace(0.0, 4.0, 100)

# initial value

y0 = 1.0

# function definition which returns dy/dt

def f(y, t): return -y
y = odeint(f, y0, t)
数値計算に関するライブラリを予めざっと読み込んでおき、どんな関数があるのか把握しておくのも大切です。

## CythonやNumbaを使って高速化する

特にNumbaは簡単に高速化できるのでおすすめです。
こちらの記事で実際どのくらい高速化されるか比較されています。

[Juliaの速さを体感する2 (参考 : Python(Numba)とFortranの速さも体感する)](https://qiita.com/ceptree/items/0eabac1f2a2ca74a4ece)

[PythonコードをNumbaで高速化したときのメモ](https://qiita.com/toyolab/items/b5d95bd38b3c7c66b510)

## Pythonで書くと遅くなる関数・クラスのみをFortran, C, C++で書く

非常に複雑な処理が必要で、どうしてもforループをなくすことができない場合、Fortran, C, C++でその処理を書いてコンパイルし、pythonから呼び出すことで高速化できます。Fortran, C, C++のpython用ラッパーは下記に示す通りです。