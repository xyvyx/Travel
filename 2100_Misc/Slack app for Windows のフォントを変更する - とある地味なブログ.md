---
title: Slack app for Windows のフォントを変更する - とある地味なブログ
updated: 2018-02-27 15:52:32Z
created: 2018-02-27 15:52:32Z
source: >-
  http://sujoyu.hatenadiary.com/entry/2017/02/28/Slack_app_for_Windows_%E3%81%AE%E3%83%95%E3%82%A9%E3%83%B3%E3%83%88%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B
author: xyvyx10
tags:
  - Tips
  - Web
---

# Slack app for Windows のフォントを変更する

![f:id:sujoyu:20170228194605p:plain](../_resources/20170228194605.png)

## 動機

Slackのデスクトップアプリを[Windows](http://d.hatena.ne.jp/keyword/Windows)で使うと、`/me`だとか`_ほげほげ_`だとかが、イタリックで表示されない。灰色にもならない。

冗談がわからない。
空気が読めない。
死。

Slackアプリのフォントは[メイリオ](http://d.hatena.ne.jp/keyword/%A5%E1%A5%A4%A5%EA%A5%AA)だけど、[メイリオ](http://d.hatena.ne.jp/keyword/%A5%E1%A5%A4%A5%EA%A5%AA)の思想として、日本語にイタリックは無いから入れていないそうだ。

変更するフォントはなんでもいいんだけど、今回は游ゴシックにするよ。

## 手順

アプリケーションに手をいれることになるので、自己責任で。
動かなくなったら再[インスコ](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%B3)で。

### 2.8.1 (2017/10/4 追記)

[CSS](http://d.hatena.ne.jp/keyword/CSS)を普通にSlackのサーバから読み込んでるっぽいので、アプリ側でどうにかするの骨が折れそうだった。 ので、Slackを開発モードで起動し、開発者ツールから[CSS](http://d.hatena.ne.jp/keyword/CSS)書き換えるくらいしか思いつかんかった。

1. [コマンドプロンプト](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DE%A5%F3%A5%C9%A5%D7%A5%ED%A5%F3%A5%D7%A5%C8)から、

` C:\Users\<ユーザ名>\AppData\Local\slack\app-<バージョン>\slack.exe --dev `
で開発モードで起動。
2. ログイン。
3. `rollup-slack_kit_legacy_adapters.css` の

```
 [lang=en-US] body, [lang=de-DE] body, [lang=es-ES] body, [lang=fr-FR] body {
     font-family: Slack-Lato,appleLogo,sans-serif;
 }
```

を、書き換える。
4. 起動するたびにこれをやらなきゃいけない！Unhappy！！！！！

### 旧バージョン

バージョンは`2.5.1`で確認したよ。

1. [Download 游ゴシック 游明朝フォントパック from Official Microsoft Download Center](https://www.microsoft.com/ja-jp/download/details.aspx?id=49116)

↑からフォントをダウンロード && インストールする。
2. Slackアプリを閉じる。タスクトレイから`Quit`。

3. `C:\Users\<ユーザ名>\AppData\Local\slack\app-<バージョン>esources\app.asar.unpacked\src\static\lato.less`

を開く。
4. 以下のようなフォント指定がずらっとならんでいる。

```
 @font-face {
     font-family: 'Slack-Lato';
     font-style: normal;
     font-weight: XXX;
     src: url(slack-resources:fonts/woff2/lato-xxx-xxx.woff2) format('woff2');
     unicode-range: U+0000-F8FE, U+F900-FFFF;
 }
```

フォントのことがよくわからないので、`src: url(...) format(...);`の行を**すべて**以下のように書きかえて保存。
` src: local('Yu Gothic Medium');`
5. Slackアプリを立ち上げる。
6. Happy!!!!!!!!!!!!!!!!!
7. ただし、アップデートが入るともとに戻ってしまうorz