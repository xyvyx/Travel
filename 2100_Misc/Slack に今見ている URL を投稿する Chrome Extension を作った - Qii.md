---
title: Slack に今見ている URL を投稿する Chrome Extension を作った - Qiita
updated: 2018-02-10 03:49:28Z
created: 2018-02-10 03:49:28Z
source: https://qiita.com/ameyamashiro/items/3a2170c3722b0f157d6a
author: xyvyx10
tags:
  - Tips
  - Web
---

# Slack に今見ている URL を投稿する Chrome Extension を作った

[Slack](https://qiita.com/tags/Slack)
この記事は最終更新日から1年以上が経過しています。
Advent Calendar の日付を完全に勘違いしていました…

それはさておき Slack へ現在見ている URL を Slack へ投稿するブックマークレットがあったので、それを Extension にしてみよう！という感じで作ってみました！

# Slack への投稿方法

## 投稿用の channel を作成

ここでは #extensions とします。

## Incoming WebHooks の有効化

まず Slack へ投稿を行うには、Slack の Integrations の Incoming WebHooks を利用します。
左上の矢印から Configure Integrations を選択して設定します。
Post to Channel に #extensions を指定します。

[(L)](https://camo.qiitausercontent.com/a9e33ffd1551a9cb6b9f7e235761d617217fe733/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f62326538356161662d623066332d653234622d653161322d3137336431313731373864622e706e67)

[![Screen Shot 2014-12-22 at 23.09.20.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f62326538356161662d623066332d653234622d653161322d3137336431313731373864622e706e67.png)](https://camo.qiitausercontent.com/a9e33ffd1551a9cb6b9f7e235761d617217fe733/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f62326538356161662d623066332d653234622d653161322d3137336431313731373864622e706e67)

そして WebHookURL の所を控えておきます。
Slack へ投稿を行うには、この URL へ JSON 形式の値を payload というパラメータで与えてあげると投稿が行われます。
{"text": "テスト投稿"} という JSON を送ると テスト投稿 という文字列が投稿されます。
詳しくは Webhook URL の Show setup instructions を参照してください。

# extension の作成

これで Slack へ投稿できるようになったので、後は extension を作成するだけです。
本当はもっと綺麗に作る予定だったのですが、時間がなかった + Advent Calendar の日を勘違いしていた 為に非常に簡易的な作りになっています。
extension は html, css, js で作成することができるのでとてもお手軽です。
extension で行なっていることを簡単に解説します。

## manifest.json へ設定情報

extension のタイプ(?)等の設定情報を記述します。
ここで設定すると Chrome の右上にアイコンが表示されます。
ここを押した際に実行される JS は以下の用にします。
$(function() {
chrome.tabs.getSelected(null, function(tab) {
var requestURL = localStorage.getItem('request_url');
var channel = localStorage.getItem('channel');
var username = localStorage.getItem('username');
var text = tab.title + ' : ' + tab.url;
$.ajax({
url: requestURL,
type: 'post',
data: 'payload=' + JSON.stringify({
"channel": channel,
"username": username,
"text": text
})
});
});
});
Extension なので jQuery なんか使わない方が良さそうなのですが、時間がないため簡単に済まします。
これで押した際にこの JS が実行されて Slack への投稿が行われます。

# Extension の使い方

この extension の導入方法、使い方を軽く解説します。

## 導入方法

まず、これは開発中なので extension の公式にはありませんので以下の github からソースを落としてきます。
https://github.com/kazunari-yamashiro/slack-it-later
これを解凍して Chrome のハンバーガーメニュー -> 設定 -> 拡張機能 と進みます。
右上の 開発モード にチェックを入れます。そうすると以下のような画面になります。

[(L)](https://camo.qiitausercontent.com/e87c08ed456198d3f36ee7290e95b9267fdf0296/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f36333863616266662d656162332d616562302d643931612d3833643261616531316130332e706e67)

[![Screen Shot 2014-12-22 at 23.44.00.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f36333863616266662d656162332d616562302d643931612d3833643261616531316130332e706e67.png)](https://camo.qiitausercontent.com/e87c08ed456198d3f36ee7290e95b9267fdf0296/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f36333863616266662d656162332d616562302d643931612d3833643261616531316130332e706e67)

Load unpacked extension... を押して、先ほど解凍したディレクトリを指定します。
これで拡張機能を取り込めました。

※ Windows 版の Chrome だと Beta channel に設定しないと自分が追加した拡張機能は削除されてしまうらしいです。(Mac なので未確認)

## 設定

追加が完了すると拡張機能一覧へ Post to slack というものが表示されるようになるので、Options をクリックします。

[(L)](https://camo.qiitausercontent.com/9e52b21dc7741b7c2378018e761fc02a44778d6a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f30326438613738662d316165382d343835362d323964642d3838386462316364623464642e706e67)

[![Screen_Shot_2014-12-22_at_23_44_00.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f30326438613738662d316165382d343835362d323964642d3838386462316364623464642e706e67.png)](https://camo.qiitausercontent.com/9e52b21dc7741b7c2378018e761fc02a44778d6a/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f30326438613738662d316165382d343835362d323964642d3838386462316364623464642e706e67)

すると以下の画面が表示されるので、必要な情報を入力します。

[(L)](https://camo.qiitausercontent.com/d0d62331c1e747106fd79a985daba2d1dc7befc7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f35633333343632642d633261652d313431302d396363392d3937316565356633636336302e706e67)

[![Screen Shot 2014-12-22 at 23.50.07.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f35633333343632642d633261652d313431302d396363392d3937316565356633636336302e706e67.png)](https://camo.qiitausercontent.com/d0d62331c1e747106fd79a985daba2d1dc7befc7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f32363230362f35633333343632642d633261652d313431302d396363392d3937316565356633636336302e706e67)

リクエスト URL には始めの方で控えた Slack の URL を貼り付けます。
チャンネルには #(シャープ) 付きの Channel 名 (ここでは #extensions)
ユーザー名に入力した値が Slack 書き込み時のユーザー名の所に表示されます。
最後にメッセージは今は使われていません……
ここまで入力して保存を押して設定を保存します。

## 使い方

投稿したい URL を閲覧中に 右上のアイコンをクリックすると Extensions という文字が現れるとともに Slack への投稿が行われます。

# 最後に

もっといい感じのものを作る予定でしたが、結構粗悪な、そして Calendar の日付を間違えるというぐだぐだでしたが、ちょっとだけ いいね！ っと思ってもらえると幸いです。