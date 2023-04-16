---
title: PowerShell で Excel をどうのこうのすることに興味を持ってくれると嬉しい - Qiita
updated: 2016-11-26 13:09:49Z
created: 2016-11-26 13:09:49Z
source: http://qiita.com/miyamiya/items/161372111b68bad0744a
tags:
  - SI
---

# PowerShell で Excel をどうのこうのすることに興味を持ってくれると嬉しい

 4
[ブログからの転記](http://1bed.saloon.jp/?p=2095)

# 経緯

お仕事で Windows を使うようになり 1 ヶ月、 報告用 Excel に記述するのも面倒になり、PowerShell である程度作ってしまおうという気になってきていて、他の人にも同じような気持ちになって欲しいので、「お？簡単そうじゃね？」と思ってもらうために書いてみました。

サンプルコードをコピペで感覚をつかめると思いますので、少しでも興味持つ人が増えてくれると嬉しいです。

# 環境

- Windows 10
- PowerShell 5.0
- Excel 2016

# 1. PowerShell の起動

まずは、PowerShell を起動しましょう。
PowerShell ISE ではなく、PowerShell を起動してください。
Windows マーク(メニューボタン？)を右クリックしてファイル名を指定して実行、`powershell` と入力して OK を押すと起動します。

# 2. Excel を起動

起動した PowerShell に次のコマンドを一行づつ打ち込んでみましょう。
example
$excel = New-Object -ComObject Excel.Application
$excel.Visible = $true
$excel.DisplayAlerts = $true
Excel が起動して画面に表示されたと思います。

最初の `$excel = New-Object -ComObject Excel.Application` で Excel が起動しており、次の `$excel.Visible = $true` で Excel を表示するようにしています。

タスクマネージャーで見るとわかりますが、Visible を True にしてない状態(非表示)でも Excel は起動していて、PowerShell から Excel を操作することはできますが、今回は Excel を操作することを実感するために表示しています。

3 行目の `$excel.DisplayAlerts = $true` は警告メッセージを表示するようにしています。2 行目と 3 行目は実際の運用では `$false` にしているところですので、敢えてここで紹介の意味も含めて載せています。

# 3. ワークブックを作成

Excel は起動しましたが、いつもの起動した画面とは違いますよね。

Excel でデータを作成する時の流れは、ワークブックを作り、その中のシートを選び、シートの中のセルを選んでデータを入力していきます。普段マウスポチポチでやっているのも同じ手順だと思います。

Excel を表示しながら、次の行を PowerShell に入力してみましょう。
example
$book = $excel.Workbooks.Add()
[(L)](http://1bed.saloon.jp/wp-content/uploads/2016/06/make_book.png)

[![make_book-300x209.png](../_resources/make_book-300x209.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/make_book.png)

]

準備ができたので、ようやくこれから本番です。
ちなみに、`Add()` の引数はテンプレートの値らしく、省略せずにワークシートを追加するときにはこうやるようです。
example
$xlWBATWorksheet = -4167
$book = $excel.workbooks.add($xlWBATWorksheet)

- 参考: [XlWBATemplate enumeration](https://msdn.microsoft.com/en-us/library/microsoft.office.interop.excel.xlwbatemplate(v=office.15).aspx?cs-save-lang=1&cs-lang=csharp#code-snippet-1)

# 4. シートを操作してみる

まずはシートに対して色々と操作してみましょう。
Excel と PowerShell を一緒に表示しながら行うと判りやすいですし、コマンドを打った瞬間に変わるのは、やはり楽しい物があります。

## 4-1. シート名の取得

Excel を見るとシート名はすぐ分かります... では面白くないですよね。
シート名を PowerShell で取得してみます。
example
$book.Sheets.Count # シートの数を取得
$book.Sheets(1).Name # 1 番目のシートの名前を取得
$book.ActiveSheet.Name # アクティブになっているシート名を取得

## 4-2. シート名の変更

シート名を「Test」に変更してみます。
Excel も見ながら変化を実感してくださいね。
example
$book.Sheets(1).Name = "hoge"

# 5. セルを操作してみる

シートでもっと遊べるのですが、それだけでご飯 2 杯ぐらい余裕で食べられると思うのでこれぐらいにして、そろそろセルを触って遊んで見たいと思います。
再三書いていますが、是非 Excel も表示しながら行って下さい。

## 5-1. セルに値を入れる

example
$sheet = $book.Sheets("hoge") # 扱いやすいようにシートを取得します
$sheet.Name # hoge と出るはずです
$sheet.Cells.Item(1, 1) = 100 # セル A1 に 100 を入れています
$sheet.Cells.Item(1, 2) = 50 # セル B1 に 50 を入れています

[![value_in_cell-300x106.png](../_resources/value_in_cell-300x106.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/value_in_cell.png)

この方法はインクリメント(順次)で処理をするときに使いやすいですね。ただ、セルを直接指定する方が効果的なときもあります。
example
$sheet.Range("A2", "B2") = 50 # A2 から B2 まで 50 を入れています
$sheet.Range("A3", "B3") = 5,10 # A3 に 5、B3 に 10 を入れています
$sheet.Range("A2").Text # A2 のテキストを表示

[![value_in_cell2-300x67.png](../_resources/value_in_cell2-300x67.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/value_in_cell2.png)

[![value_in_cell3-300x165.png](../_resources/value_in_cell3-300x165.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/value_in_cell3.png)

Range メソッドを使うことで判りやすい感じで指定することができます。

## 5-2. セルに計算式を入れる

5-1 のセルの合計を取る計算式を入れて、値を確認してみます
example
$sheet.Range("C1") = "=SUM(A1:B1)"
$sheet.Range("C1").Text # C3 のテキストを表示
$sheet.Range("C1").Formula # C3 の計算式を表示
直感的に判ると思います。

## 5-3. セルのコピー

一度作った計算式は Excel っぽくそのままコピーして使っちゃいます。
example
$sheet.Range("C1").copy($sheet.Range("C2:C3"))
ここまででこのように表示されていると思います。

[![copy_cell-300x144.png](../_resources/copy_cell-300x144.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/copy_cell.png)

## 5-4. セルの装飾

合計のセルは判りやすく装飾しましょう。
example
$sheet.Range("C1:C3").Font.Bold = $true # 太字にする
$sheet.Range("C1:C3").interior.ColorIndex = 3 # セルを赤色にする
$sheet.Range("C1:C3").Font.ColorIndex = 2 # 文字を白色にする
ここまででこのように表示されていると思います。目に優しくない素晴らしい配色です。

[![cell_color-300x146.png](../_resources/cell_color-300x146.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/cell_color.png)

Excel は用意されている色を ColorIndex として、直接数値として指定するのが一般的なようなので。(RGB でも指定できるのですが)

- 参考: [インストラクターのネタ帳: ColorIndexプロパティ値一覧](http://www.relief.jp/itnote/xls_colorindex.php)

## 5-5. セルの罫線を引く

表らしく罫線を引こうと思います。
example
$sheet.Range("A1:C3").Borders.LineStyle = 1 # A1 から C3 まで罫線を引く
この数字も Excel 上で定義されていて、定数となっているようですね。

- 参考: [Learn Powershell | Achieve More](https://learn-powershell.net/2012/12/20/powershell-and-excel-adding-some-formatting-to-your-report/)

## 5-6. コメントを入れる

コメントを入れてみます。
example
$sheet.Range("A1").AddComment("misono マジ可愛い") # A1 にコメントを入れる
思い通りのコメントが入れられましたね。

[![add_comment-300x141.png](../_resources/add_comment-300x141.png)](http://1bed.saloon.jp/wp-content/uploads/2016/06/add_comment.png)

# 6. 保存

一通り遊んだので、デスクトップに保存します。
example
$book.SaveAs("${HOME}\Desktop\hoge.xlsx")

# 7. Excel を閉じる

最後に Excel を閉じます。
example
$excel.Quit() # Excel の終了
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) # 変数の破棄
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($sheet) # 変数の破棄
タスクマネージャーを見ていると判りますが、 `$excel.Quit()` だけではプロセスは落ちていません。利用した変数をキッチリ破棄する必要があります。
他にも、変数を Null にして GC を動かす方法もあるようです。

- 参考: [PowerShellでExcelを操作する　- 基礎編 -](https://letspowershell.blogspot.jp/2015/06/powershellexcel.html)

# 考察

ここまで見たら、後はググッて色々出来そうな気がしてきたと思います。
どこまでコマンドラインでできるかは判らないですが、私はオブジェクトを `Get-Member` で見ると色々出来そうだなという気分になりました。

実際仕事では、様々なログを正規表現をゴリゴリ書いて parse して、規定のレポーティング用にフォーマットし直して保存したり、Excel からデータを取得して突き合わせたりと大活躍してもらっています。