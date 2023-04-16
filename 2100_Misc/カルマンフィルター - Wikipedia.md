---
title: カルマンフィルター - Wikipedia
updated: 2018-04-21 00:50:33Z
created: 2018-04-21 00:50:33Z
source: >-
  https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC
tags:
  - null
---

# カルマンフィルター

移動先:[案内](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#mw-head)、[検索](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#p-search)

**カルマンフィルター** (Kalman filter) は、[誤差](https://ja.wikipedia.org/wiki/%E8%AA%A4%E5%B7%AE)のある[観測](https://ja.wikipedia.org/wiki/%E8%A6%B3%E6%B8%AC)値を用いて、ある[動的システム](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)の状態を推定あるいは制御するための、[無限インパルス応答](https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AB%E3%82%B9%E5%BF%9C%E7%AD%94)[フィルター](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC)の一種である。

## 実用例[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=1)]

カルマンフィルターは、 離散的な誤差のある観測から、時々刻々と時間変化する量（例えばある物体の位置と速度）を推定するために用いられる。[レーダー](https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC)や[コンピュータビジョン](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3)など、工学分野で広く用いられる。例えば、[カーナビゲーション](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%8A%E3%83%93%E3%82%B2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)では、機器内蔵の[加速度計](https://ja.wikipedia.org/wiki/%E5%8A%A0%E9%80%9F%E5%BA%A6%E8%A8%88)や[人工衛星](https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E8%A1%9B%E6%98%9F)からの誤差のある情報を統合して、時々刻々変化する[自動車](https://ja.wikipedia.org/wiki/%E8%87%AA%E5%8B%95%E8%BB%8A)の位置を推定するのに応用されている。カルマンフィルターは、目標物の時間変化を支配する法則を活用して、目標物の位置を現在（フィルター）、未来（予測）、過去（内挿あるいは平滑化）に推定することができる。

## 歴史[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=2)]

このフィルターは[ルドルフ・カルマン](https://ja.wikipedia.org/wiki/%E3%83%AB%E3%83%89%E3%83%AB%E3%83%95%E3%83%BB%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3)によって提唱されたが、同様の原理は[トルバルド・ティエレ](https://ja.wikipedia.org/wiki/%E3%83%88%E3%83%AB%E3%83%90%E3%83%AB%E3%83%89%E3%83%BB%E3%83%86%E3%82%A3%E3%82%A8%E3%83%AC)と[ピーター・スワーリング](https://ja.wikipedia.org/w/index.php?title=%E3%83%94%E3%83%BC%E3%82%BF%E3%83%BC%E3%83%BB%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0&action=edit&redlink=1)によってすでに開発されていた[[1]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-1)。カルマンが[アメリカ航空宇宙局](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%A1%E3%83%AA%E3%82%AB%E8%88%AA%E7%A9%BA%E5%AE%87%E5%AE%99%E5%B1%80)の[エイムズ研究センター](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%82%A4%E3%83%A0%E3%82%BA%E7%A0%94%E7%A9%B6%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC)を訪問した際、この理論がロケットの軌道推定に有用なことに気づき、のちの[アポロ計画](https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%9D%E3%83%AD%E8%A8%88%E7%94%BB)で用いられた。

## 用いられる動的システム[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=3)]

カルマンフィルターは[時間領域](https://ja.wikipedia.org/wiki/%E6%99%82%E9%96%93%E9%A0%98%E5%9F%9F)において、連続時間線形動的システム、もしくは離散化された離散時間[線型](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%9E%8B%E6%80%A7)[動的システム](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)に基づいて駆動する。以降に導入される解説は、後者の立場のものである。それらはガウス[白色雑音](https://ja.wikipedia.org/wiki/%E7%99%BD%E8%89%B2%E9%9B%91%E9%9F%B3)によって励振をうける[線形演算子](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%BD%A2%E6%BC%94%E7%AE%97%E5%AD%90)からなる[マルコフ連鎖](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%80%A3%E9%8E%96)モデルで表現される。より端的にいえば、システムは[状態空間モデル](https://ja.wikipedia.org/wiki/%E7%8A%B6%E6%85%8B%E7%A9%BA%E9%96%93%E3%83%A2%E3%83%87%E3%83%AB) (state space model) で表現されるということである。

対象のシステムに定義された「状態 (state)」は、そのシステムの過去の動特性の遷移を保持する役割を果たし、動特性の遷移を保持する線形空間が[状態空間](https://ja.wikipedia.org/wiki/%E7%8A%B6%E6%85%8B%E7%A9%BA%E9%96%93)として定義される。この空間は実数空間であるため、システムの状態は一般に、任意の次元の状態空間に含まれる[実数](https://ja.wikipedia.org/wiki/%E5%AE%9F%E6%95%B0)[ベクトル](https://ja.wikipedia.org/wiki/%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB)として与えられる。状態の変化は、現在の状態と、それに付加する雑音の影響と、場合によってはシステムの状態の制御に関与する既知の制御入力の線形結合によって記述される。したがって、状態はシステムの因果性に寄与する存在である。上記の理念は、以下に記述する状態方程式 (state equation) によって表現される。 状態が直接観測できない場合には、システムの出力は一般に状態と観測雑音の線形結合にて観測可能なものとして与えられる。この理念は観測方程式 (observation equation) として、以下に示すような線形モデルで表現される。 カルマンフィルターは、直接システムの状態が観測できない問題に対する状態推定法のひとつであるから、一般的に観測方程式を伴う問題に適用される。

カルマンフィルターは[隠れマルコフモデル](https://ja.wikipedia.org/wiki/%E9%9A%A0%E3%82%8C%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E3%83%A2%E3%83%87%E3%83%AB) (hidden Markov model) の類似であると考えることができる。2者の主たる差異は隠れマルコフモデルにおける状態変数が、[連続](https://ja.wikipedia.org/wiki/%E9%80%A3%E7%B6%9A)であるか[離散](https://ja.wikipedia.org/wiki/%E9%9B%A2%E6%95%A3)であるかである。また、隠れマルコフモデルでは状態変数の未来への変化を任意の分布に従う形式で統計的に与えることができる一方で、カルマンフィルターでは、[ガウス分布](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%82%A6%E3%82%B9%E5%88%86%E5%B8%83)に従う雑音によって未来の状態変数が統計的に記述される点が異なっている。したがって、カルマンフィルターと隠れマルコフモデルの間には強固な双対性が存在する。ちなみに、カルマンフィルターの導出過程においては、「システムに付随する雑音の性質はガウス分布に従う」という仮定の下に行われるのが一般的であるが、雑音の性質がガウス分布に従わない場合であっても、カルマンフィルターは線形なクラスにおける最適推定値、すなわち線形最小分散推定値を導くことができる点で、汎用性に富んでいるといえる。

唯一に観測可能である、雑音の影響を受けた出力過程に基づいて（制御問題においては、入力も観測可能な過程となる）、カルマンフィルターを用いてシステムの状態を推定するためには、対象のシステムに対して、カルマンフィルターの理念に合致するような状態の遷移（すなわち状態過程）に関するモデルを与えなければならない。これは、時変 (time-variant) な行列           F    k          {\displaystyle F_{k}}  [e4eb94e88d1b1887f734606180a126abfdca3a17](../_resources/e4eb94e88d1b1887f734606180a126abfdca3a17),           G    k          {\displaystyle G_{k}}  [4d8034a8094aa6549db10b01a1e8f73bb57ac39f](../_resources/4d8034a8094aa6549db10b01a1e8f73bb57ac39f),           H    k          {\displaystyle H_{k}}  [4c8af69c8cae9ee6ba302b6b3f4b0618ac08e427](../_resources/4c8af69c8cae9ee6ba302b6b3f4b0618ac08e427),           Q    k          {\displaystyle Q_{k}}  [2fa6cb6cf7ffc157202e52dd5711e755892d1015](../_resources/2fa6cb6cf7ffc157202e52dd5711e755892d1015),           R    k          {\displaystyle R_{k}}  [7ceaa1ef568e99be510c49bc30d07d094e150a6b](../_resources/7ceaa1ef568e99be510c49bc30d07d094e150a6b) によって特徴付けられる線形方程式として、以下で与えられる。これが状態方程式である。

時刻         k      {\displaystyle k}  [c3c9a2c7b599b37105512c5d570edc034056dd40](../_resources/c3c9a2c7b599b37105512c5d570edc034056dd40) における真のシステムの状態は、１ステップ前の時刻         (  k  −  1  )      {\displaystyle (k-1)}  [e69f74fa2adbbab50f6969acb2af719045435461](../_resources/e69f74fa2adbbab50f6969acb2af719045435461) の状態をもとに、次のように表現される[[2]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-2)。

           x      k      =    F    k          x      k  −  1      +      u      k      +    G    k          w      k          {\displaystyle {\boldsymbol {x}}_{k}=F_{k}{\boldsymbol {x}}_{k-1}+{\boldsymbol {u}}_{k}+G_{k}{\boldsymbol {w}}_{k}}  [0afde2a85d9c20dc1c937638c905671c8195b37d](../_resources/0afde2a85d9c20dc1c937638c905671c8195b37d)

ここに、

- G    k          {\displaystyle G_{k}}  [4d8034a8094aa6549db10b01a1e8f73bb57ac39f](../_resources/4d8034a8094aa6549db10b01a1e8f73bb57ac39f) は時間遷移に関する雑音 (process noise) モデルの行列で、            w      k          {\displaystyle {\boldsymbol {w}}_{k}}  [247885cc3716e3a2aeb63577ccf02bc88cf3ec17](../_resources/247885cc3716e3a2aeb63577ccf02bc88cf3ec17) はその雑音で、[共分散](https://ja.wikipedia.org/wiki/%E5%85%B1%E5%88%86%E6%95%A3)行列           Q    k          {\displaystyle Q_{k}}  [2fa6cb6cf7ffc157202e52dd5711e755892d1015](../_resources/2fa6cb6cf7ffc157202e52dd5711e755892d1015) かつ零平均の[多変数正規分布](https://ja.wikipedia.org/w/index.php?title=%E5%A4%9A%E5%A4%89%E6%95%B0%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83&action=edit&redlink=1)に従う。

           w      k      ∼  N  (  0  ,    Q    k      )      {\displaystyle {\boldsymbol {w}}_{k}\sim N(0,Q_{k})}  [b2832a4858afb47fd66fb66804cd698c3151563e](../_resources/b2832a4858afb47fd66fb66804cd698c3151563e)

これがシステムの状態の遷移を記述する状態方程式である。

ある時刻         k      {\displaystyle k}  [c3c9a2c7b599b37105512c5d570edc034056dd40](../_resources/c3c9a2c7b599b37105512c5d570edc034056dd40) において、観測量（測定量）            z      k          {\displaystyle {\boldsymbol {z}}_{k}}  [9b44724e732d686461d3632b602c30142b06b5e0](../_resources/9b44724e732d686461d3632b602c30142b06b5e0) は、真の（すなわち観測不可能な）状態             x      k          {\displaystyle {\boldsymbol {x}}_{k}}  [3aaaf8ac33e398bf1a773899488ecc06fbf18ab4](../_resources/3aaaf8ac33e398bf1a773899488ecc06fbf18ab4) と、以下のような関係にある。

           z      k      =    H    k          x      k      +      v      k          {\displaystyle {\boldsymbol {z}}_{k}=H_{k}{\boldsymbol {x}}_{k}+{\boldsymbol {v}}_{k}}  [85904bc42fee85db01d497229b5dba69dd1d4c3c](../_resources/85904bc42fee85db01d497229b5dba69dd1d4c3c)

ここに、          H    k          {\displaystyle H_{k}}  [4c8af69c8cae9ee6ba302b6b3f4b0618ac08e427](../_resources/4c8af69c8cae9ee6ba302b6b3f4b0618ac08e427) は状態空間を観測空間に[線形写像](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%BD%A2%E5%86%99%E5%83%8F)する役割を担う観測モデルで、             v      k          {\displaystyle {\boldsymbol {v}}_{k}}  [e3cde753a4b5c7cc4d511ab9b9093d7d362580a2](../_resources/e3cde753a4b5c7cc4d511ab9b9093d7d362580a2) は、共分散行列           R    k          {\displaystyle R_{k}}  [7ceaa1ef568e99be510c49bc30d07d094e150a6b](../_resources/7ceaa1ef568e99be510c49bc30d07d094e150a6b) かつ零平均の多変数正規（ガウス）分布に従うような雑音である（観測雑音 (observation noise) ）。これが観測方程式である。

           v      k      ∼  N  (  0  ,    R    k      )      {\displaystyle {\boldsymbol {v}}_{k}\sim N(0,R_{k})}  [29e242ff1f44763c34bfa26645321403fa30fa18](../_resources/29e242ff1f44763c34bfa26645321403fa30fa18)

システムの初期条件と雑音         {      x      0      ,      w      1      ,  .  .  .  ,      w      k      ,      v      1      ,  .  .  .  ,      v      k      }      {\displaystyle \{{\boldsymbol {x}}_{0},{\boldsymbol {w}}_{1},...,{\boldsymbol {w}}_{k},{\boldsymbol {v}}_{1},...,{\boldsymbol {v}}_{k}\}}  [7e9dcd90f0f7317959dd6626f3c9322882792674](../_resources/7e9dcd90f0f7317959dd6626f3c9322882792674) は、互いに統計的に[独立](https://ja.wikipedia.org/w/index.php?title=%E7%8B%AC%E7%AB%8B%EF%BC%88%E6%95%B0%E5%AD%A6%EF%BC%89&action=edit&redlink=1)であると仮定する。

状態方程式と観測方程式を合わせて、状態空間モデルという。上記の状態空間モデルは[時変システム](https://ja.wikipedia.org/w/index.php?title=%E6%99%82%E5%A4%89%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0&action=edit&redlink=1)を表現しているが、限定的な場合として行列のインデックス         k      {\displaystyle k}  [c3c9a2c7b599b37105512c5d570edc034056dd40](../_resources/c3c9a2c7b599b37105512c5d570edc034056dd40) を定数と考えることにより、[時不変システム](https://ja.wikipedia.org/wiki/%E6%99%82%E4%B8%8D%E5%A4%89%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0) (time-invariant) を表現できる。

多くの実動的システムでは、上記のような状態空間モデルは厳密には適合しないが、カルマンフィルターは雑音の影響を加味した上で設計されているがゆえに、上記のモデルが対象システムに近似的に適合するものと考えられ、これが理由でカルマンフィルターは十分な有用性が認められている。カルマンフィルターは洗練された様々な拡張がなされており、それは以降に述べられる。

## カルマンフィルター[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=4)]

カルマンフィルターは、システム（系）の現在の観測量と 1 ステップ前の状態推定値のみから（モデルが制御入力を受ける場合には現在の入力値も用いて）、現在の状態推定値（ろ波推定値）と 1 ステップ先の状態予測値（ 1 段予測値）を与える、反復推定器（反復推定型フィルタ）である。例えば[ローパスフィルタ](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%BC%E3%83%91%E3%82%B9%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF)などの多くのフィルタが[周波数領域](https://ja.wikipedia.org/wiki/%E5%91%A8%E6%B3%A2%E6%95%B0%E9%A0%98%E5%9F%9F)で設計され、[時間領域](https://ja.wikipedia.org/wiki/%E6%99%82%E9%96%93%E9%A0%98%E5%9F%9F)へ変換されて実演される中で、カルマンフィルターは純粋に[時間領域](https://ja.wikipedia.org/wiki/%E6%99%82%E9%96%93%E9%A0%98%E5%9F%9F)でのみ設計されるフィルタで、その意味で特異な存在であるといえる。カルマンフィルターは基本的に線形なクラスのフィルタであり、システム（系）が無限の過去から駆動し続けていると仮定すると、状態の推定値は、それまでにシステム（系）から観測された観測値の全て（システム（系）が制御入力を受ける場合は入力値の全ても含めて）を用いた線形結合の形で表現される。その意味で、カルマンフィルタは[無限インパルス応答](https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AB%E3%82%B9%E5%BF%9C%E7%AD%94)[フィルタ](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF)であると解釈できる。反復推定との対応関係は、1 ステップ前の状態推定値が 1 ステップ前までの全ての観測値（入力値も含め）の情報を[線形結合](https://ja.wikipedia.org/wiki/%E7%B7%9A%E5%BD%A2%E7%B5%90%E5%90%88)の形で保有しているという事実により与えられる。

以降、                x  ^          n    |    m          {\displaystyle {\hat {\boldsymbol {x}}}_{n|m}}  [61ed7772583eb21bb7504df0e0a566b6f0b75323](../_resources/61ed7772583eb21bb7504df0e0a566b6f0b75323) は時刻 *m* 時点での時刻 *n* の状態推定値を示すものとする。

フィルタの現在(時刻 *k* )の状態(様子)は、以下の２つの変数で特徴付けられる。

カルマンフィルターは、時間ステップをひとつ進めるために**予測**と**更新**の二つの手続きを行う。予測の手続きでは、前の時刻の推定状態から、今の時刻の推定状態を計算する。更新では、今の時刻の観測を用いて、推定値を補正してより正確な状態を推定する。

### 予測[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=5)]

               x  ^          k    |    k  −  1      =    F    k              x  ^          k  −  1    |    k  −  1      +      u      k          {\displaystyle {\hat {\boldsymbol {x}}}_{k|k-1}=F_{k}{\hat {\boldsymbol {x}}}_{k-1|k-1}+{\boldsymbol {u}}_{k}}  [585e0b364548dbdb00b38bc250f02a2c0efdf195](../_resources/585e0b364548dbdb00b38bc250f02a2c0efdf195) （今の時刻の予測推定値）

         P    k    |    k  −  1      =    F    k        P    k  −  1    |    k  −  1        F    k        T        +    G    k        Q    k        G    k        T            {\displaystyle P_{k|k-1}=F_{k}P_{k-1|k-1}F_{k}^{\textrm {T}}+G_{k}Q_{k}G_{k}^{\textrm {T}}}  [b366c80cbb40f3bc265b9bb9b536a813e80e0b09](../_resources/b366c80cbb40f3bc265b9bb9b536a813e80e0b09) （今の時刻の予測誤差行列）

### 更新[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=6)]

           e      k      =      z      k      −    H    k              x  ^          k    |    k  −  1          {\displaystyle {\boldsymbol {e}}_{k}={\boldsymbol {z}}_{k}-H_{k}{\hat {\boldsymbol {x}}}_{k|k-1}}  [c9e9d6335438ea25bd43b0ab83726c64d47adc1b](../_resources/c9e9d6335438ea25bd43b0ab83726c64d47adc1b) （観測残差、innovation）

         S    k      =    R    k      +    H    k        P    k    |    k  −  1        H    k        T            {\displaystyle S_{k}=R_{k}+H_{k}P_{k|k-1}H_{k}^{\textrm {T}}}  [5ab91ec3375c4baa5cf2414777eae0ce6df13139](../_resources/5ab91ec3375c4baa5cf2414777eae0ce6df13139) （観測残差の共分散）

         K    k      =    P    k    |    k  −  1        H    k        T          S    k      −  1          {\displaystyle K_{k}=P_{k|k-1}H_{k}^{\textrm {T}}S_{k}^{-1}}  [8d12a1c555fb9bfb0d90e965fbd765077f80af9b](../_resources/8d12a1c555fb9bfb0d90e965fbd765077f80af9b) （*最適* カルマンゲイン）

               x  ^          k    |    k      =          x  ^          k    |    k  −  1      +    K    k          e      k          {\displaystyle {\hat {\boldsymbol {x}}}_{k|k}={\hat {\boldsymbol {x}}}_{k|k-1}+K_{k}{\boldsymbol {e}}_{k}}  [be3451c9e6cb75d98e8917934bd502bf892310d7](../_resources/be3451c9e6cb75d98e8917934bd502bf892310d7) （更新された状態の推定値）

         P    k    |    k      =  (    I    −    K    k        H    k      )    P    k    |    k  −  1          {\displaystyle P_{k|k}=(\mathrm {I} -K_{k}H_{k})P_{k|k-1}}  [0c09300a810409ffe7e637ae7a8378082c8c9050](../_resources/0c09300a810409ffe7e637ae7a8378082c8c9050) （更新された誤差の共分散）

### 不偏量[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=7)]

もし、モデルが正確で初期条件                 x  ^          0    |    0          {\displaystyle {\hat {\boldsymbol {x}}}_{0|0}}  [95b7b85fc6d4b89b3271d31ce8a64adbcdf29c89](../_resources/95b7b85fc6d4b89b3271d31ce8a64adbcdf29c89) と           P    0    |    0          {\displaystyle P_{0|0}}  [ea9af7660aa433bc3dbe95d7d116a64d43c0187b](../_resources/ea9af7660aa433bc3dbe95d7d116a64d43c0187b) が正確ならば、全ての推定量は[不偏](https://ja.wikipedia.org/wiki/%E4%B8%8D%E5%81%8F%E6%8E%A8%E5%AE%9A%E9%87%8F)である。

- E    (      x      k      −          x  ^          k    |    k      )  =    E    (      x      k      −          x  ^          k    |    k  −  1      )  =  0      {\displaystyle \mathrm {E} ({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k})=\mathrm {E} ({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k-1})=0}  [095fc5aa64fa41be4130199bb3c393b24b58dc68](../_resources/095fc5aa64fa41be4130199bb3c393b24b58dc68)

ここに、          E        {\displaystyle \mathrm {E} }  [be1811407dea8b43727d28dbe8da7251985b03e8](../_resources/be1811407dea8b43727d28dbe8da7251985b03e8) は、[期待値](https://ja.wikipedia.org/wiki/%E6%9C%9F%E5%BE%85%E5%80%A4)。また、[共分散](https://ja.wikipedia.org/wiki/%E5%85%B1%E5%88%86%E6%95%A3)は、推定値の誤差共分散である。

- P    k    |    k      =    c  o  v    (      x      k      −          x  ^          k    |    k      )      {\displaystyle P_{k|k}=\mathrm {cov} ({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k})}  [8837060ebc1a234a600df582820ed9ae32bcbfe4](../_resources/8837060ebc1a234a600df582820ed9ae32bcbfe4)
- P    k    |    k  −  1      =    c  o  v    (      x      k      −          x  ^          k    |    k  −  1      )      {\displaystyle P_{k|k-1}=\mathrm {cov} ({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k-1})}  [df645ee546138280f4fd68c32cb9ddb23dbda7fa](../_resources/df645ee546138280f4fd68c32cb9ddb23dbda7fa)
- S    k      =    c  o  v    (      e      k      )      {\displaystyle S_{k}=\mathrm {cov} ({\boldsymbol {e}}_{k})}  [cd82ccd2d2e609ac63aea255f83568732af5ca78](../_resources/cd82ccd2d2e609ac63aea255f83568732af5ca78)

## 設定例[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=8)]

まっすぐで無限の長さを持つ摩擦の無いレールの上に乗っているトロッコを考えよう。初期条件は、トロッコは位置 0 に静止している。トロッコにはランダムな 力（加速度）が与えられる。*Δt* 秒ごとにトロッコの位置 **x** を観測する。ただしこの観測には誤差が混入している。トロッコの位置と速度のモデルを考えると、以下の様に設定すると、カルマンフィルターが用い得る。

制御の必要はないから、 *u**k* は考えない。行列 *F*、 *G*、 *H*、 *R*、 *Q* は時間変化しないので添字は付けない。
トロッコの場所と速度は、

           x      k      =      [        x                x  ˙              ]          {\displaystyle {\boldsymbol {x}}_{k}={\begin{bmatrix}x\\{\dot {x}}\end{bmatrix}}}  [6d4d03cf97d5e824324ad3bbc75632a838e80407](../_resources/6d4d03cf97d5e824324ad3bbc75632a838e80407)

で、表される。               x  ˙            {\displaystyle {\dot {x}}}  [a82c85f33714da82ab42d6b69eae07ab7e5e234b](../_resources/a82c85f33714da82ab42d6b69eae07ab7e5e234b) は位置の時間微分、すなわち速度である。

時刻 *k* − 1 と時刻 *k* の間に加速度          a    k          {\displaystyle a_{k}}  [05e256a120c3ab9f8958de71acdf81cd75065e3b](../_resources/05e256a120c3ab9f8958de71acdf81cd75065e3b)がトロッコに与えられる。加速度          a    k          {\displaystyle a_{k}}  [05e256a120c3ab9f8958de71acdf81cd75065e3b](../_resources/05e256a120c3ab9f8958de71acdf81cd75065e3b)は平均 0 標準偏差          σ    a          {\displaystyle \sigma _{a}}  [96ef75a8ddd0a1ba9772f635467a7aec9207f0c3](../_resources/96ef75a8ddd0a1ba9772f635467a7aec9207f0c3)の正規分布をしている。[運動の第2法則](https://ja.wikipedia.org/wiki/%E9%81%8B%E5%8B%95%E3%81%AE%E7%AC%AC2%E6%B3%95%E5%89%87)により、

           x      k      =  F      x      k  −  1      +  G      w      k          {\displaystyle {\boldsymbol {x}}_{k}=F{\boldsymbol {x}}_{k-1}+G{\boldsymbol {w}}_{k}}  [2f9b422aa2d0fbc34f7cf78785e74d1e601459db](../_resources/2f9b422aa2d0fbc34f7cf78785e74d1e601459db)

ここに、

       F  =      [        1      Δ  t          0      1        ]          {\displaystyle F={\begin{bmatrix}1&\Delta t\\0&1\end{bmatrix}}}  [ec38f7a33c7310ae04ccddd3bce28ddd0e83a605](../_resources/ec38f7a33c7310ae04ccddd3bce28ddd0e83a605)

かつ

       G  =      [              Δ    t    2        2              Δ  t        ]          {\displaystyle G={\begin{bmatrix}{\frac {\Delta t^{2}}{2}}\\\Delta t\end{bmatrix}}}  [7c2aaddbf6e78b112025c613a5b4794cc8aeaf74](../_resources/7c2aaddbf6e78b112025c613a5b4794cc8aeaf74)

           w      k      =      [          a    k            ]          {\displaystyle {\boldsymbol {w}}_{k}={\begin{bmatrix}a_{k}\end{bmatrix}}}  [76b08aea99ab1b2c58271160096d9a077f051cf3](../_resources/76b08aea99ab1b2c58271160096d9a077f051cf3)

である。        G      w      k          {\displaystyle G{\boldsymbol {w}}_{k}}  [ae7016b79842b5c36f41298bbd29e579a0b02a32](../_resources/ae7016b79842b5c36f41298bbd29e579a0b02a32)の共分散は、          σ    a          {\displaystyle \sigma _{a}}  [96ef75a8ddd0a1ba9772f635467a7aec9207f0c3](../_resources/96ef75a8ddd0a1ba9772f635467a7aec9207f0c3)がスカラーであることを用いて、

         c  o  v    (  G      w      k      )  =    σ    a      2      ×  G    G      T        =    σ    a      2      ×      [              Δ    t    4        4                Δ    t    3        2                    Δ    t    3        2          Δ    t    2            ]          {\displaystyle \mathrm {cov} (G{\boldsymbol {w}}_{k})=\sigma _{a}^{2}\times GG^{\textrm {T}}=\sigma _{a}^{2}\times {\begin{bmatrix}{\frac {\Delta t^{4}}{4}}&{\frac {\Delta t^{3}}{2}}\\{\frac {\Delta t^{3}}{2}}&\Delta t^{2}\end{bmatrix}}}  [5e74d30620973802dc20655df537b30e12fbe71e](../_resources/5e74d30620973802dc20655df537b30e12fbe71e)

それぞれの時刻に、トロッコの位置を観測する。観測誤差も平均 0 で標準偏差          σ    z          {\displaystyle \sigma _{z}}  [61ea9b1af0a90b25f6dcdc140820ff2428fd92c4](../_resources/61ea9b1af0a90b25f6dcdc140820ff2428fd92c4)の正規分布と仮定する。

           z      k      =  H      x      k      +      v      k          {\displaystyle {\boldsymbol {z}}_{k}=H{\boldsymbol {x}}_{k}+{\boldsymbol {v}}_{k}}  [32ccd59a1e0582eea187160d252e576a4fbcbe13](../_resources/32ccd59a1e0582eea187160d252e576a4fbcbe13)

ここに、

       H  =      [        1      0        ]          {\displaystyle H={\begin{bmatrix}1&0\end{bmatrix}}}  [3ca70652aa0ae6236de04e3e0d12a48015327407](../_resources/3ca70652aa0ae6236de04e3e0d12a48015327407)

かつ

       R  =    E    (      v      k          v      k        T        )  =      [          σ    z      2            ]          {\displaystyle R=\mathrm {E} ({\boldsymbol {v}}_{k}{\boldsymbol {v}}_{k}^{\textrm {T}})={\begin{bmatrix}\sigma _{z}^{2}\end{bmatrix}}}  [ccd1c67de9d9a27199c8d028e447614da381ea3f](../_resources/ccd1c67de9d9a27199c8d028e447614da381ea3f)

である。
初期条件は正確に分かっているので、

               x  ^          0    |    0      =      [        0          0        ]          {\displaystyle {\hat {\boldsymbol {x}}}_{0|0}={\begin{bmatrix}0\\0\end{bmatrix}}}  [897a0faa7ce8aa60339bf935f687b8900da8bc49](../_resources/897a0faa7ce8aa60339bf935f687b8900da8bc49)

         P    0    |    0      =      [        0      0          0      0        ]          {\displaystyle P_{0|0}={\begin{bmatrix}0&0\\0&0\end{bmatrix}}}  [77fab049066d8a276c2981a5615b9e15294e9656](../_resources/77fab049066d8a276c2981a5615b9e15294e9656)

もしも、初期条件に誤差があるならば、誤差の大きさに応じて *B* を設定し、

         P    0    |    0      =      [        B      0          0      B        ]          {\displaystyle P_{0|0}={\begin{bmatrix}B&0\\0&B\end{bmatrix}}}  [eac577d7ddd151d80a0e19cd846217d22b00913b](../_resources/eac577d7ddd151d80a0e19cd846217d22b00913b)

と、取るべきである。もし *B* が大きければカルマンフィルターは、初期条件より、それ以降の観測に重みを置くようになる。

## 導出[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=9)]

### 更新後の共分散行列[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=10)]

時間を進めるための**予測**と**更新**の手続きのうち、更新が終わったあとの共分散行列 *P**k*|*k* をまず求める。上の定義式、

         P    k    |    k      =    c  o  v    (      x      k      −          x  ^          k    |    k      )      {\displaystyle P_{k|k}=\mathrm {cov} ({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k})}  [8837060ebc1a234a600df582820ed9ae32bcbfe4](../_resources/8837060ebc1a234a600df582820ed9ae32bcbfe4)

に、推定値                 x  ^          k    |    k          {\displaystyle {\hat {\boldsymbol {x}}}_{k|k}}  [72c45ded4615b7c08ec75db7d2a2672c57032ad9](../_resources/72c45ded4615b7c08ec75db7d2a2672c57032ad9) の定義を代入。

         P    k    |    k      =    c  o  v    (      x      k      −  (          x  ^          k    |    k  −  1      +    K    k          e      k      )  )      {\displaystyle P_{k|k}=\mathrm {cov} ({\boldsymbol {x}}_{k}-({\hat {\boldsymbol {x}}}_{k|k-1}+K_{k}{\boldsymbol {e}}_{k}))}  [70953f6f936f53005ab6db717d873f7dc15f783a](../_resources/70953f6f936f53005ab6db717d873f7dc15f783a)

続いて、観測残差             e      k          {\displaystyle {\boldsymbol {e}}_{k}}  [86bd1329302d6ef85e092ee44d9b42f8dfbda6e9](../_resources/86bd1329302d6ef85e092ee44d9b42f8dfbda6e9) を代入。

         P    k    |    k      =    c  o  v    (      x      k      −  (          x  ^          k    |    k  −  1      +    K    k      (      z      k      −    H    k              x  ^          k    |    k  −  1      )  )  )      {\displaystyle P_{k|k}=\mathrm {cov} ({\boldsymbol {x}}_{k}-({\hat {\boldsymbol {x}}}_{k|k-1}+K_{k}({\boldsymbol {z}}_{k}-H_{k}{\hat {\boldsymbol {x}}}_{k|k-1})))}  [d55c598e57dc0f5d1d1493d2d9ee8072b7a794ef](../_resources/d55c598e57dc0f5d1d1493d2d9ee8072b7a794ef)

そして、観測値             z      k          {\displaystyle {\boldsymbol {z}}_{k}}  [9b44724e732d686461d3632b602c30142b06b5e0](../_resources/9b44724e732d686461d3632b602c30142b06b5e0) と真の値の関係を代入。

         P    k    |    k      =    c  o  v    (      x      k      −  (          x  ^          k    |    k  −  1      +    K    k      (    H    k          x      k      +      v      k      −    H    k              x  ^          k    |    k  −  1      )  )  )      {\displaystyle P_{k|k}=\mathrm {cov} ({\boldsymbol {x}}_{k}-({\hat {\boldsymbol {x}}}_{k|k-1}+K_{k}(H_{k}{\boldsymbol {x}}_{k}+{\boldsymbol {v}}_{k}-H_{k}{\hat {\boldsymbol {x}}}_{k|k-1})))}  [1edeca31f4c8e8d0e51efd9f3338462eacafb108](../_resources/1edeca31f4c8e8d0e51efd9f3338462eacafb108)

変形して、

         P    k    |    k      =    c  o  v    (  (    I    −    K    k        H    k      )  (      x      k      −          x  ^          k    |    k  −  1      )  −    K    k          v      k      )      {\displaystyle P_{k|k}=\mathrm {cov} ((\mathrm {I} -K_{k}H_{k})({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k-1})-K_{k}{\boldsymbol {v}}_{k})}  [434c58f27045f5a4f9cf84f1f6c8e7fa96c1ccca](../_resources/434c58f27045f5a4f9cf84f1f6c8e7fa96c1ccca)

観測誤差 **v***k* は、他の項と相関がないから、

         P    k    |    k      =    c  o  v    (  (    I    −    K    k        H    k      )  (      x      k      −          x  ^          k    |    k  −  1      )  )  +    c  o  v    (    K    k          v      k      )      {\displaystyle P_{k|k}=\mathrm {cov} ((\mathrm {I} -K_{k}H_{k})({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k-1}))+\mathrm {cov} (K_{k}{\boldsymbol {v}}_{k})}  [72a045ec3b6ad68616a2f172ca1c30487d742d43](../_resources/72a045ec3b6ad68616a2f172ca1c30487d742d43)

となり、さらに変形

         P    k    |    k      =  (    I    −    K    k        H    k      )    c  o  v    (      x      k      −          x  ^          k    |    k  −  1      )  (    I    −    K    k        H    k        )      T        +    K    k        c  o  v    (      v      k      )    K    k        T            {\displaystyle P_{k|k}=(\mathrm {I} -K_{k}H_{k})\mathrm {cov} ({\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k-1})(\mathrm {I} -K_{k}H_{k})^{\textrm {T}}+K_{k}\mathrm {cov} ({\boldsymbol {v}}_{k})K_{k}^{\textrm {T}}}  [56ec87b81e081e06b06bf7b7c36cda77fe8d32b4](../_resources/56ec87b81e081e06b06bf7b7c36cda77fe8d32b4)

して、前述の不偏量 *P**k*|*k*-1 と、観測誤差共分散 *R**k* を用いて、

         P    k    |    k      =  (    I    −    K    k        H    k      )    P    k    |    k  −  1      (    I    −    K    k        H    k        )      T        +    K    k        R    k        K    k        T            {\displaystyle P_{k|k}=(\mathrm {I} -K_{k}H_{k})P_{k|k-1}(\mathrm {I} -K_{k}H_{k})^{\textrm {T}}+K_{k}R_{k}K_{k}^{\textrm {T}}}  [37511f8328a88be45c62e5dab938687214e1ae32](../_resources/37511f8328a88be45c62e5dab938687214e1ae32)

を得る。この式は、 *K**k* がどんな値であっても成立するが、 *K**k* が、最適カルマンゲインの時は、以下のようにさらに簡略化される。

### カルマンゲインの導出[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=11)]

カルマンフィルターは最小平均二乗誤差(minimum mean-square error: MMSE)推定値を与える。すなわち、**更新**後の誤差の推定値は

           x      k      −          x  ^          k    |    k          {\displaystyle {\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k}}  [0e717b7f06aa57b67be18fc88c5c11f53f447b05](../_resources/0e717b7f06aa57b67be18fc88c5c11f53f447b05)

であり、このベクトルの大きさの自乗の期待値           E    (    |        x      k      −          x  ^          k    |    k          |      2      )      {\displaystyle \mathrm {E} (|{\boldsymbol {x}}_{k}-{\hat {\boldsymbol {x}}}_{k|k}|^{2})}  [1a00b7cc2fa61e31e0c2fb8c487582d8a1966985](../_resources/1a00b7cc2fa61e31e0c2fb8c487582d8a1966985) を最小にするような推定値を与える。これは、**更新**後の共分散 *P**k*|*k* の[トレース](https://ja.wikipedia.org/wiki/%E8%B7%A1_(%E7%B7%9A%E5%9E%8B%E4%BB%A3%E6%95%B0%E5%AD%A6))を最小とすることと同じである。上の式を展開して、

|     |     |
| --- | --- |
|          P    k    \|    k          {\displaystyle P_{k\|k}}  [bb08c9a7c93fbe8c27e4c9b6be42791361acb4a4](../_resources/bb08c9a7c93fbe8c27e4c9b6be42791361acb4a4) |        =    P    k    \|    k  −  1      −    K    k        H    k        P    k    \|    k  −  1      −    P    k    \|    k  −  1        H    k        T          K    k        T        +    K    k      (    H    k        P    k    \|    k  −  1        H    k        T        +    R    k      )    K    k        T            {\displaystyle =P_{k\|k-1}-K_{k}H_{k}P_{k\|k-1}-P_{k\|k-1}H_{k}^{\textrm {T}}K_{k}^{\textrm {T}}+K_{k}(H_{k}P_{k\|k-1}H_{k}^{\textrm {T}}+R_{k})K_{k}^{\textrm {T}}}  [f6f738e494affa3d7b04fac74cd06f8137143a90](../_resources/f6f738e494affa3d7b04fac74cd06f8137143a90) |
|     |        =    P    k    \|    k  −  1      −    K    k        H    k        P    k    \|    k  −  1      −    P    k    \|    k  −  1        H    k        T          K    k        T        +    K    k        S    k        K    k        T            {\displaystyle =P_{k\|k-1}-K_{k}H_{k}P_{k\|k-1}-P_{k\|k-1}H_{k}^{\textrm {T}}K_{k}^{\textrm {T}}+K_{k}S_{k}K_{k}^{\textrm {T}}}  [d2ef93bede4e40e3ca225c6ac6bd0d626caf9838](../_resources/d2ef93bede4e40e3ca225c6ac6bd0d626caf9838) |

MMSE を導くゲインは、*P**k*|*k*のトレースを最小にするから、 必要条件として、*K**k*による行列微分は下記が成立しなければならない。

             ∂    t  r    (    P    k    |    k      )      ∂    K    k            =  −  2  (    H    k        P    k    |    k  −  1        )      T        +  2    K    k        S    k      =  0      {\displaystyle {\frac {\partial \;\mathrm {tr} (P_{k|k})}{\partial \;K_{k}}}=-2(H_{k}P_{k|k-1})^{\textrm {T}}+2K_{k}S_{k}=0}  [8191991ff5757526b1c4b37d77a2a787b537b965](../_resources/8191991ff5757526b1c4b37d77a2a787b537b965)

ここからカルマンゲイン *K**k* を求める。

         K    k        S    k      =  (    H    k        P    k    |    k  −  1        )      T        =    P    k    |    k  −  1        H    k        T            {\displaystyle K_{k}S_{k}=(H_{k}P_{k|k-1})^{\textrm {T}}=P_{k|k-1}H_{k}^{\textrm {T}}}  [8c3f7b1ded8bd96f61bcea46d91f3419dfe14471](../_resources/8c3f7b1ded8bd96f61bcea46d91f3419dfe14471)

         K    k      =    P    k    |    k  −  1        H    k        T          S    k      −  1          {\displaystyle K_{k}=P_{k|k-1}H_{k}^{\textrm {T}}S_{k}^{-1}}  [8d12a1c555fb9bfb0d90e965fbd765077f80af9b](../_resources/8d12a1c555fb9bfb0d90e965fbd765077f80af9b)

このゲインは、最適カルマンゲインと呼ばれる。

### 更新後の誤差共分散行列[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=12)]

カルマンゲインが上述の値を取るとき、更新後の誤差共分散行列は以下のように簡単になる。カルマンゲインの式の両辺の右から *S**k**K**k**T* をかけて、

         K    k        S    k        K    k        T        =    P    k    |    k  −  1        H    k        T          K    k        T            {\displaystyle K_{k}S_{k}K_{k}^{\textrm {T}}=P_{k|k-1}H_{k}^{\textrm {T}}K_{k}^{\textrm {T}}}  [d4e7dd114a37ef41edede7dc5d029da81be2e784](../_resources/d4e7dd114a37ef41edede7dc5d029da81be2e784)

更新後の誤差共分散行列を展開して、

         P    k    |    k      =    P    k    |    k  −  1      −    K    k        H    k        P    k    |    k  −  1      −    P    k    |    k  −  1        H    k        T          K    k        T        +    K    k        S    k        K    k        T            {\displaystyle P_{k|k}=P_{k|k-1}-K_{k}H_{k}P_{k|k-1}-P_{k|k-1}H_{k}^{\textrm {T}}K_{k}^{\textrm {T}}+K_{k}S_{k}K_{k}^{\textrm {T}}}  [8872ce6f0919f94f484ad86fda6c09ed8f8ec192](../_resources/8872ce6f0919f94f484ad86fda6c09ed8f8ec192)

右の二項は相殺するから、

         P    k    |    k      =    P    k    |    k  −  1      −    K    k        H    k        P    k    |    k  −  1      =  (    I    −    K    k        H    k      )    P    k    |    k  −  1          {\displaystyle P_{k|k}=P_{k|k-1}-K_{k}H_{k}P_{k|k-1}=(\mathrm {I} -K_{k}H_{k})P_{k|k-1}}  [6f2e4b06183f96aac9a191c0c9c4a5534af0387d](../_resources/6f2e4b06183f96aac9a191c0c9c4a5534af0387d).

計算量が少ないため、ほとんどの場合この式が用いられるが、カルマンゲインが上記の最適解の時にしか適用できないことに注意。計算上の桁落ちなどで[解の安定性](https://ja.wikipedia.org/wiki/%E6%95%B0%E5%80%A4%E7%9A%84%E5%AE%89%E5%AE%9A%E6%80%A7)が悪いときやなんらかの理由で敢えて最適でない解を用いるときは使えない。

## 再帰ベイズ推定との関係[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=13)]

真の状態は一次[マルコフ過程](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%82%B3%E3%83%95%E9%81%8E%E7%A8%8B)であると仮定され、観測値は隠れマルコフモデルからの観測された状態である。[[3]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-3) 仮定より、ひとつ前の時刻の状態にのみ依存して

       p  (      x      k        |        x      0      ,  …  ,      x      k  −  1      )  =  p  (      x      k        |        x      k  −  1      )  .      {\displaystyle p({\boldsymbol {x}}_{k}|{\boldsymbol {x}}_{0},\dots ,{\boldsymbol {x}}_{k-1})=p({\boldsymbol {x}}_{k}|{\boldsymbol {x}}_{k-1}).}  [c36d0c4b6fb1cb33a2653fcfc7a57e001486565f](../_resources/c36d0c4b6fb1cb33a2653fcfc7a57e001486565f)

同様に、時刻 *k* での観測値は現在の状態にだけ依存して、過去には依存しないものとする。

       p  (      z      k        |        x      0      ,  …  ,      x      k      )  =  p  (      z      k        |        x      k      )      {\displaystyle p({\boldsymbol {z}}_{k}|{\boldsymbol {x}}_{0},\dots ,{\boldsymbol {x}}_{k})=p({\boldsymbol {z}}_{k}|{\boldsymbol {x}}_{k})}  [c4bee5d3e7325913eb965f612425c6dcf5f4ecec](../_resources/c4bee5d3e7325913eb965f612425c6dcf5f4ecec)

これらの仮定を用いると、隠れマルコフモデルの観測が **z***1*, **z***2*,         …      {\displaystyle \ldots }  [3b8619532e44ee1ccae3ab03405a6885260d09ed](../_resources/3b8619532e44ee1ccae3ab03405a6885260d09ed-1)**z***k* と得られる確率は、

       p  (      x      0      ,  …  ,      x      k      ,      z      1      ,  …  ,      z      k      )  =  p  (      x      0      )    ∏    i  =  1      k      p  (      z      i        |        x      i      )  p  (      x      i        |        x      i  −  1      )      {\displaystyle p({\boldsymbol {x}}_{0},\dots ,{\boldsymbol {x}}_{k},{\boldsymbol {z}}_{1},\dots ,{\boldsymbol {z}}_{k})=p({\boldsymbol {x}}_{0})\prod _{i=1}^{k}p({\boldsymbol {z}}_{i}|{\boldsymbol {x}}_{i})p({\boldsymbol {x}}_{i}|{\boldsymbol {x}}_{i-1})}  [e0b14c5463886bbc98f65f8a69c49cb4b76e31b5](../_resources/e0b14c5463886bbc98f65f8a69c49cb4b76e31b5)

で、表される。
一方、カルマンフィルターで状態 **x** を求めるには現在の系の状態とそれまでの観測だけを用いる。

カルマンフィルターの*予測*と*更新*の手続きを、確率を使って表してみる。予測後の状態の確率分布は、時刻 *k* − 1 から時刻 *k* への変化に関する確率と、時刻 (*k* − 1) の状態の積になるから、

       p  (      x      k        |        Z      k  −  1      )  =  ∫  p  (      x      k        |        x      k  −  1      )  p  (      x      k  −  1        |        Z      k  −  1      )  d      x      k  −  1          {\displaystyle p({\boldsymbol {x}}_{k}|{\boldsymbol {Z}}_{k-1})=\int p({\boldsymbol {x}}_{k}|{\boldsymbol {x}}_{k-1})p({\boldsymbol {x}}_{k-1}|{\boldsymbol {Z}}_{k-1})\,d{\boldsymbol {x}}_{k-1}}  [4e621890c809e4b0a8d1cac2fbe7b4b5a50e8d0d](../_resources/4e621890c809e4b0a8d1cac2fbe7b4b5a50e8d0d)

時刻 *t* までの観測は

           Z      t      =    {        z      1      ,  …  ,      z      t        }        {\displaystyle {\boldsymbol {Z}}_{t}=\left\{{\boldsymbol {z}}_{1},\dots ,{\boldsymbol {z}}_{t}ight\}}  [95c65e6a867ebe90b47daccd6fd789ebc56cf35f](../_resources/95c65e6a867ebe90b47daccd6fd789ebc56cf35f)

である。

更新後の確率は観測の起こりやすさ（[尤度](https://ja.wikipedia.org/wiki/%E5%B0%A4%E5%BA%A6)）と予測された状態の積に比例するから

       p  (      x      k        |        Z      k      )  =        p  (      z      k        |        x      k      )  p  (      x      k        |        Z      k  −  1      )      p  (      z      k        |        Z      k  −  1      )            {\displaystyle p({\boldsymbol {x}}_{k}|{\boldsymbol {Z}}_{k})={\frac {p({\boldsymbol {z}}_{k}|{\boldsymbol {x}}_{k})p({\boldsymbol {x}}_{k}|{\boldsymbol {Z}}_{k-1})}{p({\boldsymbol {z}}_{k}|{\boldsymbol {Z}}_{k-1})}}}  [d9a5c83efbe0f0dbb85ee4f5c52b753c4a9cfe8d](../_resources/d9a5c83efbe0f0dbb85ee4f5c52b753c4a9cfe8d)

となる。分母の

       p  (      z      k        |        Z      k  −  1      )  =  ∫  p  (      z      k        |        x      k      )  p  (      x      k        |        Z      k  −  1      )  d      x      k          {\displaystyle p({\boldsymbol {z}}_{k}|{\boldsymbol {Z}}_{k-1})=\int p({\boldsymbol {z}}_{k}|{\boldsymbol {x}}_{k})p({\boldsymbol {x}}_{k}|{\boldsymbol {Z}}_{k-1})d{\boldsymbol {x}}_{k}}  [e1a12208a37c2e01614da495e5ddc9d7411ffaf0](../_resources/e1a12208a37c2e01614da495e5ddc9d7411ffaf0)

は、全確率を 1 にするための因子であまり重要ではない。
他の確率分布関数も

       p  (      x      k        |        x      k  −  1      )  =  N  (    F    k          x      k  −  1      ,    G    k        Q    k        G    k        T        )      {\displaystyle p({\boldsymbol {x}}_{k}|{\boldsymbol {x}}_{k-1})=N(F_{k}{\boldsymbol {x}}_{k-1},G_{k}Q_{k}G_{k}^{\textrm {T}})}  [359e9a353ae1a5d964174a601eded742a0e91dd4](../_resources/359e9a353ae1a5d964174a601eded742a0e91dd4)

       p  (      z      k        |        x      k      )  =  N  (    H    k          x      k      ,    R    k      )      {\displaystyle p({\boldsymbol {z}}_{k}|{\boldsymbol {x}}_{k})=N(H_{k}{\boldsymbol {x}}_{k},R_{k})}  [2dd75f85e59dbbfc1152796acdac012bc95eb7b8](../_resources/2dd75f85e59dbbfc1152796acdac012bc95eb7b8)

       p  (      x      k  −  1        |        Z      k  −  1      )  =  N  (          x  ^          k  −  1      ,    P    k  −  1      )      {\displaystyle p({\boldsymbol {x}}_{k-1}|{\boldsymbol {Z}}_{k-1})=N({\hat {\boldsymbol {x}}}_{k-1},P_{k-1})}  [4d7c813a204d6b3535aeb35824ea269e43f16eed](../_resources/4d7c813a204d6b3535aeb35824ea269e43f16eed)

と書ける。

## 情報フィルター[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=14)]

情報フィルターもしくは逆共分散フィルターにおいては、カルマンフィルターにおける推定された共分散と状態が、各々[フィッシャー情報行列](https://ja.wikipedia.org/w/index.php?title=%E3%83%95%E3%82%A3%E3%83%83%E3%82%B7%E3%83%A3%E3%83%BC%E6%83%85%E5%A0%B1%E8%A1%8C%E5%88%97&action=edit&redlink=1)と情報ベクトルに置き換わる。

         Y    k    |    k      ≜    P    k    |    k      −  1          {\displaystyle Y_{k|k}\triangleq P_{k|k}^{-1}}  [27cdbd81080133b2ab2d6974981d487084db1090](../_resources/27cdbd81080133b2ab2d6974981d487084db1090)

               y  ^          k    |    k      ≜    P    k    |    k      −  1              x  ^          k    |    k          {\displaystyle {\hat {\boldsymbol {y}}}_{k|k}\triangleq P_{k|k}^{-1}{\hat {\boldsymbol {x}}}_{k|k}}  [8d8b82dc1c9d6e388750e728978b6a47c5425c1b](../_resources/8d8b82dc1c9d6e388750e728978b6a47c5425c1b)

同様に、予測された共分散と状態は情報形式と等価になり、以下と定義する。

         Y    k    |    k  −  1      ≜    P    k    |    k  −  1      −  1          {\displaystyle Y_{k|k-1}\triangleq P_{k|k-1}^{-1}}  [47420faf764965fff93187e32270ac7c2495038a](../_resources/47420faf764965fff93187e32270ac7c2495038a)

               y  ^          k    |    k  −  1      ≜    P    k    |    k  −  1      −  1              x  ^          k    |    k  −  1          {\displaystyle {\hat {\boldsymbol {y}}}_{k|k-1}\triangleq P_{k|k-1}^{-1}{\hat {\boldsymbol {x}}}_{k|k-1}}  [d70f873f0f74ad1a909b794d80312f4eb2ef7637](../_resources/d70f873f0f74ad1a909b794d80312f4eb2ef7637)

観測共分散と観測ベクトルがあるとして、以下で定義する。

         I    k      ≜    H    k        T          R    k      −  1        H    k          {\displaystyle I_{k}\triangleq H_{k}^{\textrm {T}}R_{k}^{-1}H_{k}}  [9e2db216658e768f1d8c4f3ba8b9d669d873ef5b](../_resources/9e2db216658e768f1d8c4f3ba8b9d669d873ef5b)

           i      k      ≜    H    k        T          R    k      −  1          z      k          {\displaystyle {\boldsymbol {i}}_{k}\triangleq H_{k}^{\textrm {T}}R_{k}^{-1}{\boldsymbol {z}}_{k}}  [6ebb0e14cf5ef88b9419f8d3cfe4a694b4950753](../_resources/6ebb0e14cf5ef88b9419f8d3cfe4a694b4950753)

このとき、情報更新は簡便な和算となる。

         Y    k    |    k      =    Y    k    |    k  −  1      +    I    k          {\displaystyle Y_{k|k}=Y_{k|k-1}+I_{k}}  [a8840503507df8ce67441a2e321a7b30da52ad6b](../_resources/a8840503507df8ce67441a2e321a7b30da52ad6b)

               y  ^          k    |    k      =          y  ^          k    |    k  −  1      +      i      k          {\displaystyle {\hat {\boldsymbol {y}}}_{k|k}={\hat {\boldsymbol {y}}}_{k|k-1}+{\boldsymbol {i}}_{k}}  [4a9f60d7e116fed78429cec0068385380fa9c0d6](../_resources/4a9f60d7e116fed78429cec0068385380fa9c0d6)

情報フィルターの主たる優位性は、以下に示すように、N 個の観測値は各時間毎に、観測値の情報行列と情報ベクトルの和算でシンプルにフィルター処理される点である。

         Y    k    |    k      =    Y    k    |    k  −  1      +    ∑    j  =  1      N        I    k  ,  j          {\displaystyle Y_{k|k}=Y_{k|k-1}+\sum _{j=1}^{N}I_{k,j}}  [79803c224b7c88f176cfa607997294112bfab539](../_resources/79803c224b7c88f176cfa607997294112bfab539)

               y  ^          k    |    k      =          y  ^          k    |    k  −  1      +    ∑    j  =  1      N          i      k  ,  j          {\displaystyle {\hat {\boldsymbol {y}}}_{k|k}={\hat {\boldsymbol {y}}}_{k|k-1}+\sum _{j=1}^{N}{\boldsymbol {i}}_{k,j}}  [014af282728cad4715f172ea638132af8f4cf69a](../_resources/014af282728cad4715f172ea638132af8f4cf69a)

情報フィルターを予測するために、情報空間予測を用いることができる[[4]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-4)。

               Y  ~          k    |    k  −  1      =        F    k            −  T          Y    k  −  1    |    k  −  1        F    k      −  1          {\displaystyle {\tilde {Y}}_{k|k-1}={F_{k}}^{\mathrm {-T} }Y_{k-1|k-1}F_{k}^{-1}}  [19222518c403c06e7b348d8c2f9de7c8f8737dd7](../_resources/19222518c403c06e7b348d8c2f9de7c8f8737dd7)

         A    k      =      (      G    k        T                Y  ~          k    |    k  −  1        G    k      +    Q    k      −  1        )      −  1        G    k        T                Y  ~          k    |    k  −  1          {\displaystyle A_{k}=\left(G_{k}^{\textrm {T}}{\tilde {Y}}_{k|k-1}G_{k}+Q_{k}^{-1}ight)^{-1}G_{k}^{\textrm {T}}{\tilde {Y}}_{k|k-1}}  [9a138dca993c16911b113ee37cd65d8a22210eec](../_resources/9a138dca993c16911b113ee37cd65d8a22210eec)

         C    k      =    F    k      −  1        (      I    −    G    k        A    k        )        {\displaystyle C_{k}=F_{k}^{-1}\left(\mathrm {I} -G_{k}A_{k}ight)}  [277d79c9845b2002d2860d1a0dc677b0d8d0a7c5](../_resources/277d79c9845b2002d2860d1a0dc677b0d8d0a7c5)

         Y    k    |    k  −  1      =    C    k        T          Y    k  −  1    |    k  −  1        F    k      −  1      =    C    k        T          Y    k  −  1    |    k  −  1        C    k      +    A    k        T          Q    k      −  1        A    k          {\displaystyle Y_{k|k-1}=C_{k}^{\textrm {T}}Y_{k-1|k-1}F_{k}^{-1}=C_{k}^{\textrm {T}}Y_{k-1|k-1}C_{k}+A_{k}^{\textrm {T}}Q_{k}^{-1}A_{k}}  [c25ba1a44d9e9431a37b17f35e1ec9060fa3e569](../_resources/c25ba1a44d9e9431a37b17f35e1ec9060fa3e569)

               y  ^          k    |    k  −  1      =    C    k        T                y  ^          k  −  1    |    k  −  1      +    Y    k    |    k  −  1          u      k          {\displaystyle {\hat {\boldsymbol {y}}}_{k|k-1}=C_{k}^{\textrm {T}}{\hat {\boldsymbol {y}}}_{k-1|k-1}+Y_{k|k-1}{\boldsymbol {u}}_{k}}  [28465b9e5e9b7c424aaba044d894542a365aec52](../_resources/28465b9e5e9b7c424aaba044d894542a365aec52)

なお          Q    k      =  0      {\displaystyle Q_{k}=0}  [652bb8ac9ce9e818e7dbb51d464c2ebfd95fa55a](../_resources/652bb8ac9ce9e818e7dbb51d464c2ebfd95fa55a)であれば、          A    k      =  0      {\displaystyle A_{k}=0}  [c40415ec703d7c57cefe94414b9595e86e99d0c7](../_resources/c40415ec703d7c57cefe94414b9595e86e99d0c7)である。*F* は可逆（[正則](https://ja.wikipedia.org/wiki/%E6%AD%A3%E5%89%87)）の必要がある。 注意すべきは、もし *F*, *G*, *Q* が[時不変](https://ja.wikipedia.org/wiki/%E6%99%82%E4%B8%8D%E5%A4%89)(time invariant)ならば、それらの値は保存しておける点である。

## 固定区間スムーサー[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=15)]

固定区間スムーサー（fixed-interval smoother）は、スムーサー解                x  ^          k    |    n          {\displaystyle {\hat {\boldsymbol {x}}}_{k|n}}  [d8a1832f835fc10bc12b2731b9131fc6c279162f](../_resources/d8a1832f835fc10bc12b2731b9131fc6c279162f)および          P    k    |    n          {\displaystyle P_{k|n}}  [9c3e8ad5e940d89442995c8a26f6afd7ecaaec79](../_resources/9c3e8ad5e940d89442995c8a26f6afd7ecaaec79)（        k  =  1  ,  2  ,  …  ,  n      {\displaystyle k=1,\,2,\,\ldots ,\,n}  [215228dd593ff051de42aee10dcbb255f3f2429e](../_resources/215228dd593ff051de42aee10dcbb255f3f2429e)、        n      {\displaystyle n}  [a601995d55609f2d9f5e233e36fbe9ea26011b3b](../_resources/a601995d55609f2d9f5e233e36fbe9ea26011b3b-1)は固定値とする）を求める。

Rauch–Tung–Striebel[[5]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-5)の関係式（        k  ≤  l      {\displaystyle k\leq l}  [4a4ffd43a8fd3c65a742c3c6569a114a3b4e37b0](../_resources/4a4ffd43a8fd3c65a742c3c6569a114a3b4e37b0)）：

           t      k      ≜          x  ^          k    |    l      −    C    k              x  ^          k  +  1    |    l          {\displaystyle {\boldsymbol {t}}_{k}\triangleq {\hat {\boldsymbol {x}}}_{k|l}-C_{k}{\hat {\boldsymbol {x}}}_{k+1|l}}  [45c7c34ee9129dd9b8ea46cf9e084b4e1853e20e](../_resources/45c7c34ee9129dd9b8ea46cf9e084b4e1853e20e)

         T    k      ≜    P    k    |    l      −    C    k        P    k  +  1    |    l            C    k            T            {\displaystyle T_{k}\triangleq P_{k|l}-C_{k}P_{k+1|l}{C_{k}}^{\mathrm {T} }}  [ad0cfd3214d39ad2e5930ddb5632e53d3b1a352f](../_resources/ad0cfd3214d39ad2e5930ddb5632e53d3b1a352f)

         C    k      ≜    P    k    |    k            F    k  +  1            T              P    k  +  1    |    k          −  1          {\displaystyle C_{k}\triangleq P_{k|k}{F_{k+1}}^{\mathrm {T} }{P_{k+1|k}}^{-1}}  [e3de8ea5c4375adb6b1115c0d588d3ff5892a68c](../_resources/e3de8ea5c4375adb6b1115c0d588d3ff5892a68c)

において、            t      k          {\displaystyle {\boldsymbol {t}}_{k}}  [e0015a45f1e08d4ef78fb89281a8b5dfa4d041af](../_resources/e0015a45f1e08d4ef78fb89281a8b5dfa4d041af)、          T    k          {\displaystyle T_{k}}  [51cc852c6e446a4871f78e05492699a9525b9acb](../_resources/51cc852c6e446a4871f78e05492699a9525b9acb)の右式は        l      {\displaystyle l}  [829091f745070b9eb97a80244129025440a1cfac](../_resources/829091f745070b9eb97a80244129025440a1cfac)に依存しない。なお          C    k          {\displaystyle C_{k}}  [1a0887b56787ba96e79de2b9f5c6ff30aabad1c6](../_resources/1a0887b56787ba96e79de2b9f5c6ff30aabad1c6)は情報フィルターのそれに等しい。

これを用いて固定区間スムーサー解が求められる。すなわちフィルター計算で        k  =  l      {\displaystyle k=l}  [eeb15091c9c62ff5e79a40072e439bb54a4d9465](../_resources/eeb15091c9c62ff5e79a40072e439bb54a4d9465)における上記の値を求めておき、それらを用いて、

               x  ^          k    |    n      =    C    k              x  ^          k  +  1    |    n      +      t      k          {\displaystyle {\hat {\boldsymbol {x}}}_{k|n}=C_{k}{\hat {\boldsymbol {x}}}_{k+1|n}+{\boldsymbol {t}}_{k}}  [8cfde1dca10f4969ca0b9d34fcb651a518428c1c](../_resources/8cfde1dca10f4969ca0b9d34fcb651a518428c1c)

         P    k    |    n      =    C    k        P    k  +  1    |    n            C    k            T        +    T    k          {\displaystyle P_{k|n}=C_{k}P_{k+1|n}{C_{k}}^{\mathrm {T} }+T_{k}}  [6c408bac448e927bb469251af14b60a82ca48ff0](../_resources/6c408bac448e927bb469251af14b60a82ca48ff0)

を逆方向（backward）すなわち、*k*が減る方向に逐次計算しスムーサー解が求められる。ここで計算が丸め誤差を持っていても、          P    k    |    n          {\displaystyle P_{k|n}}  [9c3e8ad5e940d89442995c8a26f6afd7ecaaec79](../_resources/9c3e8ad5e940d89442995c8a26f6afd7ecaaec79)は必ず半正定値となる。

また、上記を変形すると、Bryson–Frazierの固定区間スムーサー[[6]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-bryson-6)と等価の式が得られる。すなわち、

           λ      k      =    C    k          λ      k  +  1      −    K    k          e      k          {\displaystyle {\boldsymbol {\lambda }}_{k}=C_{k}{\boldsymbol {\lambda }}_{k+1}-K_{k}{\boldsymbol {e}}_{k}}  [4dd37816ed5705c61d0452852517277e70c3add2](../_resources/4dd37816ed5705c61d0452852517277e70c3add2)

         Λ    k      =    C    k        Λ    k  +  1            C    k            T        +    K    k        S    k            K    k            T            {\displaystyle \Lambda _{k}=C_{k}\Lambda _{k+1}{C_{k}}^{\mathrm {T} }+K_{k}S_{k}{K_{k}}^{\mathrm {T} }}  [6664d2c760173e49b29f7a13a925f56f0d3713bc](../_resources/6664d2c760173e49b29f7a13a925f56f0d3713bc)

           λ      k      ≜          x  ^          k    |    k  −  1      −          x  ^          k    |    n          {\displaystyle {\boldsymbol {\lambda }}_{k}\triangleq {\hat {\boldsymbol {x}}}_{k|k-1}-{\hat {\boldsymbol {x}}}_{k|n}}  [e77a248ce9d32ded869c0d921a90472017edccc1](../_resources/e77a248ce9d32ded869c0d921a90472017edccc1)

         Λ    k      ≜    P    k    |    k  −  1      −    P    k    |    n          {\displaystyle \Lambda _{k}\triangleq P_{k|k-1}-P_{k|n}}  [f42b7e654ddede542e1d4b8eb8f1c8688c7f56ef](../_resources/f42b7e654ddede542e1d4b8eb8f1c8688c7f56ef)

           λ      n  +  1      =    0        {\displaystyle {\boldsymbol {\lambda }}_{n+1}={\boldsymbol {0}}}  [ac71da9886f20f1bb00275867fec764549294fc4](../_resources/ac71da9886f20f1bb00275867fec764549294fc4)

         Λ    n  +  1      =  0      {\displaystyle \Lambda _{n+1}=0}  [c72ff0663baee395a677b01eac1f57a5d353b3dd](../_resources/c72ff0663baee395a677b01eac1f57a5d353b3dd)

また、Biermanによって上記の変形式が得られている[[7]](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_note-bierman-7)。これは、              P    k  +  1    |    k          −  1          {\displaystyle {P_{k+1|k}}^{-1}}  [5640dc6091a8f0035421cd7786a0a4b2dacc239c](../_resources/5640dc6091a8f0035421cd7786a0a4b2dacc239c)という逆行列計算を必要とせずスムーサー解を得られる。すなわち、

               λ  ~          k      =          C  ~          k              λ  ~          k  +  1      −        H    k            T              S    k          −  1          e      k          {\displaystyle {\tilde {\boldsymbol {\lambda }}}_{k}={\tilde {C}}_{k}{\tilde {\boldsymbol {\lambda }}}_{k+1}-{H_{k}}^{\mathrm {T} }{S_{k}}^{-1}{\boldsymbol {e}}_{k}}  [8369d0a1276c82e9c44896b045086fab7e75c3e9](../_resources/8369d0a1276c82e9c44896b045086fab7e75c3e9)

               Λ  ~          k      =          C  ~          k              Λ  ~          k  +  1                  C  ~          k            T        +        H    k            T              S    k          −  1        H    k          {\displaystyle {\tilde {\Lambda }}_{k}={\tilde {C}}_{k}{\tilde {\Lambda }}_{k+1}{{\tilde {C}}_{k}}^{\mathrm {T} }+{H_{k}}^{\mathrm {T} }{S_{k}}^{-1}H_{k}}  [41883dad1a6f9c0f72bbeb02083589a8dfb0672f](../_resources/41883dad1a6f9c0f72bbeb02083589a8dfb0672f)

               C  ~          k      ≜      (      I    −    K    k        H    k        )        T              F    k  +  1            T            {\displaystyle {\tilde {C}}_{k}\triangleq \left(\mathrm {I} -K_{k}H_{k}ight)^{\mathrm {T} }{F_{k+1}}^{\mathrm {T} }}  [a1fe083035a404de8aa57a0a411f23d7083fbca6](../_resources/a1fe083035a404de8aa57a0a411f23d7083fbca6)

               λ  ~          k      ≜        P    k    |    k  −  1          −  1          λ      k          {\displaystyle {\tilde {\boldsymbol {\lambda }}}_{k}\triangleq {P_{k|k-1}}^{-1}{\boldsymbol {\lambda }}_{k}}  [16dc3798290022766835691fd6efcbd4ee2600be](../_resources/16dc3798290022766835691fd6efcbd4ee2600be)

               Λ  ~          k      ≜        P    k    |    k  −  1          −  1        Λ    k            P    k    |    k  −  1          −  1          {\displaystyle {\tilde {\Lambda }}_{k}\triangleq {P_{k|k-1}}^{-1}\Lambda _{k}{P_{k|k-1}}^{-1}}  [19dfb7b4caa8dab7e8bb88108efb5e3adcb4bec0](../_resources/19dfb7b4caa8dab7e8bb88108efb5e3adcb4bec0)

## 非線型カルマンフィルター[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=16)]

ここまでは線形の仮定が成り立つ系をとりあつかってきたが、実際の系の多くは非線型である。時間発展モデルも観測モデルもどちらも非線型になりうる。

### 拡張カルマンフィルター[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=17)]

ここでは時間発展モデル

           x      k      =  f  (      x      k  −  1      ,      u      k      ,      w      k      )      {\displaystyle {\boldsymbol {x}}_{k}=f({\boldsymbol {x}}_{k-1},{\boldsymbol {u}}_{k},{\boldsymbol {w}}_{k})}  [c179348fdcd41cf72996c09d9a827be71443cd55](../_resources/c179348fdcd41cf72996c09d9a827be71443cd55)

と、観測モデル

           z      k      =  h  (      x      k      ,      v      k      )      {\displaystyle {\boldsymbol {z}}_{k}=h({\boldsymbol {x}}_{k},{\boldsymbol {v}}_{k})}  [f63350c7f6ba7b53fb228cc31476909f1169c9f9](../_resources/f63350c7f6ba7b53fb228cc31476909f1169c9f9)

を考える。どちらも微分可能であれば線形である必要はない。関数 *f* は前の状態から推定値を与え、関数 *h* は観測値を与える。どちらの関数も直接共分散を求めることはできず、偏微分行列（[ヤコビアン](https://ja.wikipedia.org/wiki/%E3%83%A4%E3%82%B3%E3%83%93%E3%82%A2%E3%83%B3)）を用いる必要がある。

原理としては、非線型モデルを現在の推定値の回りで線形化する。そのためにそれぞれの時刻で、ヤコビアンを計算する。すなわち、
**予測**

               x  ^          k    |    k  −  1      =  f  (          x  ^          k  −  1    |    k  −  1      ,      u      k      ,  0  )      {\displaystyle {\hat {\boldsymbol {x}}}_{k|k-1}=f({\hat {\boldsymbol {x}}}_{k-1|k-1},{\boldsymbol {u}}_{k},0)}  [7973eb07234209c5b56e23858b6d4191302633d4](../_resources/7973eb07234209c5b56e23858b6d4191302633d4)

         P    k    |    k  −  1      =    F    k        P    k  −  1    |    k  −  1        F    k        T        +    G    k        Q    k        G    k        T            {\displaystyle P_{k|k-1}=F_{k}P_{k-1|k-1}F_{k}^{\textrm {T}}+G_{k}Q_{k}G_{k}^{\textrm {T}}}  [b366c80cbb40f3bc265b9bb9b536a813e80e0b09](../_resources/b366c80cbb40f3bc265b9bb9b536a813e80e0b09)

**更新**

           e      k      =      z      k      −  h  (          x  ^          k    |    k  −  1      ,  0  )      {\displaystyle {\boldsymbol {e}}_{k}={\boldsymbol {z}}_{k}-h({\hat {\boldsymbol {x}}}_{k|k-1},0)}  [754452633f228a8af43b6d36689b22d9efba6c5b](../_resources/754452633f228a8af43b6d36689b22d9efba6c5b)

         S    k      =    H    k        P    k    |    k  −  1        H    k        T        +    R    k          {\displaystyle S_{k}=H_{k}P_{k|k-1}H_{k}^{\textrm {T}}+R_{k}}  [0b7875e28ab9e1dd4a586a289b6134fdad8ad299](../_resources/0b7875e28ab9e1dd4a586a289b6134fdad8ad299)

         K    k      =    P    k    |    k  −  1        H    k        T          S    k      −  1          {\displaystyle K_{k}=P_{k|k-1}H_{k}^{\textrm {T}}S_{k}^{-1}}  [8d12a1c555fb9bfb0d90e965fbd765077f80af9b](../_resources/8d12a1c555fb9bfb0d90e965fbd765077f80af9b)

               x  ^          k    |    k      =          x  ^          k    |    k  −  1      +    K    k          e      k          {\displaystyle {\hat {\boldsymbol {x}}}_{k|k}={\hat {\boldsymbol {x}}}_{k|k-1}+K_{k}{\boldsymbol {e}}_{k}}  [be3451c9e6cb75d98e8917934bd502bf892310d7](../_resources/be3451c9e6cb75d98e8917934bd502bf892310d7)

         P    k    |    k      =  (    I    −    K    k        H    k      )    P    k    |    k  −  1          {\displaystyle P_{k|k}=(\mathrm {I} -K_{k}H_{k})P_{k|k-1}}  [0c09300a810409ffe7e637ae7a8378082c8c9050](../_resources/0c09300a810409ffe7e637ae7a8378082c8c9050)

出てくる行列は次のヤコビアンで定義される。

         F    k      =            ∂  f      ∂    x          |              x  ^          k  −  1    |    k  −  1      ,      u      k              {\displaystyle F_{k}=\left.{\frac {\partial f}{\partial {\boldsymbol {x}}}}ight\vert _{{\hat {\boldsymbol {x}}}_{k-1|k-1},{\boldsymbol {u}}_{k}}}  [4be9043276dea74d1c94b1247a18bcd032e3ab51](../_resources/4be9043276dea74d1c94b1247a18bcd032e3ab51)

         H    k      =            ∂  h      ∂    x          |              x  ^          k    |    k  −  1              {\displaystyle H_{k}=\left.{\frac {\partial h}{\partial {\boldsymbol {x}}}}ight\vert _{{\hat {\boldsymbol {x}}}_{k|k-1}}}  [fd5b4a262d372ac3bb2fdf9ba591f52d678d8009](../_resources/fd5b4a262d372ac3bb2fdf9ba591f52d678d8009)

### Unscented カルマンフィルター[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=18)]

非線型性の強いとき、拡張カルマンフィルターの性能は悪い。理由は平均値だけが非線型性に反映されるからである。**unscented カルマンフィルター**は、シグマ点とよばれる代表点を平均値の回りで用いて、推定値の共分散を計算する。こうすることにより、真の平均と共分散により近い値が得られることが[モンテカルロ法](https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%B3%E3%83%86%E3%82%AB%E3%83%AB%E3%83%AD%E6%B3%95)や、[テイラー展開](https://ja.wikipedia.org/wiki/%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC%E5%B1%95%E9%96%8B)によって示される。しかも解析的にヤコビアンを計算する必要がなくなるという利点がある。これは複雑なモデルでは有利である。

**予測**

拡張カルマンフィルタと同様、 unscented カルマンフィルターの予測手続きは更新手続きと別であり、更新手続きに線形カルマンフィルターや拡張カルマンフィルターを用いたり、その逆を行うことも可能である。推定値と共分散には、予測ノイズの平均と共分散項が加えられる。

           x      k  −  1    |    k  −  1      a      =  [          x  ^          k  −  1    |    k  −  1        T          E    (      w      k        T        )    ]      T            {\displaystyle {\boldsymbol {x}}_{k-1|k-1}^{a}=[{\hat {\boldsymbol {x}}}_{k-1|k-1}^{\textrm {T}}\quad \mathrm {E} ({\boldsymbol {w}}_{k}^{\textrm {T}})\ ]^{\textrm {T}}}  [346780e45f9457dab0b90801b54caa0e7e77f8b8](../_resources/346780e45f9457dab0b90801b54caa0e7e77f8b8)

         P    k  −  1    |    k  −  1      a      =      [          P    k  −  1    |    k  −  1          0          0        Q    k            ]          {\displaystyle P_{k-1|k-1}^{a}={\begin{bmatrix}&P_{k-1|k-1}&&0&\\&0&&Q_{k}&\end{bmatrix}}}  [cc703fccb2c4cc56b0a8e72e9bc47a95d28e03d2](../_resources/cc703fccb2c4cc56b0a8e72e9bc47a95d28e03d2)

シグマ点 2*L*+1 個は、付け加えた項から計算される。ここに *L* は付け加えた状態項の次元である。

|     |     |     |
| --- | --- | --- |
|          χ    k  −  1    \|    k  −  1      0          {\displaystyle \chi _{k-1\|k-1}^{0}}  [b6d9b266876c9f2d336b0767e26bf319dcd0badc](../_resources/b6d9b266876c9f2d336b0767e26bf319dcd0badc) |        =      x      k  −  1    \|    k  −  1      a          {\displaystyle ={\boldsymbol {x}}_{k-1\|k-1}^{a}}  [748f96607cfe5af4b20ffeba25235bb3caa3be23](../_resources/748f96607cfe5af4b20ffeba25235bb3caa3be23) |     |
|          χ    k  −  1    \|    k  −  1      i          {\displaystyle \chi _{k-1\|k-1}^{i}}  [317045f4a47cea33e0fd4252ef5fc55c87f6d8ad](../_resources/317045f4a47cea33e0fd4252ef5fc55c87f6d8ad) |        =      x      k  −  1    \|    k  −  1      a      +      (      (  L  +  λ  )    P    k  −  1    \|    k  −  1      a          )      i          {\displaystyle ={\boldsymbol {x}}_{k-1\|k-1}^{a}+\left({\sqrt {(L+\lambda )P_{k-1\|k-1}^{a}}}ight)_{i}}  [745b4378f247e2e13a3a45a631e5fdc41e7a2a9f](../_resources/745b4378f247e2e13a3a45a631e5fdc41e7a2a9f) |        i  =  1  ,  …  L      {\displaystyle i=1,\ldots L\,\!}  [831ff5f0bc1d43acf623e82a5fd09bd074411459](../_resources/831ff5f0bc1d43acf623e82a5fd09bd074411459) |
|          χ    k  −  1    \|    k  −  1      i          {\displaystyle \chi _{k-1\|k-1}^{i}}  [317045f4a47cea33e0fd4252ef5fc55c87f6d8ad](../_resources/317045f4a47cea33e0fd4252ef5fc55c87f6d8ad) |        =      x      k  −  1    \|    k  −  1      a      −      (      (  L  +  λ  )    P    k  −  1    \|    k  −  1      a          )      i  −  L          {\displaystyle ={\boldsymbol {x}}_{k-1\|k-1}^{a}-\left({\sqrt {(L+\lambda )P_{k-1\|k-1}^{a}}}ight)_{i-L}}  [bc0ae8cb6ece3fdbc5637a948e2bc98582d6fca3](../_resources/bc0ae8cb6ece3fdbc5637a948e2bc98582d6fca3) |        i  =  L  +  1  ,  …  2  L      {\displaystyle i=L+1,\dots {}2L\,\!}  [d35ed33c52ec7138a78e27e736b798ae46bd552c](../_resources/d35ed33c52ec7138a78e27e736b798ae46bd552c) |

シグマ点は関数 *f* で時間発展する。

         χ    k    |    k  −  1      i      =  f  (    χ    k  −  1    |    k  −  1      i      )  i  =  0..2  L      {\displaystyle \chi _{k|k-1}^{i}=f(\chi _{k-1|k-1}^{i})\quad i=0..2L}  [58132882447f61288857dfda8ec511fdfdc24a72](../_resources/58132882447f61288857dfda8ec511fdfdc24a72)

予測値と共分散は重み付き平均で求められる。

               x  ^          k    |    k  −  1      =    ∑    i  =  0      2  L        W    s      i        χ    k    |    k  −  1      i          {\displaystyle {\hat {\boldsymbol {x}}}_{k|k-1}=\sum _{i=0}^{2L}W_{s}^{i}\chi _{k|k-1}^{i}}  [50fc152a832ca99c9648626f0d98e69d278f4041](../_resources/50fc152a832ca99c9648626f0d98e69d278f4041)

         P    k    |    k  −  1      =    ∑    i  =  0      2  L        W    c      i      [    χ    k    |    k  −  1      i      −          x  ^          k    |    k  −  1      ]  [    χ    k    |    k  −  1      i      −          x  ^          k    |    k  −  1        ]      T            {\displaystyle P_{k|k-1}=\sum _{i=0}^{2L}W_{c}^{i}\ [\chi _{k|k-1}^{i}-{\hat {\boldsymbol {x}}}_{k|k-1}][\chi _{k|k-1}^{i}-{\hat {\boldsymbol {x}}}_{k|k-1}]^{\textrm {T}}}  [77cc5a25f0ab0ae6b93818779b5a3663b923b5cd](../_resources/77cc5a25f0ab0ae6b93818779b5a3663b923b5cd)

重みは以下のように与えられる。

         W    s      0      =      λ    L  +  λ            {\displaystyle W_{s}^{0}={\frac {\lambda }{L+\lambda }}}  [732d8ee31066f075affbf6201081553599beeeb9](../_resources/732d8ee31066f075affbf6201081553599beeeb9)

         W    c      0      =      λ    L  +  λ        +  (  1  −    α    2      +  β  )      {\displaystyle W_{c}^{0}={\frac {\lambda }{L+\lambda }}+(1-\alpha ^{2}+\beta )}  [fe7e884349c6b3d932704d021b954cc72d66ba7f](../_resources/fe7e884349c6b3d932704d021b954cc72d66ba7f)

         W    s      i      =    W    c      i      =      1    2  (  L  +  λ  )            {\displaystyle W_{s}^{i}=W_{c}^{i}={\frac {1}{2(L+\lambda )}}}  [4c67da71f0621bb4dc867a4524b738356a5b7cbf](../_resources/4c67da71f0621bb4dc867a4524b738356a5b7cbf)

       λ  =    α    2      (  L  +  κ  )  −  L      {\displaystyle \lambda =\alpha ^{2}(L+\kappa )-L\,\!}  [cbbd4b835789c37b71a12389839d799a107346bf](../_resources/cbbd4b835789c37b71a12389839d799a107346bf)

*α = 10-3*、*β = 2* 、*κ = 0* といった値がよく用いられる。
**更新**
予測値と共分散には、上と同様に観測値のノイズの平均と共分散項が加えられる。

           x      k    |    k  −  1      a      =  [          x  ^          k    |    k  −  1        T          E    (      v      k        T        )    ]      T            {\displaystyle {\boldsymbol {x}}_{k|k-1}^{a}=[{\hat {\boldsymbol {x}}}_{k|k-1}^{\textrm {T}}\quad \mathrm {E} ({\boldsymbol {v}}_{k}^{\textrm {T}})\ ]^{\textrm {T}}}  [5179e14dc0be39c1c58305da3ee9ad0bd8f7d0ab](../_resources/5179e14dc0be39c1c58305da3ee9ad0bd8f7d0ab)

         P    k    |    k  −  1      a      =      [          P    k    |    k  −  1          0          0        R    k            ]          {\displaystyle P_{k|k-1}^{a}={\begin{bmatrix}&P_{k|k-1}&&0&\\&0&&R_{k}&\end{bmatrix}}}  [a32ab0bf354de161f078c242cf6d583f4fd501cc](../_resources/a32ab0bf354de161f078c242cf6d583f4fd501cc)

シグマ点 2*L*+1 個は、付け加えた項から計算される。ここに *L* は付け加えた状態項の次元である。

|     |     |     |
| --- | --- | --- |
|          χ    k    \|    k  −  1      0          {\displaystyle \chi _{k\|k-1}^{0}}  [d6854e5a66624a7bf0456508b8df5010e77f9aaa](../_resources/d6854e5a66624a7bf0456508b8df5010e77f9aaa) |        =      x      k    \|    k  −  1      a          {\displaystyle ={\boldsymbol {x}}_{k\|k-1}^{a}}  [ed17f5250b099f18cb513976fb1d22742707fb94](../_resources/ed17f5250b099f18cb513976fb1d22742707fb94) |     |
|          χ    k    \|    k  −  1      i          {\displaystyle \chi _{k\|k-1}^{i}}  [5bd72e045cc76a14769c60ee13827600e9931c20](../_resources/5bd72e045cc76a14769c60ee13827600e9931c20) |        =      x      k    \|    k  −  1      a      +      (      (  L  +  λ  )    P    k    \|    k  −  1      a          )      i          {\displaystyle ={\boldsymbol {x}}_{k\|k-1}^{a}+\left({\sqrt {(L+\lambda )P_{k\|k-1}^{a}}}ight)_{i}}  [4ce0b25db9c18c5cb2d9002b5be042d62bafec13](../_resources/4ce0b25db9c18c5cb2d9002b5be042d62bafec13) |        i  =  1..  L      {\displaystyle i=1..L\,\!}  [1d21152d7fc2407e093c0b2b5ebe8fc258e69cbf](../_resources/1d21152d7fc2407e093c0b2b5ebe8fc258e69cbf) |
|          χ    k    \|    k  −  1      i          {\displaystyle \chi _{k\|k-1}^{i}}  [5bd72e045cc76a14769c60ee13827600e9931c20](../_resources/5bd72e045cc76a14769c60ee13827600e9931c20) |        =      x      k    \|    k  −  1      a      −      (      (  L  +  λ  )    P    k    \|    k  −  1      a          )      i  −  L          {\displaystyle ={\boldsymbol {x}}_{k\|k-1}^{a}-\left({\sqrt {(L+\lambda )P_{k\|k-1}^{a}}}ight)_{i-L}}  [513868ea9528985942a240439a2077ec94b52ca2](../_resources/513868ea9528985942a240439a2077ec94b52ca2) |        i  =  L  +  1  ,  …  2  L      {\displaystyle i=L+1,\dots {}2L\,\!}  [d35ed33c52ec7138a78e27e736b798ae46bd552c](../_resources/d35ed33c52ec7138a78e27e736b798ae46bd552c) |

もし、予測手続きも unscented カルマンフィルターで行われていたならば、以下のような変形も可能である。

         χ    k    |    k  −  1      :=  [    χ    k    |    k  −  1        E    (      v      k        T        )    ]      T        ±      (  L  +  λ  )    R    k      a              {\displaystyle \chi _{k|k-1}:=[\chi _{k|k-1}\quad \mathrm {E} ({\boldsymbol {v}}_{k}^{\textrm {T}})\ ]^{\textrm {T}}\pm {\sqrt {(L+\lambda )R_{k}^{a}}}}  [04e2ad0af2d933805d24b890b5856579959339ea](../_resources/04e2ad0af2d933805d24b890b5856579959339ea)

ここに、

         R    k      a      =      [        0      0          0        R    k            ]          {\displaystyle R_{k}^{a}={\begin{bmatrix}&0&&0&\\&0&&R_{k}&\end{bmatrix}}}  [35f33e05749dc8cba12839fe9d1ef4a6b66c3469](../_resources/35f33e05749dc8cba12839fe9d1ef4a6b66c3469)

である。シグマ点は関数 *h* で観測値に変換される。

         γ    k      i      =  h  (    χ    k    |    k  −  1      i      )  i  =  0..2  L      {\displaystyle \gamma _{k}^{i}=h(\chi _{k|k-1}^{i})\quad i=0..2L}  [40109be4ac571a17fd46a6151f211cf075f9a321](../_resources/40109be4ac571a17fd46a6151f211cf075f9a321)

重み付き平均で、観測値とその共分散を推定する。

               z  ^          k      =    ∑    i  =  0      2  L        W    s      i        γ    k      i          {\displaystyle {\hat {\boldsymbol {z}}}_{k}=\sum _{i=0}^{2L}W_{s}^{i}\gamma _{k}^{i}}  [ddcad9a83a1ce836d38fac59640d8efddfa8f7c7](../_resources/ddcad9a83a1ce836d38fac59640d8efddfa8f7c7)

         P      z    k        z    k          =    ∑    i  =  0      2  L        W    c      i      [    γ    k      i      −          z  ^          k      ]  [    γ    k      i      −          z  ^          k        ]      T            {\displaystyle P_{z_{k}z_{k}}=\sum _{i=0}^{2L}W_{c}^{i}\ [\gamma _{k}^{i}-{\hat {\boldsymbol {z}}}_{k}][\gamma _{k}^{i}-{\hat {\boldsymbol {z}}}_{k}]^{\textrm {T}}}  [c1f077892651304ac4cf3bb16cbadd1e1e07b3ee](../_resources/c1f077892651304ac4cf3bb16cbadd1e1e07b3ee)

推定値と観測値の相関行列

         P      x    k        z    k          =    ∑    i  =  0      2  L        W    c      i      [    χ    k    |    k  −  1      i      −          x  ^          k    |    k  −  1      ]  [    γ    k      i      −          z  ^          k        ]      T            {\displaystyle P_{x_{k}z_{k}}=\sum _{i=0}^{2L}W_{c}^{i}\ [\chi _{k|k-1}^{i}-{\hat {\boldsymbol {x}}}_{k|k-1}][\gamma _{k}^{i}-{\hat {\boldsymbol {z}}}_{k}]^{\textrm {T}}}  [d0a16fb2593b3b99f165d1601dc35c1fa5d4c45e](../_resources/d0a16fb2593b3b99f165d1601dc35c1fa5d4c45e)

を用いて unscented カルマンゲイン

         K    k      =    P      x    k        z    k            P      z    k        z    k          −  1          {\displaystyle K_{k}=P_{x_{k}z_{k}}P_{z_{k}z_{k}}^{-1}}  [3c37d67d8b3972626452f863c4c99d6e372bd8c0](../_resources/3c37d67d8b3972626452f863c4c99d6e372bd8c0)

を計算する。以下は線形の場合と同様である。

               x  ^          k    |    k      =          x  ^          k    |    k  −  1      +    K    k      (      z      k      −          z  ^          k      )      {\displaystyle {\hat {\boldsymbol {x}}}_{k|k}={\hat {\boldsymbol {x}}}_{k|k-1}+K_{k}({\boldsymbol {z}}_{k}-{\hat {\boldsymbol {z}}}_{k})}  [61c7f8f341895128bb847470f05d5d12ed31c0bf](../_resources/61c7f8f341895128bb847470f05d5d12ed31c0bf)

         P    k    |    k      =    P    k    |    k  −  1      −    K    k        P      z    k        z    k            K    k        T            {\displaystyle P_{k|k}=P_{k|k-1}-K_{k}P_{z_{k}z_{k}}K_{k}^{\textrm {T}}}  [806acd7532cc27a7da3daa3bc56afaecdbb0dbb1](../_resources/806acd7532cc27a7da3daa3bc56afaecdbb0dbb1)

## 応用例[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=19)]

## 関連項目[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=20)]

## 脚注[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC&action=edit&section=21)]

1. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-1)**  [Steffen L. Lauritzen](https://ja.wikipedia.org/w/index.php?title=Steffen_L._Lauritzen&action=edit&redlink=1), *[Thiele: Pioneer in Statistics](http://www.oup.com/uk/catalogue/?ci=9780198509721)*, [Oxford University Press](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%83%E3%82%AF%E3%82%B9%E3%83%95%E3%82%A9%E3%83%BC%E3%83%89%E5%A4%A7%E5%AD%A6%E5%87%BA%E7%89%88%E5%B1%80), 2002. [ISBN 0-19-850972-3](https://ja.wikipedia.org/wiki/%E7%89%B9%E5%88%A5:%E6%96%87%E7%8C%AE%E8%B3%87%E6%96%99/0198509723).

2. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-2)** 表現式として、            x      k  +  1      =    F    k          x      k      +      u      k      +    G    k          w      k          {\displaystyle {\boldsymbol {x}}_{k+1}=F_{k}{\boldsymbol {x}}_{k}+{\boldsymbol {u}}_{k}+G_{k}{\boldsymbol {w}}_{k}}  [374b97e77b05174c684ee3b728cb18cb28ec0acf](../_resources/374b97e77b05174c684ee3b728cb18cb28ec0acf)の形が用いられることも多い。

3. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-3)**  [C. Johan Masreliez](https://ja.wikipedia.org/wiki/%E3%83%A8%E3%83%BC%E3%83%8F%E3%83%B3%E3%83%BB%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC), R D Martin (1977); [*Robust Bayesian estimation for the linear model and robustifying the Kalman filter*](http://ieeexplore.ieee.org/xpl/freeabs_all.jsp?arnumber=1101538), IEEE Trans. Automatic Control

4. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-4)** なお、          A      −  T        =      (    A    −  1      )        T            {\displaystyle A^{\mathrm {-T} }=\left(A^{-1}ight)^{\textrm {T}}}  [d00e00ded2caf9499bc51109045fa4f2ae861cca](../_resources/d00e00ded2caf9499bc51109045fa4f2ae861cca)

5. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-5)**  Rauch, H.E.; Tung, F.; Striebel, C. T. (August 1965). [“Maximum likelihood estimates of linear dynamic systems”](http://pdf.aiaa.org/getfile.cfm?urlX=7%3CWIG7D%2FQKU%3E6B5%3AKF2Z%5CD%3A%2B82%2A%40%24%5E%3F%40%20%0A&urla=%25%2ARL%2F%220L%20%0A&urlb=%21%2A%20%20%20%0A&urlc=%21%2A0%20%20%0A&urld=%21%2A0%20%20%0A&urle=%27%2BB%2C%27%22%20%22KT0%20%20%0A). *AIAA J*  **3** (8): 1445–1450. [doi](https://ja.wikipedia.org/wiki/%E3%83%87%E3%82%B8%E3%82%BF%E3%83%AB%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E8%AD%98%E5%88%A5%E5%AD%90):[10.2514/3.3166](http://dx.doi.org/10.2514%2F3.3166). http://pdf.aiaa.org/getfile.cfm?urlX=7%3CWIG7D%2FQKU%3E6B5%3AKF2Z%5CD%3A%2B82%2A%40%24%5E%3F%40%20%0A&urla=%25%2ARL%2F%220L%20%0A&urlb=%21%2A%20%20%20%0A&urlc=%21%2A0%20%20%0A&urld=%21%2A0%20%20%0A&urle=%27%2BB%2C%27%22%20%22KT0%20%20%0A.

6. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-bryson_6-0)**  Bryson, A. E.; Frazier, M. (1963). *Smoothing for linear and nonlinear systems*. pp. 353-364.

7. **[^](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC#cite_ref-bierman_7-0)**  Bierman, G.J. (1973). “Fixed interval smoothing with discrete measurements”. *International Journal of Control*  **8**: 65-75.

Measure
Measure