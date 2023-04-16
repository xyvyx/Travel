---
title: 統合言語クエリ - Wikipedia
updated: 2016-12-06 07:30:01Z
created: 2016-12-06 07:30:01Z
source: >-
  https://ja.wikipedia.org/wiki/%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA
tags:
  - SI
---

# 統合言語クエリ

移動先:[案内](https://ja.wikipedia.org/wiki/%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA#mw-head)、[検索](https://ja.wikipedia.org/wiki/%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA#p-search)

|     |     |
| --- | --- |
|     | 「**LINQ**」はこの項目へ[転送](https://ja.wikipedia.org/wiki/Wikipedia:%E3%83%AA%E3%83%80%E3%82%A4%E3%83%AC%E3%82%AF%E3%83%88)されています。アイドルグループについては「[LinQ](https://ja.wikipedia.org/wiki/LinQ)」を、その他の「リンク」については「[リンク (曖昧さ回避)](https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%B3%E3%82%AF_(%E6%9B%96%E6%98%A7%E3%81%95%E5%9B%9E%E9%81%BF))」をご覧ください。 |

**統合言語クエリ** (**LINQ**, **Language INtegrated Query**, リンクと発音する)とは、[.NET Framework](https://ja.wikipedia.org/wiki/.NET_Framework) 3.5において、様々な種類のデータ集合に対して**標準化された方法で**データを問い合わせる（クエリ）ことを可能にするために、[言語](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E)に統合された機能のことである。開発ツールは[Visual Studio 2008](https://ja.wikipedia.org/wiki/Microsoft_Visual_Studio)から対応している。

## 例[[編集](https://ja.wikipedia.org/w/index.php?title=%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA&action=edit&section=1)]

fromからselectまでの一連の式がLINQクエリ式である。このコードでは、fruitsの中からmで始まるものを取り出し、それをretに格納し、それをforeachで順に出力している（実際にはretは[遅延評価](https://ja.wikipedia.org/wiki/%E9%81%85%E5%BB%B6%E8%A9%95%E4%BE%A1)される）。

string[] fruits =
{
"apple",
"cherry",
"melon",
"orange",
"marron",
"mango",
};
var ret = from x in fruits
where x[0] == 'm'
select x;
foreach (var e in ret)
{
Console.WriteLine(e);
}

## 言語仕様[[編集](https://ja.wikipedia.org/w/index.php?title=%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA&action=edit&section=2)]

LINQに対応する言語は、LINQ の能力をより発揮させるために新しい言語仕様が併せて導入されている。例えば、クエリ式、拡張メソッド、ラムダ式、匿名型などがそうである。[C#](https://ja.wikipedia.org/wiki/C_Sharp) における例は [C# 3.0からの仕様](https://ja.wikipedia.org/wiki/C_Sharp#C.23_3.0.E3.81.8B.E3.82.89.E3.81.AE.E4.BB.95.E6.A7.98) を参照されたい。

## データソース[[編集](https://ja.wikipedia.org/w/index.php?title=%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA&action=edit&section=3)]

LINQはサードパーティによるものを含め、あらゆる種類のデータソースに対して適用することができる。これは、標準クエリ演算子に対応する機能を拡張メソッドとしてデータソースに追加することで実現している。

従来では同種のデータ型やオブジェクトの集合に対して列挙やソート、フィルタを効率的に扱うために[配列](https://ja.wikipedia.org/wiki/%E9%85%8D%E5%88%97) (Arrayクラス) やコレクションオブジェクトが用いられた。一方、[データベース](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9)や[XML](https://ja.wikipedia.org/wiki/Extensible_Markup_Language)上のデータ集合は[ADO.NET](https://ja.wikipedia.org/wiki/ADO.NET)によってデータセットとして取り扱われており異なる操作が必要であった。LINQによって、これらのオブジェクトやデータセットを区別せず共通的に扱うことが可能となった。

例えば、マイクロソフトによるものでは次のような実装がある。

- LINQ to Objects (あらゆるコレクション/列挙子をLINQクエリで操作可能にする)
- LINQ to XML (XLinq)
- LINQ to ADO.NET
    - LINQ to SQL (DLinq / SQL Server専用)
    - LINQ to Entities (SQL Setrver / ORACLE / MySQL / SQLite等)
    - LINQ to DataSet (DataSetに対する拡張メソッドにより、LINQクエリを記述可能とする)
- Azure Table Storage (Windows AzureのキーバリューストアでLINQクエリを記述可能とする)

サードパーティ製データソースとしては、以下が挙げられる。

- [LINQ to Twitter](http://linqtotwitter.codeplex.com/) - ツイッターの情報をソースとする。

## LINQに対応する言語[[編集](https://ja.wikipedia.org/w/index.php?title=%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA&action=edit&section=4)]

次の言語がLINQに対応する。

- [C#](https://ja.wikipedia.org/wiki/C_Sharp) 3.0
- [F#](https://ja.wikipedia.org/wiki/F_Sharp) 1.1.8.1
- [Visual Basic](https://ja.wikipedia.org/wiki/Microsoft_Visual_Basic_.NET) 9.0
- Delphi Prism 2009 (Oxygene)

[C++/CLI](https://ja.wikipedia.org/wiki/C%2B%2B/CLI)はLINQに対応する予定はなく、従来通りの構文でLINQ関係のライブラリを使用できるのみである。

## その他の言語での実装[[編集](https://ja.wikipedia.org/w/index.php?title=%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA&action=edit&section=5)]

LINQは、LINQの思想に感化された人々により、マイクロソフト系のプログラミング言語にとどまらず、さまざまなプログラミング言語向けの実装が行われている。

- [jLinq](http://www.hugoware.net/Projects/jLinq) - [JavaScript](https://ja.wikipedia.org/wiki/JavaScript)での実装
- [JSINQ](http://www.codeplex.com/jsinq) - JavaScriptでの実装
- [linq.js](http://linqjs.codeplex.com/) - JavaScriptでの実装
- Chris Pietschmann's [LINQ to JavaScript](http://www.codeplex.com/JSLINQ) - JavaScriptでの実装
- [PHPLinq](http://www.codeplex.com/PHPLinq) - [PHP](https://ja.wikipedia.org/wiki/PHP:_Hypertext_Preprocessor)での実装
- [Quaere](http://xircles.codehaus.org/projects/quaere) - [Java](https://ja.wikipedia.org/wiki/Java)での実装
- [JaQue](http://jaque.googlecode.com/) - Javaでの実装.
- [JaQu](http://h2database.com/html/jaqu.html) - Javaでの実装
- [Querydsl](http://source.mysema.com/display/querydsl/Querydsl) - Javaでの実装
- [pynq](http://github.com/heynemann/pynq) - [Python](https://ja.wikipedia.org/wiki/Python)での実装
- [go-linq](http://ahmetalpbalkan.github.io/go-linq) - [Go](https://ja.wikipedia.org/wiki/Go_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E))での実装

## 外部リンク[[編集](https://ja.wikipedia.org/w/index.php?title=%E7%B5%B1%E5%90%88%E8%A8%80%E8%AA%9E%E3%82%AF%E3%82%A8%E3%83%AA&action=edit&section=6)]