---
title: PythonでSlackbotを作る(1) – ビットログ
updated: 2018-02-28 12:45:11Z
created: 2018-02-28 12:41:19Z
source: https://blog.bitmeister.jp/?p=3892
author: xyvyx10
tags:
  - Tips
  - Web
---

|     |
| --- |
| # PythonでSlackbotを作る(1) – ビットログ<br>**ソース URL:**  https://blog.bitmeister.jp/?p=3892<br>**作成者:** xyvyx10 |

# PythonでSlackbotを作る(1)

現在、弊社でもSlackを試験的に利用しているのですが、RTM APIを使えばローカルでもbotが作成できることを知ったのでPythonで作ってみようという記事です。

今回は第1回目です。
さて、SlackのBotといえば…
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/00_slack.png)

[![00_slack](../_resources/72ee38d9811770ca8ae3de4a32118a51.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/00_slack.png)

なのですが、残念ながらこのBot君はマスコット的なものなので任意の言葉に反応する程度のカスタマイズできません。もっと賢いBotを作成したいという場合は、SlackのAPIを通じて連携するBotを作成する必要があります。

Slackのbot作成といえばhubotでの作成例が多いのですが、RTM(Real Time Messaging) APIを利用すればWebSocketを用いたイベント受信が行えるので社内PC上でSlack botを稼働させることができます。

[Real Time Messaging API | Slack](https://api.slack.com/rtm)

### Slack Botアカウントの作成

まずはともかくSlack Botアカウントを作成しましょう。
[Bot Users | Slack](https://api.slack.com/bot-users)
既にチームのSlackは開設済で、権限のあるユーザでログインしているものとします。その状態で、下記リンクを開くと、Botアカウントの作成画面が開きます。
[new bot user integration](https://my.slack.com/services/new/bot)
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/01_slack.png)

[![01_slack](../_resources/61ac26295a1042e277be6060ab2251e7.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/01_slack.png)

Botアカウントのユーザ名を入力して、「Add bot integration」を押します。
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/05_slack.png)

[![05_slack](../_resources/dab63ef134e668bfa3d45d7fbdad3daa.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/05_slack.png)

「API Token」は後で作成するBotで用いるのでメモしておきましょう。「Customize Icon」や「Customize Name」で作成したBotの名前やアイコン画像を変更できます。変更内容を「Save Integration」で保存します。

この後のテスト用にプライベートチャンネルを作成して作成したBotを登録しておきましょう。
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/06_slack.png)

[![06_slack](../_resources/9cfae8b8f500a3fc3adc7b00c7b81bcd.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/06_slack.png)

Slack Bot環境の構築
さて、いよいよBotの作成にとりかかります。今回の導入環境はこちらです。

```
$ lsb_release -drc
Description:    Ubuntu 14.04.3 LTS
Release:        14.04
Codename:       trusty
```

言語は使い慣れたPythonにします。しかも日本語の扱いで面倒な処理はしたくないので3系を使います。

```
$ python3 -V
Python 3.4.3
```

以下のPythonライブラリを使います。
[lins05/slackbot](https://github.com/lins05/slackbot)
※本記事執筆時点(2016/3/8)のバージョンは「0.3.1」です。
導入はpipで行います。今回はインストール直後の環境なのでPython3用のpipもインストールしています。

```
$ sudo apt-get install python3-pip
$ sudo pip3 install slackbot
```

### Slack Botを起動してみる

任意の場所にbot用のディレクトリを任意の名称で作成します。

```
$ mkdir bossan
$ cd bossan/
$ touch slackbot_settings.py
$ touch run.py
```

“slackbot_settings.py”に設定を記述します。API_TOKENは先程メモした値を設定してください。

```

# -*- coding: utf-8 -*-

API_TOKEN = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

default_reply = "スイマセン。其ノ言葉ワカリマセン"
```

“run.py”にBotを起動するコードを記述します。

```

# -*- coding: utf-8 -*-

from slackbot.bot import Bot
def main():
    bot = Bot()
    bot.run()

if __name__ == "__main__":
    main()
```

いよいよ、Botの起動です。
`$ python3 run.py`
メンションの特定の言葉に反応したり、チャンネルに投稿された言葉に反応したりします。
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/07_slack.png)

[![07_slack](../_resources/7c4ca40385464b27f6680f6ff3e5d04c.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/07_slack.png)

今回は疎通確認なのでSlackbotライブラリのデフォルトプラグイン(slackbot.plugin)の動作を見ただけなのですが、当然自分でプラグインを登録することで拡張することができます。ということで、次回はプラグインを作成してみましょう。

|     |
| --- |
| # PythonでSlackbotを作る(2) – ビットログ<br>**ソース URL:**  https://blog.bitmeister.jp/?p=3911<br>**作成者:** xyvyx10 |

# PythonでSlackbotを作る(2)

現在、弊社でもSlackを試験的に利用しているのですが、RTM APIを使えばローカルでもbotが作成できることを知ったのでPythonで作ってみようという記事です。

今回は第2回目です。
前回でSlackbotが稼働する環境はできたので、今回は独自機能をプラグインを作成してみましょう。

### プラグイン

今回の記事で利用しているPythonのSlackbotライブラリはプラグイン機構が備わっています。その機構を用いて独自にDMやBotが参加しているチャンネル（グループ含む）内でのメンションや投稿内の特定の言葉に反応する機能を実装することができます。

まずは前回作成したbot用のディレクトリにプラグイン配置用ディレクトリを作成します。

```
$ cd bossan/
$ mkdir plugins
$ touch plugins/__init__.py
```

Slackbotのプラグインとして読み込ませるディレクトリはモジュールである必要があるので「__init__.py」が必要になります。これは空ファイルでいいので作成しておきます。さて、プラグイン配置ディレクトリを作成したら、実際にプラグインスクリプトを作成しましょう。

`$ vi plugins/bossan_mention.py`

```
from slackbot.bot import respond_to

@respond_to('疲れた')
@respond_to('つかれた')
def cheer(message):
    message.reply('ファイト!')
```

関数”cheer()”に対して、”respond_to”というデコレータが付与されています。

> A function decorated with respond_to is called when a message matching the pattern is sent to the bot (direct message or @botname in a channel/group chat)

[lins05/slackbot: A chat bot for Slack (https://slack.com).](https://github.com/lins05/slackbot)

“respond_to”デコレータの引数にマッチするキーワードを指定することでプラグインロード時に関数がBotに対するメンションに反応するように登録されます。キーワードの指定は正規表現で行うことも可能です。また、今回のサンプルのようにデコレータを複数付与することで複数キーワードに対応させることもできます。

最後に、プラグインロードが行われるように“slackbot_settings.py”に以下を追記します。

```
PLUGINS = [
    'plugins',
]
```

Slackbotを起動して、メンションを送ってみましょう。
`$ python3 run.py`
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/08_slack.png)

[![08_slack](../_resources/6256f96a2b576e7becf8b3065b59779d.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/08_slack.png)

一匹余計なBotが返信してきてますが、今回作成したBotが意図した通りに反応しているのがわかります。
もう一つプラグインスクリプトを作成しましょう。
`$ vi plugins/bossan_listen.py`

```
from slackbot.bot import listen_to

@listen_to('あきらめたら')
@listen_to('諦めたら')
def anzai(message):
    message.send('そこで試合終了ですよ。')

@listen_to('いいですか')
def reaction(message):
    message.react('+1')
```

関数”anzai()”と”reaction()”に対して、”listen_to”というデコレータが付与されています。

> A function decorated with listen_to is called when a message matching the pattern is sent on a channel/group chat (not directly sent to the bot)

[lins05/slackbot: A chat bot for Slack (https://slack.com).](https://github.com/lins05/slackbot)

“listen_to”デコレータの引数にマッチする言葉を指定することでプラグインロード時に関数がBotが参加しているチャンネルへの投稿に反応するように登録されます。”respond_to”デコレータと同じく指定は正規表現で行うことが可能です。

プラグインの読込は起動時のみ行われるので、Slackbotを再起動してチャンネルに投稿してみましょう。
`$ python3 run.py`
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/09_slack.png)

[![09_slack](../_resources/581bd7096e50646d33116c859bc948d4.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/09_slack.png)

またしても余計なBotが(しかも先に)反応していますが、今回も作成したBotが意図した通りに反応しているのがわかります。
なお、今回はあえてデコレータ毎にスクリプトを分けましたが、もちろん同じファイル内で定義しても問題はありません。
最後に、今回のサンプルでは各関数内で以下のメソッドを使っています。

- message.reply()
- message.send()
- message.react()

「reply()」はキーワードとマッチした投稿の送信相手へのリプライとしてメッセージを送信します。「send()」は投稿されたチャンネルに対する投稿としてメッセージを送信します。「react()」はマッチした投稿に対してリアクションを取ります。この時指定する絵文字は「:」で囲わないので注意しましょう。

ということで、これでキーワード検出契機でのBotは作成できました。簡単ですよね。

あれ？でも…これって元々存在するBotとあんまり変わらないんじゃ…。い、いやだなぁ、そんな訳ないじゃないですかー。ということで、次回はBot自らメッセージ送信するサンプルを作ってみましょう。

|     |
| --- |
| # PythonでSlackbotを作る(3) – ビットログ<br>**ソース URL:**  https://blog.bitmeister.jp/?p=3948<br>**作成者:** xyvyx10 |

# PythonでSlackbotを作る(3)

現在、弊社でもSlackを試験的に利用しているのですが、RTM APIを使えばローカルでもbotが作成できることを知ったのでPythonで作ってみようという記事です。

今回は第3回目です。

前回はSlackbotのプラグインとして、DMやBotが参加しているチャンネル（グループ含む）内でのメンションや投稿内の特定の言葉に反応する機能を実装しましたが、Botとしては、任意の契機で投稿してくれる機能も欲しいですよね。ケースとしては時報であったり、リマインダだったりGitリポジトリへのpushの時だったりと色々と使えそうです。

残念ながら、今回利用しているSlackbotライブラリに自体はそのような機能を持っていないのですが、Slackbotライブラリが内部で利用しているSlackerライブラリを用いてSlack APIを使えばやりたいことは実現できます。

[os/slacker: Full-featured Python interface for the Slack API](https://github.com/os/slacker)

[Slack API](https://api.slack.com/)

### Slackerで投稿(その1)

Slackerライブラリを利用するのはどのディレクトリでも問題はないのですが、Bot用にAPIトークンを記述したファイルをそのまま参照したいのでbot用のディレクトリに移動します。

```
$ cd bossan/
$ vi bossan_post1.py
```

プライベートグループに投稿してみます。

```

# -*- coding: utf-8 -*-

from slacker import Slacker
import slackbot_settings

if __name__ == '__main__':
    slack = Slacker(slackbot_settings.API_TOKEN)
    slack.chat.post_message('bossan_test','こんにちわー')
```

`$ python3 bossan_post1.py`
あれ？アイコンと名前が違いますね。引数を追加してみましょう。
`$ vi bossan_post2.py`

```

# -*- coding: utf-8 -*-

from slacker import Slacker
import slackbot_settings

if __name__ == '__main__':
    slack = Slacker(slackbot_settings.API_TOKEN)
    slack.chat.post_message(
        'bossan_test',
        'こんにちわー',
        as_user=True
        )
```

今度は引数に「as_user」をTrueで指定します。
`$ python3 bossan_post2.py`
おお、ちゃんと名前とアイコンが表示されました。でも、時にはデフォルトの名前とアイコン以外を使いたい時もありますよね？そんな時は…
`$ vi bossan_post3.py`

```

# -*- coding: utf-8 -*-

from slacker import Slacker
import slackbot_settings

if __name__ == '__main__':
    slack = Slacker(slackbot_settings.API_TOKEN)
    slack.chat.post_message(
        'bossan_test',
        'こんにちわー',
        username='ボッサン',
        icon_emoji=':simple_smile:',
        )
```

引数に「username」と「icon_emoji」を指定します。
`$ python3 bossan_post3.py`
と、デフォルトとは別のものでも使えます。
投稿先は第一引数で指定しているのですが、当然普通にチャンネルやDMも送ることができます。

[chat.postMessage method | Slack](https://api.slack.com/methods/chat.postMessage#channels)

投稿先の指定は名前でもIDでもよいのですが、今回は名前で指定してみました。なお、投稿先をチャンネルやグループではなく特定のユーザに対するDMとする場合は、as_user=Trueにしないと送信元がAPIトークンを指定したBotではなく、標準のslackbotになるので注意しましょう。

### Slackerで投稿(その2)

さて、これで投稿はできましたがなんだかシンプルでさみしいですね。実はSlackではAttachementsという仕組みを使うともう少しリッチな形式を指定した投稿ができます。

[Message Attachments | Slack](https://api.slack.com/docs/attachments)
`$ vi bossan_post4.py`

```

# -*- coding: utf-8 -*-

from slacker import Slacker
import slackbot_settings

if __name__ == '__main__':

    slack = Slacker(slackbot_settings.API_TOKEN)
    attachment = {
        'author_name': 'ビットログ',
        'author_icon': 'https://XXXXXXXXXXXX/blog/bitlogo.png',
        'author_link': 'https://blog.bitmeister.jp/?p=3892',
        'title': 'PythonでSlackbotを作る(1)',

        'text': '現在、弊社でもSlackを試験的に利用しているのですが、RTM APIを使えばローカルでもbotが作成できることを知ったのでPythonで作ってみようという記事です。\n今回は第1回目です。',

        'image_url': 'https://XXXXXXXXXXXX/blog/07_slack.png',
        'color': '#1e2c5b'
    }

    slack.chat.post_message(
        'bossan_test',
        'ブログが更新されました',
        as_user=True,
        attachments=[attachment]
    )
```

引数に「attachments」にdictの配列を指定します。dictに設定するキー項目は「Message Attachments」を参照してください。なお、配列を指定しているのでおわかりかと思いますが、複数のAttachment(dict)を設定することができます。

`$ python3 bossan_post4.py`
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/10_slack.png)

[![10_slack](../_resources/d86064e17cc1fddf2247091fc47eb90f.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/10_slack.png)

このように、タイトルや画像を添付した投稿を行うことが可能です。

※上記サンプルでは「author_icon」と「image_url」のURLは擬似なので環境に応じで変更してください。なお、参照先のURLによってはSlack側からの画像取得に時間がかかり送信エラーとなるケースが見受けられたので、同じ症状が発生した場合はdropbox等のクラウドストレージで共有して試してみると改善されるかもしれません。

ということで、Slackerライブラリを使えば、簡単に投稿できることができました。次回はいよいよ応用編に突入します。

|     |
| --- |
| # PythonでSlackbotを作る(4) – ビットログ<br>**ソース URL:**  https://blog.bitmeister.jp/?p=3981<br>**作成者:** xyvyx10 |

# PythonでSlackbotを作る(4)

現在、弊社でもSlackを試験的に利用しているのですが、RTM APIを使えばローカルでもbotが作成できることを知ったのでPythonで作ってみようという記事です。

今回はついに最終回です。
応用編として、最後に実践的な(?)機能を実装してみましょう。

### Slack使っていてちょっと面倒くさいケース

SlackだけではなくFacebookやLINEもそうなのですが、絵文字やスタンプが使えるのは文字を打たなくて便利なのですが、
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/11_slack.png)

[![11_slack](../_resources/eda267b8deb74b188b9d3cf3f92557e7.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/11_slack.png)

こんな感じでリアクションに統一が取れてないと「これはどっちなんだろう？」と悩ましい場合がでてきますよね。最初から質問投稿にリアクションで選択肢が提示されていれば迷いにくいと思いませんか？

実は世の中には同じことを考えている人が既にいて、Slack Appとして公開されています。
[Simple Poll | Slack](https://slack.com/apps/A0HFW7MR6-simple-poll)

しかし、このアプリを利用するにはIntegrationを一つ消費してしまいますし、何よりも外部のサーバに投稿を一旦フックされるので、内容次第では使うのが躊躇われるケースが出てくるかと思います。ということで、今回はBotに指定書式でメンションを送ると投票可能な投稿を生成して送信してくれる「アンケート投稿コマンド」機能を実装してみましょう。

### アンケート投稿コマンド

```
$ cd bossan/
$ vi plugin/bossan_poll.py
```

```

# -*- coding: utf-8 -*-

from slackbot.bot import respond_to
import csv

EMOJIS = (
    'one',
    'two',
    'three',
    'four',
    'five',
)

@respond_to('poll (.*)')
def poll(message, params):
    args = [row for row in csv.reader([params], delimiter=' ')][0]
    if len(args) < 3:
        message.reply('使用方法: poll タイトル 質問 [質問 ...]')
        return

    title = args.pop(0)
    options = []
    for i, o in enumerate(args):
        options.append('* :{}: {}'.format(EMOJIS[i], o))

    # ref https://github.com/lins05/slackbot/issues/43
    send_user = message.channel._client.users[message.body['user']][u'name']
    post = {
        'pretext': '{}さんからアンケートがあります。'.format(send_user),
        'title': title,
        'author_name': send_user,
        'text': '\n'.join(options),
        'color': 'good'
    }

    ret = message._client.webapi.chat.post_message(
        message._body['channel'],
        '',
        username=message._client.login_data['self']['name'],
        as_user=True,
        attachments=[post]
    )
    ts = ret.body['ts']

    for i, _ in enumerate(options):
        message._client.webapi.reactions.add(
            name=EMOJIS[i],
            channel=message._body['channel'],
            timestamp=ts
        )
```

respond_toデコレータで特定のキーワード「poll 引数」を含むメンションを受けるとコマンドが実行されるイメージです。処理としては投票メッセージをAttachment形式で生成して送信、送信した投稿に対してリアクションを付与しているだけなのですが、現時点のSlackbotライブラリでは以下の問題があります。

- Bot自身の投稿に対してリアクションを付けることができない
- Bot自身の投稿のタイムスタンプが取得できない

そのため、今回のサンプルではメッセージの投稿とリアクションを付ける部分は、Slackbotライブラリの提供メソッドを利用せずに内部で保持しているSlackerのインスタンスを直接操作して処理を行なっています。

`$ python3 run.py`
[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/12_slack.png)

[![12_slack](../_resources/5582ee36ebd8e1961ba6c1953768c5fc.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/12_slack.png)

このようにメンションとして指定書式でコマンドを送ればリアクションで投票可能なアンケートとして投稿されます（リアクションはBotがつけているのでデフォルトで+1状態となります)。

[(L)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/13_slack.png)

[![13_slack](../_resources/5a38ea40c4ff11a65ad5e4fc7a0e4c87.png)](https://blog.bitmeister.jp/wp-content/uploads/2016/03/13_slack.png)

ただのリアクション付き投稿ですので、このように選択肢外のリアクションを付けられてしまう場合もありますが、回答がリアクションに統一されるだけでもスッキリするのではないでしょうか。

ということで、全4回に分けてPythonによるSlackbot作成の記事をお送りしましたがいかがでしたでしょうか？ Pythonを使ったのはあくまで筆者の趣味ですが、RTM APIを用いたBot作成や今回のアンケート機能の実装は別の言語でも容易に可能だと思いますので皆さんどんどん社内用のBotを作ってみてはいかがでしょうか？