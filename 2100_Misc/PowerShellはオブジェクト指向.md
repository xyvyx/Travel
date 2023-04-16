---
title: PowerShellはオブジェクト指向
updated: 2016-12-14 08:42:28Z
created: 2016-12-14 08:42:28Z
source: >-
  http://ebi.dyndns.biz/windowsadmin/2009/06/22/powershell%e3%81%af%e3%82%aa%e3%83%96%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e6%8c%87%e5%90%91/
tags:
  - SI
---

# PowerShellはオブジェクト指向

とりあえずget-commandとget-helpでヘルプを見ながらある程度のことができるようになってきたら、次に把握すべきはPowerShellが「オブジェクト指向」である、ということだと思います。これは既存のほかのシェルとは決定的に異なる点であり、PowerShellのもっともすばらしい点だと思います。

具体的に見てみましょう。例えば文字列。
PS C:\> $hoge = "hoge"

これで$hogeという名前の変数の中に”hoge”という文字列が格納されました。･･･。では終わらないのがPowerShellのすごいところなのです。実はこの$hogeという変数の中に格納されたのは「オブジェクト」なのです。

型を確認してみましょう。これは「GetType()」メソッドで可能です。
PS C:\> $hoge.gettype()
IsPublic IsSerial Name BaseType
-------- -------- ---- --------
True True String System.Object

このように、$hogeはString型だ、ということがわかります。PowerShellは.net frameworkを基盤にして動いています。ということはStringというのはつまりSystem.Stringだ、ということです。

となればもちろん各種プロパティやメソッドも持っています。
PS C:\> $hoge | member
TypeName: System.String
Name MemberType Definition
---- ---------- ----------
Clone Method System.Object Clone()

CompareTo Method System.Int32 CompareTo(Object value), System.Int32 CompareTo(String strB)

Contains Method System.Boolean Contains(String value)

CopyTo Method System.Void CopyTo(Int32 sourceIndex, Char[] destination, Int32 destinationIn...

EndsWith Method System.Boolean EndsWith(String value), System.Boolean EndsWith(String value, ...

Equals Method System.Boolean Equals(Object obj), System.Boolean Equals(String value), Syste...

GetEnumerator Method System.CharEnumerator GetEnumerator()
GetHashCode Method System.Int32 GetHashCode()
GetType Method System.Type GetType()
GetTypeCode Method System.TypeCode GetTypeCode()
get_Chars Method System.Char get_Chars(Int32 index)
get_Length Method System.Int32 get_Length()

IndexOf Method System.Int32 IndexOf(Char value), System.Int32 IndexOf(Char value, Int32 star...

IndexOfAny Method System.Int32 IndexOfAny(Char[] anyOf), System.Int32 IndexOfAny(Char[] anyOf, ...

Insert Method System.String Insert(Int32 startIndex, String value)

IsNormalized Method System.Boolean IsNormalized(), System.Boolean IsNormalized(NormalizationForm ...

LastIndexOf Method System.Int32 LastIndexOf(Char value), System.Int32 LastIndexOf(Char value, In...

LastIndexOfAny Method System.Int32 LastIndexOfAny(Char[] anyOf), System.Int32 LastIndexOfAny(Char[]...

Normalize Method System.String Normalize(), System.String Normalize(NormalizationForm normaliz...

PadLeft Method System.String PadLeft(Int32 totalWidth), System.String PadLeft(Int32 totalWid...

PadRight Method System.String PadRight(Int32 totalWidth), System.String PadRight(Int32 totalW...

Remove Method System.String Remove(Int32 startIndex, Int32 count), System.String Remove(Int...

Replace Method System.String Replace(Char oldChar, Char newChar), System.String Replace(Stri...

Split Method System.String[] Split(Params Char[] separator), System.String[] Split(Char[] ...

StartsWith Method System.Boolean StartsWith(String value), System.Boolean StartsWith(String val...

Substring Method System.String Substring(Int32 startIndex), System.String Substring(Int32 star...

ToCharArray Method System.Char[] ToCharArray(), System.Char[] ToCharArray(Int32 startIndex, Int3...

ToLower Method System.String ToLower(), System.String ToLower(CultureInfo culture)

ToLowerInvariant Method System.String ToLowerInvariant()

ToString Method System.String ToString(), System.String ToString(IFormatProvider provider)

ToUpper Method System.String ToUpper(), System.String ToUpper(CultureInfo culture)

ToUpperInvariant Method System.String ToUpperInvariant()
Trim Method System.String Trim(Params Char[] trimChars), System.String Trim()
TrimEnd Method System.String TrimEnd(Params Char[] trimChars)
TrimStart Method System.String TrimStart(Params Char[] trimChars)
Chars ParameterizedProperty System.Char Chars(Int32 index) {get;}
Length Property System.Int32 Length {get;}

わかりますでしょうか。単純に代入しただけの文字列が「オブジェクト」であり、「プロパティ」を持ち、「メソッド」を持っているわけです。もちろんこれらのプロパティやメソッドはPowerShellから自由に使用することができます。リファレンスとしてはMSDNがそのまま使えます。

- [String クラス (System)](http://msdn.microsoft.com/ja-jp/library/system.string(VS.80).aspx)

ここまでの説明は、ある程度オブジェクト指向や.net frameworkのことを知っている人向けの説明になってしまっていますが、重要なことは「PowerShellをつかうとC#などの.netの言語でできることと同じことができてしまう」ということです。

例えば、文字の長さを知りたければLengthプロパティを参照すればいいです。
PS C:\> $hoge.length
4
例えば大文字にしたければToUpperメソッドを使用すればいいです。
PS C:\> $hoge.ToUpper()
HOGE
すばらしいですね。
極論を言えば、C#のプログラミングと(ほぼ)まったく同じことをPowerShellで(ほぼ)まったく同じように書くことが可能だと言うことです。
あまり意味は無いですが、例えばウインドウの生成だってできちゃいます。
[System.Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")
$form = New-Object System.Windows.Forms.Form
$button = New-Object System.Windows.Forms.Button
$button.Location = New-Object System.Drawing.Point(10, 50)
$button.Text = "クリック！“
$button.add_Click({ $label.Text = "hello, world"})
$label = New-Object System.Windows.Forms.Label
$label.Location = New-Object System.Drawing.Point(10, 10)
$form.Controls.AddRange(($button, $label))
[System.Windows.Forms.Application]::Run($form)
実行すると、以下のようなウインドウが表示されます。
[(L)](http://i2.wp.com/ebi.dyndns.biz/pictures/PowerShell_12D4C/image.png)

[![image](../_resources/image_thumb.png)](http://i2.wp.com/ebi.dyndns.biz/pictures/PowerShell_12D4C/image.png)

面白いですね。このようにPowerShellでは.net frameworkがその基盤として動いているため、.net frameworkの個々のクラスを利用しながらきちんとオブジェクト指向を使った柔軟なプログラミングができてしまうだけの力を備えているわけです。

ですが、もちろんこれは「そういう使い方もできる」という話です。オブジェクトを扱えることを生かして、シェルならではの短い表現で強力なことを実施できます。追々紹介していきます。

### *関連*

[![IPアドレスのキャッシュ](../_resources/image_thumb-1.png)](http://ebi.dyndns.biz/windowsadmin/2009/01/20/ip%e3%82%a2%e3%83%89%e3%83%ac%e3%82%b9%e3%81%ae%e3%82%ad%e3%83%a3%e3%83%83%e3%82%b7%e3%83%a5/)

#### [IPアドレスのキャッシュ](http://ebi.dyndns.biz/windowsadmin/2009/01/20/ip%e3%82%a2%e3%83%89%e3%83%ac%e3%82%b9%e3%81%ae%e3%82%ad%e3%83%a3%e3%83%83%e3%82%b7%e3%83%a5/)

Windowsネットワーク

[![PowerShellで簡単に集計する方法](../_resources/image_thumb13.png)](http://ebi.dyndns.biz/windowsadmin/2012/02/10/powershell%e3%81%a7%e7%b0%a1%e5%8d%98%e3%81%ab%e9%9b%86%e8%a8%88%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95/)

#### [PowerShellで簡単に集計する方法](http://ebi.dyndns.biz/windowsadmin/2012/02/10/powershell%e3%81%a7%e7%b0%a1%e5%8d%98%e3%81%ab%e9%9b%86%e8%a8%88%e3%81%99%e3%82%8b%e6%96%b9%e6%b3%95/)

PowerShell

#### [PowerShellはぜひマスターしよう](http://ebi.dyndns.biz/windowsadmin/2009/03/05/powershell%e3%81%af%e3%81%9c%e3%81%b2%e3%83%9e%e3%82%b9%e3%82%bf%e3%83%bc%e3%81%97%e3%82%88%e3%81%86/)

PowerShellはWindows Server管理者の必須スキルになってきています。
PowerShell

### 評価:

この記事はいかがでしたでしょうか？評価をいただけると励みになります。

![1 Star](../_resources/rating_on.gif)![2 Stars](../_resources/rating_on.gif)![3 Stars](../_resources/rating_on.gif)![4 Stars](../_resources/rating_on.gif)![5 Stars](../_resources/rating_on.gif) (**1** 投票, 平均: **5.00** 最高値 5)

**[Masahiko Ebisuda](http://ebi.dyndns.biz/windowsadmin/author/ebi/)**

子供3人。家族優先。都内SIer勤務。Windows系中心のインフラよりの何でも屋。脱原発。 Microsoft MVP for System Center and Datacenter Management.

# 投稿ナビゲーション

### コメントを残す [コメントをキャンセル](http://ebi.dyndns.biz/windowsadmin/2009/06/22/powershell%e3%81%af%e3%82%aa%e3%83%96%e3%82%b8%e3%82%a7%e3%82%af%e3%83%88%e6%8c%87%e5%90%91/#respond)

メールアドレスが公開されることはありません。
名前
メールアドレス
ウェブサイト
コメント
 新しいコメントをメールで通知
 新しい投稿をメールで受け取る