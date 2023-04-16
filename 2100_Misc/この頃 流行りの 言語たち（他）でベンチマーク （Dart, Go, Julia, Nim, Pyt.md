---
title: この頃 流行りの 言語たち（他）でベンチマーク （Dart, Go, Julia, Nim, Python, Rust 他） - Blank File
updated: 2017-03-28 11:08:25Z
created: 2017-03-28 11:08:25Z
source: http://h-miyako.hatenablog.com/entry/2015/01/23/060000
tags:
  - SI
---

# Blank File

## LinuxとかPythonとかVimとか、趣味でいじる感じで

自分が気になっている、主に最近の[プログラミング言語](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%B0%A5%E9%A5%DF%A5%F3%A5%B0%B8%C0%B8%EC)で[ベンチマーク](http://d.hatena.ne.jp/keyword/%A5%D9%A5%F3%A5%C1%A5%DE%A1%BC%A5%AF)をやってみました。方法は、42番めの[フィボナッチ数列](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A3%A5%DC%A5%CA%A5%C3%A5%C1%BF%F4%CE%F3)の値を計算する時間を測るだけです。[フィボナッチで各種言語をベンチマーク - satosystemsの日記](http://d.hatena.ne.jp/satosystems/20121228/1356655565) を参考にさせていただきました。

- 注意
    - 筆者は[Python](http://d.hatena.ne.jp/keyword/Python)くらいしか使ったことない素人です

## 言語紹介

測定した言語は、以下の11種類です。
選択基準は、

- メジャーっぽい
- 自分が知っていた
- 自分が気になった
- 環境構築が楽だった（or すでに構築済みだった）
- 怖くない

などです。気分と手間で選びました。

## 測定条件

上記の言語で[フィボナッチ数列](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A3%A5%DC%A5%CA%A5%C3%A5%C1%BF%F4%CE%F3)の42番目の数を求める時間を測りました。42番目なのはなんとなく全部の言語がまともに測定できる範囲に収まったからです[*1](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#f-8edaa781)。

あと、今回は[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)が必要な言語は[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間も測りました。[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間もコードを書くときには重要な要素だと思うので、参考にしていただければ。

## 2015年2月22日 10時16分 追記

Cの最適化オプションを`-O3`にするとNimよりCの方が速いとのことです。この記事では`-O2`で実験していました。申し訳ありません。`-O3`オプション付きで[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)すると、NimよりもCの方が若干速くなります。

> Nim vs C 追実験した．10回実行して平均と分散を計算．> [> C言語](http://d.hatena.ne.jp/keyword/C%B8%C0%B8%EC)> が早い（差は小さいが統計的に> [> 有意](http://d.hatena.ne.jp/keyword/%CD%AD%B0%D5)> ）． Nim -d:release 平均4.2199秒 分散0.0018> [> C言語](http://d.hatena.ne.jp/keyword/C%B8%C0%B8%EC)>  -O3 平均 4.0689秒 分散0.0008

> — ᴛ. ᴍᴀᴇʜᴀʀᴀ (@tmaehara) > [> February 22, 2015](https://twitter.com/tmaehara/status/569300231445028864)

[各言語の説明なんて不要、という方は結果へどうぞ](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#kankyou)

### [ソースコード](http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9)

ベースのコードは単純なこれです（[python](http://d.hatena.ne.jp/keyword/python)）。
def fib(n):
if n < 2: return n
return fib(n - 2) + fib(n - 1)
print(fib(38))
一応できる限り条件を揃えるため、以下のルールに沿って各言語のコードを用意しました。

- まず `n < 2` で条件分岐し、真ならそのまま n を返す
- 偽ならば（elseは使わず）if節を抜け、関数の最後で`fib(n-1)+fib(n-2)`を返す
- nは[ソースコード](http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9)に直接書く
    - 実行時に引数として与えたほうが公正な気はしますが、詳しくない言語で実行時にパラメータを受け取る方法を調べるのが面倒だったのでこの方式にします
- 最後に標準出力に結果を出力する

[フィボナッチで各種言語をベンチマーク - satosystemsの日記](http://d.hatena.ne.jp/satosystems/20121228/1356655565) で[ベンチマーク](http://d.hatena.ne.jp/keyword/%A5%D9%A5%F3%A5%C1%A5%DE%A1%BC%A5%AF)に使われている言語は、同じコードを一部変更して使わせていただきました。 問題がありましたらご連絡下さい。

#### [C言語](http://d.hatena.ne.jp/keyword/C%B8%C0%B8%EC)

とりあえず入れないとまずいですよね。

[コンパイラ](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%E9)（[gcc](http://d.hatena.ne.jp/keyword/gcc)）による最適化のあり、無し両方で測定しました。[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間もどの程度変わるか、気になるところです。

#include <stdio.h>
int fib(int n) {
if (n < 2) return n;
return fib(n - 2) + fib(n - 1);
}
int main(int argc, char *argv[]) {
printf("%d\n", fib(42));
return 0;
}
gcc -o c c.c; ./c
gcc -O2 -o c2 c.c; ./c2

#### [Dart](http://d.hatena.ne.jp/keyword/Dart)

[Google](http://d.hatena.ne.jp/keyword/Google)製の、いわゆるaltJSの一つ。 そのへんのaltJSと違うのは、[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)の代替となることを狙っている点です。 Dartium上でそのまま実行することもできますし、[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)に変換してから普通のブラウザ上で実行することもできます。

int fib(num n) {
if (n < 2) return n;
return fib(n - 2) + fib(n - 1);
}
void main() {
print(fib(42));
}

今回は[Dart](http://d.hatena.ne.jp/keyword/Dart)  [VM](http://d.hatena.ne.jp/keyword/VM)で直接実行する場合と、[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)に変換してからnode.jsで実行する場合の二通りを測定しました。[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)への変換時間も、一応[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間として測りました。

dart dart.dart
dart2js -o dart.js dart.dart
node dart.js

#### Go 言語

引き続き[Google](http://d.hatena.ne.jp/keyword/Google)の言語です。最近人気ですね。 私も結構好きですが、なんとなく流行に乗り遅れてしまった感じです。

言語の説明を読んで印象に残ったのは、[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間を短くしたかった、というところです。 実際のところどうなのか、今回はついでに[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間も測ったので参考にして下さい。

package main
import "fmt"
func fib(n int) int {
if n < 2 {
return n
}
return fib(n-2) + fib(n-1)
}
func main() {
fmt.Println(fib(42))
}

#### [JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)

これもやっといた方がいいだろう、という理由で入れました。 node.jsで実行してます。
function fib(n) {
if (n < 2){ return n; }
return fib(n - 2) + fib(n - 1);
}
console.log(fib(42));

#### Julia

手軽に書けて行末セミコロンも[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)も不要だけど速い、という言語。 メインターゲットは[学術](http://d.hatena.ne.jp/keyword/%B3%D8%BD%D1)系っぽいと勝手に思ってます。[Matlab](http://d.hatena.ne.jp/keyword/Matlab), [Python](http://d.hatena.ne.jp/keyword/Python) (numpy, scipy, pandas, matplotlib), Rあたりが競合だと思います。

その速さは実際の所どうなのか、気になったのでエントリーです。
function fib(n)
if n < 2
return n
end
return fib(n - 2) + fib(n - 1)
end
println(fib(42))

#### [Lua](http://d.hatena.ne.jp/keyword/Lua)/Luajit

ブラジル産まれ？の[スクリプト言語](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8%B8%C0%B8%EC)。 軽量なので組み込まれて使われることが多いそうです。

一時[Vim](http://d.hatena.ne.jp/keyword/Vim)界隈で話題になっていたのでエントリー。 LuaJitも測りました。
function fib(n)
if n < 2 then
return n
end
return fib(n - 2) + fib(n - 1)
end
print(fib(42))

#### Nim (旧称Nimrod)

[先日の記事](http://h-miyako.hatenablog.com/entry/2015/01/13/201846)に書いた [Nim](http://nim-lang.org/) です。[Python](http://d.hatena.ne.jp/keyword/Python)風の静的型付[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)言語です。

この記事を書くきっかけのひとつは、Nimで[フィボナッチ数列](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A3%A5%DC%A5%CA%A5%C3%A5%C1%BF%F4%CE%F3)の計算をしてみたら妙に速かったことです。ぜひ他の方にもあの驚きを体験して欲しいです。 ちなみに、もうひとつのきっかけは後述するRustです。

proc fib(n: int): int =
if n < 2:
return n
return fib(n - 2) + fib(n - 1)
echo(fib(42))
Compileオプションの異なる以下二通りで計測しました。
1. 最適化なし × 実行時チェックあり (`debug`)

    - `nim compile nim.nim`

2. 最適化あり × 実行時チェックなし (`release`)

    - `nim compile -d:release nim.nim`

また、Nimは[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時にキャッシュを作りますが、今回は[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間の計測前に削除しています。なので、通常二回目以降の[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)ではこの[ベンチマーク](http://d.hatena.ne.jp/keyword/%A5%D9%A5%F3%A5%C1%A5%DE%A1%BC%A5%AF)よりも[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間が短くなります。

rm -rf ./nimcash

#### [Python](http://d.hatena.ne.jp/keyword/Python)

[Python](http://d.hatena.ne.jp/keyword/Python)です。個人的に好きといいますか、それなりの規模のコードを書いたことがあるのは[Python](http://d.hatena.ne.jp/keyword/Python)くらいです。 今回はPython2.7, PyPy, Python3.4, PyPy3 を試しました。

def fib(n):
if n < 2: return n
return fib(n - 2) + fib(n - 1)
print(fib(42))

#### [Ruby](http://d.hatena.ne.jp/keyword/Ruby)

日本産。最近はバージョンが上がるごとに速くなっているらしいので、1.9と2.0で測りました。

個人的には、以前[Redmine](http://d.hatena.ne.jp/keyword/Redmine)に[Ruby](http://d.hatena.ne.jp/keyword/Ruby)/[Rails](http://d.hatena.ne.jp/keyword/Rails)/[Redmine](http://d.hatena.ne.jp/keyword/Redmine)のバージョン間の互換性で泣かされたので好きではありません。

def fib(n)
if (n < 2) then
return n
end
return fib(n - 2) + fib(n - 1)
end
puts fib(42)

#### Rust

[Mozilla](http://d.hatena.ne.jp/keyword/Mozilla)謹製。 先日1.0.0-alpha がリリースされました。 おめでとうございます。

以前、[このブログで記事を書いた](http://h-miyako.hatenablog.com/entry/2014/10/10/170532)こともありました。 その時の記事では、最適化無しの実行結果でGoと比較して遅いとか書いてしまいました。 最適化オプションに先日気づいて追記したのですが、アクセス数の雰囲気からけっこう多くの人が追記前に読んでいたようで、Rust関係の皆様には申し訳ない気持ちでいっぱいです。

ということで、Rustさんの汚名を雪ぐために、今回はちゃんと最適化して他の言語と比較します。むしろそれがこの記事を書く理由の半分です。
fn fib(n: isize) -> isize {
if n < 2 { return n; }
fib(n - 2) + fib(n - 1)
}
fn main() {
println!("{}", fib(42));
}
1. 最適化なし

    - `rustc rust.rs`

2. 最適化あり

    - `rustc -O rust.rs`

#### [Vim](http://d.hatena.ne.jp/keyword/Vim) Script

この記事は[Vim](http://d.hatena.ne.jp/keyword/Vim)で書いています。

元々は[Vim](http://d.hatena.ne.jp/keyword/Vim)の設定を記述するための言語だったはずですが、 日本語書籍（[Vim script テクニックバイブル](http://www.amazon.co.jp/gp/product/4774166340/ref=as_li_ss_tl?ie=UTF8&camp=247&creative=7399&creativeASIN=4774166340&linkCode=as2&tag=miyakogi-22)）が出版されるなど重要な言語になってきたので今回測定しました。

以下のコードで測定しました。
function! s:fib(n)
if a:n < 2
return a:n
endif
return s:fib(a:n - 2) + s:fib(a:n - 1)
endfunction
print s:fib(42)
qa!
測定方法はもちろん他と同じようにtimeで実行から終了までです。 上記のコードを `vim.vim` として保存し、以下のように実行しました。
time vim --noplugin -u ./vim.vim -c "q"

[Vim](http://d.hatena.ne.jp/keyword/Vim)の起動時間も含まれるの？という疑問もあるかもしれませんが、結果を見ればその疑問はなくなると思います。

## [測定環境]()

以下の環境で測定しました。

- OS: [Ubuntu](http://d.hatena.ne.jp/keyword/Ubuntu) 14.04, [linux](http://d.hatena.ne.jp/keyword/linux) 3.13.0-44-lowlatency (64bit)
- CPU: [Core i7](http://d.hatena.ne.jp/keyword/Core%20i7) の最初の頃の4コア8スレッド2.66GHz (i7 920?)
- Memory: 9GB

測定時はCPUのクロックを勝手に変えられないように一応 cpufreqd で100%固定にしました。

測定に使った[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)は[こちら](https://gist.github.com/miyakogi/8049fb85889a9e7aae9a)です。[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間の測定を公平に行うため、[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)前に保存されているキャッシュや実行ファイルを削除しています。

測定時は、測定[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)を `nice -n -15 ./benchmark.sh` と実行しました。 念の為、優先度を高めにしてます。

集計は手作業で行いました（一度きりしかやるつもりないので）。

## 測定結果

ソートなんてしません。アルファベット順です。

| Language | Version |  [コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間 (s) | 実行時間 (s) |
| --- | --- | --- | --- |
| c   |  [gcc](http://d.hatena.ne.jp/keyword/gcc) 4.8.2 |  **0.02** | 3.993 |
| c (optimized) |  [gcc](http://d.hatena.ne.jp/keyword/gcc) 4.8.2 | 0.29 | 2.062 |
|  [dart](http://d.hatena.ne.jp/keyword/dart) | 1.8.3 | 0   | 5.139 |
| dart2js with node.js | 1.8.3 / v0.11.11 | 1.607 | 5.583 |
| go  | 1.4.1 | 0.313 | 3.795 |
|  [javascript](http://d.hatena.ne.jp/keyword/javascript) | node v0.11.11 | 0   | 5.546 |
| julia | 0.2.1 | 0   | 6.479 |
|  [lua](http://d.hatena.ne.jp/keyword/lua) | 5.2.3 | 0   | 67.669 |
| luajit | 2.0.2 | 0   | 4.962 |
| nim | 0.10.2 | 0.795 | 25.996 |
| nim (optimized) | 0.10.2 |  **1.4** |  **1.625** |
| pypy |  [Python](http://d.hatena.ne.jp/keyword/Python) 2.7.3 (PyPy 2.2.1) | 0   | 20.617 |
| pypy3 |  [Python](http://d.hatena.ne.jp/keyword/Python) 3.2.5 (PyPy 2.4.0) | 0   | 18.271 |
| python2 | 2.7.6 | 0   | 120.652 |
| python3 | 3.4.0 | 0   | 142.071 |
|  [ruby1.9](http://d.hatena.ne.jp/keyword/ruby1.9) | 1.9.3p484 | 0   | 72.74 |
| ruby2.0 | 2.0.0p384 | 0   | 58.758 |
| rust | 1.0.0-alpha | 0.29 | 4.692 |
| rust (optimized) | 1.0.0-alpha | 0.303 | 3.602 |
|  [vim](http://d.hatena.ne.jp/keyword/vim) script | 7.4.580 | 0   | 4449.79 |

<s>実行時間最速は **Nim** です！！！</s>
<s>普通に書いた C（最適化あり）よりも速いです。</s>

**[冒頭に追記](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#tuiki1)しましたが、`-O3`オプション付きで[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)したCの方がNimよりも若干速いです。手元での計測及び結果の更新は少々お待ちください・・・**

せっかくなのでグラフにします。 ただ、そのまま描画すると [Vim](http://d.hatena.ne.jp/keyword/Vim) Script 以外見えなくなりそうなので、「1000秒間に何回計算が実行できるか」という数値に換算してグラフにします[*2](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#f-4df038bc)。 したがって、数値が「大きいほど速い」という事になります。 グラフの描画には [Highcharts.js](http://www.highcharts.com/) を使っています。

Created with Highcharts 5.0.9Calculations per 1,000 seconds25025048548519519517917926426418018015415415152022023838615615494955558877141417172132132782780.20.2cc (optimized)dartdart2js with node.jsgojavascriptjulialualuajitnim (debug)nim (release)pypypypy3python2python3ruby1.9ruby2.0rustrust (optimized)vim script0100200300400500600700Highcharts.com

<s>こうしてみるとNimが圧倒的ですね。</s>
以下、適当にカテゴリ分けしてコメントします。

### [コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)言語組

[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)が必要な言語にとっては、[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間も重要な比較要素です。 というわけで、[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間と実行時間をプロットします。 単位は秒です。つまり短いほうが速いです。

Created with Highcharts 5.0.9Time [sec]4.014.012.352.354.114.1126.826.83.033.034.984.983.93.93.993.992.062.063.83.826261.631.634.694.693.63.60.020.020.290.290.310.310.80.81.41.40.290.290.30.3Time [sec]Compile time [sec]cc (optimized)gonim (debug)nim (release)rustrust (optimized)02468Highcharts.com

実行時間だけの比較だと以下のような感じです。

[速い] C (`-O3`(仮)) > Nim (release) > C (`-O2`) > Rust (optimized) > Go > C > Rust >>> Nim (degub) [遅い]

[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間も含めると最適化ありのCが速いですね。[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間だけ比較すると、最適化なしのCが速すぎで、他はNimが遅い以外似たような時間です。

Nimの[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間がかなり長めに出ていますが、今回は**キャッシュを使っていない**ことに留意してください。キャッシュがあると劇的に速くなります。このキャッシュは変更があっても有効です。例えば、今回の[フィボナッチ数列](http://d.hatena.ne.jp/keyword/%A5%D5%A5%A3%A5%DC%A5%CA%A5%C3%A5%C1%BF%F4%CE%F3)のコードの最後に `echo(1)` という行を付け加えて再度[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)すると、約0.2秒で完了しました。したがって、実用上Nimの[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)時間が問題になるケースは少ないと言えます。

nim compile -d:release nim.nim
echo"echo(1) >> nim.nim
time nim compile -d:release nim.nim

# >>> 約0.2秒

### [JIT](http://d.hatena.ne.jp/keyword/JIT)[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)組

実行時間(秒)だけプロットします。

Created with Highcharts 5.0.9Calculation Time [sec]5.145.145.585.585.555.556.486.484.964.9620.6220.6218.2718.27dartdart2js with node.jsjavascriptjulialuajitpypypypy30510152025Highcharts.com

速度としてはLuaJitが最速で、[Dart](http://d.hatena.ne.jp/keyword/Dart), [JavaScript](http://d.hatena.ne.jp/keyword/JavaScript), [Dart](http://d.hatena.ne.jp/keyword/Dart)->[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript), Julia[*3](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#f-05021d83)までが同じくらい、大きく離れて PyPy 二種類という具合になりました。[Dart](http://d.hatena.ne.jp/keyword/Dart)はさすがに[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript) (Node.js)よりは速いですね。

PyPy以外はGoやRustに近い速度を出しています。今回のコードは単純だったので、ほとんどの計算が[JIT](http://d.hatena.ne.jp/keyword/JIT)[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)後に行われたためでしょう。もっと複雑なコードでは[コンパイル](http://d.hatena.ne.jp/keyword/%A5%B3%A5%F3%A5%D1%A5%A4%A5%EB)する言語との差は大きくなりそうです。

PyPyが遅くて[Python](http://d.hatena.ne.jp/keyword/Python)推しの自分としては悲しい限りです。[Pyston](https://github.com/dropbox/pyston)や[Numba](http://numba.pydata.org/)もエントリーさせてなんとか一矢報いたかったのですが、あの二つはインストールのハードルが割と高かったため断念しました。CythonはもうCでいいじゃんって感じなので除外です。

[追記: 2015/04/20] コメント欄にてご指摘いただきました。 今回、Julia は [Ubuntu](http://d.hatena.ne.jp/keyword/Ubuntu) の標準[リポジトリ](http://d.hatena.ne.jp/keyword/%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)のものを使ったので、古めのバージョン（v0.2.1, 2014/2/11 リリース）だったようです。 v0.3 で起動速度などが改善されているそうなので、気になる方は試してみてはいかがでしょうか。 [追加終わり]

### 残り（[スクリプト言語](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8%B8%C0%B8%EC)組）

最後です。実行時間（秒）をプロットします。見やすくするため、桁がずれている[Vim](http://d.hatena.ne.jp/keyword/Vim) scriptさんには枠外に飛び出てもらっています。

Created with Highcharts 5.0.9Calculation Time [sec]6868121121142142737359594 4504 450luapython2python3ruby1.9ruby2.0vim script050100150200Highcharts.com

一番速いのは[Ruby](http://d.hatena.ne.jp/keyword/Ruby) 2.0です。[Lua](http://d.hatena.ne.jp/keyword/Lua)が一番速いと予想していたので意外でした。[Ruby 1.9](http://d.hatena.ne.jp/keyword/Ruby%201.9)で[YARV](http://d.hatena.ne.jp/keyword/YARV)に移行して大分速くなったそうですが、その後も高速化は続いているようです。2.1や2.2も試せれば良かったのですが、私はそんなに[Ruby](http://d.hatena.ne.jp/keyword/Ruby)が好きではないので諦めました。

[Python](http://d.hatena.ne.jp/keyword/Python)は、[Ruby](http://d.hatena.ne.jp/keyword/Ruby)とは逆に、２から３への移行で遅くなってしまっています。 推測ですが、これはPython3で整数型をPython2でのlong相当[*4](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#f-c667c9fd)に一本化した影響ではないかと思います。 文字列操作ならもっと3系が速いのでは？と思われる方もいるかもしれませんが、[Python](http://d.hatena.ne.jp/keyword/Python)の文字列型は2系では内部的にasciiだったのが3系では[Unicode](http://d.hatena.ne.jp/keyword/Unicode)に統一され、メモリ消費が多くなっているので、やっぱり遅くなっているはずです。[Python](http://d.hatena.ne.jp/keyword/Python)で速度が必要な処理を書く時はC [API](http://d.hatena.ne.jp/keyword/API)を使いましょう。

[Vim](http://d.hatena.ne.jp/keyword/Vim) Scriptも有限時間内に完走出来てよかったと思いました（小並感）。

## 最後に

以上、なんとなくやってみた[ベンチマーク](http://d.hatena.ne.jp/keyword/%A5%D9%A5%F3%A5%C1%A5%DE%A1%BC%A5%AF)でした。 結果を一言で表すと、

Nim速い！！RustもGoよりちょっと速い！！
でしょうか。なので皆さん、[Nim](http://nim-lang.org/)を試しましょう。

単純な比較なので、各言語のごく一部しか比較できていませんが、ある程度特徴は出たのではないかと思っています。 また、一見公平に比較しているように見えて（特にコメントに）筆者の恣意的な何かが溢れています。鵜呑みにしないようご注意ください。 真面目に比較したい方は[Webフレームワークのベンチマーク](https://www.techempower.com/benchmarks/#section=data-r9&hw=peak&test=json)なども参照するといいかもしれません。

* * *

![f:id:h-miyako:20150122225410p:plain](../_resources/20150122225410.png)

[*1](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#fn-8edaa781):他にも何通りか試しました。

[*2](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#fn-4df038bc):逆数とって1000倍しただけです。値は四捨五入しました。

[*3](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#fn-05021d83):今回の測定では[インタープリタ](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%BF%A1%BC%A5%D7%A5%EA%A5%BF)の起動時間も含まれるため、起動時間の遅い（約２秒）のJuliaには不利な条件でした。起動時間を含めず、単純に計算時間だけならばおそらくJuliaが僅差でLuaJitを上回って最速です。個人的には別にJuliaに流行って欲しくないので脚注でのコメントにとどめます。

[*4](http://h-miyako.hatenablog.com/entry/2015/01/23/060000#fn-c667c9fd):[Python](http://d.hatena.ne.jp/keyword/Python) 2系では整数型にintとlongの二種類がありましたが、[Python](http://d.hatena.ne.jp/keyword/Python) 3.0でこれはlong型に統一されました。