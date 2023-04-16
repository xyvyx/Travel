---
title: 最尤推定 - Wikipedia
updated: 2021-10-02 10:54:56Z
created: 2016-12-07 08:54:39Z
source: https://ja.wikipedia.org/wiki/%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A
---

# 最尤推定 - Wikipedia

**最尤推定**（さいゆうすいてい、[英](https://ja.wikipedia.org/wiki/%E8%8B%B1%E8%AA%9E): maximum likelihood estimation、略してMLEともいう）や**最尤法**（さいゆうほう、[英](https://ja.wikipedia.org/wiki/%E8%8B%B1%E8%AA%9E): method of maximum likelihood）とは、[統計学](https://ja.wikipedia.org/wiki/%E7%B5%B1%E8%A8%88%E5%AD%A6)において、与えられたデータからそれが従う[確率分布](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87%E5%88%86%E5%B8%83)の[母数](https://ja.wikipedia.org/wiki/%E6%AF%8D%E6%95%B0)を[点推定](https://ja.wikipedia.org/wiki/%E6%8E%A8%E8%A8%88%E7%B5%B1%E8%A8%88%E5%AD%A6#.E7.82.B9.E6.8E.A8.E5.AE.9A)する方法である。この方法は[ロナルド・フィッシャー](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC)が[1912年](https://ja.wikipedia.org/wiki/1912%E5%B9%B4)から[1922年](https://ja.wikipedia.org/wiki/1922%E5%B9%B4)にかけて開発した。

生物学に於いて、塩基やアミノ酸配列のような分子データの置換に関する確率モデルに基づいて[系統樹](https://ja.wikipedia.org/wiki/%E7%B3%BB%E7%B5%B1%E6%A8%B9)を作成する際に、一番尤もらしくデータを説明する樹形を選択するための有力な方法としても利用される。

## 基本的理論[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=1)]

[確率分布](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87%E5%88%86%E5%B8%83)関数 f D {\displaystyle f_{D}} [ec7f00619bcf5d893a15673fa1d74a68b7cdd2c5](../_resources/ec7f00619bcf5d893a15673fa1d74a68b7cdd2c5) と分布の母数 θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) のわかっている離散確率分布 D {\displaystyle D} [f34a0c600395e5d4345287e21fb26efd386990e6](../_resources/f34a0c600395e5d4345287e21fb26efd386990e6) が与えられたとして、そこから n {\displaystyle n} [a601995d55609f2d9f5e233e36fbe9ea26011b3b](../_resources/a601995d55609f2d9f5e233e36fbe9ea26011b3b) 個の[標本](https://ja.wikipedia.org/wiki/%E6%A8%99%E6%9C%AC_%28%E7%B5%B1%E8%A8%88%E5%AD%A6%29) X 1 , X 2 , . . . X n {\displaystyle X_{1},X_{2},...X_{n}} [a92bda60d26b870fe5157fc13bc5bfdf6ad79652](../_resources/a92bda60d26b870fe5157fc13bc5bfdf6ad79652) を取り出すことを考えよう。すると分布関数から、観察されたデータが得られる確率を次のように計算することができる：

P ( x 1 , x 2 , … , x n ) = f D ( x 1 , … , x n ∣ θ ) {\displaystyle \mathbb {P} (x_{1},x_{2},\dots ,x_{n})=f_{D}(x_{1},\dots ,x_{n}\mid \theta )} [3f1f25958f9ca839107cca9a17a1fa1c08f6a963](../_resources/3f1f25958f9ca839107cca9a17a1fa1c08f6a963)

しかし、データが分布 D {\displaystyle D} [f34a0c600395e5d4345287e21fb26efd386990e6](../_resources/f34a0c600395e5d4345287e21fb26efd386990e6) によることはわかっていても、母数 θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) の値はわからないかもしれない。どうしたら θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) を見積もれるか？ n {\displaystyle n} [a601995d55609f2d9f5e233e36fbe9ea26011b3b](../_resources/a601995d55609f2d9f5e233e36fbe9ea26011b3b) 個の標本 X 1 , X 2 , . . . X n {\displaystyle X_{1},X_{2},...X_{n}} [a92bda60d26b870fe5157fc13bc5bfdf6ad79652](../_resources/a92bda60d26b870fe5157fc13bc5bfdf6ad79652) があれば、この標本から θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) の値を見積もることができる。最尤法は母数 θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) の一番尤もらしい値を探す（つまり θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) のすべての可能な値の中から、観察されたデータセットの[尤度](https://ja.wikipedia.org/wiki/%E5%B0%A4%E5%BA%A6)を最大にするものを探す）方法である。これは他の推定量を求める方法と対照的である。たとえば θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) の[不偏推定量](https://ja.wikipedia.org/wiki/%E4%B8%8D%E5%81%8F%E6%8E%A8%E5%AE%9A%E9%87%8F)は、 θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) を過大評価することも過小評価することもないが、必ずしも一番尤もらしい値を与えるとは限らない。 [尤度関数](https://ja.wikipedia.org/wiki/%E5%B0%A4%E5%BA%A6%E9%96%A2%E6%95%B0)を次のように定義する：

L ( θ ) = f D ( x 1 , … , x n ∣ θ ) {\displaystyle L(\theta )=f_{D}(x_{1},\dots ,x_{n}\mid \theta )} [b0734398a58c575b877c6a5fe1190144f04571ca](../_resources/b0734398a58c575b877c6a5fe1190144f04571ca)

この関数を母数 θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) のすべての可能な値から見て最大になるようにする。そのような値 θ ^ {\displaystyle {\hat {\theta }}} [f0eaae56d74c5844e86caeed8ae205ff9e413bba](../_resources/f0eaae56d74c5844e86caeed8ae205ff9e413bba) を母数 θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) に対する**最尤推定量**（さいゆうすいていりょう、maximum likelihood estimator、これもMLEと略す）という。最尤推定量は（適当な仮定の下では）しばしば**尤度方程式**（ゆうどほうていしき、likelihood equation）

∂ ∂ θ log ⁡ L ( θ ) = 0 {\displaystyle {\frac {\partial }{\partial \theta }}\log L(\theta )=0} [54f001db360dfe6d2eda0badd4cc28526bb58805](../_resources/54f001db360dfe6d2eda0badd4cc28526bb58805)

の解として求められる。

### 注意[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=2)]

- 尤度は θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) を変数とし x 1 , x 2 , … , x n {\displaystyle x_{1},x_{2},\ldots ,x_{n}} [8694289524164f895d6665f163e14c4dc5ec648d](../_resources/8694289524164f895d6665f163e14c4dc5ec648d) を定数とする関数である。
- 最尤推定量は唯一ではないこともあるし、存在しないことさえある[[1]](https://ja.wikipedia.org/wiki/%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A#cite_note-FOOTNOTERomanoSiegel1986182-1)。
- 最尤法をベイジアンで解釈することも可能である．事前分布に一様分布を仮定し，事後分布のモードを計算することと同値である．詳しくは[計量経済学](https://ja.wikipedia.org/wiki/%E8%A8%88%E9%87%8F%E7%B5%8C%E6%B8%88%E5%AD%A6)の**ベイジアン計量経済学**の項を参照されたい．

## 例[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=3)]

### 離散分布で、母数が離散的かつ有限の場合[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=4)]

以下、コインを投げて表・裏（あるいは成功・失敗：その確率は0.5とは限らない）のいずれが出るかを見る場合（[ベルヌーイ試行](https://ja.wikipedia.org/wiki/%E3%83%99%E3%83%AB%E3%83%8C%E3%83%BC%E3%82%A4%E8%A9%A6%E8%A1%8C)）を例にとる。

箱の中に3つのコインがあるとしよう。見た目では全く区別がつかないが、表の出る確率 p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36)が、それぞれ p = 1 / 3 {\displaystyle p=1/3} [6046424a9849a8205d5b9204d89c0fc0fcc3a553](../_resources/6046424a9849a8205d5b9204d89c0fc0fcc3a553)、 p = 1 / 2 {\displaystyle p=1/2} [c4a77b7a2e96414f0214f2d6ee49e462ccf33af0](../_resources/c4a77b7a2e96414f0214f2d6ee49e462ccf33af0)、 p = 2 / 3 {\displaystyle p=2/3} [cabce4d938b4dc032069ef38f5ced14570d7b6c3](../_resources/cabce4d938b4dc032069ef38f5ced14570d7b6c3) である。（ p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36) が、上で θ {\displaystyle \theta } [6e5ab2664b422d53eb0c7df3b87e1360d75ad9af](../_resources/6e5ab2664b422d53eb0c7df3b87e1360d75ad9af) と書いた母数にあたる）。箱の中から適当に1つ選んだコインを80回投げ、 x 1 = H {\displaystyle x_{1}={\mbox{H}}} [b8a9942c2848e03d77ce930965f6925b9be41b52](../_resources/b8a9942c2848e03d77ce930965f6925b9be41b52) 、 x 2 = T {\displaystyle x_{2}={\mbox{T}}} [f6d9d9e986f693f63dd461916f00ac7f2efb8600](../_resources/f6d9d9e986f693f63dd461916f00ac7f2efb8600) 、 … {\displaystyle \ldots } [3b8619532e44ee1ccae3ab03405a6885260d09ed](../_resources/3b8619532e44ee1ccae3ab03405a6885260d09ed) 、 x 80 = T {\displaystyle x_{80}={\mbox{T}}} [b7314594c5b15c04a093011d77365d1a01842364](../_resources/b7314594c5b15c04a093011d77365d1a01842364) のようにサンプリングし、表(H)の観察された回数を数えるたところ、表(H)が49回、裏が31回であった。さて、投げたコインがどのコインであったと考えるのが一番尤もらしいか？　一番尤もらしいコイン（すなわち、一番尤もらしい p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36)の値）を推定するためには、次のように尤度を計算する：

P ( 49H/80 ∣ p = 1 / 3 ) = ( 80 49 ) ( 1 / 3 ) 49 ( 1 − 1 / 3 ) 31 = 0.000 P ( 49H/80 ∣ p = 1 / 2 ) = ( 80 49 ) ( 1 / 2 ) 49 ( 1 − 1 / 2 ) 31 = 0.012 P ( 49H/80 ∣ p = 2 / 3 ) = ( 80 49 ) ( 2 / 3 ) 49 ( 1 − 2 / 3 ) 31 = 0.054 {\displaystyle {\begin{matrix}\mathbb {P} ({\mbox{49H/80}}\mid p=1/3)&=&{\binom {80}{49}}(1/3)^{49}(1-1/3)^{31}=0.000\\&&\\\mathbb {P} ({\mbox{49H/80}}\mid p=1/2)&=&{\binom {80}{49}}(1/2)^{49}(1-1/2)^{31}=0.012\\&&\\\mathbb {P} ({\mbox{49H/80}}\mid p=2/3)&=&{\binom {80}{49}}(2/3)^{49}(1-2/3)^{31}=0.054\\\end{matrix}}}

[66e77a473fd0d896031fb10038eceb4373f7a91c](../_resources/66e77a473fd0d896031fb10038eceb4373f7a91c)

こうして母数 p ^ = 2 / 3 {\displaystyle {\hat {p}}=2/3} [974c42bb6db8634c626ea42dd2ae875815b0cd2c](../_resources/974c42bb6db8634c626ea42dd2ae875815b0cd2c) によって尤度が最大となることがわかり、これが p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36) に対する最尤推定量である。

### 離散分布で、母数が連続的な場合[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=5)]

こんどは上の例での箱に入っているコインの数は無限であると仮定する。それぞれがすべての可能な 0 ≤ p ≤ 1 {\displaystyle 0\leq p\leq 1} [103c4c51ea8371e63daa3ea2124701811dc95571](../_resources/103c4c51ea8371e63daa3ea2124701811dc95571) の値をとるとする。するとすべての可能な 0 ≤ p ≤ 1 {\displaystyle 0\leq p\leq 1} [103c4c51ea8371e63daa3ea2124701811dc95571](../_resources/103c4c51ea8371e63daa3ea2124701811dc95571) の値に対して次の尤度関数を最大化しなければならない：

L ( p ) = f D ( observe 49 HEADS out of 80 ∣ p ) = ( 80 49 ) p 49 ( 1 − p ) 31 {\displaystyle {\begin{matrix}L(p)&=&f_{D}({\mbox{observe 49 HEADS out of 80}}\mid p)={\binom {80}{49}}p^{49}(1-p)^{31}\\\end{matrix}}} [6cc2cdefe30a6f0fb7396d2077327a48f045fe0f](../_resources/6cc2cdefe30a6f0fb7396d2077327a48f045fe0f)

この関数を最大化するには p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36) に関して[微分](https://ja.wikipedia.org/wiki/%E5%BE%AE%E5%88%86)しその値を0にすればよい：

0 = d d p ( ( 80 49 ) p 49 ( 1 − p ) 31 ) ∝ 49 p 48 ( 1 − p ) 31 − 31 p 49 ( 1 − p ) 30 = p 48 ( 1 − p ) 30 [ 49 ( 1 − p ) − 31 p ] {\displaystyle {\begin{matrix}0&=&{\frac {d}{dp}}\left({\binom {80}{49}}p^{49}(1-p)^{31}ight)\\&&\\&\propto &49p^{48}(1-p)^{31}-31p^{49}(1-p)^{30}\\&&\\&=&p^{48}(1-p)^{30}\left[49(1-p)-31pight]\\\end{matrix}}} [8bae5fa2e788d3c340ead319350621716871058b](../_resources/8bae5fa2e788d3c340ead319350621716871058b)

これを解けば p = 0 {\displaystyle p=0} [b3e6ac10fa45fb984d886065f959a6bdd467b5e8](../_resources/b3e6ac10fa45fb984d886065f959a6bdd467b5e8) 、 p = 1 {\displaystyle p=1} [c29a2f2fb3f642618036ed7a79712202e7ada924](../_resources/c29a2f2fb3f642618036ed7a79712202e7ada924) 、 p = 49 / 80 {\displaystyle p=49/80} [7597c30633b6ceffdc24a57a0cd10a9297cc96c9](../_resources/7597c30633b6ceffdc24a57a0cd10a9297cc96c9) の3つの解が得られるが、そのうち尤度を最大化するのは明らかに p = 49 / 80 {\displaystyle p=49/80} [7597c30633b6ceffdc24a57a0cd10a9297cc96c9](../_resources/7597c30633b6ceffdc24a57a0cd10a9297cc96c9) である（ p = 0 {\displaystyle p=0} [b3e6ac10fa45fb984d886065f959a6bdd467b5e8](../_resources/b3e6ac10fa45fb984d886065f959a6bdd467b5e8) と p = 1 {\displaystyle p=1} [c29a2f2fb3f642618036ed7a79712202e7ada924](../_resources/c29a2f2fb3f642618036ed7a79712202e7ada924) では尤度は0になってしまう）。こうして p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36) に対する最尤推定量は p ^ = 49 / 80 {\displaystyle {\hat {p}}=49/80} [8711af3d256402f70e92443ce98c4e21c43be1bc](../_resources/8711af3d256402f70e92443ce98c4e21c43be1bc) と求められる。 この結果で、ベルヌーイ試行の成功数49を t {\displaystyle t} [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560) と置き、全回数80を n {\displaystyle n} [a601995d55609f2d9f5e233e36fbe9ea26011b3b](../_resources/a601995d55609f2d9f5e233e36fbe9ea26011b3b) と置けば一般化できる。 n {\displaystyle n} [a601995d55609f2d9f5e233e36fbe9ea26011b3b](../_resources/a601995d55609f2d9f5e233e36fbe9ea26011b3b) 回のベルヌーイ試行で t {\displaystyle t} [65658b7b223af9e1acc877d848888ecdb4466560](../_resources/65658b7b223af9e1acc877d848888ecdb4466560) 回成功した場合に対する母数 p {\displaystyle p} [81eac1e205430d1f40810df36a0edffdc367af36](../_resources/81eac1e205430d1f40810df36a0edffdc367af36) の最尤推定量は

p ^ = t n {\displaystyle {\hat {p}}={\frac {t}{n}}} [50d9df30cea7349c294f2f25e4e0cc4cab5e2496](../_resources/50d9df30cea7349c294f2f25e4e0cc4cab5e2496)

となる[[2]](https://ja.wikipedia.org/wiki/%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A#cite_note-FOOTNOTELehmannCasella1998445-2)。

### 分布、母数とも連続的な場合[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=6)]

よく出てくる連続確率分布に、次の[正規分布](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)がある：

f ( x ∣ μ , σ 2 ) = 1 2 π σ 2 e − ( x − μ ) 2 2 σ 2 {\displaystyle f(x\mid \mu ,\sigma ^{2})={\frac {1}{\sqrt {2\pi \sigma ^{2}}}}e^{-{\frac {(x-\mu )^{2}}{2\sigma ^{2}}}}} [4abaca87a10ecfa77b5a205056523706fe6c9c3f](../_resources/4abaca87a10ecfa77b5a205056523706fe6c9c3f)

この分布に従う n {\displaystyle n} [a601995d55609f2d9f5e233e36fbe9ea26011b3b](../_resources/a601995d55609f2d9f5e233e36fbe9ea26011b3b) 個の独立なランダム変数標本の密度関数は：

f ( x 1 , … , x n ∣ μ , σ 2 ) = ( 1 2 π σ 2 ) n 2 e − ∑ i = 1 n ( x i − μ ) 2 2 σ 2 {\displaystyle f(x_{1},\ldots ,x_{n}\mid \mu ,\sigma ^{2})=\left({\frac {1}{2\pi \sigma ^{2}}}ight)^{\frac {n}{2}}e^{-{\frac {\sum _{i=1}^{n}(x_{i}-\mu )^{2}}{2\sigma ^{2}}}}} [5c2a1c4199b49d10eaf38634a45f85fb29841060](../_resources/5c2a1c4199b49d10eaf38634a45f85fb29841060)

また計算しやすいように書き換えると：

f ( x 1 , … , x n ∣ μ , σ 2 ) = ( 1 2 π σ 2 ) n 2 e − ∑ i = 1 n ( x i − x ¯ ) 2 + n ( x ¯ − μ ) 2 2 σ 2 {\displaystyle f(x_{1},\ldots ,x_{n}\mid \mu ,\sigma ^{2})=\left({\frac {1}{2\pi \sigma ^{2}}}ight)^{\frac {n}{2}}e^{-{\frac {\sum _{i=1}^{n}(x_{i}-{\bar {x}})^{2}+n({\bar {x}}-\mu )^{2}}{2\sigma ^{2}}}}} [7528488d7d0e83d6f70456935b3bc7d5f0751108](../_resources/7528488d7d0e83d6f70456935b3bc7d5f0751108)

この分布には[平均](https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%9D%87) μ {\displaystyle \mu } [9fd47b2a39f7a7856952afec1f1db72c67af6161](../_resources/9fd47b2a39f7a7856952afec1f1db72c67af6161) と[分散](https://ja.wikipedia.org/wiki/%E5%88%86%E6%95%A3) σ 2 {\displaystyle \sigma ^{2}} [53a5c55e536acf250c1d3e0f754be5692b843ef5](../_resources/53a5c55e536acf250c1d3e0f754be5692b843ef5) の2つの母数がある。上では1つの母数に対する最大化だけを議論したが、この場合も各母数に対して尤度 L ( μ , σ ) = f ( x 1 , , … , x n ∣ μ , σ 2 ) {\displaystyle L(\mu ,\sigma )=f(x_{1},,\ldots ,x_{n}\mid \mu ,\sigma ^{2})} [ecdb75ba35128bbf929aaa85c13820a13a1d410a](../_resources/ecdb75ba35128bbf929aaa85c13820a13a1d410a) を最大化すればよい。上の書き方なら θ = ( μ , σ 2 ) {\displaystyle \theta =(\mu ,\sigma ^{2})} [e8a76220bd34d7301e2c066e4cb89b1afaf88294](../_resources/e8a76220bd34d7301e2c066e4cb89b1afaf88294) とする（このように母数が複数の場合は母数[ベクトル](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB)として扱う）。 尤度を最大にするのは、尤度の[自然対数](https://ja.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E5%AF%BE%E6%95%B0)を最大にするのと同じである（自然対数は単調増加関数であるから）。このような計算法はいろいろな分野でよく利用され、対数尤度は[情報](https://ja.wikipedia.org/wiki/%E6%83%85%E5%A0%B1)の[エントロピー](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%B3%E3%83%88%E3%83%AD%E3%83%94%E3%83%BC)や[フィッシャー情報](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E6%83%85%E5%A0%B1)と密接な関係がある。

0 = ∂ ∂ μ log ⁡ ( ( 1 2 π σ 2 ) n 2 e − ∑ i = 1 n ( x i − x ¯ ) 2 + n ( x ¯ − μ ) 2 2 σ 2 ) = ∂ ∂ μ ( log ⁡ ( 1 2 π σ 2 ) n 2 − ∑ i = 1 n ( x i − x ¯ ) 2 + n ( x ¯ − μ ) 2 2 σ 2 ) = 0 − − 2 n ( x ¯ − μ ) 2 σ 2 {\displaystyle {\begin{matrix}0&=&{\frac {\partial }{\partial \mu }}\log \left(\left({\frac {1}{2\pi \sigma ^{2}}}ight)^{\frac {n}{2}}e^{-{\frac {\sum _{i=1}^{n}(x_{i}-{\bar {x}})^{2}+n({\bar {x}}-\mu )^{2}}{2\sigma ^{2}}}}ight)\\&=&{\frac {\partial }{\partial \mu }}\left(\log \left({\frac {1}{2\pi \sigma ^{2}}}ight)^{\frac {n}{2}}-{\frac {\sum _{i=1}^{n}(x_{i}-{\bar {x}})^{2}+n({\bar {x}}-\mu )^{2}}{2\sigma ^{2}}}ight)\\&=&0-{\frac {-2n({\bar {x}}-\mu )}{2\sigma ^{2}}}\\\end{matrix}}} [855129e47348f3be56a146ba0e40496238cbacff](../_resources/855129e47348f3be56a146ba0e40496238cbacff)

これを解くと μ ^ = x ¯ = ∑ i = 1 n x i / n {\displaystyle {\hat {\mu }}={\bar {x}}=\sum _{i=1}^{n}x_{i}/n} [540b20286aa0031474e057f68a8aff13a0f02675](../_resources/540b20286aa0031474e057f68a8aff13a0f02675) となる。これはまさに関数の最大値、すなわち μ {\displaystyle \mu } [9fd47b2a39f7a7856952afec1f1db72c67af6161](../_resources/9fd47b2a39f7a7856952afec1f1db72c67af6161) の唯一の極値で、2次微分は負となる。 同様に、 σ {\displaystyle \sigma } [59f59b7c3e6fdb1d0365a494b81fb9a696138c36](../_resources/59f59b7c3e6fdb1d0365a494b81fb9a696138c36) に関して微分し0とおけば尤度の最大値 σ ^ 2 = ∑ i = 1 n ( x i − μ ^ ) 2 / n {\displaystyle {\hat {\sigma }}^{2}=\sum _{i=1}^{n}(x_{i}-{\hat {\mu }})^{2}/n} [6bf4680d5aaf51ca5da62760c8fcd56e37b680bf](../_resources/6bf4680d5aaf51ca5da62760c8fcd56e37b680bf) が得られる。 つまり、正規分布の母数 θ = ( μ , σ 2 ) {\displaystyle \theta =(\mu ,\sigma ^{2})} [e8a76220bd34d7301e2c066e4cb89b1afaf88294](../_resources/e8a76220bd34d7301e2c066e4cb89b1afaf88294) に対する最尤推定量は

θ ^ = ( μ ^ , σ ^ 2 ) = ( x ¯ , ∑ i = 1 n ( x i − x ¯ ) 2 / n ) {\displaystyle {\hat {\theta }}=({\hat {\mu }},{\hat {\sigma }}^{2})=({\bar {x}},\sum _{i=1}^{n}(x_{i}-{\bar {x}})^{2}/n)} [30f749cac6a5f7d0473687537b8491eea8148e3d](../_resources/30f749cac6a5f7d0473687537b8491eea8148e3d)

となる[[2]](https://ja.wikipedia.org/wiki/%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A#cite_note-FOOTNOTELehmannCasella1998445-2)。

## 生物の系統推定への応用[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=7)]

最尤法は生物の分子系統推定（分子系統樹作成）にも応用される。塩基やアミノ酸配列の置換に関する確率モデルを仮定した上で、想定される樹形ごとに手持ちのデータ（配列の多重アラインメント）が得られる尤度を求め、最も尤度の高い樹形を採用する方法である。

## 脚注[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=8)]

## 参考文献[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=9)]

- Romano, Joseph P.; Siegel, Andrew F. (1986). [Counterexamples in Probability And Statistics](https://books.google.com/books?id=irKSXZ7kKFgC&pg=PA182). Chapman & Hall/CRC, Taylor & Francis Group. [ISBN](https://ja.wikipedia.org/wiki/ISBN) [978-0412989018](https://ja.wikipedia.org/wiki/%E7%89%B9%E5%88%A5:%E6%96%87%E7%8C%AE%E8%B3%87%E6%96%99/978-0412989018). //books.google.com/books?id=irKSXZ7kKFgC&pg=PA182.

## 関連項目[[編集](https://ja.wikipedia.org/w/index.php?title=%E6%9C%80%E5%B0%A4%E6%8E%A8%E5%AE%9A&action=edit&section=10)]

- [最大事後確率](https://ja.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E4%BA%8B%E5%BE%8C%E7%A2%BA%E7%8E%87)

[最尤推定 - Wikipedia](evernote:///view/96246353/s529/c0cb7c2e-b98c-48c7-a508-8577c6810aa6/c0cb7c2e-b98c-48c7-a508-8577c6810aa6/)