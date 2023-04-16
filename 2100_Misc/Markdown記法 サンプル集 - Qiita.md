---
title: Markdown記法 サンプル集 - Qiita
updated: 2017-12-30 13:32:48Z
created: 2017-12-30 13:32:48Z
source: https://qiita.com/tbpgr/items/989c6badefff69377da7
author: xyvyx10
tags:
  - SI
---

#  Markdown記法 サンプル集

##  見出し

1個から6個シャープで見出しを記述する。

###  記述例

# 見出し1

## 見出し2

### 見出し3

#### 見出し4

##### 見出し5

###### 見出し6

### 表示例

# 見出し1

## 見出し2

### 見出し3

#### 見出し4

##### 見出し5

###### 見出し6

##  箇条書きリスト

ハイフン、プラス、アスタリスクのいずれかで箇条書きリストを記述可能。

### 記述例

- リスト1
- ネスト リスト1_1
- ネスト リスト1_1_1
- ネスト リスト1_1_2
- ネスト リスト1_2
- リスト2
- リスト3

### 表示例

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

##  番号付きリスト

### 記述例

1. 番号付きリスト1
1. 番号付きリスト1_1
1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3

### 表示例

1. 番号付きリスト1
    1. 番号付きリスト1_1
    2. 番号付きリスト1_2
2. 番号付きリスト2
3. 番号付きリスト3

##  引用

> お世話になります。xxxです。
> > ご連絡いただいた、バグの件ですが、仕様です。

### 表示例

> お世話になります。xxxです。
> ご連絡いただいた、バグの件ですが、仕様です。

##  二重引用

### 記述例

> お世話になります。xxxです。
> > ご連絡いただいた、バグの件ですが、仕様です。
>> お世話になります。 yyyです。
>> >> あの新機能バグってるっすね

### 表示例

> お世話になります。xxxです。
> ご連絡いただいた、バグの件ですが、仕様です。
> お世話になります。 yyyです。
> あの新機能バグってるっすね

##  pre記法(スペース4 or タブ)

半角スペース4個もしくはタブで、コードブロックをpre表示できます

### 記述例

# Tab

class Hoge
def hoge
print 'hoge'
end
end
---

# Space

class Hoge
def hoge
print 'hoge'
end
end

### 表示例

class Hoge
def hoge
print 'hoge'
end
end

* * *

class Hoge
def hoge
print 'hoge'
end
end

##  code記法

バッククォートで文字列を囲むことでコードの一部を表示可能です。

### 記述例

インストールコマンドは `gem install hoge` です

### 表示例

インストールコマンドは `gem install hoge` です

##  強調：<em>

アスタリスクもしくはアンダースコア1個で文字列を囲むことで強調します。
見た目は斜体になります。

### 記述例

normal *italic* normal
normal _italic_ normal

### 表示例

normal *italic* normal
normal *italic* normal

##  強調：<strong>

アスタリスクもしくはアンダースコア2個で文字列を囲むことで強調にします。
見た目は太字になります。

### 記述例

normal **bold** normal
normal __bold__ normal

### 表示例

normal **bold** normal
normal **bold** normal

##  強調：<em> + <strong>

アスタリスクもしくはアンダースコア3個で文字列を囲むことで <em> と <strong> による強調を両方適用します。
見た目は斜体かつ太字になります。

### 記述例

normal ***bold*** normal
normal ___bold___ normal

### 表示例

normal ***bold*** normal
normal ***bold*** normal

##  水平線

アンダースコア、アスタリスク、ハイフンなどを3つ以上連続して記述することで水平線を表示します。
※連続するハイフンなどの間にはスペースがあっても良い

### 記述例

***
___
---
* * *

### 表示例

* * *

##  リンク

`[表示文字](リンクURL)`形式でリンクを記述できます
[Google先生](https://www.google.co.jp/)
[Google先生](https://www.google.co.jp/)

##  定義参照リンク

Markdownの文書の途中に長いリンクを記述したくない場合は、
同じリンクの参照を何度も利用する場合は、リンク先への参照を定義することができます。
[こっちからgoogle][google]
その他の文章
[こっちからもgoogle][google]
[こっちからgoogle](https://www.google.co.jp/)
その他の文章
[こっちからもgoogle](https://www.google.co.jp/)

##  GitHub Flavored Markdown(GFM)

GitHub Flavored Markdown(GFM)はGitHubの独自仕様を加えたMarkdown記法。
以降、GFMと記載します。

##  GFM:リンクテキスト簡易記法

URLは記述するだけで自動的にリンクになります。

### 記述例

https://www.google.co.jp/

### 表示例

https://www.google.co.jp/

##  GFM:取り消し線

チルダ2個で文字列を囲むことで取り消し線を利用できます。

### 記述例

~~取り消し線~~

### 表示例

<s>取り消し線</s>

##  GFM:pre記法(チルダ×3)

### 記述例

　~~~
　class Hoge
　 def hoge
　 print 'hoge'
　 end
　end
　~~~

### 表示例

class Hoge
def hoge
print 'hoge'
end
end

##  GFM:pre記法(バッククォート×3)

### 記述例

　```
　class Hoge
　 def hoge
　 print 'hoge'
　 end
　end
　```

### 表示例

class Hoge
def hoge
print 'hoge'
end
end

##  GFM:pre記法(シンタックスハイライト)

チルダ、もしくはバッククォート3つの後ろに対象シンタックスの言語名を記述します。

### 記述例

　~~~ruby
　class Hoge
　 def hoge
　 print 'hoge'
　 end
　end
　~~~

### 表示例

class Hoge
def hoge
print 'hoge'
end
end

##  GFM:表組み

### 記述例

|header1|header2|header3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|

### 表示例

| header1 | header2 | header3 |
| --- | --- | --- |
| align left | align right | align center |
| a   | b   | c   |

## GFM:ページ内リンク

GitHubのMarkdownを利用すると、見出し記法を利用した際に
アンカーが自動的に作成されます。
そのアンカーを利用したページ内リンクを簡単に作成できます。

## <i class="fa fa-cube" style="font-size:1em;"></i> menu

* [to header1](#header1)
* [to header2](#header2)
<!-- some long code -->
[return to menu](#menu)

### header1

### header2

少し省略してますが、こんなかんじのHTMLになります。
<h2><a name="user-content-menu" href="#menu">menu</a></h2>
<a href="#header1">to header1</a>
<a href="#header2">to header2</a>
<!-- some long code -->
<a href="#menu">to menu</a>
<h3><a name="user-content-header1" href="#header1">header1</a></h3>
<h3><a name="user-content-header2" href="#header2">header2</a></h3>

##  参照

[QiitaでのMarkdownの使用について](http://qiita.com/Qiita/items/c686397e4a0f4f11683d)
[Qiitaの目次生成機能について](http://blog.qiita.com/post/77055935852/qiita-toc)