---
created: 2024-02-09T20:54:14 (UTC +09:00)
tags: [トップニュース,専門・技術サービス業,生成AI事例,ロボット・AI,社会とIT,くわしく]
source: https://www.itmedia.co.jp/news/articles/2402/08/news138.html
author: 松浦立樹
---

# 採用業務は“社内ChatGPT”で効率化できるか？　SIerが実証実験　「年間400時間の工数削減となる試算」 - ITmedia NEWS

> ## Excerpt
> SIerのトランスコスモス・デジタル・テクノロジーは、大規模言語モデル「GPT-3.5 Turbo」を利用した採用業務に関する実証実験の結果を発表した。約1カ月半の間運用したところ、年間で約400時間の工数削減ができる試算と結論付けた。

---
　SIerのトランスコスモス・デジタル・テクノロジー（東京都千代田区、以下TCDT）は2月7日、生成AIを使った採用業務に関する実証実験の結果を発表した。同社の中途採用にて、大規模言語モデル「GPT-3.5 Turbo」を利用した採用管理システムを構築。約1カ月半の間運用したところ、作業時間の削減を確認できたという。

[![](https://image.itmedia.co.jp/news/articles/2402/08/tm1636144_02081_1_w490.jpg)](https://image.itmedia.co.jp/l/im/news/articles/2402/08/l_tm1636144_02081_1_w490.jpg) <small>採用業務は“社内ChatGPT”で効率化できるか？</small>

　TCDTでは複数の職種で中途採用を行っていたが、書類の記載形式が応募者ごとに異なる点や、募集職種ごとに確認したいスキルが異なる点などが影響し、書類選考に多くの時間を割いていたという。そこで生成AIを使い、作業時間を削減できるか検証するべく実証実験を行った。

　従来の採用フローは「応募受付」「応募書類内容の確認・採否」「結果の通知」という順序で行っていた。今回の実験では「応募書類内容の確認・採否」を「AIを使った応募書類要約」と「人の手による応募書類の確認・採否」の2つのフローに分けた。

[![](https://image.itmedia.co.jp/news/articles/2402/08/tm1636144_02081_2_w490.jpg)](https://image.itmedia.co.jp/l/im/news/articles/2402/08/l_tm1636144_02081_2_w490.jpg) <small>AI利用前・後の採用フロー</small>

　実証実験のシステムは、大規模言語モデル「GPT-3.5」などのAPIを米Microsoftのクラウドで使える「Azure OpenAI Service」を使って構築。応募者が登録した履歴書などのデータを自動取得し、Azure上で構築したアプリで加工してテキスト化した後、GPT-3.5 Turboへ入力して要約する──というシステムを作った。その後、人の手で要約内容と応募内容を評価し、その評価内容をRPAで採用管理システムに自動入力させた。

[![](https://image.itmedia.co.jp/news/articles/2402/08/tm1636144_02081_3_w490.jpg)](https://image.itmedia.co.jp/l/im/news/articles/2402/08/l_tm1636144_02081_3_w490.jpg) <small>実証実験で使ったシステムの概要図</small>

　実証実験の期間は2023年11月6日～12月20日で、101件の応募書類で実験を行った。その結果「フォーマットが異なる職務経歴書を担当者が読み込む時間」「RPAを活用した、採用管理システムに反映する作業時間」の2つを削減でき、年間で約400時間分の工数削減ができる試算と結論付けたという。

### 採用業務でのAI利用の利点と課題

　TCDTの採用担当者からは「キャリア採用において、職務経歴書のフォーマットが応募者の方によって異なっており、また当社の場合は、エンジニアといってもサービスによって求めるスキルや経験が異なるためスキルの確認という点では、時間削減となりとても有効と感じている」などの声が上がっているという。

[![](https://image.itmedia.co.jp/news/articles/2402/08/tm1636144_02081_4_w490.jpg)](https://image.itmedia.co.jp/l/im/news/articles/2402/08/l_tm1636144_02081_4_w490.jpg) <small>応募書類要約の例</small>

　今回使ったプロンプトについても知見が得られたとしている。例えば「資格やスキル、経験年数など定量的なものについては、人とAIの判断は一致する」「定性的な内容については、一致率は下がる」「応募してきたものと異なるポジションでの選考はできない（複数ポジションの選考ができない）」などの傾向が見られたという。ただしどんなプロンプトを使ったかについては公開していない。

[![](https://image.itmedia.co.jp/news/articles/2402/08/tm1636144_02081_5_w490.jpg)](https://image.itmedia.co.jp/l/im/news/articles/2402/08/l_tm1636144_02081_5_w490.jpg) <small>人とAIによる判断の一致率と職種の関係</small>

　一方、課題も浮き彫りになったと同社。例えば、長文すぎる職務経歴書を要約する際には一度に処理できる文字数（最大トークン数）を超えて処理が失敗する場合があった。また、ハルシネーション（AIが根拠のない文章を生成すること）が生じて精度が下がるケースや、PDFを単純にテキスト化しただけのデータを入力しても、精度の低い結果が返ってくることもあったという。

　「応募者によって異なるさまざまなレイアウトの職務経歴書のPDFを可能な限り正規化しつつ、かつGPTの最大トークン数の制限を超えないようにできる限りオリジナルの情報を保持しながら内容を圧縮する処理を構築することに苦労した。現時点でも精度よく動いているが、これらのテキスト処理の精度をさらに高めることが今後の課題だ」（TCDT）

　TCDTでは今後も採用業務に生成AIを利用するのか。同社は「実験を重ね、一定の水準が担保できることが確認できれば、一部の範囲での利用を検討したい」と回答。一方で「ただ人事選考は、人の判断なしでは決定できるものではないので、定量的な箇所でAIを活用し業務効率化を図っていく予定」とした。

**深津貴之氏 × サイバーエージェントが語る生成AIの活用方法**

　　AIの業務利用やLLMの自社開発などが加速する一方で、すぐに成果が出ないなど難しさがあります。企業は生成AIをどう活用すればいいのか――深津貴之氏と、独自LLMを開発したサイバーエージェントの毛利真崇氏が対談したイベント「ITmedia デジタル戦略EXPO」を[**こちらから無料でご視聴**いただけます](https://v2.nex-pro.com/library/NjM3NDY%253D?group=DigitalStrategyExpo2024winter%2Cnb_news&utm_source=nb&utm_medium=ae&utm_campaign=06)。

[![photo](https://image.itmedia.co.jp/news/articles/2402/08/itm-dsexpo2024w_03_w490.png)](https://v2.nex-pro.com/library/NjM3NDY%253D?group=DigitalStrategyExpo2024winter%2Cnb_news&utm_source=nb&utm_medium=ae&utm_campaign=07)

-   イベント「[ITmedia デジタル戦略EXPO 2024 冬](https://v2.nex-pro.com/library/NjM3NDY%253D?group=DigitalStrategyExpo2024winter%2Cnb_news&utm_source=nb&utm_medium=ae&utm_campaign=08)」
-   2024年1月30日（火）～2月25日（日）
-   **無料**でご視聴いただけます
-   [こちらから**事前登録**してご視聴ください](https://v2.nex-pro.com/library/NjM3NDY%253D?group=DigitalStrategyExpo2024winter%2Cnb_news&utm_source=nb&utm_medium=ae&utm_campaign=09)
-   主催：ITmedia NEWS、ITmedia ビジネスオンライン

[![photo](https://image.itmedia.co.jp/news/articles/2402/08/itm-dsexpo2024w_04_w290.png)](https://v2.nex-pro.com/library/NjM3NDY%253D?group=DigitalStrategyExpo2024winter%2Cnb_news&utm_source=nb&utm_medium=ae&utm_campaign=10)

Copyright © ITmedia, Inc. All Rights Reserved.
