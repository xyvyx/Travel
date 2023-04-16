---
title: Slackの新機能「Actions」で遊んで見る - コネヒト開発者ブログ
updated: 2018-05-27 01:10:20Z
created: 2018-05-27 01:10:20Z
source: http://tech.connehito.com/entry/2018/05/23/210317
tags:
  - null
---

# コネヒト開発者ブログ

## コネヒト開発者ブログ

こんにちは、 凪のお暇を読んで「なんか・・めっちゃMP持ってかれた・・・」という経験をしたのが先月でした。 続きが楽しみでありつつ、願わくば元気な時に出てほしい・・・

[![B1w0WgR0XzS._SL160_.png](../_resources/B1w0WgR0XzS._SL160_.png)](http://www.amazon.co.jp/exec/obidos/ASIN/B0799F78YG/hatena-blog-22/)

PHPとかやってます金城([@o0h_](https://twitter.com/o0h_))です。
さて、昨日は突発サク飲みを経て帰宅後、だらだら〜っとインターネットを見ていたのですが。
Slackから「どやどやどや！」なアップデート情報が飛び込んできまして、今日は早速触ってみたよ！という記事を書きます。
Slack Actionsについて。

[(L)](https://cdn.mamari.jp/authorized/amana_5b05438c-c9ac-4004-bb19-0019ac120005.jpg)

[![amana_5b05438c-c9ac-4004-bb19-0019ac120005.jpg](../_resources/amana_5b05438c-c9ac-4004-bb19-0019ac120005.jpg)](https://cdn.mamari.jp/authorized/amana_5b05438c-c9ac-4004-bb19-0019ac120005.jpg)

### Actionsってなーに

私が最初に知った記事は、こちらでした。

[medium.com](https://medium.com/slack-developer-blog/introducing-actions-a-simple-shortcut-attached-to-every-slack-message-e2404414ece)

これによると、どうやら
**

> あなたのアプリのユーザーは、一日一杯の悩みに悩まされています。アイデアを出して、次のステップを概説し、オーナーに仕事を任せています。アクションでは、メッセージをタスク、チケット、フォローアップ、またはアプリでリードに変えるスラックの会話に簡単に取り組むことができます。このようにして、あなたはSlackに仕事をもたらすだけでなく、簡単な方法で自分のサービスに戻すことができます。

**
とのことです。ピンときません・・・
読み進めていくと、
**
> Slack’s existing message actions, like “mark unread” or “copy link.”
**
という表現があります。
これが意味するのは、「メッセージの右クリックからできる、スターをつけたりパーマリンクをコピーしたり他チャンネルに共有したり」。

これと同じような階層・操作で、「メッセージに対する任意なアクションを、3rdパーティーアプリから独自に定義・できる」というのが今回の *Actions* ということでした。

具体的な例・アイディアについては、Official Blogも併せてご確認ください。

[slackhq.com](https://slackhq.com/turn-your-conversations-into-action-7acfc3c0d3f0)

例えば「メッセージを右クリックしてtodoに追加する」であり、例えば「メッセージを右クリックしてチケットを起票する」、例えば「メッセージを右クリックして「あとで読む」に入れる」・・・というような事例が紹介されています。[*1](http://tech.connehito.com/entry/2018/05/23/210317#f-253e26aa)

### 技術概要

さて、これはどうすれば使えるか？はドキュメントを御覧ください。
[api.slack.com](https://api.slack.com/actions)
**

> Actions are one way of integrating your app with Slack, similar to the integration points provided by slash commands or interactive messages.

**
という記述があります。
これがキーとなるので、Interactve messages をベースに概念を捉えていくと非常に掴みやすいと思います。

これらは過去に当ブログでも紹介しておりますので、「interactive message」「interactive components」といった機能がピンとこないという方は、まずこちらを御覧ください。

[物覚えが悪いのでSlackに色々と覚えてもらうappを作った話 - コネヒト開発者ブログ](http://tech.connehito.com/entry/2017/12/16/223241)

Actionsを実際に利用するための流れは、ざっくり以下のようになります。
1. Slack側に「Actions」の設定を行うと

    - Slash commadsと同様、「アプリの設定画面で操作すると、Slack側から呼び出せるようになる」というものです

2. メッセージを右クリックしたときに「Action」が表示されるようになり
3. それを押すと「Request URL」にリクエストが飛んでくるので
4. 内容に応じてごにょごにょして
5. レスポンスを打つ

その他のInteractive Componentsと同様に `Request URLへリクエストが飛んでくる` ということで、アプリケーション側の実装としてはButtonやMenuの実装とかなり近いイメージです。

#### 具体例

以下のような設定を行って
![20180523200827.png](../_resources/20180523200827.png)

こんな感じの操作をして
![20180523201638.gif](../_resources/20180523201638.gif)

Appに届くpayloadがこのような形になります。
※ 一部編集しています
(
[type] => message_action
[token] => #{token}
[action_ts] => 1527073949.994345
[team] => Array
(
[id] => #{team id}
[domain] => connehito
)
[user] => Array
(
[id] => #{user id}
[name] => hkinjyo
)
[channel] => Array
(
[id] => #{channel id}
[name] => tmp-ideyo-in-aciton
)
[callback_id] => dialogAddAction
[trigger_id] => #{trigger id}
[message_ts] => 1527073944.000444
[message] => Array
(
[type] => message
[user] => #{post user id}
[text] => ﾂｸﾙｿﾞｰｰｰ slack actions!!!!!
[ts] => 1527073944.000444
)

[response_url] => https://hooks.slack.com/app/#{hohgehoge}/#{fugafuga}/#{piyopiyo}

)

さて、既にInteractive componentを用いて何かしらの実装を行った経験がある！という前提に経てば、「callback_id」「trigger_id」「response_url」が取得できているので、ここからは自由に実装が進むものと思います。

### 試しに触ってみた

以前に作ったbot(※先の記事を参照)を拡張して、「誰かの投稿を簡単に登録できる」というものを作ってみました。

これはSlash Command用に作成した実装をほとんどそのまま流用しています。 今回は実用度は度外視ですが、ひとまず「Actionsを利用した動く何か」は非常に簡単に作成することができました。

![20180523201638.gif](../_resources/20180523201638.gif)

### 感想

今回の発表を聞いて、「すごい、かなり夢が広がるのでは？」と興奮していました・・・(時間も時間だったので、就寝が遅れてしまった・・・)

チケットの管理やtodo管理といった「思い立った時に、その場でアクションをする」といった類のものとはかなり相性が良いのではないでしょうか？個人的には、早くGithubのIntegrationが欲しい・・とも感じています。

その他にも、例えば「KPTフレームワークでの振り返りアプリ」などは作れそうだな？と思いました。「K/Pを記録する！」アクションを用意して、DialogないしEphemeral messageを用いて「K or Pを選択」というインタラクションを組めれば、「あとで思い出したいもの」を手軽に集約していく助けにもなりそうな気がします。

自由なアイディアを乗せることでより「自分好み」なワークスペースができあがっていく、そんなSlackの魅力がまた拡張したな！！と思うのでした。

[*1](http://tech.connehito.com/entry/2018/05/23/210317#fn-253e26aa):こちらのブログでは、記事中に埋められているgifが「おしゃれになっていて、実際のイメージがピンときづらい」と感じてしまいました・・・Publickeyさんの記事が「実際のイメージ」で分かりやすいので、ぜひご覧ください https://www.publickey1.jp/blog/18/slackactionsslack.html

Measure
Measure