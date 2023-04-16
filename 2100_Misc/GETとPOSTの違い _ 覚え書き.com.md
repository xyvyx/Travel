---
title: GETとPOSTの違い | 覚え書き.com
updated: 2017-01-20 02:25:30Z
created: 2017-01-20 02:25:30Z
source: http://write-remember.com/archives/2530/
tags:
  - SI
---

# GETとPOSTの違い

Web開発をしていると必ずと言っていい程「GET」と「POST」という言葉が出てくるかと思います。
今回は「GET」と「POST」の違いについてまとめてみます。

### 基本事項として

Web開発初心者の方だと「GET」という言葉からサーバーからデータを取得するのかなあと勘違い（私だけ？）してしまうかもしれませんが、どちらも入力フォームのデータをサーバへリクエスト送信する際に使用します。基本的に以下の特徴を踏まえて、用途別に応じて上手く使い分けるしかないかと思っています。

### GET送信の特徴

- データをリクエストURLの後に付与して送信する。（Webサーバやプロキシサーバのアクセスログなどに残る）
- 他の人がURLを見ると、入力したデータが丸見えになってしまう。（ログイン画面などではIDやパスワードが他者から丸見えになるのでGET送信は使用するべきではない）
- URLの後に付与するのでデータ量（文字数）に制限が掛かる。（Internet Explorer のURLに使用できる最大文字数は最大2,048 文字）
- GETはHTTPヘッダ情報に含まれるため、簡単に取得することが可能。
- テキストデータのみ送信可能。

### POST送信の特徴

- データ量が多い場合はPOSTを使用する。
- POSTはBODY部分（form）に含まれるため、取得がちょっと面倒。
- テキスト、バイナリどちらでも送信可能。
- POST送信後にブラウザの戻るボタン押下で有効期間切れが発生する場合がある。

### Ads by Google

### コメントを残す [コメントをキャンセル](http://write-remember.com/archives/2530/#respond)

メールアドレスが公開されることはありません。 * が付いている欄は必須項目です
名前 *
メールアドレス *
ウェブサイト
コメント

次のHTML タグと属性が使えます: `<a href="" title=""> <abbr title=""> <acronym title=""> <b> <blockquote cite=""> <cite> <code class="" title="" data-url=""> <del datetime=""> <em> <i> <q cite=""> <strike> <strong> <pre class="" title="" data-url=""> <span class="" title="" data-url=""> `