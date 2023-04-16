---
title: Windows7でBATファイルがタスクバーに登録できないのでEXEファイルを指定 - argius note
updated: 2018-04-06 14:36:10Z
created: 2018-04-06 14:36:10Z
source: http://argius.hatenablog.jp/entry/20111028/1319803507
tags:
  - Tips
---

# Windows7でBATファイルがタスクバーに登録できないのでEXEファイルを指定 - argius note

[Windows7](http://d.hatena.ne.jp/keyword/Windows7)では、BATファイル(*.bat)で起動するアプリケーションが直接スタートメニューのやタスクバーやに登録できません。CMDファイル(*.cmd)やCOMファイル(*.com)も同様です。

通常はBATファイルからの起動でも、[ワンライナー](http://d.hatena.ne.jp/keyword/%A5%EF%A5%F3%A5%E9%A5%A4%A5%CA%A1%BC)でEXEファイルを起動できるような場合は、BATファイルのショートカットになっているものをEXEファイルのものに変えることで、タスクバーに登録したりする「ピン止め」の状態にできるようになります。

* * *

例えば[Cygwin](http://d.hatena.ne.jp/keyword/Cygwin)の場合は、
%CYGWIN_HOME%\bin\bash.exe --login -i

のようにすればOKです。（※%[CYGWIN](http://d.hatena.ne.jp/keyword/CYGWIN)_HOME%=[Cygwin](http://d.hatena.ne.jp/keyword/Cygwin)ホームディレクトリ）

これは、[Cygwinをインストールしたら最初にすること - 普段はWindowsを使っているのよ](http://d.hatena.ne.jp/kfujieda/20110524/1306164159)を参考にさせていただきました。

では、EXEが無いBATファイルだけのプログラムを登録するにはどうしたら良いのでしょう？[*1](http://argius.hatenablog.jp/entry/20111028/1319803507#f1)

この場合は、"cmd.exe"(通常はC:\Windows\System32\cmd.exe)を使います。
まず、実行したいBATファイルを作ります。（app.batとします。）
echo BATだけのアプリ
pause
そして、このファイルのショートカットを[ショートカットの作成]または[新規作成]→[ショートカット]で作成し、「リンク先」の内容を
C:\Windows\System32\cmd.exe /C app.bat

と設定します。このショートカットを右クリックしてコンテキストメニューを開くと、「スタートメニューに表示する」「タスクバーに表示する」が選択できるようになっているはずです。

オプション/Cは、指定したファイルの処理が終わったらDOSプロンプトを終了するモードです。/Cの代わりにオプション/Kを指定すれば、処理が終わってもDOSプロンプトを開いたままにできます。オプションの詳細とほかのオプションについては、"cmd /?"を参照してください。

アイコンも設定できますので、通常のアプリのようにタスクバーに並べることができるようになります。

[*1](http://argius.hatenablog.jp/entry/20111028/1319803507#fn1):たぶん答えは探せば見つかるのでしょうが、思ったよりも見つけるのが困難でしたので、自分で書いてみました。

Measure
Measure