---
title: PowerShell×メール送信 for Gmail
updated: 2016-11-20 10:45:14Z
created: 2016-11-20 10:45:14Z
source: https://merseyside1892.blogspot.com/2012/11/powershell-for-gmail_27.html
tags:
  - SI
---

[(L)](https://www.blogger.com/)

|     |     |
| --- | --- |
|     |     |

0

[その他]()[次のブログ»](https://www.blogger.com/next-blog?navBar=true&blogID=3396139400255341391)

xyvyx10@gmail.com[ダッシュボード](https://www.blogger.com/home)[ログアウト](https://merseyside1892.blogspot.com/logout?d=https://www.blogger.com/logout-redirect.g?blogID%3D3396139400255341391%26postID%3D7267918700401158429)

# [マージーサイドの赤い情熱](https://merseyside1892.blogspot.jp/)

You'll Never Walk Alone ～俺たちは決して一人じゃない～

## 2012年11月27日火曜日

### PowerShell×メール送信 for Gmail

PowerShellを使って手動でメールを送信するスクリプトを作成しまっしょい。Linuxではコマンド・ラインでメールを送信するのは超簡単なんだけど、Windows環境では残念な事に簡単ではないのです。

何らかのツールを使えばもしかしたら簡単なのかもしれないけど、ここは商用環境を想定して、どこの馬の骨かも分からんソフトはインストールできない事を想定し、Windows Vista以降のOSで標準インストールされているPowerShellを使う事にします。

そんな訳で、PowerShellのない環境(Windows Server 2003以前)ではVBを使う事になると思いますが、私はVBは全く得意ではないのでMi dispiace.

という訳でこちらをどうぞ。

$User     = "sample@gmail.com"
$Pass     = "password for sample"
$From     = "sample@gmail.com"
$To       = "test@yahoo.co.jp"
$SmtpHost = "smtp.gmail.com"
$SmtpPort = 587
$Subject  = "Test Mail"
$Body     = "This is a test mail."

$Mail         = New-Object System.Net.Mail.MailMessage
$Mail.From    = $From
$Mail.To.Add($To)
$Mail.Subject = $Subject
$Mail.Body    = $Body

$SmtpClient  = New-Object Net.Mail.SmtpClient($SmtpHost)
$Credentials = New-Object System.Net.NetworkCredential($User, $Pass)

$SmtpClient.UseDefaultCredentials = $False
$SmtpClient.EnableSsl             = $True
$SmtpClient.Credentials           = $Credentials
$SmtpClient.Port                  = $SmtpPort
$SmtpClient.Send($Mail)

携帯電話にも問題なく送信できます。送信履歴はGmailにしっかりと残ってくれます。PC or Mobile問わず、日本語でも文字化けしないです。

改行したい場合は、メッセージ本体の変数内で改行して問題ないです。こんな感じでね。

$Body =
"
test 1
test 2
test 3
"

複数の宛先に送信したい場合は、以下のように1行ずつ追加していきます。CCに指定したい場合は**「To」**の部分を**「CC」**に変更しましょう。

$Mail.To.Add("test-1@yahoo.co.jp")
$Mail.To.Add("test-2@yahoo.co.jp")
$Mail.To.Add("test-3@yahoo.co.jp")

送信者(From)と返信先(ReplyTo)を別メールアドレスにしたい場合は、こちらを組み込みましょう。

$Mail.Sender  = "test@sample.com"
$Mail.ReplyTo = "test@sample.com"

厳密に言うと、返信先は**「ReplyTo」**で設定できるのだけど、返信先と送信者のドメインが違うからなのか、Yahoo Mailでは迷惑メールと判定されてしまいました。

上記のように**「Sender」**を指定すると、正常なメールであると判定されたけど、メールサーバのポリシーによっては、迷惑メールと判定されてしまうかもしれないです。

なので、極力**「From」「Sender」「ReplyTo」**のドメイン(もしくはメールアドレス)は統一した方が良いかもしれないです。ここら辺は検証していないので、要件に応じて適宜検証してみてください。

ハマったポイントとしては、GmailのMXレコードを参照するとこちらのMXがヒットするんです。

gmail-smtp-in.l.google.com　⇒　gmail.com の MX
aspmx.l.google.com　⇒　google.co.jp, google.com の MX

だけど、このMXだとSMTP認証が上手くいかないみたいなんです。587と465のどちらでも上手くいかないです。だけどsmtp.gmail.comだと何故か上手くいきました。

何故なのか分からないところが非常に残念だけど、Windows環境はあまり得意ではないので、こんなところでお願いします。

 [![B!](../_resources/button-counter.gif)    **0**](http://b.hatena.ne.jp/entry/s/merseyside1892.blogspot.com/2012/11/powershell-for-gmail_27.html)

0

[**Tweet](https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fmerseyside1892.blogspot.jp%2F2012%2F11%2Fpowershell-for-gmail_27.html&ref_src=twsrc%5Etfw&text=PowerShell%C3%97%E3%83%A1%E3%83%BC%E3%83%AB%E9%80%81%E4%BF%A1%20for%20Gmail&tw_p=tweetbutton&url=https%3A%2F%2Fmerseyside1892.blogspot.jp%2F2012%2F11%2Fpowershell-for-gmail_27.html&via=merseyside_1892)

[**Follow **@merseyside_1892**](https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fmerseyside1892.blogspot.jp%2F2012%2F11%2Fpowershell-for-gmail_27.html&ref_src=twsrc%5Etfw&region=follow_link&screen_name=merseyside_1892&tw_p=followbutton)

投稿者Jun時刻:[15:53](https://merseyside1892.blogspot.jp/2012/11/powershell-for-gmail_27.html)

ラベル:[IT](https://merseyside1892.blogspot.jp/search/label/IT)

[次の投稿](https://merseyside1892.blogspot.jp/2012/12/12-13-pl-15th-liverpool-v-southampton_2.html)[前の投稿](https://merseyside1892.blogspot.jp/2012/11/12-13-pl-13th-swansea-city-v-liverpool_26.html)[ホーム](https://merseyside1892.blogspot.jp/)

## Recent Posts

[読込中...](http://merseyside1892.blogspot.com/feeds/posts/default)

## Archive

- [► ](#)[2016](https://merseyside1892.blogspot.jp/search?updated-min=2016-01-01T00:00:00%2B09:00&updated-max=2017-01-01T00:00:00%2B09:00&max-results=21)(21)
- [► ](#)[2015](https://merseyside1892.blogspot.jp/search?updated-min=2015-01-01T00:00:00%2B09:00&updated-max=2016-01-01T00:00:00%2B09:00&max-results=50)(72)
- [► ](#)[2014](https://merseyside1892.blogspot.jp/search?updated-min=2014-01-01T00:00:00%2B09:00&updated-max=2015-01-01T00:00:00%2B09:00&max-results=50)(161)
- [► ](#)[2013](https://merseyside1892.blogspot.jp/search?updated-min=2013-01-01T00:00:00%2B09:00&updated-max=2014-01-01T00:00:00%2B09:00&max-results=50)(110)
- [▼ ](#)[2012](https://merseyside1892.blogspot.jp/search?updated-min=2012-01-01T00:00:00%2B09:00&updated-max=2013-01-01T00:00:00%2B09:00&max-results=50)(140)
    - [► ](#)[12月](https://merseyside1892.blogspot.jp/2012_12_01_archive.html)(8)
    - [▼ ](#)[11月](https://merseyside1892.blogspot.jp/2012_11_01_archive.html)(10)
        - [PowerShell×メール送信 for Gmail](https://merseyside1892.blogspot.jp/2012/11/powershell-for-gmail_27.html)
        - [12-13 PL 13th Swansea City v Liverpool](https://merseyside1892.blogspot.jp/2012/11/12-13-pl-13th-swansea-city-v-liverpool_26.html)
        - [12-13 PL 12th Liverpool v Wigan Athletic](https://merseyside1892.blogspot.jp/2012/11/12-13-pl-12th-liverpool-v-wigan-athletic_19.html)
        - [Forest 6th edition](https://merseyside1892.blogspot.jp/2012/11/forest-6th-edition_15.html)
        - [12-13 PL 11th Chelsea v Liverpool](https://merseyside1892.blogspot.jp/2012/11/12-13-pl-11th-chelsea-v-liverpool_13.html)
        - [12-13 EL GS 4th Anzhi v Liverpool](https://merseyside1892.blogspot.jp/2012/11/12-13-el-gs-4th-anzhi-v-liverpool_12.html)
        - [12-13　ダニエル・パチェコ](https://merseyside1892.blogspot.jp/2012/11/12-13_11.html)
        - [12-13 U-21 Wolves v Liverpool](https://merseyside1892.blogspot.jp/2012/11/12-13-u-21-wolves-v-liverpool_10.html)
        - [12-13 Retrospection for Capital One Cup](https://merseyside1892.blogspot.jp/2012/11/12-13-retrospection-for-capital-one-cup_3.html)
        - [12-13 CC 4th-Round Liverpool v Swansea City](https://merseyside1892.blogspot.jp/2012/11/12-13-cc-4th-round-liverpool-v-swansea_3.html)
    - [► ](#)[10月](https://merseyside1892.blogspot.jp/2012_10_01_archive.html)(11)
    - [► ](#)[9月](https://merseyside1892.blogspot.jp/2012_09_01_archive.html)(17)
    - [► ](#)[8月](https://merseyside1892.blogspot.jp/2012_08_01_archive.html)(14)
    - [► ](#)[7月](https://merseyside1892.blogspot.jp/2012_07_01_archive.html)(4)
    - [► ](#)[6月](https://merseyside1892.blogspot.jp/2012_06_01_archive.html)(10)
    - [► ](#)[5月](https://merseyside1892.blogspot.jp/2012_05_01_archive.html)(15)
    - [► ](#)[4月](https://merseyside1892.blogspot.jp/2012_04_01_archive.html)(14)
    - [► ](#)[3月](https://merseyside1892.blogspot.jp/2012_03_01_archive.html)(9)
    - [► ](#)[2月](https://merseyside1892.blogspot.jp/2012_02_01_archive.html)(14)
    - [► ](#)[1月](https://merseyside1892.blogspot.jp/2012_01_01_archive.html)(14)
- [► ](#)[2011](https://merseyside1892.blogspot.jp/search?updated-min=2011-01-01T00:00:00%2B09:00&updated-max=2012-01-01T00:00:00%2B09:00&max-results=50)(74)
- [► ](#)[2010](https://merseyside1892.blogspot.jp/search?updated-min=2010-01-01T00:00:00%2B09:00&updated-max=2011-01-01T00:00:00%2B09:00&max-results=49)(49)

[@merseyside_1892 からのツイート](https://twitter.com/merseyside_1892)

## Label

- [Announcement](https://merseyside1892.blogspot.jp/search/label/Announcement)(4)
- [Argument](https://merseyside1892.blogspot.jp/search/label/Argument)(1)
- [Books](https://merseyside1892.blogspot.jp/search/label/Books)(2)
- [Cartoons](https://merseyside1892.blogspot.jp/search/label/Cartoons)(2)
- [Chromebook](https://merseyside1892.blogspot.jp/search/label/Chromebook)(1)
- [Comedy](https://merseyside1892.blogspot.jp/search/label/Comedy)(1)
- [Education](https://merseyside1892.blogspot.jp/search/label/Education)(4)
- [English](https://merseyside1892.blogspot.jp/search/label/English)(9)
- [Football](https://merseyside1892.blogspot.jp/search/label/Football)(48)
- [Harry Potter](https://merseyside1892.blogspot.jp/search/label/Harry%20Potter)(1)
- [I recommend](https://merseyside1892.blogspot.jp/search/label/I%20recommend)(6)
- [I think](https://merseyside1892.blogspot.jp/search/label/I%20think)(29)
- [IT](https://merseyside1892.blogspot.jp/search/label/IT)(23)
- [LFCTV](https://merseyside1892.blogspot.jp/search/label/LFCTV)(7)
- [Liverpool](https://merseyside1892.blogspot.jp/search/label/Liverpool)(338)
- [Manager&Academy](https://merseyside1892.blogspot.jp/search/label/Manager%26Academy)(3)
- [Managers](https://merseyside1892.blogspot.jp/search/label/Managers)(37)
- [Mathematics](https://merseyside1892.blogspot.jp/search/label/Mathematics)(1)
- [Mobile](https://merseyside1892.blogspot.jp/search/label/Mobile)(9)
- [Movies](https://merseyside1892.blogspot.jp/search/label/Movies)(5)
- [Ordinary days](https://merseyside1892.blogspot.jp/search/label/Ordinary%20days)(9)
- [Players](https://merseyside1892.blogspot.jp/search/label/Players)(100)
- [Reserve and Academy](https://merseyside1892.blogspot.jp/search/label/Reserve%20and%20Academy)(120)
- [Summary](https://merseyside1892.blogspot.jp/search/label/Summary)(41)
- [Transfer](https://merseyside1892.blogspot.jp/search/label/Transfer)(86)
- [Travel](https://merseyside1892.blogspot.jp/search/label/Travel)(2)
- [TV](https://merseyside1892.blogspot.jp/search/label/TV)(2)
- [Watching football games](https://merseyside1892.blogspot.jp/search/label/Watching%20football%20games)(23)

|     |     |
| --- | --- |
|     |     |

画像ウィンドウ テンプレート. テンプレート画像提供: [konradlew](http://www.istockphoto.com/googleimages.php?id=5404187&platform=blogger&langregion=ja) さん. Powered by [Blogger](https://www.blogger.com/).