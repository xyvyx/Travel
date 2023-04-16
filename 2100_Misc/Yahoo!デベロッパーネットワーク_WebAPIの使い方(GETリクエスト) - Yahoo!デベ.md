---
title: Yahoo!デベロッパーネットワーク:WebAPIの使い方(GETリクエスト) - Yahoo!デベロッパーネットワーク
updated: 2017-01-20 05:07:01Z
created: 2017-01-20 05:07:01Z
source: http://developer.yahoo.co.jp/appendix/request/rest/get.html
tags:
  - SI
---

# WebAPIの使い方(GETリクエスト)

## GETとは

GETとは、「リソース（情報）を取得する」ためのHTTPメソッドです。ウェブサイトをブラウザーで見るとき、内部ではGETによるリクエストが行われています。Web APIも情報を取得する性質のものが多いため、GETをよく使います。

例として、[ルビ振りAPI](http://developer.yahoo.co.jp/webapi/jlp/furigana/v1/furigana.html)を使って「`明鏡止水`」の読み方を調べてみます。

GETの場合は、ブラウザーで以下のURLを見ることでもAPIの結果をプレビューできます。
ただし「`<あなたのアプリケーションID>`」の部分は登録したアプリケーションIDに置き換えてください。
（アプリケーションIDの登録方法は[ご利用ガイド](http://developer.yahoo.co.jp/start/)をご覧ください）

`http://jlp.yahooapis.jp/FuriganaService/V1/furigana?appid=<あなたのアプリケーションID>&sentence=%E6%98%8E%E9%8F%A1%E6%AD%A2%E6%B0%B4`

* * *

### telnetコマンドを使った例

telnetコマンドを使うと具体的な通信の中身を見ることができます。まずtelnetを起動します。
telnet jlp.yahooapis.jp 80
次に、リクエストを送ります。以下を端末に打ち込み、最後にEnterキーを2回押すと、レスポンスが返ってくるはずです。

GET /FuriganaService/V1/furigana?sentence=%E6%98%8E%E9%8F%A1%E6%AD%A2%E6%B0%B4 HTTP/1.1Host: jlp.yahooapis.jp

User-Agent:YahooAppID:<あなたのアプリケーションID>
（レスポンスの例）
HTTP/1.1200 OK
Date:Mon,06Feb201200:00:00 GMT

Vary:Accept-EncodingContent-Type: text/xml; charset="UTF-8"Cache-Control:privateConnection: close

Transfer-Encoding: chunked

<?xml version="1.0" encoding="UTF-8"?><ResultSet xmlns="urn:yahoo:jp:jlp:FuriganaService"

xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

xsi:schemaLocation="urn:yahoo:jp:jlp:FuriganaService http://jlp.yahooapis.jp/FuriganaService/V1/furigana.xsd"><Result><WordList><Word><Surface>明鏡止水</Surface><Furigana>めいきょうしすい</Furigana><Roman>meikyousisui</Roman>

</Word></WordList>
</Result></ResultSet>

通信のタイムアウトがあるため、ゆっくり入力していると途中で切れてしまうことがあります。テキストエディターなどであらかじめリクエスト内容を作成しておき、コピーアンドペーストするといいでしょう。

実際はこのレスポンス結果をプログラムで解析し、サービスを利用していくことになります。

[このページのトップへ](http://developer.yahoo.co.jp/appendix/request/rest/get.html#pagetop)

* * *

## アプリケーションIDについて

Yahoo!デベロッパーネットワークで公開されているWeb APIを使う際には、アプリケーションIDが必要です。
登録したアプリケーションIDは、以下のいずれかの方法でリクエストに付与してください。

Yahoo! ID連携に対応したWeb APIについては、アプリケーションIDの代わりに[Yahoo! ID連携](http://developer.yahoo.co.jp/yconnect/)のフローで取得したアクセストークンが必要となります。

リクエスト方法の詳細は[Yahoo! ID連携のAPIアクセス実装方法](http://developer.yahoo.co.jp/yconnect/api_access.html)をご覧ください。

### User-Agent方式

User-Agentヘッダーの末尾に以下の形式で埋め込むことでアプリケーションIDを渡します。
User-Agent: <元のUser-Agent文字列>; Yahoo AppID: <あなたのアプリケーションID>
User-Agentがもともと空の場合は、
User-Agent: Yahoo AppID: <あなたのアプリケーションID>
となります。

### パラメーター方式

パラメーターとして後述のクエリーストリングに混ぜ込むことでアプリケーションIDを渡すこともできます。 こちらの方が手軽で、ヘッダーを操作できない場合でも使うことができます。

appid=<あなたのアプリケーションID>

[このページのトップへ](http://developer.yahoo.co.jp/appendix/request/rest/get.html#pagetop)

* * *

## Web APIへのパラメーターの渡し方

Web APIは渡されたパラメーターによって出力が変わります。 パラメーターを渡すには、クエリーストリングと呼ばれる形式に変換する必要があります。 クエリーストリングは以下の順序で作ります。

1. Web APIドキュメントをもとに、必要なリクエストパラメーターと、渡したい文字列を書き出します。

|     |     |
| --- | --- |
| sentence | 明鏡止水 |

2. パラメーター名と、パラメーターの値をそれぞれパーセントエンコーディング形式に変換します。

|     |     |
| --- | --- |
| sentence | %E6%98%8E%E9%8F%A1%E6%AD%A2%E6%B0%B4 |

3. 変換結果を「=」で連結します。このときに使う「=」は、エンコードしてはいけません。

|     |
| --- |
| sentence=%E6%98%8E%E9%8F%A1%E6%AD%A2%E6%B0%B4 |

4. 各パラメーターについて1～3を行い、最後に「&」で連結します。この「&」もエンコードしてはいけません。

|     |
| --- |
| appid=YOUR_APPID&sentence=%E6%98%8E%E9%8F%A1%E6%AD%A2%E6%B0%B4 |

たとえばPHPの場合、[http_build_query](http://jp.php.net/manual/ja/function.http-build-query.php)（外部リンク）という標準関数で簡単にクエリーストリングを作ることができます。GETの場合、URLの末尾にクエリーストリングを「?」で連結することでパラメーターを渡します。

クエリーストリング以外の形式をサポートするケースもありますので、各Web APIのドキュメントもお読みください。

### パラメーターの文字コードについて

Web APIのドキュメントに記載がない場合、UTF-8をサポートしています。日本語の文字列などはUTF-8で渡すようにしてください。

[このページのトップへ](http://developer.yahoo.co.jp/appendix/request/rest/get.html#pagetop)

* * *

## レスポンスの解析

Web APIのレスポンスはXMLやPHPSerialize、JSONといったテキスト形式になっています。対応している形式はWeb APIによって異なります。 いずれも汎用的なデータフォーマットですので、お好きなツール・ライブラリを使って解析してください。

* * *

## PHP + cURL + SimpleXML によるサンプル

以上がWeb APIを使用する際の基本になります。

これまで述べてきた内容を、Web APIをリクエストするたびに作っていると大変ですので、多くのプログラミング言語ではもう少し簡便にしたライブラリを用意しています。

たとえばPHPでは[cURL](http://jp.php.net/manual/ja/book.curl.php)（外部リンク）があります。libcurlをPHPから使えるようにしたもので、高速で高機能なため、よく使われているライブラリです。

これを用いてWeb APIにリクエストし、[SimpleXML](http://jp.php.net/manual/ja/book.simplexml.php)（外部リンク）を使ってレスポンスのXMLを解析し、表示するサンプルを以下に示します。

<?php
/**
* ルビ振りAPIへのリクエストサンプル（GET）
*
*/
$api ='http://jlp.yahooapis.jp/FuriganaService/V1/furigana';
$appid ='<あなたのアプリケーションID>';
$params = array('sentence'=>'明鏡止水');
$ch = curl_init($api.'?'.http_build_query($params));
curl_setopt_array($ch, array(
CURLOPT_RETURNTRANSFER =>true,
CURLOPT_USERAGENT =>"Yahoo AppID: $appid"));
$result = curl_exec($ch);
curl_close($ch);?><pre><?php echo htmlspecialchars(
print_r(newSimpleXMLElement($result),true))?></pre>
出力は以下のようになります。
<pre>
SimpleXMLElement Object
(
[Result] => SimpleXMLElement Object
(
[WordList] => SimpleXMLElement Object
(
[Word] => SimpleXMLElement Object
(
[Surface] => 明鏡止水
[Furigana] => めいきょうしすい
[Roman] => meikyousisui
)
)
)
)
</pre>

今回は説明のための必要最小限のコードになっています。たとえばリクエストに失敗したとき、リトライや復帰処理が行われません。 高度なサンプルは[サンプルコード集](http://developer.yahoo.co.jp/sample/)よりダウンロードできますので、そちらもお役立てください。

[このページのトップへ](http://developer.yahoo.co.jp/appendix/request/rest/get.html#pagetop)