---
title: git？gitHub？gist？ - あさdev
updated: 2018-03-10 01:48:30Z
created: 2018-03-10 01:48:30Z
source: http://d.hatena.ne.jp/atomer/20101009/1286635306
author: xyvyx10
tags:
  - Web
---

# git？gitHub？gist？ - あさdev

[git](http://d.hatena.ne.jp/atomer/searchdiary?word=%2A%5Bgit%5D)

[gitHub](http://d.hatena.ne.jp/keyword/gitHub) でのソース管理の備忘録…の前にまず [git](http://d.hatena.ne.jp/keyword/git) がなんであるかをはっきりさせておこう。

正直な所、[ツイッター](http://d.hatena.ne.jp/keyword/%A5%C4%A5%A4%A5%C3%A5%BF%A1%BC)で [git](http://d.hatena.ne.jp/keyword/git) やら [gitHub](http://d.hatena.ne.jp/keyword/gitHub) やら gist やらという単語が乱舞しててそれぞれが違うものなのか何なのか分かってなかったので。

####   [git](http://d.hatena.ne.jp/keyword/git)

まず [git](http://d.hatena.ne.jp/keyword/git) 。これは [Wikipedia](http://d.hatena.ne.jp/keyword/Wikipedia) からの引用で問題ない。

[Git - Wikipedia](http://ja.wikipedia.org/wiki/Git)

> [> Git](http://d.hatena.ne.jp/keyword/Git)> （ぎっと）は> [> プログラム](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%B0%A5%E9%A5%E0)> などの> [> ソースコード](http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9)> 管理を行う分散型> [> バージョン管理システム](http://d.hatena.ne.jp/keyword/%A5%D0%A1%BC%A5%B8%A5%E7%A5%F3%B4%C9%CD%FD%A5%B7%A5%B9%A5%C6%A5%E0)> 。

[Subversion](http://d.hatena.ne.jp/keyword/Subversion) の[ソーシャル](http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B7%A5%E3%A5%EB)[クラウド](http://d.hatena.ne.jp/keyword/%A5%AF%A5%E9%A5%A6%A5%C9)サービスって感じの認識だったｗ

そもそも [git](http://d.hatena.ne.jp/keyword/git) はサービス名かと思ってたし。恥ずかしい。

[Subversion](http://d.hatena.ne.jp/keyword/Subversion) と違って[リポジトリ](http://d.hatena.ne.jp/keyword/%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)がローカルにもあって、[コミット](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DF%A5%C3%A5%C8)→ローカル→[コミット](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DF%A5%C3%A5%C8)→リモートという形になっている。

最初に[コミット](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DF%A5%C3%A5%C8)した時点ではマスターのソースは更新されないってことですな。

今回 [git](http://d.hatena.ne.jp/keyword/git) 導入時に参考にした[404 Not Found](http://wota.jp/ac/?date=20080602)の記事に

> 確かに> [> svn](http://d.hatena.ne.jp/keyword/svn)> だと、公開はしたくないけど一時的にcommitしたい、って時が困ってたので、これは便利だ。

ってあって、確かにそうだなーと思った。これは仕事に使いたい。まだテストしたくないけどローカルでいろいろ試してる段階で、だけども動く状態だし、[バックアップ](http://d.hatena.ne.jp/keyword/%A5%D0%A5%C3%A5%AF%A5%A2%A5%C3%A5%D7)として一度[コミット](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DF%A5%C3%A5%C8)したいなー…って時がよくあるから。実際この三連休前にもコードが[コミット](http://d.hatena.ne.jp/keyword/%A5%B3%A5%DF%A5%C3%A5%C8)されていない状態で帰宅しｺﾞﾆｮｺﾞﾆｮ…

[git](http://d.hatena.ne.jp/keyword/git) はつまり分散型[バージョン管理システム](http://d.hatena.ne.jp/keyword/%A5%D0%A1%BC%A5%B8%A5%E7%A5%F3%B4%C9%CD%FD%A5%B7%A5%B9%A5%C6%A5%E0)の名称。サービス名じゃない。

####   [gitHub](http://d.hatena.ne.jp/keyword/gitHub)

[git](http://d.hatena.ne.jp/keyword/git) がシステム名って事が分かれば必然的にこいつはサービス名ということになるね。今まで [git](http://d.hatena.ne.jp/keyword/git) と混同してたけど。

[GitHubとは - はてなキーワード](http://d.hatena.ne.jp/keyword/GitHub?kid=230914)

> [> git](http://d.hatena.ne.jp/keyword/git)>  の> [> プロジェクトホスティング](http://d.hatena.ne.jp/keyword/%A5%D7%A5%ED%A5%B8%A5%A7%A5%AF%A5%C8%A5%DB%A5%B9%A5%C6%A5%A3%A5%F3%A5%B0)> サービス。

[git](http://d.hatena.ne.jp/keyword/git) 用のプロジェクトスペースを貸してくれるって認識で大丈夫かな？

公開されてるものならどれも見ることができて、その[ソースコード](http://d.hatena.ne.jp/keyword/%A5%BD%A1%BC%A5%B9%A5%B3%A1%BC%A5%C9)をフォークして利用することもできる。

####  gist

これは[はてなキーワード](http://d.hatena.ne.jp/keyword/%A4%CF%A4%C6%A4%CA%A5%AD%A1%BC%A5%EF%A1%BC%A5%C9)にあるように [gitHub](http://d.hatena.ne.jp/keyword/gitHub) が提供するもうひとつのサービスって言うことなんだけど…

[gistとは - はてなキーワード](http://d.hatena.ne.jp/keyword/gist)
> [> github](http://d.hatena.ne.jp/keyword/github)>  で提供している、コードの断片共有サービス。

> web 上からペーストして作成、編集が可能で、それらのコードは > [> git](http://d.hatena.ne.jp/keyword/git)>   > [> レポジトリ](http://d.hatena.ne.jp/keyword/%A5%EC%A5%DD%A5%B8%A5%C8%A5%EA)> として clone 可能。また web 上から fork して開発も行える。

これはつまり [gitHub](http://d.hatena.ne.jp/keyword/gitHub) の一つの機能のことをいうのか？
[gist のページ](http://gist.github.com/)にも説明が書いてあった。英語読めないけど

> Gist is a simple way to share snippets and pastes with others. All gists are > [> git](http://d.hatena.ne.jp/keyword/git)>  repositories, so they are automatically versioned, forkable and usable as a > [> git](http://d.hatena.ne.jp/keyword/git)>  repository.

なるほど。わからん。
こういう時は使ってみるのが一番ということで使ってみた。
[(L)](http://f.hatena.ne.jp/atomer/20101009234541)

[![f:id:atomer:20101009234541j:image](../_resources/20101009234541.jpg)](http://f.hatena.ne.jp/atomer/20101009234541)

ファイル名とテキストを入力して作成してみると、
[(L)](http://f.hatena.ne.jp/atomer/20101009234542)

[![f:id:atomer:20101009234542j:image](../_resources/20101009234542.jpg)](http://f.hatena.ne.jp/atomer/20101009234542)

ファイルが出来上がると。

更にそのファイルはこれもまた[リポジトリ](http://d.hatena.ne.jp/keyword/%A5%EA%A5%DD%A5%B8%A5%C8%A5%EA)で管理されてて、編集、フォークが可能。

つまり「コードの断片共有サービス」か。

なるほど。[gitHub](http://d.hatena.ne.jp/keyword/gitHub) の方はプロジェクトという大きな単位の管理で、gist はもっと小さなパーツを管理する機能か。

ようやく理解できたぞ。

使ってて気づいたけど [js](http://d.hatena.ne.jp/keyword/js).doit は gist を真似てんですね。[JavaScript](http://d.hatena.ne.jp/keyword/JavaScript), [HTML5](http://d.hatena.ne.jp/keyword/HTML5), [CSS3](http://d.hatena.ne.jp/keyword/CSS3) に特化という形で。

導入も済んで一度使ってみたけどまず [gitHub](http://d.hatena.ne.jp/keyword/gitHub) とはなんぞやというところから確認でした。導入については参考にしたサイト参照した方が早いと思うのでここではそのサイトに書いてないことでハマったことを書くかもしれない。

[github.comでphp-users.jpを管理するまでの作業ログ | IDEA*IDEA](http://www.ideaxidea.com/archives/2008/10/githubcomphpusersjp.html)

[We’re sorry, but something went wrong (500)](http://blog.champierre.com/archives/670)

[404 Not Found](http://wota.jp/ac/?date=20080602)
[github を Windows で使ってみる – Numb.](http://wp.graphact.com/2008/08/09/382)
これからのソース管理は [gitHub](http://d.hatena.ne.jp/keyword/gitHub) で。

会社で使ってる[フレームワーク](http://d.hatena.ne.jp/keyword/%A5%D5%A5%EC%A1%BC%A5%E0%A5%EF%A1%BC%A5%AF)も [gitHub](http://d.hatena.ne.jp/keyword/gitHub) において[オープンソース](http://d.hatena.ne.jp/keyword/%A5%AA%A1%BC%A5%D7%A5%F3%A5%BD%A1%BC%A5%B9)化すればいいのに。いいのに。

[Permalink](http://d.hatena.ne.jp/atomer/20101009/1286635306) | [コメント(0)](http://d.hatena.ne.jp/atomer/20101009/1286635306#c) | [トラックバック(0)](http://d.hatena.ne.jp/atomer/20101009/1286635306#tb) | 23:41