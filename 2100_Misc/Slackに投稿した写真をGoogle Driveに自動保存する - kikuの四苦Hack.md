---
title: Slackに投稿した写真をGoogle Driveに自動保存する - kikuの四苦Hack
updated: 2018-02-28 11:52:01Z
created: 2018-02-28 11:52:01Z
source: http://kiku11.hatenablog.jp/entry/2017/02/12/215902
author: xyvyx10
tags:
  - Tips
  - Web
---

# kikuの四苦Hack

## ガジェットやプログラミングで遊ぶ

最近、相方さんと連絡を取るのにSlackを使っています。チャンネルで話題を分けられるのが便利ですね。プライベートでSlackを使ってみた系の有名なエントリはこれです。

確かに、天気予報を朝に流したり、気になるワードに関連するニュースを流すチャンネルを作ったり、[bot](http://d.hatena.ne.jp/keyword/bot)と戯れたり、と好きな機能を開発できるのが楽しいです。（[docomo](http://d.hatena.ne.jp/keyword/docomo)の雑談[API](http://d.hatena.ne.jp/keyword/API)を入れたhubotがかわいいです）

**が、しかしですよ？**SlackにはLINEでいうアルバム機能がないのです。
（ないですよね？あったら教えてください＼(^o^)／）
と、いうわけでSlackの[API](http://d.hatena.ne.jp/keyword/API)群を使って、

- 自動でSlackのチャンネルから画像を取得
- [Google Drive](http://d.hatena.ne.jp/keyword/Google%20Drive)の共有フォルダに格納
- これを定期的に自動実行

することを目指します。
結果、一応できるにはできたのですが、スマートでない点がいくつか...

- サーバ化しているラズパイから定期実行（自前サーバが必要）
- ラズパイで[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)を使うために課金（$4.99）が必要

これらが許せる方は以下のエントリをどうぞ^^ ちなみに、[Google](http://d.hatena.ne.jp/keyword/Google)  [API](http://d.hatena.ne.jp/keyword/API)を使えば課金なしでもラズパイから[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)が使えるようですが、情報が少なくて挫折しましたorz また時間を見つけて検討します...!!

実行結果↓↓（実行してる感はない）各写真のidがファイル名に入っているので念のためモザイク^^
[(L)](http://f.hatena.ne.jp/kiku11/20170212215100)

[![f:id:kiku11:20170212215100p:image](../_resources/20170212215100.png)](http://f.hatena.ne.jp/kiku11/20170212215100)

手順は以下の通りです。一番下にこの2から5を実現するための[Python](http://d.hatena.ne.jp/keyword/Python)[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)があります。

1. Slack [API](http://d.hatena.ne.jp/keyword/API) tokenを入手
2. Slack [API](http://d.hatena.ne.jp/keyword/API) file.listで画像ファイルを一覧を取得

3. Slack [API](http://d.hatena.ne.jp/keyword/API) file.sharedPublicURLで公開用URLを入手

4. 公開URLから入手した画像を[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)に保存

5. Slack [API](http://d.hatena.ne.jp/keyword/API) file.revokePublicURLで公開用URLを無効化

### 1. Slack [API](http://d.hatena.ne.jp/keyword/API) tokenを入手

毎度お馴染み先人の知恵。これは簡単。

### 2. Slack [API](http://d.hatena.ne.jp/keyword/API) file.listで画像ファイルを一覧を取得

Slackの[API](http://d.hatena.ne.jp/keyword/API)を使います。
https://api.slack.com/methods/files.list

Testerタブで上で取得したtokenを含むパラメータを設定すると、条件に合うファイルリストを[json](http://d.hatena.ne.jp/keyword/json)形式で得るためのリクエストURLが生成されます。特定の日時以降・以前、ファイルタイプ、ソースとなるチャンネルなどが設定できます。このURLから得られた[json](http://d.hatena.ne.jp/keyword/json)の、"id": の後の英数のidが画像ファイルを取得するためのキーになります。

### 3. Slack [API](http://d.hatena.ne.jp/keyword/API) file.sharedPublicURLで公開用URLを入手

Slackの[API](http://d.hatena.ne.jp/keyword/API)を使います。
https://api.slack.com/methods/files.sharedPublicURL

上で取得したidをこの[API](http://d.hatena.ne.jp/keyword/API)のパラメータとして与え、画像を公開するためのリクエストURLを取得します。リクエストの結果得られる[json](http://d.hatena.ne.jp/keyword/json)ファイルの中身から画像の公開URLが得られます。この後、この公開URLは無効化しますが、一定時間だれでもアクセスできる状態になることにご注意ください（とはいえ、どこかに通知されるわけでもないですし、そこまで神経質にならなくてもよいかと思います）。

[json](http://d.hatena.ne.jp/keyword/json)ファイルの"[permalink](http://d.hatena.ne.jp/keyword/permalink)_public": のあとに続くURLが画像の公開URLになります。このURLのアクセス先ページのHTMLから画像自身のURLを取得します（ややこしい...）。HTMLの中の img src= のあとのURLが画像自身のURLです。

### 4. 公開URLから入手した画像を[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)に保存

画像のURLがわかればあとは簡単...と思ったのですが、実はここが一番ハマりました... 画像の取得自体は簡単です（URLにブラウザからアクセスからの画像を保存 or [Python](http://d.hatena.ne.jp/keyword/Python)でrequests.getなど）。さーてあとは[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)にラズパイからアクセスするだけ...

**そして死んだ**

[Google](http://d.hatena.ne.jp/keyword/Google)  [API](http://d.hatena.ne.jp/keyword/API)わかりくすぎ...orz overGriveを使えばとりあえずラズパイから[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)を使えますが、トライアル期間以降は課金が必要です。ローカル保存でいいよって方やサーバが[Windows](http://d.hatena.ne.jp/keyword/Windows)や[Mac](http://d.hatena.ne.jp/keyword/Mac)だよって方はこのへん無視で[OK](http://d.hatena.ne.jp/keyword/OK)です。

### 5. Slack [API](http://d.hatena.ne.jp/keyword/API) file.revokePublicURLで公開用URLを無効化

Slackの[API](http://d.hatena.ne.jp/keyword/API)を使います。
https://api.slack.com/methods/files.revokePublicURL
3. と同じ手順なので割愛。リクエストURLにアクセスするだけで[OK](http://d.hatena.ne.jp/keyword/OK)です。

長くなりましたが、とりあえず今まで投稿してきた画像を全て取得する[Python](http://d.hatena.ne.jp/keyword/Python)[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)は以下です。

# coding:utf-8

import time
import datetime
import urllib2
import shutil
import requests
import re
#################################################
#

# parameters

#
#################################################
output_folder = '/path/to/directory'
channel = 'channel_ID'
slack_API_token = 'Slack_API_token'
#################################################
#

# def

#
#################################################
def download_imgurl(url, file_name):
res = requests.get(url, stream=True)
if res.status_code == 200:
with open(file_name, 'wb') as file:
shutil.copyfileobj(res.raw, file)
return 1
else:
return -1
def revoke_all(file_list):
for file in file_list:

# revoke the shared public url.

revoke_url = "https://slack.com/api/files.revokePublicURL?token=%s&file=%s&pretty=1" % (slack_API_token, file)

response4 = urllib2.urlopen(revoke_url).read()
#################################################
#

# main

#
#################################################

# get image file ids.

file_list_url = "https://slack.com/api/files.list?token=%s&channel=%s&types=images&pretty=1" % (slack_API_token, channel)

response1 = urllib2.urlopen(file_list_url).read()
id_pattern = re.compile(r'\"id\": \"([a-zA-Z0-9]+)\",\n')
file_list = id_pattern.findall(response1)

# revoke public url (if present).

revoke_all(file_list)

# show infomation

print '[INFO] ' + str(len(file_list)) + ' files will be downloaded from Slack.'

# download images to the specified local folder.

for file in file_list:
try:

# get shared public url.

public_url = "https://slack.com/api/files.sharedPublicURL?token=%s&file=%s&pretty=1" % (slack_API_token, file)

response2 = urllib2.urlopen(public_url).read()

pubhtml_pattern = re.compile(r'\"permalink_public\": \"([a-zA-Z0-9!-/:-@¥[-`{-~]+)\",\n')

img_html_url = pubhtml_pattern.findall(response2)[0].replace('\\', '')

# get timestamp

timestamp_pattern = re.compile(r'\"timestamp": ([0-9]+),\n')
timestamp = timestamp_pattern.findall(response2)[0]
timestamp = datetime.datetime.fromtimestamp(float(timestamp))
timestamp = timestamp.strftime('%Y-%m-%d-%H-%M-%S')

# get image url.

response3 = urllib2.urlopen(img_html_url).read()
puburl_pattern = re.compile(r'<img src=\"([a-zA-Z0-9!-/:-@¥[-`{-~]+)\">\n')
img_url = puburl_pattern.findall(response3)[0]

# download image

download_imgurl(img_url, output_folder + str(timestamp) + '-' + file + '.jpg')

# revoke the shared public url.

revoke_url = "https://slack.com/api/files.revokePublicURL?token=%s&file=%s&pretty=1" % (slack_API_token, file)

response4 = urllib2.urlopen(revoke_url).read()
except: pass

ちなみに、パラメータでチャンネルを指定しているのは、こうしないとコメント付きの画像ファイルを検索できなかったからです（Slack [API](http://d.hatena.ne.jp/keyword/API)のバグ？）。またコメント付きの画像の情報（[json](http://d.hatena.ne.jp/keyword/json)内）には、画像ファイルid以外のid番号（なんのid かは知りません...）が含まれているようで、これで3. を実行するとエラーになるため、try exceptで回避しています。チャンネルIDの取得方法は以下を参照くださいませ〜

ついでに、毎日午前3時に24時間前から現在までにSlackに投稿された画像を検索してダウンロードする[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)。サーバで動かす用です。

# coding:utf-8

import time
import datetime
import urllib2
import shutil
import requests
import re
#################################################
#

# parameters

#
#################################################
output_folder = '/path/to/directory'
channel = 'channel_ID'
slack_API_token = 'Slack_API_token'
#################################################
#

# def

#
#################################################
def download_imgurl(url, file_name):
res = requests.get(url, stream=True)
if res.status_code == 200:
with open(file_name, 'wb') as file:
shutil.copyfileobj(res.raw, file)
return 1
else:
return -1
def revoke_all(file_list):
for file in file_list:

# revoke the shared public url.

revoke_url = "https://slack.com/api/files.revokePublicURL?token=%s&file=%s&pretty=1" % (slack_API_token, file)

response4 = urllib2.urlopen(revoke_url).read()
#################################################
#

# main

#
#################################################
while(1):

# get current datetime.

dt = datetime.datetime.now()
if (dt.hour == 3 and dt.minute == 0):
ts_current = int(time.mktime(dt.timetuple()))
ts_1daybef = int(ts_current - 86400)

# get image file ids.

file_list_url = "https://slack.com/api/files.list?token=%s&ts_from=%d&channel=%s&types=images&pretty=1" % (slack_API_token, ts_1daybef, channel)

response1 = urllib2.urlopen(file_list_url).read()
id_pattern = re.compile(r'\"id\": \"([a-zA-Z0-9]+)\",\n')
file_list = id_pattern.findall(response1)
if len(file_list) == 0:

print '[INFO] No update was found. Datetime: ' + dt.strftime('%Y-%m-%d %H:%M:%S')

time.sleep(84100)
continue

# revoke public url (if present).

revoke_all(file_list)

# download images to the specified local folder.

for file in file_list:
try:

# get shared public url.

public_url = "https://slack.com/api/files.sharedPublicURL?token=%s&file=%s&pretty=1" % (slack_API_token, file)

response2 = urllib2.urlopen(public_url).read()

pubhtml_pattern = re.compile(r'\"permalink_public\": \"([a-zA-Z0-9!-/:-@¥[-`{-~]+)\",\n')

img_html_url = pubhtml_pattern.findall(response2)[0].replace('\\', '')

# get timestamp

timestamp_pattern = re.compile(r'\"timestamp": ([0-9]+),\n')
timestamp = timestamp_pattern.findall(response2)[0]
timestamp = datetime.datetime.fromtimestamp(float(timestamp))
timestamp = timestamp.strftime('%Y-%m-%d-%H-%M-%S')

# get image url.

response3 = urllib2.urlopen(img_html_url).read()
puburl_pattern = re.compile(r'<img src=\"([a-zA-Z0-9!-/:-@¥[-`{-~]+)\">\n')
img_url = puburl_pattern.findall(response3)[0]

# download image

download_imgurl(img_url, output_folder + str(timestamp) + '-' + file + '.jpg')
print '[INFO] %s.jpg is uploaded from Slack.' % str(timestamp)

# revoke the shared public url.

revoke_url = "https://slack.com/api/files.revokePublicURL?token=%s&file=%s&pretty=1" % (slack_API_token, file)

response4 = urllib2.urlopen(revoke_url).read()
except: pass
time.sleep(86100)
else:time.sleep(60)

うーん、もうちょっとスマートにやりたいけど、とりあえずはこんなもんでしょうか。とりあえずはうまく動いて、[Google drive](http://d.hatena.ne.jp/keyword/Google%20drive)に画像が上がってきています。本当は[Google](http://d.hatena.ne.jp/keyword/Google)  [API](http://d.hatena.ne.jp/keyword/API)を使ってやりたいのですがそちらはまた時間があればやってみます（やらないフラグ...）。