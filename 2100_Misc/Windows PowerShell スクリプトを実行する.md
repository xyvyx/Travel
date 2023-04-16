---
title: Windows PowerShell スクリプトを実行する
updated: 2016-11-20 10:23:13Z
created: 2016-11-20 10:23:13Z
source: https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx
tags:
  - SI
---

 [Skip to main content](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#MainContent)

 [(L)](https://technet.microsoft.com/ja-jp)

TechNet

 [日本 (日本語)](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#)

 [サインイン](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1479622220&rver=6.7.6640.0&wp=mcmbi&wlcxt=technet$technet$technet&wreply=https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx&lc=1041&id=254354&mkt=ja-jp)

 [スクリプト センター](https://technet.microsoft.com/)

 [ホーム](https://technet.microsoft.com/bb410849)  [ラーニング](https://technet.microsoft.com/dd793612)  [ダウンロード](https://technet.microsoft.com/dd772288)

|     |     |
| --- | --- |
| **  評価してください: ** |     |

[スクリプト センター](https://technet.microsoft.com/ja-jp/scriptcenter/default) > [ラーニング](https://technet.microsoft.com/ja-jp/scriptcenter/dd793612) > [Windows PowerShell でのスクリプティング](https://technet.microsoft.com/ja-jp/scriptcenter/dd742419) > [Windows PowerShell オーナー マニュアル](https://technet.microsoft.com/ja-jp/scriptcenter/gg236640) > Windows PowerShell スクリプトを実行する

|     |     |
| --- | --- |
| # Windows PowerShell スクリプトを実行する<br>## ![Windows PowerShell オーナー マニュアル](../_resources/gg236642.wsom_title%28ja-jp,MSDN.10%29.png)<br>これは、Windows PowerShell の使用を開始するためのガイドです。このガイドを一読して Windows PowerShell について理解すると、すぐにこのツールをプロフェッショナルのように駆使できるようになります。<br>トピック<br>- [![cc507085.arrow_px_down(ja-jp,MSDN.10).gif](../_resources/cc507085.arrow_px_down%28ja-jp,MSDN.10%29.gif)Windows PowerShell スクリプトを実行する](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#EFAA)<br>- [![cc507085.arrow_px_down(ja-jp,MSDN.10).gif](../_resources/cc507085.arrow_px_down%28ja-jp,MSDN.10%29.gif)Windows PowerShell からスクリプトを実行する](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#EEAA)<br>- [![cc507085.arrow_px_down(ja-jp,MSDN.10).gif](../_resources/cc507085.arrow_px_down%28ja-jp,MSDN.10%29.gif)ファイル パスの詳細](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#EDAA)<br>- [![cc507085.arrow_px_down(ja-jp,MSDN.10).gif](../_resources/cc507085.arrow_px_down%28ja-jp,MSDN.10%29.gif)おまけ: スクリプトを "ドット ソース形式で読み込む"](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#ECAA)<br>- [![cc507085.arrow_px_down(ja-jp,MSDN.10).gif](../_resources/cc507085.arrow_px_down%28ja-jp,MSDN.10%29.gif)Windows PowerShell を起動しないでスクリプトを実行する](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#EBAA)<br>- [![cc507085.arrow_px_down(ja-jp,MSDN.10).gif](../_resources/cc507085.arrow_px_down%28ja-jp,MSDN.10%29.gif)それほど悪いものじゃない](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#EAAA) |  [![#](../_resources/email.gif)](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspxmailto:?subject=Windows%20PowerShell%20%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B&Body=https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05)[(L)](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspxmailto:?subject=Windows%20PowerShell%20%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%E3%82%92%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B&Body=https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05)<br> [![#](../_resources/twitter.gif)](https://twitter.com/home?status=windows%20powershell%20%e3%82%b9%e3%82%af%e3%83%aa%e3%83%97%e3%83%88%e3%82%92%e5%ae%9f%e8%a1%8c%e3%81%99%e3%82%8b%20:%20https%3a%2f%2ftechnet.microsoft.com%2fja-jp%2fscriptcenter%2fpowershell_owner05)[(L)](https://twitter.com/home?status=windows%20powershell%20%e3%82%b9%e3%82%af%e3%83%aa%e3%83%97%e3%83%88%e3%82%92%e5%ae%9f%e8%a1%8c%e3%81%99%e3%82%8b%20:%20https%3a%2f%2ftechnet.microsoft.com%2fja-jp%2fscriptcenter%2fpowershell_owner05)<br> [![#](../_resources/facebook.gif)](https://www.facebook.com/sharer.php?u=https%3a%2f%2ftechnet.microsoft.com%2fja-jp%2fscriptcenter%2fpowershell_owner05)[(L)](https://www.facebook.com/sharer.php?u=https%3a%2f%2ftechnet.microsoft.com%2fja-jp%2fscriptcenter%2fpowershell_owner05)<br> [![#](../_resources/hatena.gif)](https://b.hatena.ne.jp/add)[(L)](https://b.hatena.ne.jp/add)<br> [![#](../_resources/google.gif)](https://www.google.com/bookmarks/mark?op=add&hl=ja)[(L)](https://www.google.com/bookmarks/mark?op=add&hl=ja)<br>### 目次<br>- [**Windows PowerShell オーナー マニュアル**](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner.aspx)<br>1. [Windows PowerShell 入門](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner01.aspx)<br>2. [Windows PowerShell コンソールをカスタマイズする](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner02.aspx)<br>3. [Windows PowerShell ショートカット キー](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner03.aspx)<br>4. [Windows PowerShell パイプ処理とパイプライン](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner04.aspx)<br>5. [Windows PowerShell スクリプトを実行する](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx)<br>6. [Windows PowerShell プロファイル](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner06.aspx)<br>7. [Windows PowerShell エイリアス](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner07.aspx) |

### Windows PowerShell スクリプトを実行する

![Windows PowerShell スクリプトを実行する](../_resources/gg281898.chs%28ja-jp,TechNet.10%29.gif)

新しいコマンド シェルおよびスクリプト言語を入手することほどわくわくすることは、実生活でほとんどありません。どのくらいわくわくするかというと、箱から取り出したらすぐに使ってみたいと思うほどです。**Windows PowerShell をダウンロード**した方は、私たちが何を言っているかおわかりになるでしょう。つまり、ほとんどの方は、インストール処理が完了した瞬間に .PS1 ファイル (.PS1 は、Windows PowerShell スクリプトのファイル拡張子です) をダブルクリックし、ゆっくり座って魔法が起こるのを待ったはずです。

しかし、残念ながら、結果は次のようになりました。
![メモ帳で開かれた PowerShell スクリプト](../_resources/gg281898.notepad%28ja-jp,TechNet.10%29.jpg)

うーん、スクリプトが実行されるのではなく、メモ帳で開かれました。これは興味深いですが、思い描いていた動作とは異なりますね。ちょっと待ってください。皆さんは、「そうか、わかったぞ。きっと、Windows PowerShell を実行しないと Windows PowerShell スクリプトを実行できないのだろう。なるほど、それなら納得がいく。」とお考えですね。これを踏まえて、Windows PowerShell を起動し、コマンド プロンプトで .PS1 ファイルのパスを入力し、**Enter** キーを押して、魔法が起こるのを待つのですね。

しかし、残念ながら、結果は次のようになります。

```
スクリプトの実行がシステムで無効になっているため、ファイル C:\scripts\test.ps1 を読み込めません。詳細については、「get-
help about_signing」と入力してヘルプを参照してください。
発生場所 行:1 文字:19
+ c:\scripts\test.ps1 <<<<
```

ああ、なんてすばらしいのでしょう。スクリプトを実行することさえできない新しいコマンド シェルおよびスクリプト環境だなんて。マイクロソフトの人たちは、次は一体何を考え出すことでしょう。

どうか慌てないでください。信じられないかもしれませんが、万事順調です。皆さんは Windows PowerShell スクリプトの実行に関するいくつかのちょっとしたコツを理解する必要があるだけです。そして、Scripting Guys はそのお手伝いをするためにここにいるのです。

[![arrow_px_up.gif](../_resources/arrow_px_up.gif)ページのトップへ](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#top)

### Windows PowerShell からスクリプトを実行する

![Windows PowerShell スクリプトを実行する](../_resources/gg281898.chs%28ja-jp,TechNet.10%29.gif)

まずは、Windows PowerShell 自体からスクリプトを実行しましょう (実を言うと、おそらくこれは Windows PowerShell スクリプトの最も一般的な実行方法です)。なぜ、スクリプトを実行しようとすると、おかしなエラー メッセージが表示されるのか、ですって。理由は簡単です。Windows PowerShell に組み込まれているセキュリティ設定には、"実行ポリシー" と呼ばれるものが含まれています。実行ポリシーによって、PowerShell でスクリプトが実行される方法 (または PowerShell でスクリプトが実行されるかどうか) が決まります。既定では、PowerShell の実行ポリシーは **Restricted** に設定されています。つまり、スクリプト (ユーザー自身が記述したスクリプトを含む) は実行されないということです。理由は以上です。

**注**: PowerShell コマンド プロンプトで次のコマンドを入力して **Enter** キーを押すと、実行ポリシーの設定を確認できます。

`Get-ExecutionPolicy`

確かに、これは少し厳しいと思われるかもしれません。何しろ、スクリプトを実行できないスクリプト環境なんて、あっても意味がありませんから。でも、大丈夫です。既定の実行ポリシーがお気に召さないようでしたら (おそらくそうでしょうが)、変更すればよいのです。たとえば、自分で記述したスクリプトは迷わず実行しても、インターネットからダウンロードしたスクリプトは信頼された発行元によって署名されている場合のみ実行するように PowerShell を構成するとします。その場合は、次のコマンドを使用して、実行ポリシーを **RemoteSigned** に設定します。

`Set-ExecutionPolicy RemoteSigned`

また、実行ポリシーを、**AllSigned** (自分で記述したスクリプトを含むすべてのスクリプトが、信頼された発行元によって署名されている必要があります) または **Unrestricted** (スクリプトの発行元、およびスクリプトが署名されているかどうかに関係なく、"すべての" スクリプトが実行されます) に設定することもできます。

慌てる必要がないことがおわかりいただけたでしょうか。

**注**: "スクリプトへの署名" がどういうことかよくわからない、ですって。その場合は、PowerShell を起動して、次のコマンドを入力し、**Enter** キーを押します。

`Get-Help About_Signing`

もっとお勧めの方法は、Windows PowerShell グラフィカル ヘルプ ファイル (英語) をダウンロードして、標準の Windows ヘルプ形式で提供されるこのファイルで同じトピックを読むというものです。

実行ポリシーの設定を変更したら、スクリプトを実行することは可能です。しかし、問題が発生する可能性はまだあります。たとえば、Windows PowerShell のホーム ディレクトリから C:\Scripts にディレクトリを変更したとします (この操作は、「**cd C:\Scripts**」と入力すると実行できます)。ちなみに、C:\Scripts フォルダーには Test.ps1 というスクリプトが格納されています。そのことを念頭に置いて、次のコマンドを入力し、**Enter** キーを押します。

`Test.ps1`
すると、次のような応答が返されます。

```
用語 'Test.ps1' は、コマンドレット、関数、操作可能なプログラム、またはスクリプト ファイルとして認識されません。用語を確
認し、再試行してください。
発生場所 行:1 文字:7
+ test.ps1 <<<<
```

皆さんが考えていることはわかっています。実行ポリシーを変更したじゃないか、とお考えですね。ええ、変更しました。ですが、この問題は実行ポリシーとはまったく関係ありません。むしろ、PowerShell によるファイル パスの処理方法に関係しています。一般に、スクリプトを実行するには、"完全なファイル パス" を入力する必要があります。これは、ファイル システム内のどこで作業していても当てはまることです。C:\Scripts フォルダーで作業していても、次のように入力する必要があります。

`C:\Scripts\Test.ps1`

"一般に" と言ったのは、この規則にいくつかの例外があるからです。たとえば、スクリプトが現在のディレクトリにある場合は、次のように **.\** という表記を使用してスクリプトを起動できます。

`.\Test.ps1`
**注**: .\ とスクリプト名の間にスペースはありません。

また、PowerShell では、現在のディレクトリを検索してスクリプトを探すという処理は行われませんが、Windows の PATH 環境変数に含まれているフォルダーはすべて検索されます。これはどういうことかというと、C:\Scripts フォルダーが PATH 環境変数に含まれていれば、次のコマンドを使用してスクリプトを実行できるということです

`Test.ps1`

でも、注意してください。C:\Scripts フォルダーは Windows パスに含まれていませんが、D:\Archive フォルダーは Windows パスに含まれていて、このフォルダーにも Test.ps1 というスクリプトが格納されているとします。この場合、C:\Scripts ディレクトリで作業していて、単に「**Test.ps1**」と入力し、**Enter** キーを押すと、どちらのスクリプトが実行されるかおわかりですか。そうです。C:\Scripts フォルダー内のスクリプトは実行されませんが、D:\Archive フォルダー内のスクリプトは実行されます。これは、D:\Archive が Windows パスに含まれているからです。

ちょっと覚えておいてください。
**注**: ご参考までに、Windows の PATH 環境変数を取得して、判読可能な形式で表示するコマンドを次に示します。

`$a = $env:path; $a.Split(";")`

[![arrow_px_up.gif](../_resources/arrow_px_up.gif)ページのトップへ](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#top)

### ファイル パスの詳細

![ファイル パスの詳細](../_resources/gg281898.chs%28ja-jp,TechNet.10%29.gif)
さて、スクリプト ファイルの完全なパスさえ入力すれば、もうスクリプトの実行について心配する必要はないということですよね。そのとおりです。

いえ、"ほぼ" そのとおりです。まだ、パス名に空白スペースが含まれるスクリプトの問題があります。たとえば、スクリプトが C:\My Scripts フォルダーに格納されているとします。次のコマンドを入力して結果をご確認ください。

`C:\My Scripts\Test.ps1`
もちろん、そろそろ予想外のことを覚悟するようになりましたよね。結果は次のとおりです。

```
用語 'C:\My' は、コマンドレット、関数、操作可能なプログラム、またはスクリプト ファイルとして認識されません。用語を確認
し、再試行してください。
発生場所 行:1 文字:8
+ C:\My  <<<< Scripts\Test.ps1
```

今回は、エラー メッセージの原因を自力で解明できたのではないでしょうか。そうです、おなじみの Cmd.exe のように、PowerShell には空白スペースを含むファイル パスの解析に関する問題があります (その一因として、空白スペースは、コマンド ライン引数をスクリプトの呼び出しから切り離す方法であることが挙げられます)。Cmd.exe でこの問題に対処するには、パスを二重引用符で囲めばよいだけです。当然、PowerShell でも次のように同じ方法を試してみます。

`"C:\My Scripts\Test.ps1"`
結果は次のとおりです。

`"C:\My Scripts\Test.ps1"`
うーん、もう一度試してみましょう。結果は次のとおりです。

`"C:\My Scripts\Test.ps1"`

もう一度、いや、ちょっと待ってください。もう一度試しても無駄です。このコマンドを何度試しても、入力したのとまったく同じ文字列値が表示されるだけです。実際にその文字列値を "実行" する場合 (つまり、二重引用符で囲まれたパスにあるスクリプトを実行する場合)、パスの前に呼び出し演算子 (アンパサンド) を付加する必要があります。つまり、次のようなコマンドを記述します。

`& "C:\My Scripts\Test.ps1"`
**注**: このコマンドに限って言えば、アンパサンドとパス名の間にスペースがあってもなくても、どちらでもかまいません。
要約すると、Windows PowerShell からスクリプトを実行する方法は次のとおりです。

- 実行ポリシーを変更したことを確認します。既定では、どのようにパスを指定しても、スクリプトは PowerShell によって実行されません。
- スクリプトを実行するには、完全なファイル パスを指定するか、1) .\ という表記を使用して現在のディレクトリのスクリプトを実行する、または 2) スクリプトが保存されているフォルダーを Windows パスに含める、のいずれかの操作を実行します。
- ファイル パスに空白スペースが含まれている場合は、パスを二重引用符で囲んで、パスの前にアンパサンドを付加します。

確かに、この作業は慣れるまでに多少時間がかかりますが、そのうち慣れます (作業を簡単にするには、すべてのスクリプトを C:\Scripts などの 1 つのフォルダーに保存し、そのフォルダーを Windows パスに追加することをお勧めします)。

**注**: PowerShell を使用して Windows パスにフォルダーを追加できるのか、ですって。もちろんです。Windows パスの末尾に C:\Scripts フォルダーを付加するコマンドは、次のとおりです (今回の入門記事では、このコマンドについての説明は割愛します)。

`env:path = $env:path + ";c:\scripts"`

[![arrow_px_up.gif](../_resources/arrow_px_up.gif)ページのトップへ](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#top)

### おまけ: スクリプトを "ドット ソース形式で読み込む"

![おまけ: スクリプトを "ドット ソース形式で読み込む"](../_resources/gg281898.chs%28ja-jp,TechNet.10%29.gif)

確かに、ここまでお伝えした内容は良いことだけではありません (PowerShell スクリプトのアイコンをダブルクリックしてもスクリプトを実行できない、PowerShell では現在の作業ディレクトリ内のスクリプトが自動的に検索されない、パス名にスペースが含まれているとあらゆる問題が発生する可能性がある、など)。ですので、Windows PowerShell でのスクリプティングの非常にすばらしい機能について少し説明しましょう。その機能とは、ドット ソース形式での読み込みです。

次のような非常に簡単な VBScript スクリプトがあるとします。

```
A = 5
B = 10
C = A + B
```

コマンド ウィンドウでこのスクリプトを実行すると、スクリプトは問題なく実行されます。しかし、Echo ステートメントを記述し忘れたので、実行される処理や結果は画面に表示されません。そのため、C の値はわかりません。もちろん、コマンド プロンプトで「**Wscript.Echo C**」と入力してみることはできますが、次のエラー メッセージが返されるだけです。

```

'Wscript.echo' **is** not recognized **as** an **internal** or external command,

operable program or batch file. ('Wscript.echo' は、内部コマンドまたは外部コマンド、操作可能なプログラムまたはバッチ ファイルとして認識され

```

これは、なんら驚くことではありません。というのも、スクリプトはスクリプトであり、コマンド ウィンドウはコマンド ウィンドウであって、2 つが連動することはないからです。確かに、スクリプトで代入された値にコマンド ウィンドウからアクセスできたら (また、その逆が可能だとしたら) すばらしいですが、それは起こり得ません。

少なくとも、VBScript では不可能です。
では、ここで紹介した VBScript スクリプトに相当する Windows PowerShell スクリプトについて考えてみましょう。

```
$A = 5
$B = 10
$C = $A + $B
```

上記のスクリプトを実行し、コマンド プロンプトで「**$C**」と入力するとします。どのような結果が返されると思いますか。何も思いつかないとしたら、正解です。
![変数](../_resources/gg281898.variable%28ja-jp,TechNet.10%29.jpg)

つまり、何も返されません。これも、それほど驚くことではありません。おいおい、Scripting Guys さん、この説明はちゃんと意味のある方向に向かっていないといけないはずじゃないか、ですって。

そうですね、そのはずです。そして、信じられないかもしれませんが、確かに、意味のある方向に向かっています。PowerShell スクリプトをもう一度実行してみましょう。ただし、今回は、スクリプトを "ドット ソース形式で読み込み" ます。つまり、ピリオドと空白スペースを入力してから、スクリプト ファイルのパスを入力します。たとえば、次のように入力します。

`. c:\scripts\test.ps1`

スクリプトを実行しても、何も起こらない "ように見えます"。というのも、$C の値を表示するコードを記述しなかったからです。では、ここでコマンド プロンプトで「**$C**」と入力してみましょう。次のような結果が返されます。

`15`
なんということでしょう。PowerShell コンソール側のまぐれ当たりだったのでしょうか、それとも何かの魔法なのでしょうか。

驚くことに、どちらでもありません。これが、ドット ソース形式での読み込みなのです。スクリプトをドット ソース形式で読み込むと (つまり、スクリプト ファイルのパスの前にドットと空白スペースを付加してスクリプトを起動すると)、スクリプトで使用されるすべての変数が、複数のスコープで使用できるグローバル変数になります。これはどういうことでしょうか。スクリプトは 1 つのスコープを表し、コンソール ウィンドウは別のスコープを表します。Test.ps1 というスクリプトをドット ソース形式で読み込んで起動しました。つまり、スクリプトが終了しても $C 変数は有効なままになります。これはつまり、コマンド ウィンドウからこの変数にアクセスできるということです。また、他のスクリプトからこれらの変数にアクセスすることもできます (少なくとも、この同じ Windows PowerShell インスタンスから起動された他のスクリプトからはアクセスできます)。

$C 変数の値を表示するだけの 2 つ目のスクリプト (Test2.ps1) があるとします。このスクリプトの内容は、次のとおりです。

`$C`
(スクリプトの起動時にドット ソース形式での読み込みを使用しない場合でも) Test2.ps1 を実行するとどうなるか見てみましょう。

`15`
すばらしいですね。$C はグローバル変数なので、だれでもアクセスできます。

これは非常に便利です。たとえば、定期的にいろいろ手を加えたいデータベースがあるとします。お望みであれば、そのデータに対して実行する可能性がある、ありとあらゆる分析を含む複雑なスクリプトを記述することもできます。または、データベースに接続して (変数に格納されている) データを返すだけの、非常に単純で短いスクリプトを記述することもできます。そのスクリプトの起動時にスクリプトをドット ソース形式で読み込むと、コマンド プロンプトに向かって好きなようにデータに手を加えることができます。これは、スクリプト変数とその値へのフル アクセスが提供されるためです。

**注**: ええ、確かに、これによっていくつかの問題が発生する可能性もあります。すべてのスクリプトで同じ変数名を使用する傾向がある方の場合は、特にそうです。でも、心配は要りません。$C 変数を削除する必要が出てきたら、次のコマンドを実行するだけです (**Remove-Variable** コマンドレットでは、削除する変数を指定する際に $ を省略する必要があることに注意してください)。

`Remove-Variable C`
少し試してみれば、スクリプトをドット ソース形式で読み込むことがどれだけ便利なのかおわかりいただけると思います。

[![arrow_px_up.gif](../_resources/arrow_px_up.gif)ページのトップへ](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#top)

### Windows PowerShell を起動しないでスクリプトを実行する

![Windows PowerShell を起動しないでスクリプトを実行する](../_resources/gg281898.chs%28ja-jp,TechNet.10%29.gif)

ずいぶん説明を続けてきましたが、この記事の冒頭では、.PS1 ファイルをダブルクリックして Windows PowerShell スクリプトを実行しようとしましたね。期待どおりに事は運びませんでした。つまり、スクリプトが実行されるのではなく、何とかメモ帳でスクリプトが開いただけでした。興味深いことに、この動作は仕様です。セキュリティ対策として、.PS1 ファイルをダブルクリックしても PowerShell スクリプトを起動することはできないようになっているのです。つまり、どうやら、PowerShell スクリプトを実行するには、PowerShell を起動しておく必要があるようです。

少し回りくどいですが、厳密に言えば、そのとおりです。しかし、ショートカットや [ファイル名を指定して実行] ダイアログ ボックスから PowerShell スクリプトを起動できないということではありません。また、PowerShell スクリプトをスケジュールされたタスクとして実行することもできます。ここでの秘訣は、スクリプトを呼び出すのではなく、PowerShell 実行可能ファイルを呼び出し、スクリプト パスを引数として PowerShell.exe に渡す必要があるということです。たとえば、[ファイル名を指定して実行] ダイアログ ボックスで、次のように「**powershell.exe -noexit c:\scripts\test.ps1**」のようなコマンドを入力することができます。

![[ファイル名を指定して実行\] ダイアログ ボックスからのスクリプトの実行](../_resources/gg281898.rundialog%28ja-jp,TechNet.10%29.jpg)
このコマンドは、実際のところ、次の 3 つの部分で構成されています。

- Powershell.exe: Windows PowerShell 実行可能ファイルです。
- -noexit: スクリプトが終了しても PowerShell コンソールが開いたままとなるように PowerShell コンソールに指示する省略可能なパラメーターです。このパラメーターは省略可能なので、省略しても、スクリプトは実行されます。ただし、その場合、コンソール ウィンドウはスクリプトが終了した瞬間に閉じます。つまり、画面にデータが表示されるのを見ることはできません。

ちなみに、-noexit パラメーターは、PowerShell 実行可能ファイルの呼び出しのすぐ後に記述する必要があります。そうしないと、パラメーターは無視され、ウィンドウは閉じてしまいます。

- C:\Scripts\Test.ps1: スクリプト ファイルのパスです。

スクリプト ファイルのパスに空白スペースが含まれている場合はどうなるでしょうか。その場合は、先ほど紹介したアンパサンドを使った秘策を使用する必要があります。また、次のように、スクリプト パスを "単一" 引用符で囲む必要もあります。

`powershell.exe -noexit &'c:\my scripts\test.ps1'`
変な話ですが、本当です。

**注**: この同じテーマについて、興味深い応用方法があります。PowerShell を起動して特定のスクリプトを実行するように指示するのではなく、PowerShell を起動して特定の "コマンド" を実行するように指示できるのです。たとえば、[ファイル名を指定して実行] ダイアログ ボックスに次のコマンドを入力すると、PowerShell が起動するだけでなく、C:\Scripts フォルダーに対して Get-ChildItem コマンドレットが実行されます。

`powershell.exe -noexit get-childitem c:\scripts`

Windows PowerShell の起動時の動作をさらに複雑にすることもできますが、今のところはこれで十分です。PowerShell スタートアップ オプションの詳細については、Windows PowerShell コマンド プロンプトまたは Cmd.exe コマンド プロンプトで「**powershell.exe /?**」と入力してください。

ちなみに、この手法は、Windows PowerShell スクリプトをログオン スクリプトの一部として実行する場合に使用する必要がある手法と同じです。単に .PS1 ファイルをログオン スクリプトとして割り当てるだけではうまくいきません。それだけでは、このファイルをどう処理すればよいかがオペレーティング システムに伝わりません。この場合、次のように、PowerShell スクリプトを呼び出す VBScript スクリプトを作成する必要があります。

```
Set objShell = CreateObject("Wscript.Shell")
objShell.Run("powershell.exe -noexit c:\scripts\test.ps1")
```

この VBScript スクリプトをログオン スクリプトとして割り当てると、すべて問題なく機能します (もちろん、このログオン スクリプトが実行されるすべてのコンピューターに Windows PowerShell がインストールされていれば、の話ですが)。

[![arrow_px_up.gif](../_resources/arrow_px_up.gif)ページのトップへ](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#top)

### それほど悪いものじゃない

![それほど悪いものじゃない](../_resources/gg281898.chs%28ja-jp,TechNet.10%29.gif)

確かに、Windows PowerShell スクリプトの実行は、それほど単純明快な作業ではないかもしれません。ですが、理解するのに時間はかからないので、すぐに最適な方法で PowerShell スクリプトを実行できるようになるでしょう。また、何よりも重要なのは、「そのスクリプトを実行するときにドット ソース形式で読み込むといいよ」などと言えるようにもなることです。こう言っても同僚の関心を引くことができないなら、何を言っても無理でしょう。

[![arrow_px_up.gif](../_resources/arrow_px_up.gif)ページのトップへ](https://technet.microsoft.com/ja-jp/scriptcenter/powershell_owner05.aspx#top)

© 2016 Microsoft

- [プロファイルの管理](http://go.microsoft.com/?linkid=8786243)
- [ニュースレター](https://technet.microsoft.com/cc543196.aspx)
- [お問い合わせ](https://technet.microsoft.com/cc512759.aspx)
- [プライバシーに関する声明](http://go.microsoft.com/fwlink/?LinkId=248681)
- [使用条件](https://technet.microsoft.com/ja-jp/cc300389)
- [商標](https://www.microsoft.com/en-us/legal/intellectualproperty/Trademarks/EN-US.aspx)

 <div style="display: none;">

</div>

<div style="display: none;">

</div>