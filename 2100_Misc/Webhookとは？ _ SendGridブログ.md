---
title: Webhookとは？ | SendGridブログ
updated: 2017-10-04 12:44:32Z
created: 2017-10-04 12:44:32Z
source: https://sendgrid.kke.co.jp/blog/?p=1851
author: xyvyx10
tags:
  - SI
---

# Webhookとは？

![『List-Unsubscribe』ヘッダとは？](../_resources/690a048a6bfe99205884ae6591faaa03.jpg)

> この記事は > [> What’s a Webhook?](http://sendgrid.com/blog/whats-webhook/)>  の抄訳です。

最近、WebhookというAPIコンセプトが徐々に知名度を上げています。イベント駆動のWeb上の処理が増えるに従い、Webhookを適用できる場面が増えてきています。この仕組みは小さなリソースでイベントに対する処理を実装できる非常に有用な方法です。

では、Webhookとは一体どのようなものでしょうか？Webhook（Webコールバック、HTTPプッシュAPIなどと呼ばれる場合もあります）はあるアプリケーションから別のアプリケーションに対してリアルタイムな情報提供を実現するための仕組みです。高い頻度でポーリングをする方法とは異なり、Webhookは送信側・受信側ともに効率の良い方法です。ただし、唯一欠点があるとすれば初期設定が難しいことです。

Webhookは時々「リバースAPI」と呼ばれる場合があるように、Webhookプロバイダ（送信側）から提供されるAPI仕様に従って、受信側のAPIを実装する必要があります。Webhookは指定されたアプリケーションに対してHTTPリクエスト（通常はPOST）を行い、受信側はその内容をパース（リクエストの内容を解釈）して利用します。

#### **Webhookの利用**

Webhookを利用するための手順は以下の通りです。

- JSON（一般的）もしくはXML（残念）
- フォームデータ（application/x-www-form-urlencodedもしくはmultipart/form-data）

プロバイダはどの方法でデータを送信するかを明示します（選択の余地がある場合もあります）。多くの場合、Webフレームワーク側がパースをしてくれます。Webフレームワーク側がパースをしてくれない場合でも、ライブラリなどを利用すると簡単な関数を呼ぶだけでパースをしてくれます。

#### **Webhookのデバッグ**

Webhookは非同期処理のため、デバッグが難しい場合があります。トリガをひく→リクエストを待つ→レスポンスを確認する、といった流れになりますが、やり方によっては非常に効率が悪くなります。しかし、ラッキーなことに良い方法があります！公式ドキュメント（[Debugging Webhook](https://sendgrid.com/docs/API_Reference/Webhooks/debug.html)）でも様々な方法を紹介していますが、以下にまとめます。

1. [RequestBin](http://requestb.in/)のようなWebhookのリクエストを収集するツールを利用して、Webhookがどういったリクエストを送信するか確認する

2. [cURL](http://curl.haxx.se/)や[Postman](https://www.getpostman.com/)のようなツールを利用してテスト用のリクエストを生成する

3. [ngrok](https://ngrok.com/)のようなツールを利用してローカルマシン上でプログラムをテストする

4. [Runscope](https://www.runscope.com/provider-guide/troubleshooting-webhooks)のようなツールを利用して全体のフローを確認する

#### **Webhookをセキュアにする**

Webhookを利用する場合、受信側アプリケーションのURLをパブリックネットワークに公開する必要があるため、そのURLを見つけた第三者から不正なデータが送信される可能性があります。こういったことを防ぐための手法をいくつかご紹介します。最低限採用すべき方法としてTLS接続（https）を強制する方法があります。その上で、さらにセキュアにする方法をいくつかご紹介します。

1. リクエストにトークンを追加して一意に識別する（よく採用される方法です）
1
`?auth=TK`

2. [Basic認証](http://ja.wikipedia.org/wiki/Basic%E8%AA%8D%E8%A8%BC)を有効化する（簡単かつよく採用される方法です）

3. Webhookプロバイダにリクエストを署名させる

最初の2つの方法でほとんどの攻撃を防ぐことができますが、リクエストに認証情報もしくはトークンを追加して送信しなければなりません。3つ目の方法はプロバイダが各リクエストを署名することで、受信側でその署名を確認することができますが、プロバイダ側にリクエストを署名してもらう必要があります。プロバイダ側が署名をしない場合、この方法は利用できません。

#### **重要なこと**

Webhookの受信側アプリケーションを作成する際に覚えておくことが2つあります。

- Webhookは、リクエストを送信し、受信側アプリケーションがデータを受け取った後のことは気にかけません。これは受信側アプリケーションでエラーが発生した場合、データを失うことを意味します。多くのWebhookは受信側のレスポンスをチェックして、受信側アプリケーションがエラーを返した場合、リクエストを再送します。この場合、受信側アプリケーションがリクエストを処理したにも関わらずエラーを返した場合、再送によりデータが二重化します。**Webhookプロバイダがレスポンスをどのように扱うか理解して、エラー処理を行ってください。**また、[Reflector.io](https://reflector.io/)というサービスを利用することでWebhookのエラー処理とリクエストのキューイングを補助することが可能です。
- Webhookは多数のリクエストを送信する可能性があります。場合によっては受信側アプリケーションをDoS攻撃状態にしてしまうかもしれません。**受信側アプリケーションが、想定しているスケールのリクエストを処理できることを確認してください。**SendGridではこういった場合の確認ツールとして[Loader.io](http://loader.io/)というサービスを提供しています。

#### **はじめてみましょう**

Webhookを真に理解するための最良の方法は試してみることです。多くのサービスがWebhook機能を提供しています。いくつか例をご紹介します。

- [SendGrid](https://sendgrid.kke.co.jp/) － SendGridはWebhookを使って[イベントデータ](https://sendgrid.kke.co.jp/docs/API_Reference/Webhooks/event.html)と[受信メールの内容](https://sendgrid.kke.co.jp/docs/API_Reference/Webhooks/parse.html)を送信します
- [Twilio](http://twilio.com/) － TwilioはWebhookを使って電話とテキストメッセージに関する[リクエストの内容](https://www.twilio.com/docs/api/twiml#twilio-interaction)を送信します
- [GitHub](http://github.com/) － GitHubはWebhookを使ってリポジトリに対するアクションに関連した[イベントを通知](https://developer.github.com/webhooks/)します
- [Foursquare](https://ja.foursquare.com/) － FoursquareはWebhookを使ってユーザがチェックインした時に[アプリケーションに通知](https://developer.foursquare.com/overview/realtime)します

是非、Webhookで楽しんでみてください！