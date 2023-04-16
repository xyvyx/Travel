---
title: Excel(エクセル)VBA入門：コンボボックスの使い方
updated: 2015-09-14 06:05:04Z
created: 2015-09-14 06:05:04Z
source: http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html
tags:
  - SI
---

[よねさんのWordとExcelの小部屋](http://www.eurus.dti.ne.jp/~yoneyama/)｜[Excel(エクセル)講座の総目次](http://www.eurus.dti.ne.jp/~yoneyama/Excel/Exl-_zen.htm)｜[Excel(エクセル) VBA入門：目次](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/index.html)｜コンボボックスの使い方

|     |     |
| --- | --- |
| [![よねさんのWordとExcelの小部屋　のHomeへ戻る](../_resources/yone_ba1.gif)](http://www.eurus.dti.ne.jp/~yoneyama/) | # [Excel(エクセル) VBA入門：コンボボックスの使い方]() |

|     |     |
| --- | --- |
| スポンサードリンク |     |
|     |     |

|     |     |
| --- | --- |
| [コンボボックスへデータを表示する](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#additem) | [コンボボックスへセル範囲のデータを表示する](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#rowsource) |
| [コンボボックスの値をセル範囲へ入力する](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#nyuryoku) |     |

## はじめに　　　[topへ](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#top)

- このページではユーザーフォームにコンボボックスを配置して使用する方法を書いています。

ユーザーフォームの使い方は　[Excel(エクセル) VBA入門：ユーザーフォームを利用する](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform.html)　をご覧ください。

- ユーザーフォームはシートへ配置したフォームのボタンで表示するようにしています。

    - シートにフォームのボタンを表示しています。このボタンには下のコード「myform1」を登録しています。

 ![](../_resources/18a80f67933769395fbc63c07b0503ea.png)

    - 標準モジュールには以下のコードを書いて、ユーザーフォームを表示するようにしています。

Sub myform1()
　　UserForm1.Show
End Sub

- ユーザーフォームへはコンボボックスと、コマンドボタンを2個配置したものを使っています。

    - このページで使用しているユーザーフォームは下図のようなものです。

 ![](../_resources/8f24cd73168097b4bca9bad2191523a8.png)

    - ［終了］ボタンはCommandButton2で下記のコードでユーザーフォームを閉じるようにしています。

        - Private Sub CommandButton2_Click()

　　Unload Me
End Sub

## [コンボボックスへデータを表示する]()　　　[topへ](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#top)

-

### AddItem メソッドで項目を設定する

    - コードの例

|     |
| --- |
| Private Sub UserForm_Initialize()<br>　　With ComboBox1<br>　　　　.AddItem "りんご"<br>　　　　.AddItem "みかん"<br>　　　　.AddItem "バナナ"<br>　　　　.AddItem "マンゴー"<br>　　End With<br>End Sub |

    - 実行画面

 ![](../_resources/0419ebfe28fc280e3ab109cc5e1ad66f.png)

-

### Columnプロパティで複数の項目を設定する

    - [構文]　object.**ColumnCount** [= Long]　：列数を設定します。
    - [構文]　object.**ColumnWidths** [= String]　：各列の幅を設定します。
    - [構文]　object.**Column(column,row)** [= Variant] 　：項目を設定します
    - コードの例

リストを配列myDataに読み込みコンボボックスへColumnプロパティで追加しています。

|     |
| --- |
| Private Sub UserForm_Initialize()<br>　　Dim myData(2, 2) As Variant<br>　　　　myData(0, 0) = 1001<br>　　　　myData(0, 1) = 1002<br>　　　　myData(0, 2) = 1003<br>　　　　myData(1, 0) = "りんご"<br>　　　　myData(1, 1) = "みかん"<br>　　　　myData(1, 2) = "バナナ"<br>　　　　myData(2, 0) = 100<br>　　　　myData(2, 1) = 150<br>　　　　myData(2, 2) = 200<br>　　　　With ComboBox1<br>　　　　　　.ColumnCount = 3<br>　　　　　　.ColumnWidths = "50;50;50"<br>　　　　　　.Column() = myData<br>　　　　End With<br>End Sub |

    - 実行画面

 ![](../_resources/562f79a54a750fac5e5e52e8aed72da4.png)

## [コンボボックスへセル範囲のデータを表示する]()　　　[topへ](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#top)

- RowSourceプロパティを利用します。

[構文]　object.**RowSource** [= String]

- Listプロパティを利用します。

[構文]　object.**List**( row, column ) [= Variant]

- 複数列を表示するにはColumnCountプロパティを利用します。

[構文]　object.**ColumnCount** [= Long]

    - 0 を設定すると、列はすべて表示されなくなります。
    - -1 を設定すると、表示可能な列がすべて表示されます

- 列幅を指定するにはColumnWidthsプロパティを利用します。

[構文]　object.**ColumnWidths** [= String]

    - 単位はポイント。他の単位を使用する場合は単位を明記します。

空白または-1を指定すると、Excelの計算値になります。
0を指定すると表示されません。

- [例]Sheet1のA:C列の値をリストボックスに表示します。

    - Sheet1

 ![](../_resources/256002df21226770192ed255d1b438c1.png)

    - コードの例(A)

        1. RowSourceプロパティを利用した例

|     |
| --- |
| Private Sub UserForm_Initialize()<br>　　Dim lRow As Long<br>　　　　With Worksheets("Sheet1")<br>　　　　　　lRow = .Range("A" & Rows.Count).End(xlUp).Row<br>　　　　End With<br>　　　　With ComboBox1<br>　　　　　　.ColumnCount = 3<br>　　　　　　.ColumnWidths = "50;50;50"<br>　　　　　　.RowSource = "Sheet1!A2:C" & lRow<br>　　　　End With<br>End Sub |

        2. Listプロパティを利用した例
配列myDataに項目を読み込み、Listプロパティへ渡しています。

|     |
| --- |
| Private Sub UserForm_Initialize()<br>　　Dim lRow As Long<br>　　Dim i As Long, myCnt As Long<br>　　Dim myData<br>　　　　With Worksheets("Sheet1")<br>　　　　　　lRow = .Range("A" & Rows.Count).End(xlUp).Row<br>　　　　　　myData = .Range("A2:C" & lRow).Value<br>　　　　End With<br>　　　　With ComboBox1<br>　　　　　　.ColumnCount = 3<br>　　　　　　.ColumnWidths = "50;50;50"<br>　　　　　　.List = myData<br>　　　　End With<br>End Sub |

    - 実行例

 ![](../_resources/28644fdfc3a1416d192599d2c14e36a8.png)

## [コンボボックスの値をセル範囲へ入力する]()　　　[topへ](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/vba_userform05.html#top)

- コンボボックスで選択した行は**ListIndex** プロパティで取得できます。

    - どの行も選択されていない時は-1を返します。

1行目が選択されている時は0を返します。

    - コードの例1です。

コンボボックスでどの行も選択されていない時はメッセージボックスで選択を促します。

        - ユーザーフォームに配置した「CommandButton1」をクリックしてシートへ書き込む例です。

|     |
| --- |
| Private Sub CommandButton1_Click()<br>　　Dim lRow As Long, i As Long<br>　　Dim ListNo As Long<br>　　　　ListNo = ComboBox1.ListIndex<br>　　　　　　If ListNo < 0 Then<br>　　　　　　　　MsgBox "いずれかの行を選択してください"<br>　　　　　　　　Exit Sub<br>　　　　　　End If<br>　　　　With Worksheets("Sheet2")<br>　　　　　　lRow = .Range("B" & Rows.Count).End(xlUp).Row<br>　　　　　　For i = 0 To 2<br>　　　　　　　　.Cells(lRow + 1, i + 2).Value = ComboBox1.List(ListNo, i)<br>　　　　　　Next i<br>　　　　End With<br>End Sub |

    - 使用しているユーザーフォームは下図のようなものです。（コンボボックスを開いていない状態）

 ![](../_resources/15e1dd511f3c973c7aabedd11d7eba6a.png)

    - 実行画面の例です。

 ![](../_resources/22a148e48ae89eacc9f415adb867fb30.png)
スポンサードリンク

* * *

[よねさんのWordとExcelの小部屋](http://www.eurus.dti.ne.jp/~yoneyama/)｜[Excel(エクセル)講座の総目次](http://www.eurus.dti.ne.jp/~yoneyama/Excel/Exl-_zen.htm)｜[Excel(エクセル) VBA入門：目次](http://www.eurus.dti.ne.jp/~yoneyama/Excel/vba/index.html)｜コンボボックスの使い方

PageViewCounter
　![Counter](../_resources/Count.cgi.gif)
　Since2006/2/27