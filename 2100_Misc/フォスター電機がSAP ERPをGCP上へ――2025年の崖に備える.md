---
title: フォスター電機がSAP ERPをGCP上へ――2025年の崖に備える
updated: 2020-11-14 00:31:04Z
created: 2020-11-14 00:31:04Z
source: https://enterprisezine.jp/article/detail/13532
---

[ERP](https://enterprisezine.jp/article/t/ERP)

[クラウド](https://enterprisezine.jp/article/t/%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89)

[GCP](https://enterprisezine.jp/article/t/GCP)

[2025年の崖](https://enterprisezine.jp/article/t/2025%E5%B9%B4%E3%81%AE%E5%B4%96)

[著]

edited by [Operation Online](https://enterprisezine.jp/operationonline/)2020/11/13 08:00

　創業70年を超える音響機器大手のフォスター電機は、ERP（統合基幹業務システム）を米グーグルのクラウドサービスGoogle Cloud Platform（GCP）へ載せ替えた。2020年5月から運用を始め、GCP上で欧州SAPのERPを運用する国内初の事例となった。プロジェクトではスピードを優先し、アプリケーションの大きな改修はせずに4ヶ月という短期間で移行を完了させた。迫る2025年の崖に向けてIT部門の余力を確保するためだ。移行を共におこなったのは、BeeX。クラウドの恩恵で運用負荷を1日も早く減らし、2025年の崖に備える。

 ![](https://ez-cdn.shoeisha.jp/static/images/article/13532/13532_list.jpg)

　「まず何より、運用負荷を減らしたかったんです」。経営情報戦略室 業務システム開発1課の中村俊一 課長は、ERPをクラウドに移した理由をこう話す。

　フォスター電機は、2008年にメインフレームを使っていた業務システムを欧州SAPのERPに変更。以来、SAP ERPを基幹業務システムとして使ってきた。しかしビジネスの成長と2011年に起こった東日本大震災をきっかけに自社でサーバーを維持管理していくことへのリスクなどから、「オンプレミスに限界を感じていた」（中村課長）。2015年にはハードウェアの保守期限切れをきっかけに自社でのサーバー運用を止め、国内のITベンダーが管理するクラウドにERPの基盤を移していた。

 ![](https://ez-cdn.shoeisha.jp/static/images/article/13532/13532_03.jpg) フォスター電機 経営情報戦略室 業務システム開発1課 課長　中村俊一氏

　移行後、当初の目的であった「基幹システムのIT-BCP確立」、「IT部門の運用工数削減」については、一定の目標を達成することができたが、約5年間運用を続けてきた中で、さまざまな課題が見えてきた。

　システムの監視ソフトも運用負荷になっていた。主要なクラウドサービスでは、基盤を監視するサービスもラインアップに組み込まれていて、監視ソフトそのものの運用を気にせずにインフラの動作確認や処理のスループットを可視化したりできる。

　フォスター電機は2015年の脱オンプレミスを皮切りにクラウド活用へと舵を切り、2017年には海外拠点MES（製造実行システム）を米グーグルのGoogle Cloud Platform（GCP）上で運用を始めていた。この時点で、SAP ERPもパブリッククラウド環境に移行する構想が立ち上がったという。

## インフラ性能を評価

　2017年のミャンマー工場のMES稼働時、フォスター電機は「クラウドインフラの基本性能を評価して、GCPを中心に使っていくことにした」（中村課長）。

　グーグルは自社専用の海底ケーブルに投資をするなど専用の通信回線を整備していて、GCPのユーザーもこれを使える。グローバルに販売や製造拠点を持つフォスター電機にとって、各国のGCPリージョン間をつなぐネットワークが使いやすく高品質なのは魅力的だった。ほかにも、Google BigQueryのようなデータ分析基盤サービスが充実していることも選択を後押しした。

 ![](https://ez-cdn.shoeisha.jp/static/images/article/13532/13532_010.jpg)

　MESを運用しながら、フォスター電機ではERPもGCP上で運用できると確認していった。そこで、SAPなど基幹システムを中心にクラウドインテグレーションを専業に展開しているBeeXと共に2020年1月にERPの移行プロジェクトを本格始動、5月には完了させた。GCPのインフラが安定していたこともあるが、事前の検証を徹底して行ったことや移行リハーサルを実施したこともあり、「移行直後も不具合はおこらなかった」（中村課長）という。

　基盤の切り替えに伴い、インフラ性能は大きく向上した。バッチの処理時間は最大で82％向上し、基盤の月額利用料も削減できた。「基盤のCPU性能が向上したとみている」（中村課長）。クラウドプラットフォーマーは規模が大きくなるほどハードウェアの更改に投資がしやすく、インフラの基本性能を高く維持しやすい。狙い通り、システムの運用負荷も改善した。

※この続きは、会員の方のみお読みいただけます（登録無料）。

[会員登録（無料）](https://enterprisezine.jp/user/regist/?ref=/article/detail/13532&utm_source=enterprisezine.jp&utm_medium=self&utm_campaign=regist&utm_term=/article/detail/13532)

[次ページ≫　2025年の崖に備える体制作り](https://enterprisezine.jp/article/detail/13532?p=2)

[2](https://enterprisezine.jp/article/detail/13532?p=2)

[次へ≫](https://enterprisezine.jp/article/detail/13532?p=2)

[バックナンバー](https://enterprisezine.jp/article/corner/180)

[印刷用を表示](https://enterprisezine.jp/article/detail/13532?mode=print)

## 著者プロフィール

[![](https://ez-cdn.shoeisha.jp/static/images/author/img_nophoto.gif)](https://enterprisezine.jp/author/641)

[広田 望（ヒロタ ノゾム）](https://enterprisezine.jp/author/641)

物書き、工学学士（応用化学）、理学博士（物理学） 日経BPに入社し、日経コンピュータ記者や日経ビジネス記者を経験。2019年6月にAIベンチャーへ転職し、深層学習を組み込んだサービス開発や人材開発に従事した。

Article copyright © 2020 Hirota Nozomu, Shoeisha Co., Ltd.