---
title: Slackの古くなったファイルを自動で削除してみた - LYNCSブログ
updated: 2018-02-25 02:09:11Z
created: 2018-02-25 02:09:11Z
source: http://lyncs.hateblo.jp/entry/2017/06/04/191421
author: xyvyx10
tags:
  - Tips
  - Web
---

# LYNCSブログ

## 慶應義塾大学公認団体 宇宙科学総合研究会（LYNCS）のブログです。

## 概要

Slack(無料プラン)の容量制限をオーバーしないために、**特定チャンネルの、ある日数より古いファイルを削除**する[bot](http://d.hatena.ne.jp/keyword/bot)を作成した記録です。 GAS([Google Apps](http://d.hatena.ne.jp/keyword/Google%20Apps) Script)で毎日タイマー起動するように設定し、**ファイル容量を管理するコストを大幅に抑える**ことができます。

### 対象読者

- Slackを普段使っている方
- [JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)を少し使ったことがある方

## ねらい

LYNCSでは、2015年11月ごろから[Slack](https://slack.com/)をメインの連絡ツールとして利用しています。 Slackは企業向けのチャットサービスではありますが、無料プランでもかなり便利に使えるのが嬉しいですよね。

しかし、少人数で数ヶ月ほどの利用ならいざ知らず、人数が増え長く使い続けるとある問題にぶち当たります。**ファイルストレージの5GB容量制限**です。

![f:id:lyncs:20170604130347p:plain](../_resources/20170604130347.png)
*LYNCS SlackチームのStatistics*

画像は現在のLYNCSチームの統計ですが、数千のファイルが存在していることがわかります。 何も対策せずに使っていると、「**5GB超えてるぞ金払えコラ(意訳)**」と怒られることもしばしばでした。 しかし、Slack有料プランの価格設定は企業向けとなっており、学生団体にとってはおいそれと払える額ではありません。

従って**いらないファイルを削除し、無料プランの制限内で使うしかない**ことになります。 でも、Slackにはファイルの一括削除機能がなく、ポチポチ手作業で消すことしかできません。 「ファイルを選ぶ→削除ボタンを押す→削除の確認ボタンを押す」を数百回も繰り返すのはさすがに耐えがたい。

![f:id:lyncs:20170604130316p:plain](../_resources/20170604130316.png)
*ファイル削除の確認メッセージ*

そこで、**SlackのWeb [API](http://d.hatena.ne.jp/keyword/API)**を利用して古いファイルを消す仕組みを作ることにしました。

## 実行環境

- [Google Apps Script(GAS)](http://script.google.com/)

GASを知らない人のために簡単に説明すると、「**[Google](http://d.hatena.ne.jp/keyword/Google)のサーバーで[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)を動かせる夢のようなサービス**」です。 一応時間制限はあるものの、無料で24時間いつでも[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)が動きます。 サーバーを持たなくても、[Google](http://d.hatena.ne.jp/keyword/Google)アカウントさえあれば簡単な[Bot](http://d.hatena.ne.jp/keyword/Bot)が作れてしまうのです。

GASでSlack向けの[Bot](http://d.hatena.ne.jp/keyword/Bot)を作った事例は既に多数あって、ライブラリも存在しています。 GASの具体的な操作などについてはあまり書かないので、以下の記事などをご覧ください。

## Slack Web [API](http://d.hatena.ne.jp/keyword/API)を使ってみる

Slackには、とても便利なWeb [API](http://d.hatena.ne.jp/keyword/API)が存在します。 コマンド操作は敷居が高いと思うかもしれませんが、実はWeb上に素晴らしいテスト環境が用意されているので全く心配いりません。

[API Methods](https://api.slack.com/methods)ページに使えるメソッドの一覧があり、それぞれのページで詳細を閲覧できます。 実行するには**Token**を持っている必要があるので、[発行ページ](https://api.slack.com/custom-integrations/legacy-tokens)で作っておきましょう。

例えば、[`files.list`](https://api.slack.com/methods/files.list)の動作を試してみます。 “Tester"と書かれたタブでオプション(token以外は空欄でも可)を入力して`Test Method`をクリックすると、結果が下のテキストエリアに出てきます。

![f:id:lyncs:20170604130311p:plain](../_resources/20170604130311.png)
*[API](http://d.hatena.ne.jp/keyword/API)テスター*

親切にURLまで表示してくれています。 これにアクセスすれば自分のチームのファイル一覧が手に入るというわけです。 さて、リスト先頭の"image.[png](http://d.hatena.ne.jp/keyword/png)"を削除してみましょう。

![f:id:lyncs:20170604130334p:plain](../_resources/20170604130334.png)
*`files.list`の実行結果*

ファイルの削除には[`files.delete`](https://api.slack.com/methods/files.delete)を使います。 ファイルの`"id"`が必要になるので、`files.list`で出てきたものをコピペします。

![f:id:lyncs:20170604130327p:plain](../_resources/20170604130327.png)
*`files.delete`の実行結果*

`"ok": true`としか返ってきませんが、**これで削除が完了しています**。 とっても手軽ですね。
なお、削除に限らずSlackのデータを変更するメソッドをテストすると**実際に変更されてしまうので、試す場合は十分気をつけてください！！！！！**

## 削除を行うプログラムの流れ

[API](http://d.hatena.ne.jp/keyword/API)の使い方が分かったので、一連の流れをプログラムにしていきます。 基本的には
1. ファイル一覧を取得する(`files.list`)
2. 見つけたファイルの数だけファイル削除を繰り返す(`files.delete`)
だけですが、いくつか問題があるので実際はもう少し複雑です。

### 不要なファイルを絞り込む

チームのファイルを全部消してしまっては、必要なものまで消えてしまい混乱が起こるので、不要なものだけに絞ります。

幸い、LYNCSのSlackは業務系のチャンネル(`#general`など)と雑談系のチャンネル(`#random`など)が分かれているので、雑談系にあがったファイルだけを削除すればよさそうです。 それでも、写真を貼った瞬間に消されては雑談にならないので、特定日数以前のファイルだけを対象にします。

### チャンネルを指定する

特定チャンネルのファイル一覧を取り出すには、`files.list`に`"channel"`を指定します。 チャンネルの指定はファイルと同様IDで行います。 チャンネルのIDなんて普通は覚えていないので、これも[API](http://d.hatena.ne.jp/keyword/API)で調べることにしますが、少し面倒です。

Slackのチャンネルには、公開(Public)のものと非公開(Private)のものがあります。[API](http://d.hatena.ne.jp/keyword/API)では前者は`channel`・後者は`group`という扱いで、メソッドを使い分けねばなりません。 そこで、チャンネルの名称からIDを得る方法はこうなります:

1. チャンネル一覧を取得する(`channels.list`)
2. 探している名称と一致するチャンネルがあるかどうか調べる
3. 一致しなかったら、グループ一覧を取得する(`groups.list`)
4. 探している名称と一致するグループがあるかどうか調べる

以下はchannelを探す関数です。 groupの方も流れは全く同じなので省略します。`UrlFetchApp.fetch()`はGASの機能で、渡したURLにアクセスしてくれるものです。

結果が[JSON](http://d.hatena.ne.jp/keyword/JSON)で送られてくるので、パースしてsomeループで名称が一致するまで調べます。

/* チャンネル名を検索してIDを取得 */
function channelNameToId(name) {

var res = UrlFetchApp.fetch('https://slack.com/api/channels.list?token=' + SLACK_ACCESS_TOKEN);

var channelsList=JSON.parse(res.getContentText());
var foundChannelsId = '';
var isFound = channelsList.channels.some(function(channels){
if (channels.name.match(name)){
foundChannelsId = channels.id;
return true;
} });
return foundChannelsId;
}

### 経過日数を指定する

`files.list`の`ts_to`オプションを使うと、ある時刻までのファイルだけを取得できます。 この時刻は**[UNIX](http://d.hatena.ne.jp/keyword/UNIX) time**で指定しなければなりません。 そこで、経過日数から`ts_to`に変換する関数を作りました。

[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript)では`Date.getTime()`で現在時刻を[UNIX](http://d.hatena.ne.jp/keyword/UNIX)時間で取得できます。 これは**ミリ秒単位**なので1000で割る必要があるのに注意です。 あとは、日数を秒数に換算して引き算するだけですね。

function elapsedDaysToUnixTime(days){ var date = new Date();
var now = Math.floor(date.getTime()/ 1000); // unixtime[sec]
return now - 8.64e4 * days + '' // 8.64e4[sec] = 1[day] 文字列じゃないと動かないので型変換している
}

## ファイル削除プログラム

### 事前準備

#### [スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)のプロパティ

[API](http://d.hatena.ne.jp/keyword/API)のtokenは、流出するとチームに好き勝手されてしまうので扱いに注意が必要です。 外部の人に見せないものでも、コードに直接書くのは考えものです。 幸い、GASには「**[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)のプロパティ**」という任意の値を保存しておける機能があるので、そこにtokenなどを格納することにします。

取得は次のようにすれば可能です。

var SLACK_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("TOKEN");

また、削除するファイルを探すチャンネルも`OLDFILE`というプロパティにカンマ区切りで入力することにします。 これで、[ソースコード](http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9)を公開してもどんなチャンネルがあるかバレません。

![f:id:lyncs:20170604130247p:plain](../_resources/20170604130247.png)

*[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)のプロパティの入力例*

#### [API](http://d.hatena.ne.jp/keyword/API)を叩く

Slackの[API](http://d.hatena.ne.jp/keyword/API)を使うには、各種メソッドを叩く仕組みが必要です。 GASには[soundTricker/SlackApp](https://github.com/soundTricker/SlackApp)というライブラリがあり、これをインポートするだけで[API](http://d.hatena.ne.jp/keyword/API)が使えちゃいます。 ただ、最近これを使うより**自前で書いたものの方がなぜか数倍速い**のに気づいてしまったので、自前実装に切り替えました。

自分の環境で動けばいいので、かなり適当に書いてます。 他の環境でライブラリをお使いの方は、適宜読み替えてください。
例:
/* ファイルのリスト */
function filesList(data){
var params = {
'token': SLACK_ACCESS_TOKEN,
'channel': data.channel,
'ts_to': data.ts_to,
'count': data.count
}
var options = {
'method': 'POST',
'payload': params
}
var res = UrlFetchApp.fetch('https://slack.com/api/files.list',options);
return JSON.parse(res.getContentText());
}

### ファイルを削除する[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)

まずはコードを。
/* 雑談チャンネル・グループの名称を検索して古いファイルを削除 */
function oldFileExecutioner(){

const targetChannels = PropertiesService.getScriptProperties().getProperty("OLDFILE").split(","); targetChannels.forEach(deleteOldFile);

}
/* 指定チャンネル内・特定日数より以前のファイルを削除 */
function deleteOldFile(channelName) {
const days = 21; // 遡る日数(ユーザが指定)
var channelId = channelNameToId(channelName) || groupNameToId(channelName);
if(!channelId){
Logger.log('Not found "' + channelName + '". Skipping.');
return -1; //見つからなければ終了
}
Logger.log('Found "' + channelName + '"(' + channelId + ')');
var options = {
channel: channelId,
ts_to: elapsedDaysToUnixTime(days),
count: 1000
}
filesList(options).files.forEach(function(val){
data = filesDelete(val.id);

if (data.error) Logger.log(' Failed to delete file ' + val.name + ' Error: ' + data.error);

else Logger.log(' Deleted file "' + val.name + '"(' + val.id + ')');
});
}

`oldFileExecutioner()`でプロパティから取得したチャンネル名それぞれについて、`deleteOldFile(channelName)`を実行しています。

チャンネルは`channels.list`と`groups.list`の両方から探して、どちらでもなければログにエラーメッセージを残して終了します。 見つけたら`channel`と`ts_to`を指定して`files.list`を叩くのですが、実はこれだけでは**ファイル100件までしか取得できません**。 そこで、`count`オプションに適当に大きめの値を入れておきます。

あとは各ファイルのIDを`files.delete`に放り込むだけです。 実在するIDを入れるので普通は成功しますが、一応エラーが出たら内容をログに記録するようにしてあります。

### トリガーの設定

GASには、指定したタイミングで関数を自動実行する「**トリガー**」という機能があります。 LYNCSでは、`oldFileExecutioner()`が毎日昼頃に実行されるように設定しています。 使い方はググればたくさん記事が出てくるので省略させてください。

## 実行例

チームのSlackでやると危ないので、テスト用の一人Slackにいろんなファイルをアップロードした上で`oldFileExecutioner()`を実行してみます。

![f:id:lyncs:20170604130338p:plain](../_resources/20170604130338.png)
*テスト用にアップロードしたファイルたち*

[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)のプロパティにはtokenと、巡回してほしいチャンネルを指定しますが、わざと存在しないチャンネル名も混ぜておきます。

| プロパティ | 値   |
| --- | --- |
| TOKEN | {チームのtoken} |
| OLDFILE | random,ch1,ch2 |

`oldFileExecutioner()`を実行して数秒待つとログを閲覧できます。

![f:id:lyncs:20170604130306p:plain](../_resources/20170604130306.png)
*実行後のログ*

無事削除してくれたようです。`ch2`というチャンネルは存在しないのでエラーになっています。 Slackの方を見てみるとファイルが減っていますが、`#general`に上がっていたファイルは残っています。

![f:id:lyncs:20170604130342p:plain](../_resources/20170604130342.png)
*削除の対象外のファイル*

## 展望

### [アーカイブ](http://d.hatena.ne.jp/keyword/%A5%A2%A1%BC%A5%AB%A5%A4%A5%D6)済みのチャンネルのファイルを削除する

`channels.list`に`is_archived`という項目があるので、[アーカイブ](http://d.hatena.ne.jp/keyword/%A5%A2%A1%BC%A5%AB%A5%A4%A5%D6)済みなら中のファイルを消す、といったこともできます。

### 特定タイプのファイルだけを削除する

Slackでは、作成した**[スニペット](http://d.hatena.ne.jp/keyword/%A5%B9%A5%CB%A5%DA%A5%C3%A5%C8)やポストもファイル扱い**です。 これらは文章データでストレージ容量にはほとんど影響ないのですが、自動削除の対象となってしまいます。

`files.list`で取得するファイルオブジェクトのプロパティに`filetype`という項目がある([一覧](https://api.slack.com/types/file#file_types))ので、これを見て分類すれば、ファイルの種類によって動作を変えられそうです。

また、ファイルオブジェクトの`size`を見ればサイズがわかるので、一定サイズを超えていたら削除、という方針でもいいかもしれません。
(Webシステム担当 И)