---
title: Cookieとセッションをちゃんと理解する - Qiita
updated: 2018-02-16 23:21:36Z
created: 2018-02-16 23:21:36Z
source: https://qiita.com/hththt/items/07136ad74127999df271
author: xyvyx10
tags:
  - Web
---

# Cookieとセッションをちゃんと理解する

[PHP](https://qiita.com/tags/PHP)
この記事は最終更新日から1年以上が経過しています。

# 引用/参考書籍

「よくわかるPHPの教科書」
「初めてのPHP5」
「パーフェクトPHP」
「体系的に学ぶ安全なWebアプリケーションの作り方」
「PHPスーパーサンプル」
「プロになるためのWeb技術入門」

- インターネット上で情報をやりとりするということは、大事な内容をはがきに書いて相手に送るようなもの。その情報が相手に届くまでに誰に見られるかわからない。

# 概要

- HTTPはステートレスなプロトコル。「状態」を持てない。
- 例えば、「ログイン」ページの場合、「ログインしているかどうか」のチェックをする必要がある。

NG例)
http://www.littleforest.jp/itemlist?login=ok
loginパラメータを調べてokかどうかを調べる。
→→パラメータを容易に改変できてしまう。

- 解決策として、Cookieとセッションを使う。
- Chromeで、Cookieを確認するには、以下にアクセス。

　 chrome://chrome/settings/cookies

# Cookie　基本

- WebサーバーからWebブラウザへHTTPレスポンスのヘッダを利用して小さな情報を送る。

この情報は「名前=値」の組み合わせで表される。

- Webアプリケーション側では、リクエスト•ヘッダに入っているCookieを調べることで、アクセスしてきた相手がどのような相手なのかを知ることができる。

[(L)](https://camo.qiitausercontent.com/37709718d3a395cf26080d79229353e21e16baa6/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f31306231343530652d353765392d303665352d333464342d6334336363383433323665382e706e67)

[![1.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f31306231343530652d353765392d303665352d333464342d6334336363383433323665382e706e67.png)](https://camo.qiitausercontent.com/37709718d3a395cf26080d79229353e21e16baa6/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f31306231343530652d353765392d303665352d333464342d6334336363383433323665382e706e67)

- Cookieは、サーバアクセスするたびに自動送信される

http://www.htmq.com/webstorage/

- Cookieを受け取ったあとでも、Cookieを受け取ったサーバとは異なるWebサーバに対してはCookieを送らない。(意図しない情報がほかのWebサーバーに送られるのを防ぐ)

https://secure.php.net/manual/ja/features.cookies.php
setcookie(クッキー名,値,保存期間,ディレクトリ,ドメイン,セキュア接続のみ,HTTPのみの接続);
• ディレクトリ　設定したディレクトリ配下でのみ有効になる
• ドメイン　設定したドメイン配下でのみ有効になる
• セキュア接続のみ　SSL接続でのみ有効になる
• HTTPのみの接続　Javascriptなどからアクセスできなくなる
例)
setcookie('short-userid','ralph','/','exaple.com');
クッキーを削除する場合
setcookie('short-userid','');

- 基本的な使い方をする場合には3番目のパラメータまでを指定。
- 3番目のパラメータは「タイムスタンプ形式」で指定。(1970年1月1日からの経過秒)
- 現在の時刻をtime()ファンクションで得る。

例)現在から2週間後　(14日、24時間、60分、60秒)
　setcookie('my_id', $my_id, time() + 60 * 60 * 24 * 14);

- setcookieに1番目のパラメータだけを指定した場合は、その内容を削除するファンクションになる。
- Cookieに情報が保存されると「$_COOKIE」で取り出すことができる。
- setcookieファンクションは必ず全ての先頭にプログラムを記述。
- Cookieのドメイン属性は原則として設定しない。

指定しない場合、Cookieを生成したサーバーにのみCookieが送られる。　送信範囲が最も狭いため安全という考え方。
sample17_input.php
<?php
if (isset($_COOKIE['my_id'])){
$myId = $_COOKIE['my_id'];
}else{
$myId = '';
}
?>
<form action="sample17.php" method="post">
<dl>
<dt>ID</dt>
<dd><input type="text" name="my_id" value="<?php echo $myId; ?>"></dd>
<dt>パスワード</dt>
<dd><input type="password" name="password" id="password" /></dd>
</dl>

<p><input type="checkbox" name="save" id="save" value="on" /><label for="save" >IDを保存する</label></p>

<input type="submit" value="送信する" />
</form>

- isset — 変数がセットされていること、そして NULL でないことを検査するhttps://secure.php.net/manual/ja/function.isset.php

sample17.php
<?php
$myId = $_POST['my_id'];
$password = $_POST['password'];
$save = $_POST['save'];
//cookieに保存
if($save == 'on'){
setcookie('my_id', $my_id, time() + 60 * 60 * 24 * 14);
$message ='ログイン情報を記録しました';
}else{
setcookie('my_id','');
$message = '記録しませんでした';
}
?>
<p><?php echo $message; ?></p>
<p><a href="./sample17_input.php">戻る</a></p>

# セッション　基本

https://secure.php.net/manual/ja/book.session.php

- セッションはWebブラウザを閉じるまで保存する
- リンクなどを張ってページを移動しても内容を保持することができる
- セッションが不要になった場合は、session_unsetファンクションを使ってセッションの内容を全て削除する。

例)ショッピングサイト
「このユーザーは誰か」→セッションIDで識別することが可能
「なにを買ったか」→セッション変数にデータをセット セッションが持続する間保持できる
•ショッピングサイトを移動する間は、サーバーに保存されているセッション情報を逐次取り出して、表示、更新する。
•商品を追加したときにはセッション変数に追加、カートから削除したときにはセッション変数から削除。

[(L)](https://camo.qiitausercontent.com/d4563731506b33d2f3b145facadd3b7a9db502a5/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f35663133633064372d333335632d383533302d313335312d3834663839393835663530312e706e67)

[![スクリーンショット 2015-08-08 12.03.44.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f35663133633064372d333335632d383533302d313335312d3834663839393835663530312e706e67.png)](https://camo.qiitausercontent.com/d4563731506b33d2f3b145facadd3b7a9db502a5/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f35663133633064372d333335632d383533302d313335312d3834663839393835663530312e706e67)

[(L)](https://camo.qiitausercontent.com/698971b3842f2ed9e50e684f54a91f8aa107d850/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f30326138653633382d346465382d633763612d616134322d3437663462303865303863392e706e67)

[![b.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f30326138653633382d346465382d633763612d616134322d3437663462303865303863392e706e67.png)](https://camo.qiitausercontent.com/698971b3842f2ed9e50e684f54a91f8aa107d850/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f30326138653633382d346465382d633763612d616134322d3437663462303865303863392e706e67)

[(L)](https://camo.qiitausercontent.com/8c10f9d50781376194268e55fc9d55bad09fbeec/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f38393830353362612d313964382d343230322d386532352d6530323061356163383538312e706e67)

[![スクリーンショット 2015-08-21 12.13.58.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f38393830353362612d313964382d343230322d386532352d6530323061356163383538312e706e67.png)](https://camo.qiitausercontent.com/8c10f9d50781376194268e55fc9d55bad09fbeec/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f38393830353362612d313964382d343230322d386532352d6530323061356163383538312e706e67)

- セッションに保存された内容は、Webサーバーにファイルとして保存されている。
- ユーザーのWebブラウザにはセッションID(無作為な英数字)がCookieに記録される。
- セッションIDとWebサーバー上のファイルが照合されてセッション内容を取り出す。

※セッションIDのやりとりはクッキーを用いる方法が一般的だが、クッキーが使えるかどうかはブラウザによるため、GETパラメータを用いてやりとりするなど他の方法をとるケースもある(セキュリティ上非推奨)

sample18_input.html
<form action="sample18.php" method="post">
<dl>
<dt>ID</dt>
<dd><input type="text" name="my_id" id="my_id" /></dd>
<dt>パスワード</dt>
<dd><input type="password" name="password" id="password" /></dd>
</dl>
<input type="submit" value="送信する" />
</form>
sample18.php
<?php
session_start();
if(isset($_POST['my_id'])){
$_SESSION['my_id'] = $_POST['my_id'];
}
?>
<p>ようこそ<?php echo htmlspecialchars($_SESSION['my_id']); ?> さん</p>
<p><a href="./sample18_second.php">次のページへ</a></p>
sample18_second.php
<?php
session_start();
?>
<p><?php echo $_SESSION['my_id']; ?>さんの情報はまだ残っています</p>
<p><a href="./sample18_logout.php">ログアウトする</a></p>
sample18_logout.php
<?php
session_start();
session_unset();
header('Location: sample18_input.html');
exit();
?>

# セッションの保存先と有効期限

http://pentan.info/php/session_gc.html
php.iniの「session.save_path」で定義されたディレクトリに保存。
既定値は「/tmp」

# 補足

(要確認事項含む)

- 1つのドメイン(Webサーバー)に対して保存できるCookieの数は20個まで。
- 1つのCookieは名前と値をあわせて4Kバイトまで。
- クライアントに保存できるCookieの数は全体で300個まで。
- ブラウザ側におけるCookieの管理方法については仕様として明示されているわけではないが、
- 最近のタブ型ブラウザでは、同じPC上でタブやウィンドウを複数表示してもCookie(つまりセッション)は共有される。
- モダンブラウザでは、同一PC上では、必ず同じセッションとなる。

IE7以前では、新規ウィンドウを開かない限り異なるセッションとなる。

# php.ini設定

## session.use_cookies

この値が0の場合、cookieが利用できない設定になっているためセッションが利用できない。
そのため、これを「1」にしてWebサーバーを起動するとよい。
session.use_cookies = 1
session.use_only_cookies = 1

## session.auto_start

- セッションを使う場合は、対象のすべてのページの先頭でsession_start()ファンクションを記述する必要があるが、php.iniを書き換えることで省略できる。

session.auto_start = 1

## session.cookie_httponly

HttpOnly属性をつける場合
session.cookie_httponly = on

## session.entropy_file & session.entroy_length

さらに安全な乱数を元にセッションIDを生成する場合
[Session]
;;entropy_file はwindowsでは設定不要
session.entropy_file = /dev/urandom
session.entroy_length = 32
/dev/urandomはLinuxなど多くのUNIX系OSで実装されている乱数生成器で、デバイスファイルとして使用できる。

## session.cookie_secure

セッションIDのクッキーにセキュア属性をつける場合
session.cookie_secure = On

# URL自動書き換え機能(非推奨)

クッキーを無効にしているときには、クッキーにセッションIDがセットされないが、URLの一部にセッションIDを含める方法。

- php.iniの「`session.use_trans_sid = 1`」の設定で、URLにセッションIDを含めるよう自動的に書き換えてくれる。
- PHP設定ファイル(php.ini)の「url_rewriter.tags」で指定することができる。

クッキーが使える場合のリンク先は、「abc.php」
クッキーが使えないときのリンク先は、「abc.php?PHPSESSID=802dbc54c963c」のように自動的にURLが自動書き換えされる

# セキュリティ

#### Cookieによるセッション管理

Cookieは少量のデータをブラウザ側で覚えておけるが、アプリケーションデータを保持する目的でCookieそのものに値を入れることは行われない。

- Cookieが保持できる値の個数や文字列長には制限がある
- Cookieの値は利用者本人には参照•変更できるので、秘密情報の格納には向かない。

Cookieには「整理番号」としてのセッションIDを格納しておき、実際の値はサーバー側で管理する方法が広く用いられる。

## セッションID

- 第三者がセッションIDを推測できないこと (連番ではダメ 十分な桁数の乱数を用いる)
- セッションIDは自作するのではなく、Webアプリケーション開発ツール(PHP,Tomcat)などで提供されるセッションIDを利用するべき。

### セッションID漏洩の原因

- URL埋め込みのセッションID

セッションIDをクッキーに保存せず、URLに埋め込ませる場合、
http://example.jp/mail/123?SESSID=2F3BE9A31F093C
Refererヘッダを経由して、セッションIDが外部に漏洩する原因となる。

[(L)](https://camo.qiitausercontent.com/f9462cdb51906145860b52bbaf07357b6dcc8460/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f62373831613938642d313432642d343361612d613138352d3361663061626530353065612e706e67)

[![スクリーンショット 2015-08-08 14.01.47.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f62373831613938642d313432642d343361612d613138352d3361663061626530353065612e706e67.png)](https://camo.qiitausercontent.com/f9462cdb51906145860b52bbaf07357b6dcc8460/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f62373831613938642d313432642d343361612d613138352d3361663061626530353065612e706e67)

※引用:「パーフェクトPHP」 P353

## セッションアダプション

- 自身が発行したものでないセッションIDを受け入れてセッションが初期化されてしまうという脆弱性。
- 任意のセッションIDをURLに付与する攻撃やinput要素として任意のセッションIDを埋め込んだフォームからPOSTさせる攻撃

## クッキーモンスター問題

ブラウザの不具合を利用して、co.jpやgr.jpなどのセカンドレベルドメインに対して任意のクッキーをセットする攻撃方法。
(クロスドメインクッキーインジェクションとも呼ばれる)
古いバージョンのブラウザにはこの脆弱性が存在しており、これを利用してセッション固定攻撃を行う。

クッキーモンスター問題のあるブラウザを使っていると、セッションIDの固定化攻撃を受けやすくなる。例えば、co.jpドメインのクッキーは、amazon.co.jpにもyahoo.co.jpにもマッチするため、これからのドメインのサイトに対して自由にクッキーを指定できる。

## 対応方法

問題:

- 「ログイン前からセッションが有効になる」
- 「ログイン後も同じセッションIDを利用している」

対応策:

- ログイン時の認証が成功した段階でセッションIDを再発行する。
- 明示的に古いセッション情報を破棄する

## セッションハイジャック

何らかの方法で取得したセッションIDを利用して正規のユーザーのセッションを乗っ取る攻撃。

- リファラによる漏洩
- クロスサイトスクリプティングによるセッションIDの入手

[(L)](https://camo.qiitausercontent.com/0798ff009e9ca7d671ee80c409f10607df315324/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f33323030356666362d303866312d363462372d396364642d3436336532383464636136352e706e67)

[![スクリーンショット 2015-08-08 14.22.38.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f33323030356666362d303866312d363462372d396364642d3436336532383464636136352e706e67.png)](https://camo.qiitausercontent.com/0798ff009e9ca7d671ee80c409f10607df315324/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f33323030356666362d303866312d363462372d396364642d3436336532383464636136352e706e67)

セッション固定攻撃によるセッションIDの強制

[(L)](https://camo.qiitausercontent.com/8beee68245f1219ac9e0a0b754e83f30df7176ab/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f32336435666164362d633832362d333634662d343462342d3130373039353133343933372e706e67)

[![スクリーンショット 2015-08-08 14.19.56.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f32336435666164362d633832362d333634662d343462342d3130373039353133343933372e706e67.png)](https://camo.qiitausercontent.com/8beee68245f1219ac9e0a0b754e83f30df7176ab/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f36323236342f32336435666164362d633832362d333634662d343462342d3130373039353133343933372e706e67)

# 対応方法

1. セッションIDをクッキーのみで扱う
php.iniや.htaccess、ini_set()関数でセッションに関する値を以下にする。
session.use_cookies = 1
session.use_only_cookies = 1
session.use_trans_sid = 0
2. セッションハイジャックのチェック
Accept-Charset、Accept-Language、User-Agentを元に生成した乱数を
セッションに保存しておき、セッション開始の直後にセッション内の値をアクセスしてきた情報を元に生成した乱数の整合性チェックを行う。
3. パスワード入力による多重チェックの実装
ネット銀行や通販サイトなどの金銭を扱ったり売買を行うサイトで行うように、
重要な処理を行う前にユーザにパスワードを入力させる。
ただし、全ての処理でチェックを行ってしまうとユーザービリティが低下してしまうので検討が必要。
4. セッションIDが変更できない場合はトークンにより対策する
開発言語やミドルウェアによってはセッションIDを明示的に変更できないものがある。その場合は、セッション固定化攻撃対策として、トークンを使用する。

ログイン時に乱数文字列(トークン)を生成し、クッキーとセッション変数の両方に記憶させる。認証確認時にクッキー上のトークンとセッション変数のトークンの値を比較し、同一である場合のみ、認証されていると認識する。

# 実戦サンプル

### ログイン

http://qiita.com/hththt/items/af7fb0806397704b2a94

# login.php

•Cookieに値があればフォームに値を入れる
•ログイン処理
•ログイン情報の記録
login.php
<?php
require('dbconnect.php');
session_start();
//$_COOKIE['email']に値が入っていたら、$_POSTに情報を代入する
if ($_COOKIE['email'] != '') {
$_POST['email'] = $_COOKIE['email'];
$_POST['password'] = $_COOKIE['password'];
$_POST['save'] = 'on';
}
if (!empty($_POST)) {
// ログインの処理
if ($_POST['email'] != '' && $_POST['password'] != '') {
$sql = sprintf('SELECT * FROM members WHERE email="%s" AND password="%s"',
mysql_real_escape_string($_POST['email']),
sha1(mysql_real_escape_string($_POST['password']))
);
$record = mysql_query($sql) or die(mysql_error());
if ($table = mysql_fetch_assoc($record)) {
// ログイン成功
$_SESSION['id'] = $table['id'];
$_SESSION['time'] = time();
// ログイン情報を記録する
if ($_POST['save'] == 'on') {
setcookie('email', $_POST['email'], time()+60*60*24*14);
setcookie('password', $_POST['password'], time()+60*60*24*14);
}
header('Location: index.php'); exit();
} else {
$error['login'] = 'failed';
}
} else {
$error['login'] = 'blank';
}
}
?>
logout.php
<?php
session_start();
// セッション情報を削除
$_SESSION = array();
if (ini_get("session.use_cookies")) {
$params = session_get_cookie_params();
setcookie(session_name(), '', time() - 42000,
$params["path"], $params["domain"],
$params["secure"], $params["httponly"]
);
}
session_destroy();
// Cookie情報も削除
setcookie('email', '', time()-420000);
setcookie('password', '', time()-420000);
header('Location: login.php'); exit();
?>