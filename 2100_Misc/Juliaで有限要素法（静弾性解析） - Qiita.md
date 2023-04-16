---
title: Juliaで有限要素法（静弾性解析） - Qiita
updated: 2021-09-11 09:57:57Z
created: 2021-09-11 09:57:57Z
source: >-
  https://qiita.com/picric_acid/items/4cadcdc8f85a3efcdb30?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items
---

# JuliaとFortran、Python

　Juliaは2012年に公表された割と新しめの言語です。結構頻繁にアップデートがあって、最新のバージョンは1.6系です。この記事のコードではJulia v1.6.2を使っています。正直まだこのコードを書いてみただけなので、Juliaの詳しい仕様については勉強不足ですが、多重ディスパッチやメタプログラミング(マクロ)などはなかなか強力な機能だと思います。Juliaを数値計算で扱う上での利点は、Fortranより書きやすく、Pythonより速い、ことです。

　　Fortranは他の高級言語などより基本的に速いですが、コンパイルが面倒だったり、ライブラリが少なかったりで、数値計算コードを書くには根気がいります。対して、ライブラリが豊富でimportするだけでなんでもできるPythonを使うとすると、数値計算をまともな時間で終わらせるにはかなりチューニングが必要です。

　Juliaは行列計算や数値計算用の関数を標準でサポートしており、書きやすくてかつテキトーに書いてもある程度速いです。欠点を挙げるとすれば、まだまだ開発例が少なく情報が(Pythonなどと比較すると)集めづらいことでしょうか。

# 有限要素法

　　有限要素法についてや静弾性解析については以前の記事[3](https://qiita.com/picric_acid/items/4cadcdc8f85a3efcdb30?utm_campaign=popular_items&utm_medium=feed&utm_source=popular_items#fn3)を参照してください。今回はJupyter notebookで書いているので、あとで数式などを書き加えておくつもりです。

# コード

　　Fem2dモジュールでは二次元有限要素法の構造体と関数をまとめています。Juliaにおいて構造体structは不変なもので、変更できません。構造体の中身を変更したい場合はmutable structで宣言します。コードでは、変更しない構造体Paramはstruct、計算途中で書き換えるStress, Element, Nodeはmutable structとして宣言しています。Cやfortranの構造体と違ってコンストラクタがあり、構造体名と同じ名前で呼び出せます。構造体内で構造体名のメソッドを作ることで自分でコンストラクタを定義することもできます。

　Juliaのブロックは{}を使わずにfunction, for, ifなどで始めてendで閉じます。Fortranに近いので書き換えやすかったです(たまにforをdoって書いちゃうけど)。ただし、Fortranで

`subroutinehogehoge()...endsubroutinehogehoge`
としたところが

```
function hogehoge()
...
end
```

となるので、長い関数ではendを見失いそうだなと思い、僕のコードでは関数のendにコメントで閉じた関数名を書いてあります。ちなみに、JuliaのコメントはPython式の

`# comment`
です。

　Juliaではギリシャ文字などのunicode文字が使えます。コード中ではアイソパラメトリック要素の座標としてξ, ηを使っています。TeX風に\xi, \etaと入力してからtabキーを押すと変換されます。

　標準ライブラリであるLinearAlgebra.jlをusingすることで線形計算を"\"で行えます。コード中では
`x = kmat\dvec`
というふうに、[K](x)=(d)を解くのに使っています。

　read_node(), read_element()で接点座標やパラメータを読み取り、構造体の配列にしまっています。構造体の配列、mutable structで構造体を宣言してからArray{構造体名}で作ることができます。そこのコードを抜き出したのが以下です。

```
mutable struct Node
    x::Real
  y::Real
  bcx::Real
  bcy::Real
    xbt::Int
  ybt::Int
end

nd = Array{Node}(undef, no) #noが配列の要素数
```

read_node(), read_element()では配列の要素ごとにコンストラクタを動かしています。

　Juliaで図をプロットするには、Plots.jlをusingします。Plotsはバックグラウンドによってプロットの仕方やできることが変わります。今回は標準のGRでプロットしています。GRのプロットではplot()でプロットしますが、同じ図にグラフを重ねて書くには２つ目以降をplot!()とします。以下はプロットする部分の抜き出しです。

```
plot() # 空のプロットを作る

for i = 1:el
    nx = []
    ny = []
    for j = 1:8
        p = elem[i].node[j]
        push!(nx, nd[p].x)
        push!(ny, nd[p].y)
    end
    plot!(nx, ny, color = :red, legend = nothing)
    scatter!(nx, ny, color = :blue)
end

plot!() #for文を抜けたあとでもう一度呼び出す
```

有限要素ごとにfor文内で繰り返しplot!()していますが、for文に入る前にplot()で空のプロットを作り、for文を抜けてからもう一度plot!()を呼び出さないとうまくいきませんでした。もっとうまい方法があるのかもしれません。

（メッシュ分割とか追記するかも)

# まとめ

　Fortranの有限要素法プログラムを、ほとんどそのままの文法でJuliaに起こすことができました。ただし、plotについてはpythonに似た仕様(実際、Plots.jlのバックグラウンドにはPythonのmatplotlibと同じ仕様のPyplotがある)です。

　しかし、最近認知されてきているとはいえ、Juliaの情報はまだまだ少なく、公式ドキュメント以上の情報を得ることが難しかったです。高速化の方法や細かいことは何かしらのコミュニティで聞いてみないとわからないことが多いです。今回のコードはFortranをそのまま写しただけですので、速くするコツ等があればご教授いただけると幸いです。

# 参考になるサイトなど

　juliaを書く上で参考になったサイトを勝手ながら紹介させていただきます。この記事で一番役に立つのはここかもしれない。
・[物理で使う数値計算入門：Julia言語による簡単数値計算](https://github.com/cometscome/Julianotes)

　数値計算におけるJuliaの使い方、他の言語との違いがまとめられています。CやFortranなどの他の言語を多少触ったことがある人ならば、このサイトを読むだけでJuliaの基本的なプログラムは書けると思います。

・[Fortranから始めるJulia](https://cometscome.github.io/JuliaFromFortran/build/)
　　上のサイトと同じ方が書かれている、FortranをJuliaに書き直す際のコツが載っているサイトです。サンプルプログラムも豊富に載っています。

・[Juliaのすすめ](https://sm1018.skr.u-ryukyu.ac.jp/db50031_yogi/member/yogi/julia_main)

　Juliaの数値計算プログラムの例がたくさん載っています。Jupyter notebookで見られるので、結果のplotの仕方なども参考になります。