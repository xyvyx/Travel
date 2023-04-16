---
title: WebAPIを叩く(file_get_contents) - Qiita
updated: 2017-01-20 05:07:47Z
created: 2017-01-20 05:07:47Z
source: http://qiita.com/re-24/items/542f39220a606e319fa1
tags:
  - SI
---

# WebAPIを叩く(file_get_contents)

 4
この記事は最終更新日から1年以上が経過しています。

## 概要

WebApiを`file_get_contents()`を利用して実行する方法をまとめてみました。
[Qiita Api v2](https://qiita.com/api/v2/docs)を利用します。

認証しないと実行できない機能があるので、[ユーザの管理画面](https://qiita.com/settings/applications)から個人用AccessTokenを発行してtokenを取得しといてください。

## Getメソッドの実行

`Get`メソッドで、取得するだけなら非常に簡単
指定した、タグに紐づいた投稿を取得するsample
<?php
$base_url = 'https://qiita.com';
$tag = 'PHP';
$query = ['page'=>'1','per_page'=>'5'];
$response = file_get_contents(
$base_url.'/api/v2/tags/'.$tag.'/items?' .
http_build_query($query)
);
// https://qiita.com/api/v2/tags/PHP/items?page=1&per_page=5
// 結果はjson形式で返されるので
$result = json_decode($response,true);

## Responseヘッダやステータスコードを取得

WebApiを叩いくと、ヘッダに追加の情報を含めてきたりする。

また、上のサンプルだと`404`とかのエラーが返ってくると`warning`となってエラーのレスポンスが取得できないし、ステータスコードでエラー処理の分岐をさせたかったりするので、ひと手間追加必要

- `stream_context_create()`を使う
- `$http_response_header` に格納されたヘッダー内容からステータスコード等を拾う

<?php
$base_url = 'https://qiita.com';
// エラーの場合も取得する設定にする
$context = stream_context_create(array(
'http' => array('ignore_errors' => true)
));
$tag = 'PHP_error'; // 存在しないタグ(ステータスコード：404)
$query = ['page'=>'1','per_page'=>'5'];
// stream_context_create()　で作成したのを渡す
$response = file_get_contents(
$base_url.'/api/v2/tags/'.$tag.'/items?'.
http_build_query($query)
,false
,$context
);

preg_match('/HTTP\/1\.[0|1|x] ([0-9]{3})/', $http_response_header[0], $matches);

$status_code = $matches[1];
switch ($status_code) {
case '200':
// 200の場合
break;
case '404':
// 404の場合
break;
default:
break;
}
`$http_response_header`に自動的に下記のようにヘッダーの内容が格納される。
正常に取得できた場合
array (size=18)
0 => string 'HTTP/1.1 200 OK' (length=15)
1 => string 'Cache-Control: max-age=0, private, must-revalidate' (length=50)
2 => string 'Content-Type: application/json; charset=utf-8' (length=45)
3 => string 'Date: Sun, 08 Feb 2015 04:30:28 GMT' (length=35)
・・・（略）・・・
取得できなかった場合
array (size=13)
0 => string 'HTTP/1.1 404 Not Found' (length=22)
1 => string 'Content-Type: application/json' (length=30)
2 => string 'Date: Sun, 08 Feb 2015 04:33:01 GMT' (length=35)
3 => string 'Rate-Limit: 60' (length=14)
4 => string 'Rate-Remaining: 31' (length=18)
5 => string 'Rate-Reset: 1423370438' (length=22)
・・・（略）・・・

## Postメソッドの実行

`file_get_contents`で`post`メソッドの`api`を実行する。
`stream_context_create()`を使って、`method`の変更、リクエストにヘッダ、データを含める
記事を新規に作成してみる。
<?php
$token = 'xxxxxxxxxxxxxxxxxxxxxx'; // 前準備で作っておいた、tokenを設定
$base_url = 'https://qiita.com';
$data = [
'body' => 'example',
'coediting' => false, 'private' => true, // テストで作る時は限定公開で
'title'=> 'sample test',
'tags' => [
[
'name' => 'PHP',
'versions' => ["4.3.0",">="]
],
[
'name' => 'sample',
]
]
];
$header = [
'Authorization: Bearer '.$token, // 前準備で取得したtokenをヘッダに含める
'Content-Type: application/json', // json形式のデータをpostするので必要
];
$context = stream_context_create(array(
'http' => array(
'method' => 'POST',
'header' => implode(PHP_EOL,$header),
'content'=> json_encode($data),
'ignore_errors' => true
)
));
$response = file_get_contents(
$base_url.'/api/v2/items'
,false
,$context
);
$header = $http_response_header;
$result = json_decode($response,true);
記事作成後の、レスポンスは下記のとおり
ヘッダー[$header]
array (size=17)
0 => string 'HTTP/1.1 201 Created' (length=20)
1 => string 'Cache-Control: max-age=0, private, must-revalidate' (length=50)
2 => string 'Content-Type: application/json; charset=utf-8' (length=45)
3 => string 'Date: Sun, 08 Feb 2015 05:22:18 GMT' (length=35)
・・・（略）・・・
レスポンス(投稿した記事データ)[$result]
array (size=11)
'rendered_body' => string '<p>example</p>
' (length=15)
'body' => string 'example
' (length=8)
'coediting' => boolean false
'created_at' => string '2015-02-08T14:22:17+09:00' (length=25)
'id' => string '38f3e6422fc7ce7c49e1' (length=20)
'private' => boolean true
・・・（略）・・・

## まとめ

`get`,`post`ができれば、`delete`も`patch`もたぶん似たようなもんだから省略
実際に使うとなると、[curl](http://php.net/manual/ja/book.curl.php)の利用を考えたほうがよさそう

- メモリ・速度的にも [cURLの挙動について調査 –file_get_contents()との比較-](http://blogged.e2esound.com/2010/10/27/curl-vs-file_get_contents/)
- `$http_response_header`という、よくわらんけどいきなり出てきた変数を参照するのが気持ち悪い(グローバルっぽいけど、ローカルスコープで作成されてるらしい）
- ヘッダーの取得～必要な部分の切り出しとか面倒
- `curl`のほうが、もっと柔軟にいろいろできそう

apiの調査とか、軽く一度動かしてみたいとかそういう用途でなら使える・・・かも
でもせっかく、調べたので…

## 参考

[PHP の file_get_contents でステータスコードを取得する](http://blog.manabusakai.com/2013/02/file-get-contents-status-code/)

[file_get_contentsでPOSTデータ送信](http://d.hatena.ne.jp/ryster/20070907/1189148449)

[stream_context_create](http://php.net/manual/ja/function.stream-context-create.php)

[HTTP コンテキストオプション](http://php.net/manual/ja/context.http.php)