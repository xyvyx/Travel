---
title: VS Codeのタスクを使ってGoogle ColabへのSSH接続の構成を自動化しよう
updated: 2021-09-11 12:12:16Z
created: 2021-09-11 12:12:16Z
source: https://atmarkit.itmedia.co.jp/ait/articles/2109/10/news031.html
---

連載
»  2021年09月10日 05時00分 公開

## VS Codeのタスクの基本を紹介した後、Google ColabへSSH接続するための構成を自動的に行えるようにタスクを構成してみます。

**[**かわさきしんじ，**Deep Insider編集部]**

[![](https://image.itmedia.co.jp/ait/files/20010101/backn2.gif)](https://atmarkit.itmedia.co.jp/ait/series/23363/)

[連載目次](https://atmarkit.itmedia.co.jp/ait/series/23363/)

　[前回](https://atmarkit.itmedia.co.jp/ait/articles/2109/03/news030.html)と[前々回](https://atmarkit.itmedia.co.jp/ait/articles/2108/27/news038.html)はVisual Studio Code（以下、VS Code）とGoogle Colabを連携させる話を見てきました。今回は、VS Code本体に話を戻して、VS Code内で外部のツールやコマンドを実行することで、さまざまな作業を自動化する「タスク」の基本について見ていきましょう。

### タスクとは

　VS Codeの[タスク](https://code.visualstudio.com/docs/editor/tasks)は、プログラムコードの記述以外のさまざまなタスク（例えばプロジェクトのテストやビルド、デバッグなど）を自動化するためのものです。ツールやコマンドを、適切な引数とともに起動したり、コマンドプロンプトやシェルのスクリプト（バッチファイル）を記述しておいて、それらを実行したりすることで、VS Code単体では自動化できない作業を自動化するために使います。

　現状、JavaScriptベースのプロジェクトについてはプロジェクトで定義されているタスクの自動検出がサポートされていますが、Pythonに関していえばそのような機能はまだサポートされていないようです。その理由としては、Python拡張機能がデバッグやテスト、Lintingなどまでサポートしているからということもあるでしょう。

　そういうわけで、本稿ではあまり込み入った話にはならないでしょうが、VS Codeのタスクの基本を紹介した後、前回に見たcolab-sshモジュールのlaunch_ssh_cloudflared関数でVS CodeからGoogle ColabへSSH接続するための設定をタスクで自動化してみることにしましょう。

### タスクを構成してみる

　とにかくタスクを1つ構成して、実行してみましょう。ここでは、「vscodepy_15」というフォルダをVS Codeで開いています。この状態でタスクを構成するには、コマンドパレットに「task configu」などと入力して、［タスク: タスクの構成］（Tasks: Configure Task）コマンドを選択します。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1501.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1501.gif)**［タスク: タスクの構成］コマンド**

　これを選択すると、次のように構成するタスクを選択するダイアログが表示されます。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1502.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1502.gif)**構成するタスクを選択するダイアログ**

　ここでは［テンプレートからtasks.jsonを生成］を選択します。すると、今度は次のようにテンプレートの選択ダイアログが表示されます。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1503.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1503.gif)**テンプレートを選択するダイアログ**

　これに対しては［Others］を選択してください。これにより、tasks.jsonファイルが生成され、以下のような構成がデフォルトで作成されます（コメントは省略）。tasks.jsonファイルは現在オープンしているフォルダ（ワークスペース）にある.vscodeフォルダの下に作成されます。

{
 "version": "2.0.0",
 "tasks": [
{
 "label": "echo",
 "type": "shell",
 "command": "echo Hello"
}
]
}

**作成されたtasks.jsonファイル**

　現在のtasks.jsonファイルのスキーマはバージョン2.0.0です（古いVS CodeではこのJSONファイルの内容をパースできません）。そして、"tasks"プロパティの下には、テンプレートから生成されたスケルトンのタスクが記述されています。その内容は次の通りです。

"label"：タスクの名前。これがタスクを実行しようとしたときに候補として表示される

"type"：タスクの種類。指定できるのは"shell"か"process"。"shell"を指定したときには、"command"に指定したコマンドがシェル（コマンドプロンプト、シェル、PowerShellなど）で実行される

"command"：実際に実行されるコマンド

　つまり、上のタスクは「echo」という名前で、シェルやコマンドプロンプトなどで「echo hello」コマンドを実行するタスクということです。本当にそうなるか、実際にタスクを実行してみましょう。実行するには、コマンドパレットで「task run」などと入力して［タスク: タスクの実行］（Tasks: Run Task）コマンドを選択します。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1504.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1504.gif)**［タスク: タスクの実行］コマンド**

　すると、以下のように幾つかの（無関係かつ実際には存在しない）タスクと共に先ほど作成した「echo」タスクが表示されるので、これを選択します。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1505.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1505.gif)**［echo］を選択**

　これで実行されるかと思いきや、「タスクの出力をスキャン云々」というダイアログが表示されます。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1506.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1506.gif)**［タスクの出力をスキャンせずに続行］を選択**

　Lintingなどをタスクとして実行すると、その出力は一定の形式を取ります（エラーがあれば、その位置やエラーの種類などの情報が出力には含まれます）。そうした場合には、タスクの出力をスキャンして、ユーザーに分かりやすく提示するための処理が必要になります。このダイアログは、これをどうするかという選択なのですが、ここでは単にechoコマンドを実行するだけなので関係はありません（というか、意味のある選択肢は全て「出力をスキャンしない」しかありませんね）。というわけで、ここでは［タスクの出力をスキャンせずに続行］を選択すればよいでしょう。

　これでようやく、タスクが実行されます。

[![](https://image.itmedia.co.jp/ait/articles/2109/10/di-vscp1507.gif)](https://image.itmedia.co.jp/l/im/ait/articles/2109/10/l_di-vscp1507.gif)**実行結果**

　新規にターミナルがオープンされて、「echo hello」コマンドが実行され、その結果が表示されました。ターミナルにフォーカスを合わせて、何かキーを押せば、ターミナルがクローズされます。

　ここまでに見てきたように「tasks.jsonファイルでどんなタスクなのかを記述して、コマンドパレットからそれらを実行する」というのが、タスクの構成と実行の基本的な流れです。

### WindowsとmacOSで実行される内容を変更してみる

　タスクを構成するtasks.jsonファイルが現在オープンしているフォルダの.vscodeフォルダの下に作成されると先ほどは述べました。つまり、このフォルダをさまざまなOSからオープンしたときにもtasks.jsonファイルは同一であるということです。上で見たようなechoコマンド程度であれば、どんなOSでも実行できるでしょうが、そうはいかないことの方がほとんどであることは容易に予想が付きます。

　そこで、tasks.jsonファイルではOSごとに固有の設定をtasks.jsonファイルに記述できるようにもなっています。筆者は普段、WindowsとmacOSを主に使っているので、ここではそれら2つで動作する1つのタスク（ただし、WindowsとmacOSで実行される内容が少し異なります）を構成してみましょう。

　ここでは、tasks.jsonファイルに以下のようなエントリを追加します。
{
 "version": "2.0.0",
 "tasks": [
{
 //  省略
},
{
 "label": "hello",
 "type": "shell",
 "windows": {
 "command": "echo",
 "args": [
 "hello windows"
]
},
 "osx": {
 "command": "echo",
 "args": [
 "hello macos"
]
}
}
]
}

**追加した構成**

　このことから、tasks.jsonファイルのtasksプロパティには複数のタスクを記述できることがまず分かります。そして、OSごとに固有のコマンドや引数は"windows"や"osx"といったプロパティの中に記述すればよいことも分かります。

　それから、先ほどは"command"プロパティの値を「"echo hello"」と、コマンドとその引数を同時に指定していましたが、実際には"command"プロパティにコマンドを、"args"プロパティにその引数を分けて記述できることも分かるでしょう。

　ここでは、WindowsでもmacOSでも実行するのはechoコマンドですが、その引数を変えてみました。実行結果については予想通りのものにしかならないので、ここでは割愛します。

　なお、tasks.jsonファイルに記述できるプロパティやその値にはもっと多くの種類があります。これらについてはVS Codeのドキュメント「[Integrate with External Tools via Tasks](https://code.visualstudio.com/docs/editor/tasks)」や「[Schema for tasks.json](https://code.visualstudio.com/docs/editor/tasks-appendix)」を参照してください。

　次ページでは、今見たWindowsとmacOSでの動作を切り分ける方法を使って、前回に見たcolab-sshモジュールを使って、VS CodeからGoogle ColabにSSH接続する際の設定を自動化する方法を見てみます。

### 連載一覧

第11回「[VS CodeでJupyterしてみよう](https://atmarkit.itmedia.co.jp/ait/articles/2108/06/news030.html)」

第15回「VS Codeのタスクを使ってGoogle ColabへのSSH接続の構成を自動化しよう」（本稿）

[VS CodeからGoogle ColabへのSSH接続で使用する構成を自動化](https://atmarkit.itmedia.co.jp/ait/articles/2109/10/news031_2.html)

　　　　　　**1**|[2](https://atmarkit.itmedia.co.jp/ait/articles/2109/10/news031_2.html)[次のページへ](https://atmarkit.itmedia.co.jp/ait/articles/2109/10/news031_2.html)

Copyright© Digital Advantage Corp. All Rights Reserved.

> [> ＠IT](https://www.facebook.com/atmarkit/)

編集部からのお知らせ
サイトメンテナンスのお知らせ

9月11日（土）10時〜19時30分の間（予備日9月12日《日》）、システムメンテナンスのため、会員ページのログインおよび会員限定記事の表示ができなくなります。ご不便をお掛けいたしますが、ご理解のほどよろしくお願いいたします。