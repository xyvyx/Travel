---
title: 『Notion』でデータベースを連携活用。リレーションやロールアップをやってみた【今日のライフハックツール】
updated: 2021-05-10 04:12:32Z
created: 2021-05-10 04:12:32Z
source: https://www.lifehacker.jp/2021/05/233241lht_notion-database-link.html
---

[今日のライフハックツール](https://www.lifehacker.jp/regular/lh_tools/)
2021.05.10
![](https://www.lifehacker.jp/assets/common/img/icon_author.svg) 山田洋路
カテゴリー：
[TOOL](https://www.lifehacker.jp/tool/)

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/Notion-DB-0-w960.png)Screenshot: 山田洋路 via Notion

メモからタスク管理、ウェブクリップまで、多用途で使えるオールインワンツール**｢**[**Notion**](https://www.notion.so/)**｣**。日記やノートテイキングにも利用できますが、データベースを使いこなせばできることは格段に広がります。

[前回のNotion活用術](https://www.lifehacker.jp/2021/04/lht_notion-database-tasklist.html)では、データベース単体でデータを絞り込んだり、並べ替えたりするやり方について見てきました。

そして、｢データベース｣というからには、**連携させて利用することで本領発揮**することになります。

Notionは、データベースの連携手段が豊富に用意されています。Notion活用術の第3回目となる今回は、｢**リンクドデータベース**｣、｢**リレーション**｣、｢**ロールアップ**｣の基本的なやり方を紹介します。

**目次**
・
・
・
・

## データベースはページ内にいくつも作成できる

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/Notion-DB-2.png)Screenshot: 山田洋路 via Notion

前回までは、データベースをページとして作成してきましたが、Notionでは形式の違うコンテンツを同じページに並べることが可能です。
つまり、**スラッシュコマンド**から**データベースをページ内に作る**こともできて、この機能はプロジェクトページや個人用ポータルなどの作成に欠かせません。

## リンクドデータベースの作成手順と活用例

リンクドデータベースは、**データベースを別のページ内に表示させる機能**です。
この機能を使えば、マスターとなるデータベースを複数のページで展開可能に。
フィルターやビューを駆使することで、そのページに必要な情報のみを切り取って表示させます。

たとえば、すべてのタスクを管理するテーブルを、**各案件のページ向けにカスタマイズして表示**させることが可能です（それぞれのページでタスクリストを作成するよりも、まとめて管理／一覧できる“マスター”があったほうが効率的ですよね!?）。

具体的な作成手順と活用例を見ていきましょう。
**【リンクドデータベースの作成手順】**

1. ブロック上で**'/linked'**と入力すると表示される｢**Create linked databese（リンクドデータベースを作成）**｣をクリック。

2. 参照したいデータベースを選択。
3. ビューやフィルター、プロパティなどを設定してページに表示したい形式にする。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-linked-1.png)Screenshot: 山田洋路 via Notion

ここでは、タスクリストを案件Aのページ向けに切り取ってみます。
案件Aのページ上のブロックで、**'/linked'**と入力してリンクドデータベースを作成します。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-linked-3.png)Screenshot: 山田洋路 via Notion

データベースに｢タスクリスト・マスター｣を選択して呼び出すと、ズラッとタスク一覧が表示されます。
リストビューを適用し、さらにはデータ格納欄右上**｢…｣アイコン**の**filter**から、フィルターを適用して見た目を調整。
タグで案件Aのものを絞り込んでいます。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-linked-4.png)Screenshot: 山田洋路 via Notion

また、同じく**｢…｣アイコン**の**Properties**から、表示させるプロパティを選択。
チェックボックスでToDoを管理することにしました。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-14.gif)Screenshot: 山田洋路 via Notion

リンクドデータベースでの変更が、元データベースにも反映されるのがポイントです。
たとえば**ボードビューのToDoリストでタスクをドラッグアンドドロップで移動**させると、**リンク元となるテーブルのステータスも自動で変更**されます。

## リレーションの設定手順と活用例

リレーションは**データベースを関連付ける機能**です。
関連付けたデータベースの値（項目名）が表示されるほか、**一方を更新するともう一方も自動的に更新**されます。
リレーションを活用することで、**2つの切り口からデータを見る**ことができて便利です。

簡単な例を挙げると、メンバーをリストアップしたテーブル上で、それぞれの好きな食べ物を登録していけば、食べ物をリストアップしたテーブル側にもメンバー情報が漏れなく反映され、食べ物の人気や傾向がわかるようになります。

設定手順と活用例をご紹介します。
**【リレーションの設定手順】**
1. テーブルでプロパティを追加して、入力するデータのタイプに｢**Relation（リレーション）**｣を選択。
2. **Select a database（データベースの選択）**のプルダウンメニューから、**関連付けるテーブル**を選択。
3. 追加したプロパティの任意セルをクリックすると、関連付けたテーブルがポップアップで表示されます。
4. **｢+｣ボタン**で引っ張りたい項目を追加します。
ここからは例として、ペットテーブルと商品テーブルをリレーションで関連付けていきます。
ペットテーブルでメンバーの好みの商品を登録していけば、自動で商品テーブルに反映。
商品ごとにメンバーの好みが把握できるので、ドッグフードのまとめ買いに便利（？）です。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-16-2.png)Screenshot: 山田洋路 via Notion

実際にやっていきましょう。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/Notion-DB-3.png)Screenshot: 山田洋路 via Notion

ペットテーブルでプロパティを追加して、入力するデータのタイプに｢**Relation**｣を選択します。
この後、わかりやすいようにプロパティ名を｢好きな食べ物｣に変更しました。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-3-1-1.png)Screenshot: 山田洋路 via Notion

紐づけたい｢商品テーブル｣を選択。｢**Create relation（リレーションの作成）**｣ボタンを押せば、商品テーブルに関連付いたプロパティの出来上がりです。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-4-1-1.png)Screenshot: 山田洋路 via Notion

それぞれ好きなドッグフードを登録していきます。
追加したプロパティをクリックすると、商品テーブルがポップアップ表示されるので、項目横の**｢+｣ボタン**で登録します。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-4-2-2-1.png)Screenshot: 山田洋路 via Notion

商品テーブルを見ると、｢**Related to ペットテーブル（好きな食べ物）**｣とのプロパティが自動で追加され、**商品ごとにメンバーが登録**されいるのがわかります。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/Notion-DB-4.png)Screenshot: 山田洋路 via Notion

ちなみにペットテーブルで商品名をクリックして、商品データの詳細を示すこともできますよ。

## ロールアップの設定手順と活用例

ロールアップは、**リレーションで関連付けた項目の値が利用できる機能**。
実は、リレーションはロールアップを目的に設定することも多いんです。
まだリレーションの便利さにピンときていない……という方も、ロールアップでできることを知ればその存在意義に納得がいくはず。
データベースの利用が、一気に立体的なものになります。

**別のテーブルから値が自由に引っ張ってこれる**ので、たとえばプロジェクトにメンバーをアサインするときに、各プロジェクトにメンバーを関連付けておけば、参照したいメンバーのプロパティすべてが表示可能に。

**これを利用した計算結果まで表示**できるようになります。
少々説明が込み入ってきたので、設定手順と活用例を、ステップを追って見ていきましょう。
**【ロールアップの設定手順】**
1. テーブルでプロパティを追加して、入力するデータのタイプに｢**Rollup（ロールアップ）**｣を選択。
2. RELATIONには**先ほどリレーションを適用したプロパティ**を、PROPERTYには**関連付けたテーブル側の、利用したいプロパティ**を選択。
3. **CALCULATE（計算法）**では、値を利用してどんな計算をさせるか選択します。

今回は例として、メンバーの摂取カロリー管理を目的とし、それぞれが好きな食べ物の｢カロリー（kcal/100gあたり）｣プロパティの値を利用して、計算結果を表示していきます。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-rollup-1.png)Screenshot: 山田洋路 via Notion

ペットテーブルで計算結果を表示させるプロパティを追加。タイプには｢**Rollup**｣を選択します。
プロパティ名は｢ミックスしたときのカロリー（kcal/100gあたり）｣に変更しました。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-rollup-2.png)Screenshot: 山田洋路 via Notion

ポップアップが表示されるので、**RELATION**には｢好きな食べ物｣プロパティを、**PROPERTY**に｢カロリー（kcal/100gあたり）｣プロパティを選択します。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-rollup-4.png)Screenshot: 山田洋路 via Notion

**CALCULATE**には｢**Average（平均）**｣を選択すると、計算結果（ミックスしたときの100gあたりのカロリー）が表示されるようになりました。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-rollup-3.png)Screenshot: 山田洋路 via Notion

ほかにもNotionでは、**合計**、**個数のカウント**、**最も早い日時の算出**など、データのタイプに応じた計算法が用意されています。
項目数が多くなるほどリレーションとロールアップが活躍しそうです。

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/16/HowtouseNotion-DB-rollup-5.png)Screenshot: 山田洋路 via Notion

Notionのデータベースに工夫をこらせば、できることは無限大です。
ノーコードで高度な連携ができてしまうのは感動もの。ぜひ**自分専用の効率的なシステム**を構築してみてくださいね。
**これまでのNotion活用術**

[『Notion』の データベース機能を活用。タスクリストにフィルターを設定してみた【今日のライフハックツール】](https://www.lifehacker.jp/2021/04/lht_notion-database-tasklist.html)

[![](https://assets.media-platform.com/lifehacker/dist/images/2021/02/09/HowtouseNotion-DB-0-w960.png)](https://www.lifehacker.jp/2021/04/lht_notion-database-tasklist.html)

[話題の万能アプリ『Notion』でシンプルな日記ページをつくってみた【今日のライフハックツール】](https://www.lifehacker.jp/2021/04/lht_notion-basic-operation-diary.html)

[![](https://assets.media-platform.com/lifehacker/dist/images/2021/02/17/HowtouseNotion-0-2-w960.png)](https://www.lifehacker.jp/2021/04/lht_notion-basic-operation-diary.html)

**あわせて読みたい**

[アイデアをクリップして手軽に共有できるウェブアプリ【今日のライフハックツール】](https://www.lifehacker.jp/2021/02/lht_walling-webapplication-sharing.html)

Source: [Notion](https://www.notion.so/)

powered by [![](https://www.lifehacker.jp/assets/common/img/logo_cxense.png)](http://www.cxense.com/jp/)

## REGULAR[今日のライフハックツール](https://www.lifehacker.jp/regular/lh_tools/)

![](https://assets.media-platform.com/lifehacker/dist/images/2021/04/30/A_1182_318_2x-w640.jpg)

WORK FAST, LIVE SLOW.を叶える“仕事や暮らしを快適に豊かにするツール”を紹介します。
[今日のライフハックツール一覧へ](https://www.lifehacker.jp/regular/lh_tools/)