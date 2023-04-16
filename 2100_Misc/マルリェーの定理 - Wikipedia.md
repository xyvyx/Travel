---
title: マルリェーの定理 - Wikipedia
updated: 2018-04-21 00:50:46Z
created: 2018-04-21 00:50:46Z
source: >-
  https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86
tags:
  - null
---

# マルリェーの定理

移動先:[案内](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#mw-head)、[検索](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#p-search)

**マルリェーの定理**（マルリェーのていり、Masreliez's theorem）は、[カルマンフィルター](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%AB%E3%83%9E%E3%83%B3%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%83%BC)の様に、[誤差](https://ja.wikipedia.org/wiki/%E8%AA%A4%E5%B7%AE)のある[観測](https://ja.wikipedia.org/wiki/%E8%A6%B3%E6%B8%AC)値を用いて、ある[動的システム](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)の状態を推定あるいは制御するための、[無限インパルス応答](https://ja.wikipedia.org/wiki/%E7%84%A1%E9%99%90%E3%82%A4%E3%83%B3%E3%83%91%E3%83%AB%E3%82%B9%E5%BF%9C%E7%AD%94)[定理](https://ja.wikipedia.org/wiki/%E5%AE%9A%E7%90%86)の一種である。この[頑健な推定関数](https://ja.wikipedia.org/wiki/%E6%8E%A8%E5%AE%9A%E9%87%8F#%E9%A0%91%E5%81%A5%E6%80%A7)は、1975年に[ヨーハン・マルリェー](https://ja.wikipedia.org/wiki/%E3%83%A8%E3%83%BC%E3%83%8F%E3%83%B3%E3%83%BB%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC)によって提唱された[[1]](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_note-1)。マルリェーの定理は、 離散的な誤差のある観測から、刻一刻と変化する量（例えばある物体の位置と速度）を推定するために用いられる。

## 歴史[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86&action=edit&section=1)]

1972年マルリェーは[博士](https://ja.wikipedia.org/wiki/%E5%8D%9A%E5%A3%AB)[論文](https://ja.wikipedia.org/wiki/%E8%AB%96%E6%96%87)で"[ロバスト](https://ja.wikipedia.org/wiki/%E3%83%AD%E3%83%90%E3%82%B9%E3%83%88%E3%83%8D%E3%82%B9) な推定"を取り上げた。また、[頑健な](https://ja.wikipedia.org/wiki/%E9%A0%91%E5%81%A5%E6%80%A7)[平均値](https://ja.wikipedia.org/wiki/%E5%B9%B3%E5%9D%87%E5%80%A4)の種類については、"[推定関数](https://ja.wikipedia.org/wiki/%E6%8E%A8%E5%AE%9A%E9%87%8F)"を発案した[[2]](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_note-2)。"[推定関数](https://ja.wikipedia.org/wiki/%E6%8E%A8%E5%AE%9A%E9%87%8F)"は、[分布](https://ja.wikipedia.org/wiki/%E5%88%86%E5%B8%83)が普遍的に左右対称の[確率分布](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87%E5%88%86%E5%B8%83)で最大[分散](https://ja.wikipedia.org/wiki/%E5%88%86%E6%95%A3_(%E7%A2%BA%E7%8E%87%E8%AB%96))であることの確実性と、さらにその他での分散の仕方には関係なく、それぞれの既知の"テール"[確率](https://ja.wikipedia.org/wiki/%E7%A2%BA%E7%8E%87)の割合があることを示している。その後、彼はこの結果からロバトス性のカルマン型[再帰](https://ja.wikipedia.org/wiki/%E5%86%8D%E5%B8%B0)フィルタ（1975年）を作りだした[[3]](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_note-3)。

## 応用例[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86&action=edit&section=2)]

定理はそれ以来、いくつかの用途で応用されている[[4]](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_note-4)。例えば、非[ガウス](https://ja.wikipedia.org/wiki/%E6%AD%A3%E8%A6%8F%E5%88%86%E5%B8%83)[観測](https://ja.wikipedia.org/wiki/%E8%A6%B3%E6%B8%AC)の状況で条件付き平均精度を推定するために用いられる[[5]](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_note-5)。実用例では、[レーダー](https://ja.wikipedia.org/wiki/%E3%83%AC%E3%83%BC%E3%83%80%E3%83%BC)や[コンピュータビジョン](https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%93%E3%82%B8%E3%83%A7%E3%83%B3)など、工学分野で広く用いられる。例えば、[カーナビゲーション](https://ja.wikipedia.org/wiki/%E3%82%AB%E3%83%BC%E3%83%8A%E3%83%93%E3%82%B2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)では、機器内蔵の[加速度計](https://ja.wikipedia.org/wiki/%E5%8A%A0%E9%80%9F%E5%BA%A6%E8%A8%88)や[人工衛星](https://ja.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E8%A1%9B%E6%98%9F)からの誤差のある情報を統合して、時々刻々変化する[自動車](https://ja.wikipedia.org/wiki/%E8%87%AA%E5%8B%95%E8%BB%8A)の位置を推定するのに応用されている。カルマンフィルターは、目標物の時間変化を支配する法則を活用して、目標物の位置を現在（フィルター）、未来（予測）、過去（内挿あるいは平滑化）に推定することができる。他の応用例として、以下のものが挙げられる。

## 関連項目[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86&action=edit&section=3)]

## 出典・注釈[[編集](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86&action=edit&section=4)]

1. **[^](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_ref-1)** T. Cipra & A. Rubio; [*Kalman filter with a non-linear non-Gaussian observation relation*](http://www.springerlink.com/content/k638271765473144/), Springer (1991).

2. **[^](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_ref-2)** Masreliez, C. J.; *Robust recursive estimation and filtering*, Ph.D. dissertation, [University of Washington](https://ja.wikipedia.org/wiki/%E3%83%AF%E3%82%B7%E3%83%B3%E3%83%88%E3%83%B3%E5%A4%A7%E5%AD%A6_(%E3%83%AF%E3%82%B7%E3%83%B3%E3%83%88%E3%83%B3%E5%B7%9E)), [Seattle](https://ja.wikipedia.org/wiki/Seattle), 1972.

3. **[^](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_ref-3)** Masreliez, C. J. *Approximate non-Gaussian filtering with linear state and observation relations* , IEEE Trans. Auto. Control (1975), 20, ページ 107—110.

4. **[^](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_ref-4)**  [Academic Search](http://academic.research.microsoft.com/Paper/1578140.aspx), 50 関連する[参考文献](https://ja.wikipedia.org/wiki/%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE)。

5. **[^](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_ref-5)** Mehmet Ertu rul Çelebi and Ludwik Kurz; *Robust locally optimal filters: Kalman and Bayesian estimation theory*, Information Sciences Vol 92, Issues 1-4, July 1996, ページ1-32 (1996).

6. **[^](https://ja.wikipedia.org/wiki/%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86#cite_ref-6)** Henri Pesonen; *[Robust estimation techniques for GNSS positioning](http://math.tut.fi/posgroup/pesonen_nav07a.pdf)*, NAV07-The Navigation Conference and Exhibition (2007), London.

- R.D. Martin & C.J. Masreliez, *Robust estimation via stochastic approximation*. IEEE Trans. Inform. Theory, 21(263—271), (1975).

|     |     |
| --- | --- |
|     | この節の[加筆](https://ja.wikipedia.org/w/index.php?title=%E3%83%9E%E3%83%AB%E3%83%AA%E3%82%A7%E3%83%BC%E3%81%AE%E5%AE%9A%E7%90%86&action=edit)が望まれています。 |

Measure
Measure