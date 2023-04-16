---
title: Evernote API で遊んでみた - Masatomo Nakano Blog
updated: 2017-01-23 13:39:53Z
created: 2017-01-23 13:39:53Z
source: http://blog.madoro.org/mn/2
tags:
  - SI
---

# Masatomo Nakano Blog

[Evernote API で遊んでみた](http://blog.madoro.org/mn/2)
9th Jan, 2010
(Updated on 14th Jan, 2010)
|[evernote](http://blog.madoro.org/mn/tag/evernote)
今回このブログシステム作るために Evernote API を使ってみたので、その導入部分のメモ。

このAPIを使うことで、自分用Evernoteアプリを作ることができる。[APIのドキュメント](http://www.evernote.com/about/developer/api/evernote-api.htm)を見るとわかるよう結構色々なことができる。公式のEvernoteクライントでできることは当然このAPIでできる。ノートの検索や、読み、書き、とか。OAuthにも対応していているので、第三者にサービスを提供することもできそう。自分が作ったのは俺用アプリなんで、普通にIDとPasswordで認証してる。

準備

1. まずAPIキーが必要なんでそれを http://www.evernote.com/about/developer/api/ で取得する。（申し込みから数日かかる。APIキー関連の処理は手動でしてる感じ）

2. APIキーは最初に発行された状態ではsanboxにしかアクセスできない。これはEvernoteの正式な環境ではなくて、専用のテスト用の環境。その中で自由にユーザアカウントとかデータと作って遊ばせてくれる。（でもデータの保証はされないらしい）

3. その後で、「練習終わったよ！」って再度申請すると、そのキーを本番でも使えるようにしてくれる。その申請も http://www.evernote.com/about/developer/api/ ここからでいいみたい。ただ、申請の正式な方法がよくわからない。自分はApplication Detailsのとこのフリーテキストのところに "Could you activate my API key on the production servers?" 的に書いた気がする。

API

APIはそれなりに簡単に使える。今回はRubyで作ったが、java, perl, php, python あたりもサポートされている。http://www.evernote.com/about/developer/api/ から入手できるEvernote API (ZIP)という中に各種言語のライブラリと一緒にサンプルコードも入ってるのでそれを読めばだいたいのことはわかる。

例えば、今回自分が書いたのだと、

1. 自分のアカウントで認証

2. "blog"というタグが含まれている全ノートを抽出

3. ノートを一つずつ舐めて、自分のWebアプリにデータ取り込み
って感じ。
今回作ったアプリは、ノートの読み込みオンリーだけど、もちろんノートの更新や新規作成もできる。