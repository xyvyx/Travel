---
title: Windows 10でファイルの中身検索（全文検索）を有効にする方法と注意点
updated: 2016-12-16 09:00:18Z
created: 2016-12-16 09:00:18Z
source: http://did2memo.net/2016/04/24/windows-10-file-text-search/
tags:
  - SI
---

# Windows 10でファイルの中身検索（全文検索）を有効にする方法と注意点

[情報科学屋さんを目指す人のメモ](http://did2memo.net/)
方法・手順・解説を書き残すブログ。私と同じことを繰り返さずに済むように。

Windowsでファイルを検索するときに、通常は、**ファイル名についてのみ検索**されます。そのため、「**ファイルの中身にそのキーワードが入っているか**」は検索対象になりません。今回は、この設定を切り替えて、**ファイルの中身にキーワードが入っているかまで検索する検索方法（＝全文検索する方法）を紹介**します。

※後半で紹介しますが、「今までファイルの中身も検索できていると思っていた！でも実は検索できていなかった！」が発生しやすいUIなので、そのあたりも注意してください。

## ファイルの中身を使った検索方法（全文検索する方法）

まず、普通に検索してみます。

今回は、「error」が含まれるファイルを検索したいのですが、「error」で検索しても、**ファイル名に「error」が入っているファイルが無いため、「検索条件に一致する項目はありません」と表示**されてしまいます。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-no-files.png)

[![windows-10-file-text-search-no-files](../_resources/877633ae1e9e0fb8451ffc49717ab400.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-no-files.png)

こんなときは、**「検索ツール」を「検索>詳細オプション>インデックスが作成されていない場所」の「ファイル コンテンツ」にチェックを入れて**みてください。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-contents-search.png)

[![windows-10-file-text-search-contents-search](../_resources/02a3b284a9edc60a17a239ffcf22bb7c.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-contents-search.png)

すると、**ファイルの中身（本文）も検索対象に含まれて、検索結果が更新されます**。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-contents-search-results.png)

[![windows-10-file-text-search-contents-search-results](../_resources/0d36403494c560950870376d57ae9329.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-contents-search-results.png)

## ExcelやPowerPointなども

また、この全文検索機能では、**Excel・PowerPoint・Wordなどの形式のファイルも、ファイルの中身を見て検索**してくれます。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-contents-search-excel-powerpoint.png)

[![windows-10-file-text-search-contents-search-excel-powerpoint](../_resources/0ee5c30853ffcb56d0e41dab83e7ff62.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-contents-search-excel-powerpoint.png)

## 「インデックスのオプション」について

実はこの全文検索機能は、「インデックスのオプション」で指定されているフォルダであれば、この設定をせずに、初めから利用可能です。
例えば、「ユーザー」フォルダ以下（マイドキュメントなどを含む）であれば、最初から有効です。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-indexing-settings.png)

[![windows-10-file-text-search-indexing-settings](../_resources/0f7f9f44bf92367144646f90da02ff3e.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-indexing-settings.png)

**ここで設定されていないフォルダであっても、今回紹介した方法で設定を変更することで、全文検索（本文を含めた検索）ができるようになる**、というわけです。
また、よく全文検索をしたいフォルダは、「変更」ボタンから追加しておくと、検索が高速になって便利です。
この**設定画面は、検索中に「検索>検索オプション>インデックスが作成された場所の変更」から開く**ことができます。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-open-indexing-settings.png)

[![windows-10-file-text-search-open-indexing-settings](../_resources/2313d298f01d01b424b261051758e3df.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-open-indexing-settings.png)

## UIの設計と注意点について

このように、**インデックスが作成されている場所かどうかを意識しないと、検索結果に差が出る**仕組みになっており、普段、全文検索が有効のフォルダばかり検索していると、それ以外の場所で**「検索結果に一致する項目はありません」が表示された際に、「本文に入っているファイルもない」と誤解してしまいかねないUIとなっています**（「本文も検索する」ボタンがここにあったり、「ここはインデックスが作成されていないフォルダです 詳しくはこちら」なんて書いてあれば違うのですが）。

[(L)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-no-files.png)

[![windows-10-file-text-search-no-files](../_resources/877633ae1e9e0fb8451ffc49717ab400.png)](http://did2memo.net/wp-content/uploads/2016/04/windows-10-file-text-search-no-files.png)

今回の設定方法を知ると同時に、この誤解について、注意するようにしてください。
※このあたり、昔はいろいろ違ったようなぼんやりとした記憶。

## 関連記事

公開日：2016年4月24日