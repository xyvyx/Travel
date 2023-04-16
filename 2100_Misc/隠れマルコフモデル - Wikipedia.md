---
title: 隠れマルコフモデル - Wikipedia
updated: 2018-04-21 00:52:00Z
created: 2018-04-21 00:52:00Z
source: >-
  https://ja.wikipedia.org/wiki/%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB
tags:
  - null
---

# 隠れマルコフモデル

移動先:[案内](https://ja.wikipedia.org/wiki/%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB#mw-head)、[検索](https://ja.wikipedia.org/wiki/%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB#p-search)

**隠れマルコフモデル**（かくれマルコフモデル、[英語](https://ja.wikipedia.org/wiki/%E8%8B%B1%E8%AA%9E): Hidden Markov Model）は[確率モデル](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87%E5%88%86%E5%B8%83)のひとつであり、観測されない（隠れた）状態をもつ[マルコフ過程](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%81%8E%E7%A8%8B)である。

## 概要[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=1)]

同じマルコフ過程でも、隠れマルコフモデルより単純な[マルコフ連鎖](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%80%A3%E9%8E%96)では、状態は直接観測可能であり、そのため、状態の遷移確率のみがパラメータである。一方、隠れマルコフモデルにおいては、状態は直接観測されず、出力（事象）のみが観測される。ただしこの出力は、モデルの状態による確率分布である。従って、ある隠れマルコフモデルによって生成された出力の系列は、内部の状態の系列に関する何らかの情報を与えるものとなる。「隠れ」という語はモデルが遷移した状態系列が外部から直接観測されないことを指しており、モデルのパラメータについてのものではない。たとえパラメータが既知であっても隠れマルコフモデルと呼ばれる。隠れマルコフモデルはごく単純な動的[ベイジアンネットワーク](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%A4%E3%82%B8%E3%82%A2%E3%83%B3%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF)として表現することができる。

隠れマルコフモデルは、潜在変数（hidden variable, latent variable）が各々独立ではなく、マルコフ過程を通じて関連付けられている[混合分布モデル(Mixture Model)](https://ja.wikipedia.org/w/index.php?title=%E6%B7%B7%E5%90%88%E5%88%86%E5%B8%83%E3%83%A2%E3%83%87%E3%83%AB&action=edit&redlink=1)を拡張したものとみなすことができる。この潜在変数は、それぞれの観測に対して選択されるように混合要素を制御するものである。近年、隠れマルコフモデルは、より複雑なデータ構造と非定常的なデータの取り扱いが可能なpairwise Markov modelsやtriplet Markov modelsに一般化されている。

隠れマルコフモデルに関する数学的概念は[L. E. Baum](https://en.wikipedia.org/wiki/Leonard_E._Baum)と彼の同僚らによって開発された。これは、最初に[フォワードバックワードアルゴリズム](https://ja.wikipedia.org/w/index.php?title=%E3%83%95%E3%82%A9%E3%83%AF%E3%83%BC%E3%83%89%E3%83%90%E3%83%83%E3%82%AF%E3%83%AF%E3%83%BC%E3%83%89%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0&action=edit&redlink=1)を発表した[R. L. Stratonovich](https://en.wikipedia.org/wiki/Ruslan_L._Stratonovich)による非線形[フィルタリング問題](https://ja.wikipedia.org/w/index.php?title=%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%AA%E3%83%B3%E3%82%B0%E5%95%8F%E9%A1%8C&action=edit&redlink=1)の最適化についての初期の成果に関連している。

隠れマルコフモデルは、[音声認識](https://ja.wikipedia.org/wiki/%E9%9F%B3%E5%A3%B0%E8%AA%8D%E8%AD%98)、[バイオインフォマティクス](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A4%E3%82%AA%E3%82%A4%E3%83%B3%E3%83%95%E3%82%A9%E3%83%9E%E3%83%86%E3%82%A3%E3%82%AF%E3%82%B9)、[形態素解析](https://ja.wikipedia.org/wiki/%E5%BD%A2%E6%85%8B%E7%B4%A0%E8%A7%A3%E6%9E%90)（[自然言語処理](https://ja.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86)）、楽譜追跡、部分放電など、時系列パターンの認識に応用されている。連続的かつ伸縮しうる信号列のパターン抽出には適しているが、反面、長い距離をはさんで呼応しているような信号列からのパターン認識には、間の距離の長さに応じて状態数を増やす必要があり、[計算量](https://ja.wikipedia.org/wiki/%E8%A8%88%E7%AE%97%E9%87%8F)の観点から実用的ではない。また、局所最適に陥りやすいため、対象に応じて適切なパラメータの初期値を設定してやる（適切なモデルトポロジーを導入する）必要がある。

## 構成[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=2)]

[![400px-Hmm_temporal_bayesian_net.svg.png](../_resources/400px-Hmm_temporal_bayesian_net.svg.png)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:Hmm_temporal_bayesian_net.svg)

図1. 隠れマルコフモデルの一般的な構成

[![400px-HiddenMarkovModel.svg.png](../_resources/400px-HiddenMarkovModel.svg.png)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:HiddenMarkovModel.svg)

図2. 隠れマルコフモデルのパラメータ（例）

       x      {\displaystyle x}  [87f9e315fd7e2ba406057a97300593c4802b53e4](../_resources/87f9e315fd7e2ba406057a97300593c4802b53e4): 潜在変数の状態

       y      {\displaystyle y}  [b8a6208ec717213d4317e666f1ae872e00620a0d](../_resources/b8a6208ec717213d4317e666f1ae872e00620a0d): 可能な観測値

       a      {\displaystyle a}  [ffd2487510aa438433a2579450ab2b3d557e5edc](../_resources/ffd2487510aa438433a2579450ab2b3d557e5edc): 状態遷移確率

       b      {\displaystyle b}  [f11423fbb2e967f986e36804a8ae4271734917c3](../_resources/f11423fbb2e967f986e36804a8ae4271734917c3): 出力確率

図1は、隠れマルコフモデルの一般的な構成を示している。確率変数         x  (  t  )      {\displaystyle x(t)}  [d54c275db3a1e620737b58e143b0818107fa5f5c](../_resources/d54c275db3a1e620737b58e143b0818107fa5f5c) は、時刻         t      {\displaystyle t}  [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560-1) における潜在変数である。確率変数         y  (  t  )      {\displaystyle y(t)}  [397de1edef5bf2ee15c020f325d7d781a3aa7f50](../_resources/397de1edef5bf2ee15c020f325d7d781a3aa7f50) は時刻         t      {\displaystyle t}  [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560-1) における観測値である。矢印は、条件付き確率間の依存関係を表している。

図2は潜在変数の状態数が3 (        x  (  t  )  ∈    {      x    1      ,    x    2      ,    x    3        }        {\displaystyle x(t)\in \left\{x_{1},x_{2},x_{3}ight\}}  [3d5f09934d83d0e0f2c6e8067958f361c79dbb5b](../_resources/3d5f09934d83d0e0f2c6e8067958f361c79dbb5b)）、観測値の状態数が4（        y  (  t  )  ∈  {    y    1      ,    y    2      ,    y    3      ,    y    4      }      {\displaystyle y(t)\in \{y_{1},y_{2},y_{3},y_{4}\}}  [3f70cea6679cefd1c5c1b18662996fe5078c0a5d](../_resources/3f70cea6679cefd1c5c1b18662996fe5078c0a5d)）の隠れマルコフモデルを示している。

時刻         t      {\displaystyle t}  [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560-1) における潜在変数         x  (  t  )      {\displaystyle x(t)}  [d54c275db3a1e620737b58e143b0818107fa5f5c](../_resources/d54c275db3a1e620737b58e143b0818107fa5f5c) の条件付き確率分布は、潜在変数         x  (  t  −  1  )      {\displaystyle x(t-1)}  [92e43b3d2f5b7841d88e5f8136c6e53ebe4eeab6](../_resources/92e43b3d2f5b7841d88e5f8136c6e53ebe4eeab6) にのみ依存する。        x  (  t  −  2  )      {\displaystyle x(t-2)}  [388d42277ee47af9bc36719fd2ccc1989000786a](../_resources/388d42277ee47af9bc36719fd2ccc1989000786a) およびそれ以前の状態は影響しない。これを（単純）[マルコフ性](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E6%80%A7)という。また、観測値         y  (  t  )      {\displaystyle y(t)}  [397de1edef5bf2ee15c020f325d7d781a3aa7f50](../_resources/397de1edef5bf2ee15c020f325d7d781a3aa7f50) は         x  (  t  )      {\displaystyle x(t)}  [d54c275db3a1e620737b58e143b0818107fa5f5c](../_resources/d54c275db3a1e620737b58e143b0818107fa5f5c) にのみ依存する（時刻         t      {\displaystyle t}  [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560-1) が同じであることに注意）。ここで考えるような標準的な隠れマルコフモデルでは、潜在変数         x  (  t  )      {\displaystyle x(t)}  [d54c275db3a1e620737b58e143b0818107fa5f5c](../_resources/d54c275db3a1e620737b58e143b0818107fa5f5c) は離散的であり、観測値         y  (  t  )      {\displaystyle y(t)}  [397de1edef5bf2ee15c020f325d7d781a3aa7f50](../_resources/397de1edef5bf2ee15c020f325d7d781a3aa7f50) は連続的でも離散的でもよい。

隠れマルコフモデルのパラメータは、**遷移確率**と**出力確率**の2種類である。遷移確率は、時刻         t  −  1      {\displaystyle t-1}  [a215d9553945bb84b3b5a79cc796fb7d6e0629f0](../_resources/a215d9553945bb84b3b5a79cc796fb7d6e0629f0) での潜在変数から時刻         t      {\displaystyle t}  [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560-1) での潜在変数への状態遷移を表す。図2において、遷移確率は           a    i  j          {\displaystyle a_{ij}}  [ebea6cd2813c330c798921a2894b358f7b643917](../_resources/ebea6cd2813c330c798921a2894b358f7b643917) で、出力確率は           b    i  j          {\displaystyle b_{ij}}  [843634a5063d0ce92ab37442cd5d0f845ef8317a](../_resources/843634a5063d0ce92ab37442cd5d0f845ef8317a) で示されている。

潜在変数の状態空間は         N      {\displaystyle N}  [f5e3890c981ae85503089652feb48b191b57aae3](../_resources/f5e3890c981ae85503089652feb48b191b57aae3) 個の値をとる離散分布である（図2では        N  =  3      {\displaystyle N=3}  [b4ab951d779fcdeea3ec188bb5c73518c46b19de](../_resources/b4ab951d779fcdeea3ec188bb5c73518c46b19de)）。これは、時刻         t      {\displaystyle t}  [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560-1) において潜在変数がとりうる         N      {\displaystyle N}  [f5e3890c981ae85503089652feb48b191b57aae3](../_resources/f5e3890c981ae85503089652feb48b191b57aae3) 個の値のそれぞれに対して、時刻         x  (  t  +  1  )      {\displaystyle x(t+1)}  [fa60578cbf90491ff3848900cbcf7951e16efccb](../_resources/fa60578cbf90491ff3848900cbcf7951e16efccb) での潜在変数がとりうる         N      {\displaystyle N}  [f5e3890c981ae85503089652feb48b191b57aae3](../_resources/f5e3890c981ae85503089652feb48b191b57aae3) 個の値への遷移確率が存在することを意味する。結果的に、全体で           N    2          {\displaystyle N^{2}}  [fe131b76af8a2bc86e01b14a7ba843db69c1a164](../_resources/fe131b76af8a2bc86e01b14a7ba843db69c1a164) の遷移確率がある（図2ではそのうち          a    12      ,    a    21      ,    a    23          {\displaystyle a_{12},a_{21},a_{23}}  [9e0d56fc13bc1c5be9093f989239cf964e06344c](../_resources/9e0d56fc13bc1c5be9093f989239cf964e06344c)のみを示している）。この         N  ×  N      {\displaystyle N\times N}  [99a86c5231bb3cbb863d9d428ebe9ac8db8d4ffb](../_resources/99a86c5231bb3cbb863d9d428ebe9ac8db8d4ffb) 行列をマルコフ行列という。確率の公理より、ある特定の状態から他の状態への遷移確率の和は1である。そのため、特定の状態からのある遷移確率はそれ以外の確率がわかれば決まるので、        N  ×  (  N  −  1  )      {\displaystyle N\times (N-1)}  [0bfabcddc2cf3d150f4860ec461d3e01eb457188](../_resources/0bfabcddc2cf3d150f4860ec461d3e01eb457188) 個の遷移パラメータがあることになる。

これに加えて、        N      {\displaystyle N}  [f5e3890c981ae85503089652feb48b191b57aae3](../_resources/f5e3890c981ae85503089652feb48b191b57aae3)個の状態のそれぞれに、潜在変数の特定の時刻において観測値の分布を支配する出力確率の組がある（図2では        M  =  4      {\displaystyle M=4}  [498f6de1900ba937051a40cc40cc167e1727a09b](../_resources/498f6de1900ba937051a40cc40cc167e1727a09b)で、        3  ×  4      {\displaystyle 3\times 4}  [7fda443e7a6e78fa880a6dccbf8bdf43a10d9988](../_resources/7fda443e7a6e78fa880a6dccbf8bdf43a10d9988)の出力確率          b    i  j          {\displaystyle b_{ij}}  [843634a5063d0ce92ab37442cd5d0f845ef8317a](../_resources/843634a5063d0ce92ab37442cd5d0f845ef8317a)がある）。たとえば、観測値が離散分布で        M      {\displaystyle M}  [f82cade9898ced02fdd08712e5f0c0151758a0dd](../_resources/f82cade9898ced02fdd08712e5f0c0151758a0dd)個の値をとるとき、個々の潜在変数に        M  −  1      {\displaystyle M-1}  [a0ff0c82e48914e34b3c3bd227cf4d09a2fb5eb7](../_resources/a0ff0c82e48914e34b3c3bd227cf4d09a2fb5eb7)個のパラメータがあるから、全体で        N  ×  (  M  −  1  )      {\displaystyle N\times (M-1)}  [78a669b5fe0b4b886876cb9c8482414fdfd1657c](../_resources/78a669b5fe0b4b886876cb9c8482414fdfd1657c)個の出力パラメータがある。あるいは、観測値が任意の混合ガウス分布に従う        M      {\displaystyle M}  [f82cade9898ced02fdd08712e5f0c0151758a0dd](../_resources/f82cade9898ced02fdd08712e5f0c0151758a0dd)次元ベクトルであれば、平均値のために        M      {\displaystyle M}  [f82cade9898ced02fdd08712e5f0c0151758a0dd](../_resources/f82cade9898ced02fdd08712e5f0c0151758a0dd)個と、共分散行列に        M  (  M  +  1  )    /    2      {\displaystyle M(M+1)/2}  [7c02b8c54c97b29c7de0d4bdf3c3fdd30212a9e2](../_resources/7c02b8c54c97b29c7de0d4bdf3c3fdd30212a9e2)個のパラメータがあるから、合わせて        N  (  M  +  M  (  M  +  1  )    /    2  )  =  N  M  (  M  +  3  )    /    2  =  O  (  N    M    2      )      {\displaystyle N(M+M(M+1)/2)=NM(M+3)/2=O(NM^{2})}  [dc1677aab0030faf365c7d3cc10193d8613cd7e5](../_resources/dc1677aab0030faf365c7d3cc10193d8613cd7e5)の出力パラメータがある。

実際には、        M      {\displaystyle M}  [f82cade9898ced02fdd08712e5f0c0151758a0dd](../_resources/f82cade9898ced02fdd08712e5f0c0151758a0dd)が小さくない限り、観測ベクトルの個々の要素間の共分散の特性に制約を設けることが現実的である。たとえば要素ごとに独立であるとか、もう少し制約を緩めて、隣接するいくつかの要素以外は独立であるなどとすることが考えられる。

## 推測[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=3)]

隠れマルコフモデルに関して、以下に示すようないくつかの統計的推測問題がある。

### 観測値系列の確率[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=4)]

[![400px-HMMsequence.svg.png](../_resources/400px-HMMsequence.svg.png)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:HMMsequence.svg)

図3. 隠れマルコフモデルの状態遷移と出力確率

点線の下にある出力系列が観測されたとき、これがどのような状態系列によって得られたものかを考えると、図に示された状態遷移と出力確率の矢印から、次の状態系列が候補となる。

5 3 2 5 3 2
4 3 2 5 3 2
3 1 2 5 3 2

それぞれの候補について、状態系列と観測系列の同時確率を求めることによって、最もありそうな（つまり最尤の）状態系列を求めることができる。一般にこのような最尤観測系列の問題はビタビアルゴリズムで効率的に解くことができる。

モデルのパラメータが既知のとき、特定の出力系列が得られる確率を求める。これは、可能な状態系列についての確率の総和によって得られる。

長さ         L      {\displaystyle L}  [103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8](../_resources/103168b86f781fe6e9a4a87b8ea1cebe0ad4ede8) の観測値系列

       Y  =  y  (  0  )  ,  y  (  1  )  ,  …  ,  y  (  L  −  1  )      {\displaystyle Y=y(0),y(1),\dots ,y(L-1)}  [c894557033434ee8ff4f03982c5aa72874b03459](../_resources/c894557033434ee8ff4f03982c5aa72874b03459)

の確率は、潜在状態系列

       X  =  x  (  0  )  ,  x  (  1  )  ,  …  ,  x  (  L  −  1  )      {\displaystyle X=x(0),x(1),\dots ,x(L-1)}  [9b1c5fd861b38d778e866b5bab86ef770e3c14f5](../_resources/9b1c5fd861b38d778e866b5bab86ef770e3c14f5)

の確率の総和を用いて次のように与えられる。

       P  (  Y  )  =    ∑    X      P  (  Y  ∣  X  )  P  (  X  )      {\displaystyle P(Y)=\sum _{X}P(Y\mid X)P(X)}  [9d7aa23d3ad885b170759f172abad1c8c66029f6](../_resources/9d7aa23d3ad885b170759f172abad1c8c66029f6)

[動的計画法](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E8%A8%88%E7%94%BB%E6%B3%95)の原理を適用すると、この問題は[前向きアルゴリズム](https://ja.wikipedia.org/w/index.php?title=%E5%89%8D%E5%90%91%E3%81%8D%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0&action=edit&redlink=1)で効率的に扱うことができる。

### 潜在変数の確率[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=5)]

モデルパラメータと観測系列が与えられたとき、ひとつあるいはそれ以上の潜在変数の確率を求める以下のような問題がある。

#### フィルタリング[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=6)]

この問題は、モデルパラメータと観測系列が与えられたとき、系列の最後における潜在変数の状態の確率分布、つまり         P  (  x  (  t  )    |    y  (  1  )  ,  …  ,  y  (  t  )  )      {\displaystyle P(x(t)\ |\ y(1),\dots ,y(t))}  [84c378ce7388d8acfb81dedc1d76763fd8a8a06a](../_resources/84c378ce7388d8acfb81dedc1d76763fd8a8a06a) を求めるものである。この問題は、一般に、潜在変数の系列があるプロセスの背後の状態で、そのプロセスは各時刻の観測値に関してある過程が時刻の系列に従って遷移するものと考えられる場合に用いられる。従って、最後の時点でのプロセスの状態を知ることが自然である。この問題は、[フォワードアルゴリズム](https://ja.wikipedia.org/w/index.php?title=%E3%83%95%E3%82%A9%E3%83%AF%E3%83%BC%E3%83%89%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0&action=edit&redlink=1)で効率的に解くことができる。

#### 平滑化[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=7)]

フィルタリングが系列の最後の状態を求めるのに対して、平滑化 (smoothing) は系列の途中のどこかの時点での潜在変数の確率分布、つまり ある時刻         k  <  t      {\displaystyle k<t}  [7ca1a3ea2d76668acdda69e481b958420402d408](../_resources/7ca1a3ea2d76668acdda69e481b958420402d408) における         P  (  x  (  k  )    |    y  (  1  )  ,  …  ,  y  (  t  )  )      {\displaystyle P(x(k)\ |\ y(1),\dots ,y(t))}  [4861e645dc5e7cbca8e87e703ab7ff35e93a37aa](../_resources/4861e645dc5e7cbca8e87e703ab7ff35e93a37aa)を求めるものである。これは[フォワードバックワードアルゴリズムで](https://ja.wikipedia.org/w/index.php?title=%E3%83%95%E3%82%A9%E3%83%AF%E3%83%BC%E3%83%89%E3%83%90%E3%83%83%E3%82%AF%E3%83%AF%E3%83%BC%E3%83%89%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0%E3%81%A7&action=edit&redlink=1)効率的に解くことができる。

#### 最尤系列推定[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=8)]

この問題は、前の2つの問題と異なり、特定の観測値系列を生成する潜在変数の系列全体の同時確率を求めるものである。これは一般に、隠れマルコフモデルをフィルタリングや平滑化とは異なる種類の問題に適用する場合に用いられる。

例えば[自然言語処理](https://ja.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E8%A8%80%E8%AA%9E%E5%87%A6%E7%90%86)の[構文解析](https://ja.wikipedia.org/wiki/%E6%A7%8B%E6%96%87%E8%A7%A3%E6%9E%90)における品詞タグ付けは、単語の並びから品詞を推定するものである。品詞を隠れマルコフモデルの潜在変数とし、ある品詞から他の品詞につながる確率を品詞付与[コーパス](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%BC%E3%83%91%E3%82%B9)などから遷移確率として求めておく。また、各状態（品詞）から具体的な単語が出力されると考え、その出現確率もコーパスから求めておく。分析したい単語の並びが観測系列となる。品詞タグ付けは、与えられた単語列から隠れた状態としての品詞列を[最尤推定](https://ja.wikipedia.org/wiki/%E6%9C%80%E5%B0%A4%E6%B3%95)するが、このとき関心があるのは全体の品詞の系列であり、フィルタリングや平滑化が扱うような単一の語の品詞を求めることではない。

この問題は、可能な状態系列の確率の最大値を求めるものであり、ビタビアルゴリズムによって効率的に解くことができる。

### 統計的有意性[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=9)]

上記のいくつかの問題に対して、統計的有意性を知りたい場合がある。帰無仮説が真となる分布から得られた系列が、どのような状態系列の確率をもつか（フォワードアルゴリズムの場合）あるいは状態系列の確率の最大値（ビタビアルゴリズムの場合）で少なくとも特定の出力系列と同じくらい大きなものは何かというようなものである。 隠れマルコフモデルで、特定の出力系列に関する仮説の統計的適切性を評価する場合、その統計的有意性は、出力系列に対して間違って仮説を棄却してしまう擬陽性率 (false positive rate) を示す。

## 具体例[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=10)]

[![400px-HMMGraph.svg.png](../_resources/400px-HMMGraph.svg.png)](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:HMMGraph.svg)

遠くに住んでいる友人のアリスとボブがいて、電話で毎日お互い自分のしたことを話している。ボブは「公園での散歩 (walk)」、「買い物 (shop)」、「部屋の掃除 (clean)」の3つのことにしか関心がない。何をするかは、その日の天気によってのみ決めている。アリスはボブが住んでいる地域の日々の天気については具体的に知らないが、一般的な天候の変化については知っている。ボブが毎日話すことにもとづいて、アリスは天気がどのようになっているかを推測しようとする。

アリスは、天気が離散[マルコフ過程](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%81%8E%E7%A8%8B)として変化すると考える。天気には「雨 (Rainy)」と「晴れ (Sunny)」の2つの状態があるが、アリスはそれを直接知ることができないから「隠れ」た状態である。毎日、ボブは天気に応じて「散歩」、「買い物」「掃除」のどれかひとつだけを必ずする。ボブがそれをアリスに話すことが、アリスにとっての観測（ボブからの出力）である。この状況全体が隠れマルコフモデルとなる。

アリスは、ボブのいる地域の一般的な天候の変化（遷移確率）については知っている。また、どの天気のときにボブがどの行動をするか（出力確率）を知っている。つまり隠れマルコフモデルのパラメータが既知である。これは、[Python](https://ja.wikipedia.org/wiki/Python)で次のように表される。

states = ('Rainy', 'Sunny')
observations = ('walk', 'shop', 'clean')
start_probability = {'Rainy': 0.6, 'Sunny': 0.4}
transition_probability = {
'Rainy' : {'Rainy': 0.7, 'Sunny': 0.3},
'Sunny' : {'Rainy': 0.4, 'Sunny': 0.6},
}
emission_probability = {
'Rainy' : {'walk': 0.1, 'shop': 0.4, 'clean': 0.5},
'Sunny' : {'walk': 0.6, 'shop': 0.3, 'clean': 0.1},
}

このコードで`start_probability` は、ボブが最初に電話する前の時点で、隠れマルコフモデルがどちらの状態にあるかというアリスの考えである（彼女は平均的には雨の方がやや多いと知っている）。この確率分布は平衡なものではない（遷移確率によれば平衡は `{'Rainy': 0.57, 'Sunny': 0.43}`）。遷移確率 `transition_probability` はマルコフ連鎖での天気の変化を表す。この例では、今日が雨であれば、明日晴れる確率は30%である。出力確率 `emission_probability` は、その日にボブが行う行動の確率である。もし雨であれば掃除をする確率は50%で、晴れていれば散歩に行く確率は60%である。

## ビタビアルゴリズム[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=11)]

詳細は「[ビタビアルゴリズム](https://ja.wikipedia.org/wiki/%E3%83%93%E3%82%BF%E3%83%93%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)」を参照

ビタビアルゴリズム（Viterbi algorithm）は、モデルパラメータが既知のとき、与えられた配列を出力した可能性（尤度）が最も高い状態列（最尤状態列）を計算するアルゴリズムで、[動的計画法](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E8%A8%88%E7%94%BB%E6%B3%95)の一種である。ある時点 t での最尤状態遷移列はtまでに観測された情報と、t-1 までで最も確からしい（＝尤もらしい）最尤状態遷移列だけに依存すると仮定する。

例えば、出力 'A' と 'B' を確率0.5ずつで出力し、他の状態にまれにしか遷移しない状態 A と、出力 'A' と 'C' を確率0.5ずつで出力し、他の状態にまれにしか遷移しない状態Bがあった場合、時点 t で 'A' が出力され、時点 t-1 で最尤だと推定された状態遷移列からの遷移確率が状態 A の方が高いならば、時点 t では状態 A にいたと推定される。しかし、t+1 以降で 'C' の出力が続いた場合、全体としての尤度は状態 B に遷移していたほうが高くなる。

ビタビアルゴリズムを使用するには、観測可能なイベントは観測不可能な状態遷移と1対1対応していることが求められる。

## バウム・ウェルチアルゴリズム[[編集](https://ja.wikipedia.org/w/index.php?title=%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB&action=edit&section=12)]

詳細は「[バウム＝ウェルチアルゴリズム](https://ja.wikipedia.org/wiki/%E3%83%90%E3%82%A6%E3%83%A0%EF%BC%9D%E3%82%A6%E3%82%A7%E3%83%AB%E3%83%81%E3%82%A2%E3%83%AB%E3%82%B4%E3%83%AA%E3%82%BA%E3%83%A0)」を参照

バウム・ウェルチアルゴリズム（Baum-Welch algorithm）は、モデルが出力した系列からモデルパラメータを推定するアルゴリズムである。前向きアルゴリズム、後ろ向きアルゴリズム、[EMアルゴリズム](https://ja.wikipedia.org/wiki/%E6%9C%9F%E5%BE%85%E5%80%A4%E6%9C%80%E5%A4%A7%E5%8C%96%E6%B3%95)から構成される。前向きアルゴリズムおよび後ろ向きアルゴリズムは動的計画法の一種であり、ある時点で各状態にいる確率を求めるアルゴリズムである。

Measure
Measure