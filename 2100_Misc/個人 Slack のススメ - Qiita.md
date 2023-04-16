---
title: 個人 Slack のススメ - Qiita
updated: 2018-02-25 07:30:53Z
created: 2018-02-25 07:30:53Z
source: https://qiita.com/saitotak/items/ac0eb7ddc0d8d83cbe91
author: xyvyx10
tags:
  - Tips
  - Web
  - グルメ
  - 食べログ
---

# 個人 Slack のススメ

[Slack](https://qiita.com/tags/Slack)
この記事は最終更新日から1年以上が経過しています。

#  All in Slack

　いまさらですが Slack を使い始めました。チャット用途ではなく、RSS 読むためだけに Feedly 開くの面倒だから何とかしたいというのと、モヒカン Slack に入ったらなかなかよかったためです。

　[究極のIT系最新技術情報収集用Slackチーム公開 - モヒカンSlack - - Qiita](http://qiita.com/kotakanbe@github/items/32cf4eb3de1741af26fb)

　そういえば Twitter も全然開かないし会社の SNS も見なきゃいけないし Instagram は見てるヒマないしたまーに Skype 届くし GoogleCalendar の通知は毎日見逃すし、気づけばスマホにもPCにもいろいろなアプリが常駐してるしいろんなタブが開いてる。

　しんどくなってきたので何でもかんでも Slack でまとめてみようと思いました。

##  Slack でできること・やること

- RSS Feed を読む、Twitter, Instagram, Yammer などのビューワとして使用する
    - どこまで既読なのかわかるので便利、Slack だけ見ればいいので楽
- Pocket と連携
    - 既読機能はあるけれど、いますぐ読まないものは Pocket に送ります
- 普通の用途
    - メモを書く、ToDo を書く
        - ブラウザでもスマホでも見られるので便利
    - ソースとか bash とかも置いておける
        - 添付もできるのでちょっとしたファイル転送にも使える
        - Dropbox などと連携してもよい

#  詳細

##  概念図

　いまのところ RSS リーダー、Twitter リーダーという「読み専」な連携をしています。スターを付けた投稿は自分の Pocket に流します。
　情報集約とストックが効率よくできていますね、すばらしい連携フローですね。

[(L)](https://camo.qiitausercontent.com/d0e357ed44190f139426f98e7dee52b0ba29b354/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3133303837342f66303537623032362d376432652d396137652d616562382d6539393730643433306635362e706e67)

[![myslack.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3133303837342f66303537623032362d376432652d396137652d616562382d6539393730643433306635362e706e67.png)](https://camo.qiitausercontent.com/d0e357ed44190f139426f98e7dee52b0ba29b354/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3133303837342f66303537623032362d376432652d396137652d616562382d6539393730643433306635362e706e67)

 *マーク は Zapier を使って連携しています*

##  作ったチャンネルと用途

　網羅的にチェックしたいものを入れています。即時性の必要なもの（SMSとか）はいれていません。スマホの Slack クライアント通知は控えめに、バイブレーションなしにしています。

- #feed
    - Slack / [RSS Integration](https://slack.com/apps/A0F81R7U7-rss) で RSS 等のフードAtom 通知を流しています。50 個くらい購読していてジャンルごとにチャンネルを作りました。フィードの管理がすこし面倒くさい。
- #instagram
    - ソーシャルメディアから フィードを生成できる [FEED.EXILEED.COM](http://feed.exileed.com/) を使用して Instagram 特定ユーザのフィードを RSS 化しています。のでこれもただのフィードのチャンネルになります。
- #skype
    - Slack / [Skype Integration](https://slack.com/apps/A0D0DAT1P-skype) で Skype の通知を流しています。まれにしか連絡がこないので見逃し防止として。
- #twitter
    - Slack / [Twitter Integration](https://slack.com/apps/A0F7XDW93-twitter) で 特定ユーザのツイートを流しています。読むだけなら十分。
- #yammer
    - Zapier / [Get Slack notifications for new Yammer posts](https://zapier.com/app/editor/template/2887) で Yammer(社内SNS) の投稿を流しています。
- #gcalendar
    - Slack / [Google Calendar Integration](https://slack.com/apps/A0F8149ED-google-calendar) で Google カレンダーの予定を朝まとめてリマインドします。スマホのカレンダーアプリ通知ってつい読まずに消しちゃいますよね。
- #gmail
    - Zapier / [Share new labeled Gmail emails in Slack](https://zapier.com/app/editor/template/1340) で、"slack" ラベルのついたメールを Slack に流すようにしています。ラベルは gmail 側の自動振り分け設定で必要なものに付与。
- #log
    - Zapier / [Share Pocket items via Slack](https://zapier.com/app/editor/template/5179) で Pocket に追加したログを取得しています
    - Slack / [GitHub Integrate](https://slack.com/apps/A0F7YS2SX-github) で個人リポジトリのコミットログなどを通知しています
    - このチャンネルだけ通知を見ないので、ミュートにしています
- #todo
    - ToDo を書いておわったら削除するという刹那的チャンネル
- #memo
    - 何でもメモする用、ブラウザやスマホで見られるので便利
- #diary
    - 日記とかつぶやきとか、ひとり Twitter として
- #test
    - BOT や API 連携のテスト用に作成、LambdaBot や Hubot が無意味に活動中。
- #general
    - 使ってないっす、消したい。
- **Slack 上でスターをつけたら Pocket に連携、あとで読む**
    - Zapier / [Save new starred Slack messages with links to Pocket](https://zapier.com/app/editor/template/1702) をまねして、2 Step のものを作成しました。

##  無料プランの制限について

　基本的に無料枠で使用することになると思いますので、Slack や Zapier の無料プランの制限は意識する必要があります。

- Slack 無料プラン
    - ログの検索と閲覧が10,000件まで
        - *100メッセージ/1日 として 3ヶ月くらい前のメッセージまで見られますね、長期保存したいものはおかないようにしましょう*
        - *データの Export はできるのでなんとかなるとは思います*
    - 連携できるサービス（integrations）は10個まで
        - *カウントはIntegrationごとなので、 RSS Integration に何個 RSS を追加しても 1 カウントです*
        - *Zapier や IFTTT は何個 Zap/Recepie を作っても 1 カウントになります*
    - ストレージ容量は5GBまで
    - 参考：[Slack - Pricing](https://slack.com/pricing)
- Zapier 無料プラン
    - Zap は 5 つまで
    - 3+ Step zap は使えない
        - *投稿があったら -> フィルタして -> Slack とか、Slack で Starがあって -> このチャンネルのときだけ -> Pocket とかは 3 ステップになるのでできない*
        - *100 Zap / Month の上限はなくなったようです*
    - 参考：[Pricing - Zapier](https://zapier.com/pricing/)

##  そのほか連携サービス

- [IFTTT](https://ifttt.com/discover)
    - 今回使っていませんが、LINE や Google Assistant/Amazon Alexa(USのみ) との連携がきているので色々応用できそうです
- [myThings - あなたの毎日が組み合わせで便利になる](https://mythings.yahoo.co.jp/)
    - 日本製の myThings は Yahoo 天気を引っ張りたいときなどに使えそうです。
    - Cookpad や食べログはないのかー

##  Slack を中心に考える

　アイデア次第でいろいろなことが実現できそうです。Slack Integration, Zapier, IFTTT, myThings の連携機能を眺めたら何か思いつくかもしれません。

- Facebook や Google+ も Slack に流す
- SMS テキストや不在通知を Slack に流す
- 天気予報や電車遅延情報を Slack で受け取る
- メールを拾って入出金や郵便物不在通知を Slack に流す
- むしろメールをぜんぶ Slack で読む
- [新刊.com](http://sinkan.net/) のフィード購読で Amazon.co.jp の新刊チェック
- [はてなアンテナ](http://a.hatena.ne.jp/) のフィード購読でフィード配信していないサイトもチェック
- Trello や Redmine と連携してタスク通知
- XaaS の障害やメンテナンスの情報を通知
- BOT, GPS, カメラと連携したり ...
- 佐野ひなこチャンネルやサイゾーチャンネルを作ったり ...

#  まとめ - ぼくのかんがえたさいきょうの Slack ができた

　Slack を使ったら Slack だけ見ればよくなって超便利ということがわかりました。チャンネル名や連携サービスは適宜見直して改善しつづけるとよいですね。
　みなさんもさいきょうの Slack 作ってみてはいかがでしょうか。

#  参考リンク

（お世話になりました）

[一人(ぼっち) Slack したいので簡単に調べて試してみた - shouhの日記](http://d.hatena.ne.jp/shouh/20151120/1448022243)

[Slackであまり知られていない便利機能一覧 - Qiita](http://qiita.com/kozyty@github/items/cbe58a72a715b540c60f)

[割と本気で家庭用Slack Botを作ってみた - 八発白中](http://blog.8arrow.org/entry/2016/01/13/183349)

[私はこうやってSlackを社内で流行らせました](http://www.slideshare.net/DATAHOTEL/slack-57873688)

[ZapierでSlackを佐野ひなこちゃんで埋め尽くす #apijp - @i2key のBlog](http://i2key.hateblo.jp/entry/2014/12/13/004009)

（以上）