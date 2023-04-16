---
title: 生徒会会計用Excelファイル｜K教諭の高校生活記📓｜note
updated: 2021-08-14 15:15:29Z
created: 2021-08-14 15:15:29Z
source: https://note.com/keishslife/n/n98de952d9526
---

## 両替枚数算出用ファイル

[ **両替金種表.xlsx** 29923 Bytes  ファイルダウンロードについて      ダウンロード](https://note.com/api/v2/attachments/download/00c0c506546ff203a38abbc0a808b0d5)

**※注意：このファイルを使って起きた問題に関して一切責任は取れません。テストはしましたが、趣味でやっているものなので、参考程度に利用してくださいm(_ _)m

**
他の学校に勤めたことがないのでもっと便利なものがあるかもしれませんが…学校にあるものを自分で少し改良したので、どこかで役に立てばと思いアップロードしてみます。
どんなものかというと、**部活動ごとの請求金額を入れれば金種ごとの両替枚数が自動で入力される**というものです。
こちらが見本です。黄色のところに入れると金種ごとの枚数が自動的に入るようになっています。

![](https://assets.st-note.com/production/uploads/images/58911478/picture_pc_2e65ea5b4275646d93929c920f8c943c.png?width=800)

関数はquotientというものを使いました。Excelも最近遊び始めたばかりなので、もっといいやり方があるかもしれませんね。

![](https://assets.st-note.com/production/uploads/images/58911686/picture_pc_de52a38f52ad092bd0140758610746ed.png?width=800)

もし行数が足りない、という場合には
**真ん中あたりの空白をコピー→コピーしたセルの挿入**
としてもらえると関数に影響が出なくてよいかと思います。

![](https://assets.st-note.com/production/uploads/images/58912004/picture_pc_7ccfc15347ca84f1a76ff0dfa2ac9b1b.png?width=800)

![](https://assets.st-note.com/production/uploads/images/58912015/picture_pc_e0a7d9ba8eafa2d48aa2e7a6ebe7d069.png?width=800)

ちなみに学校のはどういうのだったのかというと、金種をひとつひとつ手入力するようになっていました。以下は旧版と直した新版の比較ですが、入力する部分がだいぶ減りました(^^)

![](https://assets.st-note.com/production/uploads/images/58912101/picture_pc_218408b2cad82ce6cc2774a1a65c8536.png?width=800)

最初は７０円を５０円と１０円に分けて書かないなど、無駄に両替枚数を増やしてしまうことを防ぐために書式の設定をいじってセルが赤くなるように改良していたのですが、これを家族に見せたところ、「金額を入れたら自動で金種が入力されるようになるのが一番いいよね」と言われ、quotient関数を使ったアイデアを教えてもらいました。家に自分の専門以外の分野に詳しい人がいるとありがたいですよね。感謝感謝です。

とこんなかんじで、趣味で作っているデータの第１号でした。また色々作ったものはアップしてみたいと思います(^^)