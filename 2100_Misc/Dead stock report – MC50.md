---
title: Dead stock report – MC50
updated: 2017-05-06 13:12:24Z
created: 2017-05-06 13:12:24Z
source: https://sapmentalnotes.wordpress.com/2008/11/20/dead-stock-report-mc50/
tags:
  - SI
---

# デッドストックレポート - MC50

[10回答](https://sapmentalnotes.wordpress.com/2008/11/20/dead-stock-report-mc50/#comments)

デッドストック報告は、しばしば誤解を招く。したがって、デッドストック報告書に関する少しの指針。
デッドストックレポートは、一定期間内にどのような株式が決して触られないのかを分析します。下のグラフを見ると、在庫レベルが時間ごとに表示されます。

[![在庫水準から時間](../_resources/graph-300x180.jpg)](https://sapmentalnotes.files.wordpress.com/2008/11/graph.jpg)

在庫水準から時間

期間1と5の間の在庫移動を分析する際、株価は30未満に下がることはありません.30はあなたのデッドストックです。それは決して触られなかった株の部分です。これで何が分かりますか？言うことは簡単ではない：

- 安全在庫の設定が10の場合は、あなたが過剰購入していると思われることはありません。これは、調達計画者が厳密に必要以上に調達するようにするロットの大きさに起因する可能性があります。
- あなたの安全在庫が50であれば、安全在庫の一部を使用したことがわかります。あなたがベンダーの配送問題に遭遇した可能性があるので、これは必ずしも悪いことではありません。
- If your safety stock happens to be 30 and stock never dips below this level for a whole year, then your safety stock may be set too high. The value of safety stock is to cover unexpected rise in demand or problems with supply. If this “never” happens there is no need for safety stock.
- Ask yourself the question, how many days’ supply does this dead stock quantity represent. This will give you a good idea on how to judge the dead stock. 2 days can put the service level under pressure while 40 days may make your treasury department shiver.

The report is very useful but does not offer the full picture of your stock position. Always use this report in combination with other reports.

このレポートでは、移動タイプと移動タイプの消費インジケータが考慮されています。移動タイプの消費インジケータが設定されている場合、レポートは消費を記録します。このフラグは、トランザクションOMJJのカスタマイジングでチェックすることができます。このようにして、移動タイプを入力/除外することもできます。予測が計算される方法や他のレポートの作成方法にも影響するため、注意してください。また、標準的な移動タイプは変更しないでください。カスタムタイプを作成し、プロセスに追加してください。

[![Consumption indicator movement type 641](../_resources/omjj-300x217.jpg)](https://sapmentalnotes.files.wordpress.com/2008/11/omjj.jpg)

OMJJ - 消費インジケータの移動タイプ641
広告

このエントリはに投稿された[MM](https://sapmentalnotes.wordpress.com/category/mm/)とタグ付けされた[MMを](https://sapmentalnotes.wordpress.com/tag/mm/)、[報告](https://sapmentalnotes.wordpress.com/tag/reporting/)に[2008年11月20日](https://sapmentalnotes.wordpress.com/2008/11/20/dead-stock-report-mc50/)[mensenjh](https://sapmentalnotes.wordpress.com/author/mensenjh/)。