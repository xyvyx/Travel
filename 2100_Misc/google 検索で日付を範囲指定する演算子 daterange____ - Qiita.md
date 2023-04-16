---
title: google 検索で日付を範囲指定する演算子 daterange:*** - Qiita
updated: 2016-12-09 06:29:36Z
created: 2016-12-09 06:29:36Z
source: http://qiita.com/runtBlue/items/72b06b20a8a8720ef0b3
tags:
  - SI
---

# google 検索で日付を範囲指定する演算子 daterange:***

 2

* * *

## 日付指定検索

Harry Potter daterange:2004-01-13..2006-01-13
これで範囲検索できている。
daterange: がとる型は、上のような ISO8601 形式もしくはユリウス歴である。
人間が日常使用するなら ISO8601 でいいだろう。
たまにロボット検索ですかと聞かれるが仕方ない。
使い方「検索ワード daterange:YYYY-MM-DD..YYYY-MM-DD」
期間の検索に使用できる最も古い日付は 1990 年 1 月 1 日で、最も新しい日付は 2034 年 11 月 9 日です。

## （おまけ）日付や数値を含んだワンランク上のメタ検索

Harry Potter inmeta:modified:2006-01-01..2006-12-31
多種多様なメタ検索ができる inmeta 演算子がある。上のようにして検索ページの変更された日時を指定できる。
inmeta の値を modified にし、後ろに ISO8601 値を指定している。
inmeta 検索は上以外に多種多様のメタ属性値を与えることができる。書類に含まれるメタタグの値を指定した検索方法を一例にあげる。
Harry Potter inmeta:Enterprise
これで、Enterprise 値を持つ検索結果を返す。
inmeta:Author~J.K. Rowling
これで、Author 値が J.K. Rowling の一部もしくは全部を含む検索結果を返す。
inmeta:Author=J.K. Rowling
これで、Author 値が J.K. Rowling に一致する検索結果を返す。
こうしたメタタグに用いられる属性値の例として、ワード文章に含まれているものをあげよう。
<meta name="Author" content="Polly Hedra"></meta>
<meta name="Keywords" content="Resume"></meta>
<meta name="last saved by" content="Ray Polanco"></meta>
<meta name="revision number" content="1"></meta>
<meta name="last print date" content="5/27/2009 14:03:00"></meta>
<meta name="creation date" content="4/27/2009 13:15:00"></meta>
<meta name="Last Saved Date" content="4/27/2009 13:44:00"></meta>
<meta name="template" content="Taino Parrot Resume Template.dotx"></meta>
<meta name="edit minutes" content="23"></meta>
<meta name="page count" content="3"></meta>
<meta name="word count" content="220"></meta>
<meta name="character count" content="1512"></meta>
<meta name="source" content="Microsoft Office Word"></meta>
<meta name="security" content="0"></meta>
<meta name="Count Lines" content="12"></meta>
<meta name="Count Paragraphs" content="3"></meta>
<meta name="Scale Crop" content="no"></meta>
<meta name="company" content="Coqui Parrot Inc."></meta>
<meta name="links up to date" content="no"></meta>
<meta name="Count Characters with Space" content="1729"></meta>
<meta name="shared doc" content="no"></meta>
<meta name="Links Dirty" content="no"></meta>
<meta name="Application Version" content="12.0000"></meta>
属性値だけ抜き出したもの
Author
Keywords
last saved by
revision number
last print datemeta>
creation date
Last Saved Datemeta>
templatedotx"></meta>
edit minutes
page count
word count
character count
source
security
Count Lines
Count Paragraphs
Scale Crop
company
links up to date
Count Characters with Space
shared doc
Links Dirty
Application Version
下のようにすれば、メタ属性に関して OR 演算子を用いることもできる。
apple inmeta:TainoParrot6=244227 OR inmeta:TainoParrot6=244228
メタ属性が含まれない場合を考慮するためには、以下のように empty を使う。
apple empty OR inmeta:TainoParrot6=244228