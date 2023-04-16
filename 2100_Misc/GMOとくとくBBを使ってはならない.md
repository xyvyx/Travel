---
title: GMOとくとくBBを使ってはならない
updated: 2015-09-29 14:33:01Z
created: 2015-09-29 14:33:01Z
source: http://habu1010.tumblr.com/post/83718934090/gmoとくとくbbを使ってはならない
---

# [チラシの裏がわり](http://habu1010.tumblr.com/)

[RSS](http://habu1010.tumblr.com/rss)

[4月](http://habu1010.tumblr.com/post/83718934090/gmo%E3%81%A8%E3%81%8F%E3%81%A8%E3%81%8Fbb%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84)[24](http://habu1010.tumblr.com/post/83718934090/gmo%E3%81%A8%E3%81%8F%E3%81%A8%E3%81%8Fbb%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84)

### [GMOとくとくBBを使ってはならない](http://habu1010.tumblr.com/post/83718934090/gmo%E3%81%A8%E3%81%8F%E3%81%A8%E3%81%8Fbb%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84)

我が家の回線は[フレッツ・光ネクスト隼](http://flets-w.com/next/)を引いていて、プロバイダに[GMOとくとくBB](http://gmobb.jp/)を使用しているのだが、ここのところ、夜間になるとやけにインターネットのレスポンスが悪くなる現象が発生していた。Webブラウザでリンクをクリックするとワンテンポ待たされるし、データのダウンロード自体もやけに遅い。

おかしいと思い、www.yahoo.co.jpにpingを打ってみると…
> C:\Users\habu>ping > [> www.yahoo.co.jp](http://www.yahoo.co.jp/)

> [> www.g.yahoo.co.jp](http://www.g.yahoo.co.jp/)>  [183.79.11.230]に ping を送信しています 32 バイトのデータ:

> 183.79.11.230 からの応答: バイト数 =32 時間 =107ms TTL=55
> 183.79.11.230 からの応答: バイト数 =32 時間 =108ms TTL=55
> 183.79.11.230 からの応答: バイト数 =32 時間 =100ms TTL=55

> 183.79.11.230 の ping 統計:
>     パケット数: 送信 = 3、受信 = 3、損失 = 0 (0% の損失)、
> ラウンド トリップの概算時間 (ミリ秒):
>     最小 = 100ms、最大 = 108ms、平均 = 105ms

ファッ！？**pingの応答値が100ms**って…WIMAXかなんかですか？pingの応答が100msにもなると、オンラインゲームなんかはラグラグでプレイに支障をきたすレベル。

夜間の混む時間帯とはいえ、これはいくらなんでもおかしい。そこで経路を調べてみると…（IPアドレス一部伏せ字）
> C:\Users\habu>tracert > [> www.yahoo.co.jp](http://www.yahoo.co.jp/)

> [> www.g.yahoo.co.jp](http://www.g.yahoo.co.jp/)>  [183.79.139.228] へのルートをトレースしています

> 経由するホップ数は最大 30 です:

>   1    <1 ms     1 ms     2 ms  ntt.setup [***.***.***.***]
>   2     5 ms     5 ms     5 ms  ***.vectant.ne.jp [***.***.***.***]
>   3     5 ms     5 ms     5 ms  ***.vectant.ne.jp [***.***.***.***]
>   4   102 ms   102 ms   101 ms  ***.vectant.ne.jp [***.***.***.***]
>   5    99 ms   108 ms   103 ms  ***.vectant.ne.jp [***.***.***.***]
>   6    95 ms    93 ms    88 ms  ***.***.***.***
>   7    82 ms    90 ms    89 ms  ***.***.***.***
>   8   104 ms   110 ms   109 ms  ***.***.***.***
>   9   110 ms    99 ms   107 ms  ***.***.***.***
>  10   105 ms   107 ms   111 ms  f2.top.vip.kks.yahoo.co.jp [183.79.139.228]

> トレースを完了しました。
ははあ…これはGMOとくとくBBの上流インフラのVECTANTのネットワーク内（3番めと4番めのホップの間）で極端な遅延が発生してますねえ。
ということでGMOとくとくBBのサポートに上の結果を添えて苦情メールを送ったところ、
> お問い合わせいただいております件につきまして、
> 弊社回線の一部において回線の混雑などがございました場合、ルーター等の接続機器を再起動いただきますと、改善される場合がございます。

といういかにも定形な返信。いやいや、経路の途中で極端な遅延が発生してるのにルータの再起動もクソもないんだよなあ。まあサポートの人間はネットワークの知識とかなくマニュアルに従って返答してるからある程度はしかたがないか。

ということで、tracertの結果の3番めと4番めの間が明らかにおかしいよ～と親切に解説を入れて返信すると、次の応答メールが来た。
> ご詳細なご連絡ありがとうございます。 誠に恐れ入りますが調査を行わせていただくため下記の 必要情報をお知らせくださいますようお願い申し上げます。
> 接続用ID ：
> 回線種別 ：　(フレッツADSL12M・Bフレッツファミリーなど)
> 設置場所電話番号：
> エリア ：　(東京八王子市など)
> ——————————
> ——————————-

>  ■速度測定サイト

>  URL ：　> [http://speed.rbbtoday.com/cgi-bin/rbb003/input.cgi>  (> [http://speed.rbbtoday.com/cgi-bin/rbb003/input.cgi> )

>  速度： kbps
>  日時：

>  ■速度測定サイト

>  URL ：　> [http://www.musen-lan.com/speed/>  (> [http://www.musen-lan.com/speed/> )

>  速度： kbps
>  日時：
めんどくせ～～わざわざおかしい箇所まで指摘してやってるのに、速度測定までやらにゃならんのかと。でまあ仕方なく測定サイトで測定したら

> —— BNRスピードテスト (ダウンロード速度) —— 測定サイト： > [http://www.musen-lan.com/speed/>  Ver5.5001 測定日時： 2014/04/19 21:35:00 回線/ISP/地域： ——————————

> ——————–
>  1.NTTPC(WebARENA)1： 1.02Mbps (127.5KB/sec)
>  2.NTTPC(WebARENA)2： 1.13Mbps (140KB/sec)
>  推定転送速度： 1.13Mbps (140KB/sec)
おせえええええええｗｗｗｗｗｗｗｗｗｗ
1MbpsとかADSLのほうがマシなレベルだろｗｗｗｗｗ
といわけでサポートに結果を添えて返信。
「調査するのでしばし待て」とのメールが来てやっと調査してくれることになった。そして数日後の返答。
> お問い合わせいただきました件につきまして、回線側での調査が完了いたしましたため、ご案内申しあげます。

>  調査の結果、西日本エリアにおいて、現在接続中のNTT網終端装置では、深夜帯に回線の集中による混雑が発生している状況でした。設備自体に異常はございません。

>  ご不便をお掛けしておりますところ恐縮ですが、ご利用の網終端装置（ONU）やルーターの再起動にて回避される場合もございますため、再度速度低下を確認された際には再起動をお試しくださいますと幸いでございます。

ハァ？

GMOとくとくBBは、pingの応答が100msにもなり、回線速度が1Mbpsなどというベストエフォートで言い訳できないくらいの速度になってもそれは混雑のせいで問題ないという考えのようだ。

設備の障害ではなく、混雑のせいでここまで遅くなるというなら、それは明らかにキャパシティを大幅にオーバーした人数を回線に突っ込んでいるせいで、しかもそれを指摘されても改善するつもりがないようなので**解約を決定**。

代わりのプロバイダとして上流インフラが安定のIIJということで、[BB.excite](http://bb.excite.co.jp/)を使用することに。（VECTANTも結構安定したところだったと思うんだけどなあ…どうしてこうなった）

ちなみにBB.exciteに接続したときのpingとtracertの結果。
> C:\Users\habu>ping > [> www.yahoo.co.jp](http://www.yahoo.co.jp/)

> [> www.g.yahoo.co.jp](http://www.g.yahoo.co.jp/)>  [124.83.203.233]に ping を送信しています 32 バイトのデータ:

> 124.83.203.233 からの応答: バイト数 =32 時間 =12ms TTL=55
> 124.83.203.233 からの応答: バイト数 =32 時間 =11ms TTL=55
> 124.83.203.233 からの応答: バイト数 =32 時間 =11ms TTL=55
> 124.83.203.233 からの応答: バイト数 =32 時間 =12ms TTL=55

> 124.83.203.233 の ping 統計:
>     パケット数: 送信 = 4、受信 = 4、損失 = 0 (0% の損失)、
> ラウンド トリップの概算時間 (ミリ秒):
>     最小 = 11ms、最大 = 12ms、平均 = 11ms

> C:\Users\habu>tracert > [> www.yahoo.co.jp](http://www.yahoo.co.jp/)

> [> www.g.yahoo.co.jp](http://www.g.yahoo.co.jp/)>  [183.79.196.239] へのルートをトレースしています

> 経由するホップ数は最大 30 です:

>   1    <1 ms    <1 ms    <1 ms  ntt.setup [***.***.***.***]
>   2     4 ms     5 ms     3 ms  ***.2iij.net [***.***.***.***]
>   3     3 ms     5 ms     3 ms  ***.2iij.net [***.***.***.***]
>   4     8 ms    10 ms     9 ms  ***.IIJ.Net [***.***.***.***]
>   5    10 ms    11 ms     8 ms  ***.IIJ.Net [***.***.***.***]
>   6     9 ms    13 ms     9 ms  ***.IIJ.Net [***.***.***.***]
>   7    10 ms    12 ms    10 ms  ***.***.***.***
>   8    29 ms    15 ms    15 ms  ***.***.***.***
>   9    23 ms    25 ms    23 ms  ***.***.***.***
>  10    14 ms    16 ms    14 ms  183.79.196.239

> トレースを完了しました。
混んでる時間でも全く問題なし。これが当たり前なんだよなぁ…

GMOとくとくBBは私の中で「安かろう悪かろう」系のプロバイダであると自分の中では決定された。まあ1年使ったうち半年は乗り換えキャンペーンでタダだったからまぁいいか。

[Posted 1年前](http://habu1010.tumblr.com/post/83718934090/gmo%E3%81%A8%E3%81%8F%E3%81%A8%E3%81%8Fbb%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84)

[1 リアクション](http://habu1010.tumblr.com/post/83718934090/gmo%E3%81%A8%E3%81%8F%E3%81%A8%E3%81%8Fbb%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84#permalink-notes)

[**Tweet](https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fhabu1010.tumblr.com%2Fpost%2F83718934090%2Fgmo%25E3%2581%25A8%25E3%2581%258F%25E3%2581%25A8%25E3%2581%258Fbb%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%25AF%25E3%2581%25AA%25E3%2582%2589%25E3%2581%25AA%25E3%2581%2584&ref_src=twsrc%5Etfw&text=GMO%E3%81%A8%E3%81%8F%E3%81%A8%E3%81%8FBB%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%AF%E3%81%AA%E3%82%89%E3%81%AA%E3%81%84%20-%20%E3%83%81%E3%83%A9%E3%82%B7%E3%81%AE%E8%A3%8F%E3%81%8C%E3%82%8F%E3%82%8A&tw_p=tweetbutton&url=http%3A%2F%2Fhabu1010.tumblr.com%2Fpost%2F83718934090%2Fgmo%25E3%2581%25A8%25E3%2581%258F%25E3%2581%25A8%25E3%2581%258Fbb%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%25AF%25E3%2581%25AA%25E3%2582%2589%25E3%2581%25AA%25E3%2581%2584)

****[0](https://twitter.com/search?ref_src=twsrc%5Etfw&q=http%3A%2F%2Fhabu1010.tumblr.com%2Fpost%2F83718934090%2Fgmo%25E3%2581%25A8%25E3%2581%258F%25E3%2581%25A8%25E3%2581%258Fbb%25E3%2582%2592%25E4%25BD%25BF%25E3%2581%25A3%25E3%2581%25A6%25E3%2581%25AF%25E3%2581%25AA%25E3%2582%2589%25E3%2581%25AA%25E3%2581%2584)

<div style="display: none;">

謖ｮ壹＆繧後◆URL縺ｯ縲√い繝励Μ繧ｱ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ險ｭ螳壹〒險ｱ蜿ｯ縺輔ｌ縺ｦ縺∪縺帙ｓ縲: 謖ｮ壹＆繧後◆URL縺ｮ荳ｭ縺ｫ繧｢繝励Μ縺ｮ險ｭ螳壹〒隱阪ａ繧峨ｌ縺ｪ縺ｂ縺ｮ縺悟性縺ｾ繧後※縺∪縺吶ゅえ繧ｧ繝悶し繧､繝医∪縺溘繧ｭ繝｣繝ｳ繝舌せ縺ｮURL縺ｨ荳閾ｴ縺励※縺ｋ縺九√ラ繝｡繧､繝ｳ縺後い繝励Μ縺ｮ繝峨Γ繧､繝ｳ縺ｮ繧ｵ繝悶ラ繝｡繧､繝ｳ縺ｧ縺ゅｋ蠢ｦ√′縺ゅｊ縺ｾ縺吶

</div>

|     |     |     |
| --- | --- | --- |
| Like | Share | 0<br><s></s>** |

0

1. [![avatar_be0db27dfaeb_16.png](../_resources/avatar_be0db27dfaeb_16.png)](http://xkxyxrxixex.tumblr.com/)[xkxyxrxixex](http://xkxyxrxixex.tumblr.com/)がこの投稿を「スキ!」と言っています

2. [![avatar_696da8a1579c_16.png](../_resources/avatar_696da8a1579c_16.png)](http://habu1010.tumblr.com/)[habu1010](http://habu1010.tumblr.com/)の投稿です

![チラシの裏がわり](../_resources/avatar_696da8a1579c_48.png)
Tumblrについて チラシの裏がわり

- [Home](http://habu1010.tumblr.com/)
- [Archive](http://habu1010.tumblr.com/archive)
- [RSS Feed](http://habu1010.tumblr.com/rss)

Copyright © 2012–2015 [チラシの裏がわり](http://habu1010.tumblr.com/). Powered by [Tumblr](http://www.tumblr.com/).[Simple Things](http://simplethingstheme.tumblr.com/) theme by [Dan Hauk](http://www.dan-hauk.com/).

<div style="display: none;">

 [****  habu1010をフォローする](https://www.tumblr.com/register/follow/habu1010)  [****  Tumblr](https://www.tumblr.com/?referring_blog=habu1010)

</div>

投稿を見逃さないようにしよう!!

×

 [(L)](https://www.tumblr.com/register/follow/habu1010)  [**habu1010**  チラシの裏がわり](https://www.tumblr.com/register/follow/habu1010)  [フォロー](https://www.tumblr.com/register/follow/habu1010/2)