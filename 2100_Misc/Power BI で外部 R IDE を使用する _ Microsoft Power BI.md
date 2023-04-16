---
title: Power BI で外部 R IDE を使用する | Microsoft Power BI
updated: 2016-12-06 08:59:45Z
created: 2016-12-06 08:59:45Z
source: https://powerbi.microsoft.com/ja-jp/documentation/powerbi-desktop-r-ide/
tags:
  - SI
---

# Power BI で外部 R IDE を使用する

**Power BI Desktop** では、外部の R IDE (統合開発環境) を使用して R スクリプトを作成および調整した後、Power BI でそのスクリプトを使用できます。

![r-ide_1a.png](../_resources/r-ide_1a.png)

### 外部の R IDE を有効にする

これまで、R スクリプトを作成して実行するには、**Power BI Desktop** の R スクリプト エディターを使用する必要がありました。 このリリースでは、外部の R IDE を **Power BI Desktop** から起動し、R IDE にデータを自動的にインポートして表示できます。 その後は、その外部 R IDE でスクリプトを修正してから、**Power BI Desktop** にスクリプトを貼り付けて、Power BI のビジュアルとレポートを作成できます。

**Power BI Desktop** の 2016年 9 月リリース (2.39.4526.362 バージョン) 以降、使用する R IDE を指定して、それを **Power BI Desktop** 内から自動的に起動させることができます。

### 要件

この機能を使用するには、ローカル コンピューターに **R IDE** をインストールする必要があります。 **Power BI Desktop** には R エンジンは含まれず、配置もインストールも行われないので、ローカル コンピューターに **R** を別途インストールする必要があります。 次のオプションで、使用する R IDE を選択できます。

- 任意の R IDE をインストールすることができます。それらの多くは、[Revolution Open ダウンロード ページ](https://mran.revolutionanalytics.com/download/)や [CRAN Repository](https://cran.r-project.org/bin/windows/base/) などで、無料で入手できます。

- **Power BI Desktop** は [R Studio](https://www.rstudio.com/) や [*R Tools for Visual Studio*](https://beta.visualstudio.com/vs/rtvs/) エディターを含む **Visual Studio 2015** もサポートしています。

- さまざまな R IDE をインストールし、次のいずれかを実行して、**Power BI Desktop** で **R IDE** を起動させることもできます。

    - **.R** ファイルを、**Power BI Desktop** で起動させる外部 IDE に関連付けることができます。

    - **[オプション]** ダイアログの **[R スクリプトのオプション]** セクションから *[その他]* を選択して、**Power BI Desktop** で起動する必要がある .exe を指定できます。 **[オプション]** ダイアログを表示するには、**[ファイル]、[オプションと設定]、[オプション]** の順に移動します。

![r-ide_1b.png](../_resources/r-ide_1b.png)

複数の R IDE がインストールされている場合は、**[オプション]** ダイアログの *[検出された R IDE]* ドロップダウンから選択して、起動する R IDE を指定できます。

既定で、**Power BI Desktop** は、**R Studio** がローカル コンピューターにインストールされている場合、外部 R IDE としてそれを起動します。**R Studio** がインストールされておらず、**R Tools for Visual Studio** を含む **Visual Studio 2015** がある場合は、代わりにそれが起動されます。 どちらの R IDE もインストールされていない場合は、**.R** ファイルに関連付けられたアプリケーションが起動します。

**.R** ファイルの関連付けが存在しない場合、**[オプション]** ダイアログの *[優先する R IDE を参照します]* セクションで、カスタム IDE へのパスを指定できます。 **Power BI Desktop** の **R IDE の起動**矢印アイコンの横にある **[設定]** 歯車アイコンを選択して、別の R IDE を起動することもできます。

### Power BI Desktop から R IDE を起動する

**Power BI Desktop** から R IDE を起動するには、次の手順を実行します。

1. **Power BI Desktop** にデータを読み込みます。

2. **[フィールド]** ウィンドウで使用するフィールドをいくつか選択します。 スクリプトのビジュアルをまだ有効にしていない場合は、有効にするように促されます。

![r-ide_3.png](../_resources/r-ide_3.png)

1.  スクリプトのビジュアルを有効にすると、**[視覚化]** ウィンドウで R のビジュアルを選択できます。選択すると、スクリプトの結果を表示できる空白の R のビジュアルが作成されます。 **[R スクリプト エディター]** ウィンドウも表示されます。

![r-ide_4.png](../_resources/r-ide_4.png)

1.  R スクリプトで使用するフィールドを選択できるようになります。 フィールドを選択すると、選択したフィールドに基づいて **[R スクリプト エディター]** フィールドにスクリプト コードが自動的に作成されます。 **[R スクリプト エディター]** ウィンドウで R スクリプトを直接作成する (または貼り付ける) ことも、ウィンドウを空白のままにすることもできます。

![r-ide_5.png](../_resources/r-ide_5.png)

**> 注:**>  R ビジュアルの既定の集計タイプは、 *[集計しない]*です。

1.   **Power BI Desktop** から R IDE を直接起動できるようになります。 **[R スクリプト エディター]** のタイトル バーの右側にある **[Launch R IDE]** (R IDE を起動) ボタンを選択します (次の図を参照)。

![r-ide_6.png](../_resources/r-ide_6.png)

1.  次の図のように、指定した R IDE が Power BI Desktop によって起動されます (この図では、**RStudio** が既定の R IDE です)。

![r-ide_7.png](../_resources/r-ide_7.png)

**> 注:**>  スクリプトを実行した後で **> Power BI Desktop**>  からデータをインポートするために、**> Power BI Desktop**>  はスクリプトの最初の 3 行を追加します。

1.   **Power BI Desktop** の **[R スクリプト エディター]** ウィンドウで作成したスクリプトは、R IDE の 4 行目以降に表示されます。 この状態になれば、R IDE で R スクリプトを作成できます。 R IDE で R スクリプトが完成した後は、それをコピーし、**Power BI Desktop** の **[R スクリプト エディター]** ウィンドウに貼り付けて戻す必要があります。ただし、**Power BI Desktop** が自動的に生成したスクリプトの先頭 3 行は*除外する*必要があります。 スクリプトの先頭の 3 行は、**Power BI Desktop** にコピーしないでください。これらの行は、**Power BI Desktop** から R IDE にデータをインポートするためだけに使用されたものです。

### 既知の制限事項

Power BI Desktop から直接 R IDE を起動するには、いくつかの制限があります。

- R IDE から **Power BI Desktop** へのスクリプトの自動的なエクスポートはサポートされていません。

- **R クライアント** エディター (RGui.exe) は、エディター自体がファイルを開く機能をサポートしていないため、サポートされていません。

### 詳細

Power BI での R については、次の追加情報を参照してください。