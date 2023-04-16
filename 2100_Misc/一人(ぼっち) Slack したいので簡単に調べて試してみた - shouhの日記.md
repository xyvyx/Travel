---
title: 一人(ぼっち) Slack したいので簡単に調べて試してみた - shouhの日記
updated: 2018-02-25 08:48:48Z
created: 2018-02-25 08:48:48Z
source: http://d.hatena.ne.jp/shouh/20151120/1448022243
author: xyvyx10
tags:
  - Tips
  - Web
---

# shouhの日記

## [2015-11-20](http://d.hatena.ne.jp/shouh/20151120)

[slack](http://d.hatena.ne.jp/shouh/searchdiary?word=%2A%5Bslack%5D)

#### はじめに

最近 [Slack](http://d.hatena.ne.jp/keyword/Slack) という[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)サービスが流行っているらしい。使っていて楽しいらしい。一人でメモ用途に使うこともできるらしい。

というわけで無料プランの範囲で調べてみた。試してみた。

本記事のまとめ方としては、とりあえず特徴なり仕様なり気付きなりを列挙するというスタンスでいく。列挙したものを読めば、おぼろげにイメージが掴めるのではないかという意図がある。

#### [Slack](http://d.hatena.ne.jp/keyword/Slack)とはなんぞや？ 特徴は？

- [クラウド](http://d.hatena.ne.jp/keyword/%A5%AF%A5%E9%A5%A6%A5%C9)型の[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)サービス
    - 自前で[サーバ](http://d.hatena.ne.jp/keyword/%A5%B5%A1%BC%A5%D0)立てて運用するのは無理
- メアドによる[招待制](http://d.hatena.ne.jp/keyword/%BE%B7%C2%D4%C0%A9)(招待して[アカウント](http://d.hatena.ne.jp/keyword/%A5%A2%A5%AB%A5%A6%A5%F3%A5%C8)持ってる人以外は入れない)
- 操作は[ブラウザ](http://d.hatena.ne.jp/keyword/%A5%D6%A5%E9%A5%A6%A5%B6)上で完結できる
- 日本語メッセージの扱いは問題無し
- 他サービスとの連携が容易
- [API](http://d.hatena.ne.jp/keyword/API) や Webhook も充実しており遊べる
    - 例: [Bot](http://d.hatena.ne.jp/keyword/Bot)作るとか
- 無料プランでもそこそこ使えるが制約はある
    - 制約1:連携サービスは5個まで
    - 制約2:見れるメッセージは過去10000件分まで
    - 制約n:その他細かい機能(詳しく見てないので挙げれません)が使えなかったりする
- [インポート](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%DD%A1%BC%A5%C8)・[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)も可能

#### 登録

新規登録に必要なのはメアドとチーム名。チームというのは下記のイメージで、要するに一つのまとまった単位。

- チーム( https://(チーム名).slack.com/ という URL が与えられる)
- チャンネル(チャネル？)1
- メッセージ1
- メッセージ2
- ...
- チャンネル2
- ...
- ...

登録するとメアドに登録完了メールが届くので、そこから[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)ページにアクセスできる。なお、[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)が[デフォルト](http://d.hatena.ne.jp/keyword/%A5%C7%A5%D5%A5%A9%A5%EB%A5%C8)では設定されていないので、[パスワード](http://d.hatena.ne.jp/keyword/%A5%D1%A5%B9%A5%EF%A1%BC%A5%C9)変更リンクからアクセスして変えておくこと。

#### [UI](http://d.hatena.ne.jp/keyword/UI)や使用感を雑多に

まず見た目。

- 全部英語
    - ほとんど単語レベルで、難しい文章は無いので、辞書片手で理解できる
- [UI](http://d.hatena.ne.jp/keyword/UI)はわかりやすい
    - その気になれば英語が読めなくても何とかなるレベル？
    - 例:ユーザ設定がしたい場合、ユーザ名表示領域のあたりをいじればそれらしいリンクが見つかる

諸概念について。

- Channel
    - 部屋。[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)メッセージの投稿先であり、掲示板で言えば[スレッド](http://d.hatena.ne.jp/keyword/%A5%B9%A5%EC%A5%C3%A5%C9)に相当するもの
    - [自由](http://d.hatena.ne.jp/keyword/%BC%AB%CD%B3)に [CRUD](http://d.hatena.ne.jp/keyword/CRUD) できる
    - Delete ([Slack](http://d.hatena.ne.jp/keyword/Slack) では Leave という言葉を使っているが)する際、予告なくいきなり消えるので気をつけること
    - general チャンネルという元から存在するチャンネルだけは Leave できない
- Mention
    - @username と書けば username さん宛にメッセージを出せる、みたいな機能
- Invite
    - 新しく参加者を招待すること
    - 招待したい人のメアドを登録することで行う
- 権限
    - 参加者には色んな権限があり、参加者に応じて利用可能操作を制御できる
    - 例:何でもできる人、[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)メッセージは書けるが招待などコアなことはできない人
- Notification
    - 通知のこと
    - Desktop Notification を有効にすると、[タスク](http://d.hatena.ne.jp/keyword/%A5%BF%A5%B9%A5%AF)トレイあたりに通知が表示されるようになる(専用[アプリ](http://d.hatena.ne.jp/keyword/%A5%A2%A5%D7%A5%EA)の[インストール](http://d.hatena.ne.jp/keyword/%A5%A4%A5%F3%A5%B9%A5%C8%A1%BC%A5%EB)は不要)

投稿できるメッセージの種類

- メッセージ…普通のメッセージ
- File…ファイル。[バイナリ](http://d.hatena.ne.jp/keyword/%A5%D0%A5%A4%A5%CA%A5%EA)ファイルも可
- Snippet…コード。言語を指定して、コードを貼っつけて、投稿すれば、その言語で[ハイライト](http://d.hatena.ne.jp/keyword/%A5%CF%A5%A4%A5%E9%A5%A4%A5%C8)されるという仕組み
- Post…[ブログ](http://d.hatena.ne.jp/keyword/%A5%D6%A5%ED%A5%B0)風のエントリ

投稿されたメッセージに対して行えるアクション

- Reaction…絵文字でいいね！とか笑顔とか怒りなどを表現できる。[Facebook](http://d.hatena.ne.jp/keyword/Facebook) のいいねボタンみたいに、一覧から選ぶだけで簡単に投稿可
- Pin…[Twitter](http://d.hatena.ne.jp/keyword/Twitter)でいう[リツイート](http://d.hatena.ne.jp/keyword/%A5%EA%A5%C4%A5%A4%A1%BC%A5%C8)
- Edit/Delete…投稿メッセージは後から[自由](http://d.hatena.ne.jp/keyword/%BC%AB%CD%B3)に編集できる

検索について

- メッセージとファイルに対して実行される
- 軽く、速いので[ストレス](http://d.hatena.ne.jp/keyword/%A5%B9%A5%C8%A5%EC%A5%B9)が無い(メッセージがたくさんあるとどうなるかはわかりません)

#### [エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)について

手順
1.   http://my.slack.com/services/export にアクセスする
2.  start export ボタンを押す

3.  完了したらメールにて通知されるので、記載されてる[URL](http://d.hatena.ne.jp/keyword/URL)から[ダウンロード](http://d.hatena.ne.jp/keyword/%A5%C0%A5%A6%A5%F3%A5%ED%A1%BC%A5%C9)ページにアクセス、[ダウンロード](http://d.hatena.ne.jp/keyword/%A5%C0%A5%A6%A5%F3%A5%ED%A1%BC%A5%C9)する

[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)したデータについて

- 形式は [json](http://d.hatena.ne.jp/keyword/json)
- 制約
    - [アップロード](http://d.hatena.ne.jp/keyword/%A5%A2%A5%C3%A5%D7%A5%ED%A1%BC%A5%C9)したファイルは[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)されない
    - メッセージの[編集履歴](http://d.hatena.ne.jp/keyword/%CA%D4%BD%B8%CD%FA%CE%F2)/削除履歴も[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)されない
    - その他細かい制約は[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)ページに書いてある

[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)したデータの[ディレクトリ](http://d.hatena.ne.jp/keyword/%A5%C7%A5%A3%A5%EC%A5%AF%A5%C8%A5%EA)構造はこんな感じ(+がフォルダ、-がファイル)。チャンネルとユーザの情報と、各チャンネル毎に一日単位でのログが記録される感じ。

+ (チーム名) Slack export (エクスポートした時間)

- channels.json
- integration_logs.json
- users.json

+ (チャンネル名1)

- (YYYY-MM-DD).json
- ....

+ (チャンネル名2)

- ...

+ ...

[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)の頻度だが、一時間に一回の模様。ただし、既に[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)している分をいったん削除すればその限りではない。

#### 一人で(ぼっちで) [Slack](http://d.hatena.ne.jp/keyword/Slack) を使っている人達の感想

既に試された人がいるみたいなので、簡単にググった結果をまとめたい。まとめといっても、単なる引用ではなく、私の解釈も混ぜている。

- メモ[ツール](http://d.hatena.ne.jp/keyword/%A5%C4%A1%BC%A5%EB)として便利
    - 理由1:PCからも[スマホ](http://d.hatena.ne.jp/keyword/%A5%B9%A5%DE%A5%DB)からもどこからでも見れる、書けるから
    - 理由2:検索も軽いし早いから
    - 理由3:コードやファイルも扱えるから
- 特に短いメモをポイポイと記録していく用途に向く
    - とりあえずメモしておいて、後で見返して色々まとめるみたいな使い方
    - でも、さすがに[デスクトップ](http://d.hatena.ne.jp/keyword/%A5%C7%A5%B9%A5%AF%A5%C8%A5%C3%A5%D7)[アプリ](http://d.hatena.ne.jp/keyword/%A5%A2%A5%D7%A5%EA)には勝てない。[デスクトップ](http://d.hatena.ne.jp/keyword/%A5%C7%A5%B9%A5%AF%A5%C8%A5%C3%A5%D7)[アプリ](http://d.hatena.ne.jp/keyword/%A5%A2%A5%D7%A5%EA)で済むなら無理して [Slack](http://d.hatena.ne.jp/keyword/Slack) を使う必要はない
- 色んなサービスと連携できるので[ライフログ](http://d.hatena.ne.jp/keyword/%A5%E9%A5%A4%A5%D5%A5%ED%A5%B0)的に使えるかもしれないね
- 連携した外部サービスから流し込んだデータに入ってる日本語、が検索されないのが惜しい
- 無料だと最新10000件しか見れないので、適宜過去のメモはどっかにまとめてメモ自体は削除する等、運用の工夫が必要だろう
- 無料プランでもその気になれば2年くらい有料プランが使える(誰かに紹介するとポイント（？）がもらえるなどその辺を工夫するみたい)

以下は上記まとめのソース。

#### その他の情報源

Using [Slack](http://d.hatena.ne.jp/keyword/Slack) as a Public Chat
https://wiredcraft.com/blog/using-slack-as-a-public-chat/

[slack](http://d.hatena.ne.jp/keyword/slack) を public chat(誰でも[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)できる)として扱うという話。[slack](http://d.hatena.ne.jp/keyword/slack) の[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)は招待したユーザしか利用できないため、誰でも[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)できるわけでないが、その招待の[プロセス](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%BB%A5%B9)を自動化するサービスを使うことで擬似的に誰でも[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)できるようにする…というアイデアらしい。

何故 [Skype](http://d.hatena.ne.jp/keyword/Skype) ではなく [Slack](http://d.hatena.ne.jp/keyword/Slack) なのか - Qiita

http://qiita.com/yuya_takeyama/items/948c11e184ec7cba1206

[Skype](http://d.hatena.ne.jp/keyword/Skype) を知っているなら、こっちを見た方がイメージしやすいかも。簡単にまとめると、[Slack](http://d.hatena.ne.jp/keyword/Slack) は [Skype](http://d.hatena.ne.jp/keyword/Skype) と比べて以下が優れている。

- 作った部屋が全部見えるし、過去ログも全部参照できる(透明性が高い)
- 自分に関係のあるメッセージ(自分宛のMentionと指定[キーワード](http://d.hatena.ne.jp/keyword/%A5%AD%A1%BC%A5%EF%A1%BC%A5%C9)を含むメッセージ)のみ通知できる(全メッセージを通知、みたいな極端な仕様に苦しむ必要がない)
- 各メッセージに[パーマリンク](http://d.hatena.ne.jp/keyword/%A5%D1%A1%BC%A5%DE%A5%EA%A5%F3%A5%AF)が付く等、ストック性が高い

#### 感想

[Slack](http://d.hatena.ne.jp/keyword/Slack) とは何かを一言で言うなら、[Twitter](http://d.hatena.ne.jp/keyword/Twitter) に [招待制](http://d.hatena.ne.jp/keyword/%BE%B7%C2%D4%C0%A9) + ファイルやコードの投稿 + チームやチャンネルなどの階層構造 + 軽くて早い検索 を追加したイメージだろうか。言い方を変えるなら [Twitter](http://d.hatena.ne.jp/keyword/Twitter) にチーム運用的側面とストック的側面の機能を追加した感じ。[チャット](http://d.hatena.ne.jp/keyword/%A5%C1%A5%E3%A5%C3%A5%C8)というリアルタイムな[コミュニケーション](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DF%A5%E5%A5%CB%A5%B1%A1%BC%A5%B7%A5%E7%A5%F3)を行いつつも、後で情報を見返したり、人単位でアクセスコントロールしたりといったこともできて、なんていうかきめ細かい。痒いところに手が届く感じがする。

[UI](http://d.hatena.ne.jp/keyword/UI) も、なんていうか使ってて楽しくなるような感じ。設定項目のきめ細かさや連携先サービスの多さといった「カスタマイズの余地」もまた、使ってみたくなる[心理](http://d.hatena.ne.jp/keyword/%BF%B4%CD%FD)を刺激している。

以上より、純粋に使ってみて遊んで楽しむことができそうだ。

続いて一人 [Slack](http://d.hatena.ne.jp/keyword/Slack) であるが、[実用](http://d.hatena.ne.jp/keyword/%BC%C2%CD%D1)的には「[ブラウザ](http://d.hatena.ne.jp/keyword/%A5%D6%A5%E9%A5%A6%A5%B6)で手軽に、どこからでも投稿・閲覧できるメモ[ツール](http://d.hatena.ne.jp/keyword/%A5%C4%A1%BC%A5%EB)」として活用できるだろう。それも、自分以外には見えないプライベート用として、だ。

もっとも[ブラウザ](http://d.hatena.ne.jp/keyword/%A5%D6%A5%E9%A5%A6%A5%B6)から使いたいとかどこからでも使いたいといったシチュエーションがない場合は、無理して使うほどのものではない。[デスクトップ](http://d.hatena.ne.jp/keyword/%A5%C7%A5%B9%A5%AF%A5%C8%A5%C3%A5%D7)[アプリ](http://d.hatena.ne.jp/keyword/%A5%A2%A5%D7%A5%EA)なり仕組みなりにはさすがに勝てない。とはいえ、[Slack](http://d.hatena.ne.jp/keyword/Slack) が投稿から閲覧まで洗練された [UI](http://d.hatena.ne.jp/keyword/UI) と機能を提供しているのは事実なので、あまり[アプリ](http://d.hatena.ne.jp/keyword/%A5%A2%A5%D7%A5%EA)や仕組みに詳しくない人は、あえて利用するのもアリだろう。

あと、この手のサービスで懸念となるのは[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)(データの外出し。[Slack](http://d.hatena.ne.jp/keyword/Slack)が死んだらデータも全部死ぬなんてことは避けたい。[バックアップ](http://d.hatena.ne.jp/keyword/%A5%D0%A5%C3%A5%AF%A5%A2%A5%C3%A5%D7)として手元にも退避しておきたい)であるが、ちゃんと行えるので安心だ。ただし、[アップロード](http://d.hatena.ne.jp/keyword/%A5%A2%A5%C3%A5%D7%A5%ED%A1%BC%A5%C9)したファイルは[エクスポート](http://d.hatena.ne.jp/keyword/%A5%A8%A5%AF%A5%B9%A5%DD%A1%BC%A5%C8)されないなど、一部制約があるので、詳しい挙動は事前に確認しておいた方がよいかもしれない。

[Permalink](http://d.hatena.ne.jp/shouh/20151120/1448022243) | [コメント(4)](http://d.hatena.ne.jp/shouh/20151120/1448022243#c) | [トラックバック(0)](http://d.hatena.ne.jp/shouh/20151120/1448022243#tb) | 21:24

[コメントを書く]()

 ![omarukozuki](../_resources/guest_icon.gif)omarukozuki [2016/03/28 17:50](http://d.hatena.ne.jp/shouh/20151120/1448022243#c1459155042) はじめまして　ごく最近Slackをやり始めた非IT系の者です。管理人さんがIT系の方でもよくここまでのブログを書けるなと感服しております。詰まったときはSlackのヘルプセンターに問い合わせた

のですか。私もシコシコと頑張っていきます。

 [2016/03/28 20:49](http://d.hatena.ne.jp/shouh/20151120/1448022243#c1459165775) omarukozuki さん

はじめまして。
感服していただけるとは光栄です。

>詰まったときはSlackのヘルプセンターに問い合わせたのですか。
ヘルプセンターには問い合わせていません。
自分で色々試したり、Slack のヘルプドキュメントを読んでみたり、あとは Google で検索してみたりしています。

お互い頑張っていきましょう。

 ![omarukozuki](../_resources/guest_icon.gif)omarukozuki [2016/04/01 19:03](http://d.hatena.ne.jp/shouh/20151120/1448022243#c1459505008) 管理人さんどうもありがとうございます。

ヘルプセンターに問合せをするとすぐ返事が返ってきます。非IT系の人でも大丈夫でしょう。

一つ質問があるのですが、下記のアプリとはたとえばどういうものがあるでしょうか。
＞無理して使うほどのものではない。デスクトップアプリなり仕組みなりにはさすがに勝てない。

 [2016/04/01 20:36](http://d.hatena.ne.jp/shouh/20151120/1448022243#c1459510614) >デスクトップアプリなり仕組みなりにはさすがに勝てない。

私の好みになりますが CatMemoNote( http://www.cc9.ne.jp/~pappara/catmemonote.html )などがあります。

パソコンにインストールして使用するソフトウェアなので、インターネット経由で使う Slack よりも高速に動作します。また、CatMemoNote にはメモを階層的に分類する機能もあります。さらに Dropbox 等を使えば、他のパソコンからでもメモ内容を同期できたりもします。

なのでメモ用途という意味では、Slack よりも強いかなと個人的に思っています。もっとも「さすがに勝てない」という文章含め、これは私の価値観に則った勝ち負けなので、他の方に当てはまるかどうかはわかりませんが ^^;

スパム対策のためのダミーです。もし見えても何も入力しないでください

 ![ゲスト](../_resources/guest_icon.gif)  ![icon-usermail.gif](../_resources/icon-usermail.gif)  ![icon-userurl.gif](../_resources/icon-userurl.gif)

 ![](../_resources/1b2fe6935822425d13d67424fa7aa295.png) 画像認証

 [トラックバック]() - http://d.hatena.ne.jp/shouh/20151120/1448022243