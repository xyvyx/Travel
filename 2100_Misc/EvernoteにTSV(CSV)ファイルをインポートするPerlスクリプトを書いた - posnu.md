---
title: EvernoteにTSV(CSV)ファイルをインポートするPerlスクリプトを書いた - posnum’s blog
updated: 2015-08-14 15:12:44Z
created: 2015-08-14 15:12:44Z
source: http://posnum.hatenablog.com/entry/2014/09/10/234427
tags:
  - SI
---

# [posnum’s blog](http://posnum.hatenablog.com/)

 [  2014-09-10](http://posnum.hatenablog.com/entries/2014/09/10)

#   [EvernoteにTSV(CSV)ファイルをインポートするPerlスクリプトを書いた](http://posnum.hatenablog.com/entry/2014/09/10/234427)

 [Perl](http://posnum.hatenablog.com/archive/category/Perl)

久しぶりに[Perl](http://d.hatena.ne.jp/keyword/Perl)書いたら楽しかった。

目的は[Evernote](http://d.hatena.ne.jp/keyword/Evernote)にTSVファイル（タブ区切りのファイル）をインポートすること。

TSVファイルの1番目がノート名、2番目がノートの内容となるようにする。
> ノート名1\tノートの内容1
> ノート名2\tノートの内容2
> ...
最初はEvernoteAPIを使ってやろうとしたけど、 キーを申請してから取得するまで時間がかかるようなので断念。
調べていると以下の記事を見つけた。

[AppleScriptを使ってTSV（CSV）からEvernoteにインポートしてみた | あのねちょう](http://anone.me/mac/tsv-to-evernote/)

コピペしてみたけどうまく動かない。 これを機に[AppleScript](http://d.hatena.ne.jp/keyword/AppleScript)を勉強してみるか、と思ったけど 取り急ぎ[Evernote](http://d.hatena.ne.jp/keyword/Evernote)にTSVファイルをインポートしたいだけなので断念。

ここで、[Evernote](http://d.hatena.ne.jp/keyword/Evernote)はメールからでもノートを作成できる機能があることを思い出した。 ということはメールさえ送信できればどんな言語でも良いことになる。

そこで、[スクリプト言語](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8%B8%C0%B8%EC)で一番書き慣れている[Perl](http://d.hatena.ne.jp/keyword/Perl)で書くことにした。

#!/usr/bin/perluse strict;use warnings;use utf8;use Encode qw/decode encode/;use MIME::Base64;use Email::MIME;use Email::Sender::Transport::SMTP::TLS;use Email::Sender::Simple 'sendmail';use Try::Tiny;# Evernoteの投稿用メールアドレスmy  $evernote_mail = 'foo@m.evernote.com';# Evernoteの投稿先ノートブック名my  $notebook = 'notebook_name';# 読み込むTSVファイル名my  $csv_file = 'file.tsv';# Gmailのメールアドレスmy  $gmail_addr = 'bar@gmail.com';# Gmailのパスワード（二段階認証の場合はアプリケーション固有のパスワード）my  $gmail_pass = 'password';# Gmailのホスト名my  $gmail_host = 'smtp.gmail.com';# Gmailのポート番号my  $gmail_port = 587;open  my  $fh, '<', $csv_file  or  die  qq/Can't open file "$csv_file" : $!/;my  $cnt = 0;print  "Upload notes to Notebook: \"".encode('utf8', $notebook)."\".\n";while ( <$fh> ) { my  $line = $_; chomp($line); my ($note_title, $note_content) = split("\t", $line); print  "Upload note: \"".decode('utf8',encode('utf8', $note_title))."\" ... "; # メールの件名に "@ノートブック名" でそのノートブックに追加される send_gmail(sprintf("%02d", $cnt + 1).'. '.decode('utf8', $note_title).' @'.$notebook,

decode('utf8', $note_content)); print  "done.\n"; $cnt++; sleep  10;

}print  "Uploaded $cnt notes.\n";close  $fh;exit;# Gmailを送信sub send_gmail { my  $subject = shift; my  $body = shift; # メール作成  my  $email = Email::MIME->create( header => [ From => encode('MIME-Header-ISO_2022_JP' => $gmail_addr), To => encode('MIME-Header-ISO_2022_JP' => $evernote_mail), Subject => encode('MIME-Header-ISO_2022_JP' => $subject),

], attributes => { content_type => 'text/plain', charset => 'ISO-2022-JP', encoding => '7bit',

}, body => encode('iso-2022-jp' => $body),
); # SMTP接続設定  my  $transport = Email::Sender::Transport::SMTP::TLS->new(

{ host => $gmail_host, port => $gmail_port, username => $gmail_addr, password => $gmail_pass,

}
); # メール送信 try {
sendmail($email, {'transport' => $transport});
} catch { my  $e = shift; die  "Error: $e";
};
}

[Gmail](http://d.hatena.ne.jp/keyword/Gmail)のホスト名、ポート名は基本そのままで、それ以外の変数を環境に応じて変更する。 読み込むTSVファイルは[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)と同じディレクトリに置く。[CSV](http://d.hatena.ne.jp/keyword/CSV)の場合は、以下の部分を変更すれば良い。

 my ($note_title, $note_content) = split("\t", $line); # TSV
 my ($note_title, $note_content) = split(",", $line); # CSV
単純な割に結構いろんなモジュール使ってるけど、 それらは全部cpanmでさくっとインストールした。cpanm超便利。

[App::cpanminus - search.cpan.org](http://search.cpan.org/~miyagawa/App-cpanminus-1.7009/lib/App/cpanminus.pm)

[perlモジュールのinstallにcpanmを使う｜perl｜@OMAKASE](http://www.omakase.org/perl/cpanm.html)

とりあえず、50件程度のインポートはうまくいった。 メールの送信に[Gmail](http://d.hatena.ne.jp/keyword/Gmail)を利用しているので、 あんまり件数が多すぎると[Google](http://d.hatena.ne.jp/keyword/Google)にスパム扱いされそう…。

スパム扱いされてアカウントがロックされたりするのがこわいので、 1件送信するごとに10秒のスリープを入れている。 なので、大量のデータだとかなり時間かかる。

#### はまった点

##### [Gmail](http://d.hatena.ne.jp/keyword/Gmail)の認証ではじかれる

[スクリプト](http://d.hatena.ne.jp/keyword/%A5%B9%A5%AF%A5%EA%A5%D7%A5%C8)を動かすと認証でエラーを吐く。 ポートを変えたりしてもダメ。

以下のようなメールがきていることに気づく。
> [> Google](http://d.hatena.ne.jp/keyword/Google)>  アカウント: ログイン試行をブロックしました
[Google](http://d.hatena.ne.jp/keyword/Google)が気を利かせてブロックしてくれたらしい。
メールに書いてあるとおり、安全性の低いアプリのアクセスを許可すればメール送信できた。

##### [Evernote](http://d.hatena.ne.jp/keyword/Evernote)のノート名が文字化けする

最初は[UTF-8](http://d.hatena.ne.jp/keyword/UTF-8)でやろうとしてたけど、件名に日本語を入れるのはまずいっぽい。 そこで、以下のサイトの通りにやったらうまくいった。

[第20回　Email::Sender：メールを送信する：モダンPerlの世界へようこそ｜gihyo.jp … 技術評論社](http://gihyo.jp/dev/serial/01/modern-perl/0020)

 posnum  [338日前](http://posnum.hatenablog.com/entry/2014/09/10/234427)

 ![Add Star](../_resources/hatena-star-add-button.png)

 [広告を非表示にする](http://blog.hatena.ne.jp/guide/pro)

   [« C#(VS2008)の標準機能のみでJSONを読み込む](http://posnum.hatenablog.com/entry/2014/09/19/233255)      [Qtのインストール »](http://posnum.hatenablog.com/entry/2014/07/13/140038)

 .

検索

このブログについて

C/C++, C#, Qt, Perl, Ruby, Linux などについて、筆者が学んだことを中心に書き綴るブログです。
不正確な記述や、こうしたほうがいいよ、といったことがあればお気軽にコメントください。

 [最新記事](http://posnum.hatenablog.com/archive)

- [ListBox(ComboBox)で内部の値とは別に表示する値を自由自在に変更する Part2](http://posnum.hatenablog.com/entry/2015/04/14/220006)

- [Dropboxのカメラアップロードの写真を日付ごとに整理するプログラム](http://posnum.hatenablog.com/entry/2015/01/17/211549)

- [“Professional”相当の無償版「Visual Studio Community 2013」をインストールして日本語化した](http://posnum.hatenablog.com/entry/2014/11/16/192629)

- [FreeNAS 構築メモ ハードウェア編](http://posnum.hatenablog.com/entry/2014/11/13/213743)

- [ILSpy で C# コンパイラがどのようにコードを解釈したかを知る](http://posnum.hatenablog.com/entry/2014/11/09/203639)

 [月別アーカイブ](http://posnum.hatenablog.com/archive)

-
 ▶
 [2015 (2)](http://posnum.hatenablog.com/archive/2015)

-
 ▼
 [2014 (22)](http://posnum.hatenablog.com/archive/2014)

    - [2014 / 11 (5)](http://posnum.hatenablog.com/archive/2014/11)

    - [2014 / 10 (12)](http://posnum.hatenablog.com/archive/2014/10)

    - [2014 / 9 (3)](http://posnum.hatenablog.com/archive/2014/9)

    - [2014 / 7 (2)](http://posnum.hatenablog.com/archive/2014/7)

カテゴリー

- [C# (16)](http://posnum.hatenablog.com/archive/category/C%23)

- [Blog (1)](http://posnum.hatenablog.com/archive/category/Blog)

- [FreeNAS (1)](http://posnum.hatenablog.com/archive/category/FreeNAS)

- [Perl (1)](http://posnum.hatenablog.com/archive/category/Perl)

- [Qt (1)](http://posnum.hatenablog.com/archive/category/Qt)

- [Visual Studio (1)](http://posnum.hatenablog.com/archive/category/Visual%20Studio)

- [Web (1)](http://posnum.hatenablog.com/archive/category/Web)

 [![profile.gif](../_resources/profile.gif)  posnum](http://posnum.hatenablog.com/about)

Powered by [Hatena Blog](http://hatenablog.com/)