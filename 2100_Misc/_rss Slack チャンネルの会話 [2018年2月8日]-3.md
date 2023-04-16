---
title: '#rss Slack チャンネルの会話 [2018年2月8日]'
updated: 2018-02-08 14:18:35Z
created: 2018-02-08 14:18:35Z
source: https://xyvyxworkspace.slack.com/archives/C943569ED/p1518058622000238
author: xyvyx
tags:
  - Tips
  - アニメ
---

**2018年2月8日**

**rss** [午前9:57 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518051432000307)

[JavaScript製アニメーションライブラリの原理を理解しよう - ICS MEDIA](https://ics.media/entry/17183)

アニメーションは画面の遷移やボタンの演出など、あらゆるコンテンツやアプリケーションで利用されています。CSSなら animation や transition 、JavaScriptであれば「 Anime.js 」「 jQuery のアニメーション機能」「 TweenJS (CreateJS) 」といったアニメーションライブラリを利用して実装することが多いと思います。 私はFlashの全盛期にAc...

>

![apple-touch-icon.png](../_resources/apple-touch-icon-8.png)>  ICS MEDIA> [> JavaScript製アニメーションライブラリの原理を理解しよう - ICS MEDIA](https://ics.media/entry/17183)> アニメーションは画面の遷移やボタンの演出など、あらゆるコンテンツやアプリケーションで利用されています。CSSならanimationやtransition、JavaScriptであれば「Anime.js」「jQueryのア …![main.png](../_resources/main-1.png)

[GitHub - kelseyhightower/nocode: The best way to write secure and reliable applications. Write nothing; deploy nowhere.](https://github.com/kelseyhightower/nocode)

Dismiss Join GitHub today GitHub is home to over 20 million developers working together to host and review code, manage projects, and build software together. Sign up The best way to write secure and ...

>

![github.png](../_resources/github.png)>  GitHub> [> kelseyhightower/nocode](https://github.com/kelseyhightower/nocode)> nocode - The best way to write secure and reliable applications. Write nothing; deploy nowhere.

> [![1123322](../_resources/1123322)](https://github.com/kelseyhightower/nocode)

[DroidKaigi 2018 gRPC/Protobuf // Speaker Deck](https://speakerdeck.com/kmats/protobuf)

All slide content and descriptions are owned by their creators.
>

[favicon.ico](../_resources/favicon-14.ico)>  Speaker Deck> [> DroidKaigi 2018 gRPC/Protobuf](https://speakerdeck.com/kmats/protobuf)![slide_0.jpg](../_resources/slide_0-4.jpg)

[Dockerでマストドンやってたら、遮断したはずのポートが丸見えだった件 | Divide et impera](https://glorificatio.org/archives/2953)

みんなマストドンをやっているだろうか？ 僕はやっている。 インスタンス管理をやっている。 こんなふうに運用していた conoHaのVPS CentOS7.3 Dockerで運用している ちなみにDockerは今回が初めて本格的に触った。 マストドンは裏側では3000ポートと4000ポートで待ち受けている。 3000の方は普通のWEB 4000の方はAPIを担当している。 HTTPサーバーであるng...

>

![cropped-logo-180x180.png](../_resources/cropped-logo-180x180.png)>  Divide et impera> [> Dockerでマストドンやってたら、遮断したはずのポートが丸見えだった件 | Divide et impera](https://glorificatio.org/archives/2953)> みんなマストドンをやっているだろうか？ 僕はやっている。 インスタンス管理をやっている。 こんなふうに運用していた conoHaのVPS CentOS7.3 Dockerで運用している ちなみにDockerは今回が初めて本格的に触った。 マストドンは裏側では3000ポートと4000ポートで待ち受けている。 3000の方は普通のWEB 4000の方はAPIを担当している。 HTTPサーバーであるnginxが、httpの80とhttpsの443で受け取ったら、 それぞれ3000と4000に送りつけている リバースプロキシという技だ。 通常、公開用のhttpとhttpsのポートだけ開けておく。 もちろん僕もそのようにしていた。 CentOS7以降はiptablesではなくfirewalldというファイアウォールのソフトウェアでポートの開け閉めを管理している。 firewalldで、許可するポートはhttpとhttpsなど自分が必要と認めたポートだけを開けていた。 ところが自分のPCからcurlで3000と4000宛にアクセスしてみたら、なんと繋がってしまったのだ。 何故繋がったのだ！！ はじめfirewalldが起動していないのかと思って、確認したがバッチリ動いていた。 適当なエコーサーバーを立ててみて、自分のPCからアクセスしてみたが遮断されている。 ちなみにfirewalldってのは実は裏側ではiptablesが動いていて、firewalldの定義を自動で設定してくれるようなものっぽい。 というわけでiptables -nvLコマンドを使い、ちゃんと遮断されるのか確認したが、3000と4000ポートが入り込む余地はなかった。 Dockerが原因だった 同じようなことで悩む人が見つかった。 Dockerのことを調べててこのようなことがわかった Dockerコンテナは、独自にIPが振られている。 その独自のIPというのは、仮想ブリッジを使って実現している。 Dockerコンテナが開いている3000ポートなどは、 アプリがLISTENしているようなものではなく、 ルーティングによってフォワーディ![computer_virus_backdoor-644x510.png](../_resources/computer_virus_backdoor-644x510.png)

[ソフトバンク、単なる資金繰り目当ての親子上場を群戦略に単語変換 : 市況かぶ全力２階建](http://kabumatome.doorblog.jp/archives/65912365.html)

ソフトバンクが上場したら、NTTとNTTドコモみたいな関係になるの？ まあ、NTTは立場的に親子上場の文句言えないよね。 — akasatana (@meteor0710_jp) 2018年1月15日 2018/02/07 ソフトバンク株式会社の株式上場準備の開始について https://www.softbank.jp/corp/group/sbm/news/press/2018/20180207...

>

[favicon.ico](../_resources/favicon-3.ico)>  市況かぶ全力２階建> [> ソフトバンク、単なる資金繰り目当ての親子上場を群戦略に単語変換 : 市況かぶ全力２階建](http://kabumatome.doorblog.jp/archives/65912365.html)> ソフトバンクが上場したら、NTTとNTTドコモみたいな関係になるの？まあ、NTTは立場的に親子上場の文句言えないよね。— akasatana (@meteor0710_jp) 2018年1月15日2018/02/07 ソフトバンク株式会社の株式上場準備の開始について> [https://www.softbank.jp/corp/group/sbm/news![67af6a37.jpg](../_resources/67af6a37.jpg)

[無料でアクセス解析の基本と応用をマスターできるGoogle公式講座＆資格「Google アナリティクス個人認定資格（GAIQ）理解度テスト」に挑戦してみた - GIGAZINE](https://gigazine.net/news/20180207-gaiq-qualification/)

Google アナリティクス をただなんとなく見て使うだけだと「一体どうすれば数が増えるのか？成果をアップできるのか？」という部分がわからず、まさに宝の持ち腐れ。かといって多数出ている「Google アナリティクスの使い方解説本」みたいなものも、どれがいいのかをそもそも判断できないので、お金を払ってどれを買うべきかが意味不明。Google アナリティクスがあまりにも高機能＆多機能であるがゆえに、ま...

>

![apple-touch-icon.png](../_resources/apple-touch-icon.png)>  GIGAZINE> [> 無料でアクセス解析の基本と応用をマスターできるGoogle公式講座＆資格「Google アナリティクス個人認定資格（GAIQ）理解度テスト」に挑戦してみた](https://gigazine.net/news/20180207-gaiq-qualification/)> Google アナリティクスをただなんとなく見て使うだけだと「一体どうすれば数が増えるのか？成果をアップできるのか？」という部分がわからず、まさに宝の持ち腐れ。かといって多数出ている「Google![00.jpg](../_resources/00-8.jpg)

[来月にはJava 10が登場し、9月にはJava 11が登場予定。新しいリリースモデルを採用した今後のJava、入手方法やサポート期間はこう変わる － Publickey](http://www.publickey1.jp/blog/18/java_109java_11java.html)

来月にはJava 10が登場し、9月にはJava 11が登場予定。新しいリリースモデルを採用した今後のJava、入手方法やサポート期間はこう変わる 2017年9月に「Java 9」が登場したばかりですが、いまから1カ月後の2018年3月には早くもJavaの新バージョン「Java 10」がリリースされます。そしてその6カ月後の9月にはさらに次の「Java 11」がリリース予定です。 Java 9以後...

>

[favicon.ico](../_resources/favicon-16.ico)>  publickey1.jp> [> 来月にはJava 10が登場し、9月にはJava 11が登場予定。新しいリリースモデルを採用した今後のJava、入手方法やサポート期間はこう変わる](http://www.publickey1.jp/blog/18/java_109java_11java.html)> 2017年9月に「Java 9」が登場したばかりですが、いまから1カ月後の2018年3月には早くもJavaの新バージョン「Java 10」がリリースされます。そしてその6カ月後の9月にはさらに次の「Java 11」がリリース予定です。 Ja...![java101112b.gif](../_resources/java101112b.gif)

**rss** [午前10:13 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518052391000086)

[ソフトバンク､｢主力子会社IPO｣の勝算と懸念 親子上場が内包する課題を乗り越えられるか | 通信 | 東洋経済オンライン](http://toyokeizai.net/articles/-/207948?utm_source=rss&utm_medium=http&utm_campaign=link_back)

ソフトバンクグループは2月7日、傘下の国内携帯事業会社のソフトバンクの株式上場準備を始めたと発表した…
>

![apple-touch-icon.png](../_resources/apple-touch-icon-1.png)>  東洋経済オンライン> [> ソフトバンク､｢主力子会社IPO｣の勝算と懸念 | 通信](http://toyokeizai.net/articles/-/207948?utm_source=rss&utm_medium=http&utm_campaign=link_back)> ソフトバンクグループは2月7日、傘下の国内携帯事業会社のソフトバンクの株式上場準備を始めたと発表した。ソフトバンクグループの孫正義社長はこの日、都内で開いた決算会見で「より明確な役割分担をする。親会社…![img_a97cd3df3517bf4d1de3e077181dc726109941.jpg](../_resources/img_a97cd3df3517bf4d1de3e077181dc726109941.jpg)

**rss** [午前10:19 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518052743000185)

[「足が邪魔」トラブルか＝降車後、追い掛け刺す―大阪府警 （時事通信） - Yahoo!ニュース](https://headlines.yahoo.co.jp/hl?a=20180208-00000018-jij-soci)

大阪市大正区のJR大正駅構内で、兵庫県伊丹市の男性（34）が男に腹を刺された事件で、男が電車内で男性に「足が邪魔だ」と文句を言いトラブルになったとみられることが7日、分かった。 刺した男は逃走しており、大阪府警大正署捜査本部が殺人未遂容疑で行方を追っている。 乗り合わせて一部始終を目撃した会社員（55）によると、男は車内で「立つのに足が邪魔だ」と怒鳴っていた。被害男性に因縁をつけていたとみられ、男...

>

[favicon.ico](../_resources/favicon-4.ico)>  Yahoo!ニュース> [> 「足が邪魔」トラブルか＝降車後、追い掛け刺す―大阪府警（時事通信） - Yahoo!ニュース](https://headlines.yahoo.co.jp/hl?a=20180208-00000018-jij-soci)> 大阪市大正区のJR大正駅構内で、兵庫県伊丹市の男性（34）が男に腹を刺された事件で、 - Yahoo!ニュース(時事通信)![fbico_ogp_600x600.png](../_resources/fbico_ogp_600x600.png)

[北と戦えば「汚い戦争に」…米軍制服組トップ : 国際 : 読売新聞（YOMIURI ONLINE）](http://www.yomiuri.co.jp/world/20180207-OYT1T50152.html)

【ワシントン＝海谷道隆】ＡＦＰ通信は６日、米軍制服組トップのダンフォード統合参謀本部議長が核・ミサイル開発を強行する北朝鮮に関連し、「朝鮮半島で戦うことになれば、最後は『汚い戦争』になるだろう」と述べたと報じた。 朝鮮半島有事の際は、地上部隊の投入が避けられないとの認識を示したものだ。米軍の存在は、外交的解決を後押しするためとの見解も強調した。 同通信によると、豪州北部ダーウィンに巡回駐留する米海...

>

![webclip.png](../_resources/webclip.png)>  YOMIURI ONLINE（読売新聞）> [> 北と戦えば「汚い戦争に」…米軍制服組トップ](http://www.yomiuri.co.jp/world/20180207-OYT1T50152.html)> 　【ワシントン＝海谷道隆】ＡＦＰ通信は６日、米軍制服組トップのダンフォード統合参謀本部議長が核・ミサイル開発を強行する北朝鮮に関連し、「朝鮮半島で戦うことになれば、最後は『汚い戦争』になるだろう」と述べたと報じた。![yol_og-image.png](../_resources/yol_og-image.png)

[はてなブックマーク - 「日本ユニセフはアグネスチャンが広告塔やってるユニセフに名前が似ただけの団体」というデマに騙されてるクソ馬鹿 - 今日も得る物なしZ](http://b.hatena.ne.jp/entry/kyoumoe.hatenablog.com/entry/20180207/1517984670)

世の中 「日本ユニセフはアグネスチャンが広告塔やってるユニセフに名前が似ただけの団体」というデマに騙されてるクソ馬鹿 - 今日も得る物なしZ
>

![apple-touch-icon-precomposed.png](../_resources/apple-touch-icon-precomposed-1.png)>  はてなブックマーク> [> 『「日本ユニセフはアグネスチャンが広告塔やってるユニセフに名前が似ただけの団体」というデマに騙されてるクソ馬鹿 - 今日も得る物なしZ』へのコメント](http://b.hatena.ne.jp/entry/kyoumoe.hatenablog.com/entry/20180207/1517984670)> この記事に対して131件のコメントがあります。人気のあるコメントは「最後なんでアグネス・ラムなんだ…」、「未だに日本ユニセフのピンハネガーとか言っている馬鹿を見ると溜め息が出る。日本ユニセフを含む各国のユニセフは、総収入の最大25%までを経費や事業費などに充当できると規定により予め定められている。」、「日本は有料ボランティアとか、ボランティア団体が三割とか何割ぐらいかを運営費にあてることを嫌いすぎ。長い目で見れば自社ビルのほうが運営費は安いし、資産にもなる。」、「過去の言動が「デマを信じて慈善団体を誹謗中傷していた」になっちゃう人たちが大勢いるから、いまだにデマを発信し続けたり、デマだと認めなかったり、デマが広まるのを見て見ぬふりすることになるのかなと思ってる」などです。

> [![51QBfYyoiVL._SL160_.jpg](../_resources/51QBfYyoiVL._SL160_.jpg)](http://b.hatena.ne.jp/entry/kyoumoe.hatenablog.com/entry/20180207/1517984670)

[日本の外務省が訪韓への注意喚起を発表 「平昌に水差す」と非難の声 - ライブドアニュース](http://news.livedoor.com/article/detail/14271100/)

> > > > 治安を問題視した日本を「平昌に水を差す」と非難…韓国の安全・防寒対策の現状は？ 外務省が治安問題視 韓国で反発 2018年2月8日 6時15分 「日本がウリナラ（我が国）に、凶悪犯罪が多い国なので注意する必要があるというレッテルを貼り付けた」 これは日本のが平昌五輪観戦に「注意喚起」を行ったと報じる記事で、韓国メディア『世界日報』が書いた一文だ。 殺人被害率は6倍の差がある？ 日本...

>

[favicon.ico](../_resources/favicon-5.ico)>  ライブドアニュース> [> 日本の外務省が訪韓への注意喚起を発表 「平昌に水差す」と非難の声 - ライブドアニュース](http://news.livedoor.com/article/detail/14271100/)> 日本の外務省は1日、平昌五輪の観戦で訪韓する際の「注意喚起」を発表した。日本よりも「韓国は殺人が約2.5倍、強盗が約1.2倍多く発生」と指摘。韓国メディアは五輪に水を差すという批判もあると、不満をにじませている![f4535_1563_c210f1b2_b9836b73.jpg](../_resources/f4535_1563_c210f1b2_b9836b73.jpg)

[「シティエアターミナル」って？　T-CAT、YCAT、OCAT…　失われた便利機能とは | 乗りものニュース](https://trafficnews.jp/post/79598)

「シティエアターミナル」という名のバスターミナルが東京、横浜、大阪にあります。これら施設には高速バスが発着しますが、ほかのバスターミナルと違いがあるのでしょうか。かつては、忙しい人に重宝された便利機能もありました。 空港連絡バスの拠点　かつては空港の一部機能も 東京メトロ半蔵門線の水天宮前駅（東京都中央区）は、「東京シティエアターミナル」というバスターミナルが直結しており、副駅名にその名が見られま...

>

![apple-touch-icon-57x57.png](../_resources/apple-touch-icon-57x57-2.png)>  乗りものニュース> [> 「シティエアターミナル」って？　T-CAT、YCAT、OCAT…　失われた便利機能とは | 乗りものニュース](https://trafficnews.jp/post/79598)> 「シティエアターミナル」という名のバスターミナルが東京、横浜、大阪にあります。これら施設には高速バスが発着しますが、ほかのバスターミナルと違いがあるのでしょうか。かつては、忙しい人に重宝された便利機能もありました。![180131_cat_01.jpg](../_resources/180131_cat_01.jpg)

[トランプ氏「軍事パレードしたい」　パリで見て触発、国防総省に命令：朝日新聞デジタル](https://www.asahi.com/articles/DA3S13349858.html)

トランプ米大統領が首都ワシントンで大規模な軍事パレードを計画するよう国防総省に命じたことが明らかになった。米紙ワシントン・ポストが６日、報じた。昨年７月１４日のフランス革命記念日にマクロン大統領に招かれ、パリで恒例の軍事パレードを見て、やりたくなったという。 同紙によると、トランプ氏は１月１８日…

>

![logo_icon.png](../_resources/logo_icon.png)>  朝日新聞デジタル> [> トランプ氏「軍事パレードしたい」　パリで見て触発、国防総省に命令：朝日新聞デジタル](https://www.asahi.com/articles/DA3S13349858.html)> 　トランプ米大統領が首都ワシントンで大規模な軍事パレードを計画するよう国防総省に命じたことが明らかになった。米紙ワシントン・ポストが６日、報じた。昨年７月１４日のフランス革命記念日にマクロン大統領に招…

> [![logo_ogp.png](../_resources/logo_ogp.png)](https://www.asahi.com/articles/DA3S13349858.html)

[（社説）北陸の大雪　日頃から備える意識を：朝日新聞デジタル](https://www.asahi.com/articles/DA3S13349749.html)

北陸を中心に大雪の被害が続いている。３７年ぶりの豪雪に見舞われた福井では、交通網が寸断され、鉄道の運休が相次いだ。雪は８日も降り続ける予報で、引き続き警戒が必要だ。 積雪が１４０センチを超えた福井市内では５０代の男性が、雪に埋もれた車の中で一酸化炭素中毒とみられる症状で死亡したほか、除雪中の転倒による負傷者も続出した。福井県内では学校の休校が続き、コンビニなどで品不足も出始めている。 政府は自治体...

>

![logo_icon.png](../_resources/logo_icon.png)>  朝日新聞デジタル> [> （社説）北陸の大雪　日頃から備える意識を：朝日新聞デジタル](https://www.asahi.com/articles/DA3S13349749.html)> 　北陸を中心に大雪の被害が続いている。３７年ぶりの豪雪に見舞われた福井では、交通網が寸断され、鉄道の運休が相次いだ。雪は８日も降り続ける予報で、引き続き警戒が必要だ。　積雪が１４０センチを超えた福井市…

> [![logo_ogp.png](../_resources/logo_ogp.png)](https://www.asahi.com/articles/DA3S13349749.html)

[そのLRTは本当に｢次世代型｣路面電車なのか | ローカル線･公共交通 | 東洋経済オンライン | 経済ニュースの新基準](http://toyokeizai.net/articles/-/207133)

LRT（Light Rail Transit）は文字どおりの意味は「軽量軌道交通」であるが、わが国では「次世代型路面電車」と呼ばれることが多い。このLRTを導入して「まちづくり」を計画、あるいは構想している都市がわが国にはいくつもある。その中の、栃木県宇都宮市と芳賀町の「LRTによる未来のモビリティ都市の創造」計画によれば、いよいよ今年度末にLRTが着工される予定だ。わが国初の新設LRTの開業が近...

>

![apple-touch-icon.png](../_resources/apple-touch-icon-1.png)>  東洋経済オンライン> [> そのLRTは本当に｢次世代型｣路面電車なのか | ローカル線･公共交通](http://toyokeizai.net/articles/-/207133)> LRT（Light Rail Transit）は文字どおりの意味は「軽量軌道交通」であるが、わが国では「次世代型路面電車」と呼ばれることが多い。このLRTを導入して「まちづくり」を計画、あるいは構想している都市がわが国には…![img_ec8d68eaacd63710be6c93acedd049fc150064.jpg](../_resources/img_ec8d68eaacd63710be6c93acedd049fc150064.jpg)

[沖縄米兵の救出報道　おわびと削除（1/2ページ） - 産経ニュース](http://www.sankei.com/affairs/news/180208/afr1802080005-n1.html)

１２月９日に配信した「危険顧みず日本人救出し意識不明の米海兵隊員　元米軍属判決の陰で勇敢な行動スルー」の記事中にある「日本人を救助した」は確認できませんでした。現在、米海兵隊は「目撃者によると、事故に巻き込まれた人のために何ができるか確認しようとして車にはねられた。実際に救出活動を行ったかは確認できなかった」と説明しています。 　記事は取材が不十分であり削除します。記事中、琉球新報、沖縄タイムスの...

>

[favicon.ico](../_resources/favicon-26.ico)>  産経ニュース> [> 沖縄米兵の救出報道　おわびと削除](http://www.sankei.com/affairs/news/180208/afr1802080005-n1.html)> １２月９日に配信した「危険顧みず日本人救出し意識不明の米海兵隊員元米軍属判決の陰で勇敢な行動スルー」の記事中にある「日本人を救助した」は確認できませんでした。現…

> [![news_ogp.jpg](../_resources/news_ogp.jpg)](http://www.sankei.com/affairs/news/180208/afr1802080005-n1.html)

[シカにかまれてけがの観光客が過去最多 奈良公園 | NHKニュース](https://www3.nhk.or.jp/news/html/20180208/k10011319871000.html)

奈良公園で、観光客がシカにかまれるなどしてけがをしたという通報が、今年度すでに１６０件を超えて過去最多になっていることがわかりました。外国人観光客が、シカにせんべいを与える際にかまれるケースが目立ち、奈良県は、外国語で注意を促すポスターを貼るなど対策をとることにしています。 けがをした人の７９％は外国人で、このうち中国人が８３％と最も多くなっています。けがは、いずれも軽傷ですが、観光客がシカに好物...

>

![apple-touch-icon-152x152-precomposed.png](../_resources/apple-touch-icon-152x152-precomposed.png)>  NHKニュース> [> シカにかまれてけがの観光客が過去最多 奈良公園 | NHKニュース](https://www3.nhk.or.jp/news/html/20180208/k10011319871000.html)> 奈良公園で、観光客がシカにかまれるなどしてけがをしたという通報が、今年度すでに１６０件を超えて過去最多になっていることが…![K10011319871_1802080454_1802080506_01_03.jpg](../_resources/K10011319871_1802080454_1802080506_01_03.jpg)

[NHKFMで深夜に聴く「ホテル　カリフォルニア」 - ururundoの雑記帳](http://ururundo.hatenablog.com/entry/2018/02/08/010302)

2018 - 02 - 08 NHKFMで深夜に聴く「ホテル　カリフォルニア」 美術・本・映画・音楽 毎晩１１時になると 私は NHKFM を聴き始める。 水曜日夜１１時からは 待ってました！、 The Alfee （ザ　 アルフィー ） 個性の違う３人が還暦も過ぎ ４０年以上喧嘩もせず 毎年ライブを続けている。 と、感心はするが特にファンと言う訳でもない。 でも ラジオで聴く アルフィー はとて...

>

![1514245889515221](../_resources/1514245889515221)>  ururundoの雑記帳> [> NHKFMで深夜に聴く「ホテル　カリフォルニア」 - ururundoの雑記帳](http://ururundo.hatenablog.com/entry/2018/02/08/010302)> 毎晩１１時になると 私はNHKFMを聴き始める。 水曜日夜１１時からは The Alfee（ザ アルフィー） 待ってました！ 個性の違う３人が還暦も過ぎ ４０年以上喧嘩もせず 毎年ライブを続けている。 と、感心はするが特にファンと言う訳でもない。 でも ラジオで聴くアルフィーはとても楽しい。 そして今日のアルフィーが選んだ イーグルスの「ホテル カリフォルニア」 私の若い頃のヒット曲だ。 ３本の指に入る程好きな曲。 ちょっと怪しい歌詞もいい 切ない曲もいい リードギターがとてもいい。 カリフォルニアの砂漠を貫くフリーウェイ 疾走する車 ピンク色の景色の中に現れる ホテル カリフォルニア。 そん…![20180208002539.jpg](../_resources/20180208002539.jpg)

[「貴ノ岩は頭蓋骨を骨折してた」「被害届の取り下げを強要された」貴乃花親方のインタビュー番組を観た人のさまざまな感想　#貴乃花親方 - Togetter](https://togetter.com/li/1197214)

貴乃花親方の特番見てるんだけど、この人まともなことしか言ってない。 相撲協会めちゃめちゃブラックじゃん。 これでわかった。相撲業界でまともなのは貴乃花親方だけだということが。 #貴乃花親方

>

![tg_icon_60.png](../_resources/tg_icon_60.png)>  Togetter> [> 「貴ノ岩は頭蓋骨を骨折してた」「被害届の取り下げを強要された」貴乃花親方のインタビュー番組を観た人のさまざまな感想　#貴乃花親方](https://togetter.com/li/1197214)> 相撲界に平和が訪れるのはいつの日か…

> [![68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f44566257396b7556514141443144792e6a70673a6c61726765](../_resources/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f44566257396b7556514141443144792e6a70673a6c61726765)](https://togetter.com/li/1197214)

[シャングリラといえば](https://anond.hatelabo.jp/20180207231041)
チャットモンチー、電気グルーヴ、松任谷由実、angela… 何が最初に浮かぶ？
>

> はてな匿名ダイアリー> [> シャングリラといえば](https://anond.hatelabo.jp/20180207231041)> チャットモンチー、電気グルーヴ、松任谷由実、angela…何が最初に浮かぶ？

**rss** [午前10:38 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518053897000295)

[大企業病に抗うヤフー、タイムマシンはもう不要：日経ビジネスオンライン](http://business.nikkeibp.co.jp/atcl/report/15/278209/020700188/)

高槻 芳 日経ビジネス記者 1997年日経BP入社。日経コミュニケーション編集などを経て2013年日本経済新聞産業部・企業報道部出向。2016年4月に日経コンピュータ、2017年7月から日経ビジネス。通信、ネットなどを担当。 この著者の記事を見る

>

[favicon.ico](../_resources/favicon-25.ico)>  日経ビジネスオンライン> [> 大企業病に抗うヤフー、タイムマシンはもう不要　親会社ソフトバンクGとの関係は変わるか？](http://business.nikkeibp.co.jp/atcl/report/15/278209/020700188/)> 成長しているが安定志向で独自性に乏しい──。こんな揶揄もあったヤフーが生まれ変わろうとしている。米国を後追いする「タイムマシン経営」から、イノベーションを生む企業を目指す。![fb.jpg](../_resources/fb.jpg)

[ネット界の柴犬愛がすごい…。コラ画像が仮想通貨に、そして月面へ | ギズモード・ジャパン](https://www.gizmodo.jp/2018/02/doge-will-reach-the-moon.html)

Image: Behind The Meme/YouTube ネット界の柴犬愛がすごい…。コラ画像が仮想通貨に、そして月面へ 2018.02.07 21:00 「ワオ スゴイ人気 メッチャラブ ワオ」 みなさん、 Meme（ミーム） ってご存知ですか？ 意味合い的には「 ネット上で流行っているおもしろネタ 」なんですが、その代表格の1つに日本出身のものがあります。しかもめちゃくちゃ可愛いです。とり...

>

![apple-touch-icon.png](../_resources/apple-touch-icon-6.png)>  gizmodo.jp> [> ネット界の柴犬愛がすごい…。コラ画像が仮想通貨に、そして月面へ](https://www.gizmodo.jp/2018/02/doge-will-reach-the-moon.html)> 「ワオ スゴイ人気 メッチャラブ ワオ」みなさん、Meme（ミーム）ってご存知ですか？ 意味合い的には「ネット上で流行っているおもしろネタ」なんで...![20180206-doge-will-reach-the-moon-01-w960.png](../_resources/20180206-doge-will-reach-the-moon-01-w960.png)

[在日米軍再編：名護市に交付金再開　３０億円　政府が方針 - 毎日新聞](https://mainichi.jp/articles/20180208/ddm/002/010/064000c)

政府は、米軍普天間飛行場（沖縄県宜野湾市）の移設計画が進む名護市長選で自民、公明両党などが推薦した渡具知武豊氏が当選したことを受け、同市への在日米軍再編交付金の支給を再開する方針を固めた。２０１７年度分と１８年度分として計約３０億円を交付する。 政府は０７年度に名護市を交付対象に指定し、０８～０９年度に計約１８億円を交付した。しかし、１０年に移設反対派の稲嶺進氏が市長に就任したため、８年間凍結して...

[「株価大暴落」を再び招くかもしれない米国金利の不穏な動き（安達 誠司） | 現代ビジネス | 講談社（1/3）](http://gendai.ismedia.jp/articles/-/54399)

名目金利と実質金利 前回、「米国長期金利の上昇が株下落の直接の要因とは考えにくい」という内容のコラムを書かせていただいた。 ⇒ http://gendai.ismedia.jp/articles/-/54327 この内容は必ずしも誤りではないと考えているが、正確には、 「米国名目長期金利の上昇が株下落の直接の要因とは考えにくい」 と言ったほうがよいだろう。 今回は、これを「実質ベース」に置き換えて...

>

![apple-touch-icon.png](../_resources/apple-touch-icon-7.png)>  現代ビジネス> [> 「株価大暴落」を再び招くかもしれない米国金利の不穏な動き（安達 誠司）](http://gendai.ismedia.jp/articles/-/54399)> 前回、「米国長期金利の上昇が株下落の直接の要因とは考えにくい」という内容のコラムを書かせていただいた。この内容は必ずしも誤りではないと考えているが、正確には、「米国名目長期金利の上昇が株下落の直接の要因とは考えにくい」と言ったほうがよいだろう。![img_fc29c2d379b254ebc95f5b9c1ce20219246705.jpg](../_resources/img_fc29c2d379b254ebc95f5b9c1ce20219246705.jpg)

>

![apple-touch-icon.png](../_resources/apple-touch-icon-7.png)>  現代ビジネス> [> 米長期金利上昇は「株高フィーバー」を終わりに導くのか（安達 誠司）](http://gendai.ismedia.jp/articles/-/54327)> 一部で「日経平均10万円説」が囁かれるなど、いよいよ本格的な株高フィーバーが始まったのかと思いきや、思わぬ伏兵が現れた。米国の長期金利上昇である![img_431a2ff50d84833ddb08a7afeb3a4296218110.jpg](../_resources/img_431a2ff50d84833ddb08a7afeb3a4296218110.jpg)

[まとめサイト産経、こじつけようとして失敗 - 誰かの妄想・はてなブログ版](http://scopedog.hatenablog.com/entry/2018/02/08/013000)

2018 - 02 - 08 まとめサイト産経、こじつけようとして失敗 産経症 政治 産経が必死に“ブーメラン”とか“どっちもどっち”にこじつけようとしている「 立民・福山氏は手ぬぐい代　政党支部などが２６万円支出（2/6(火) 7:55配信 産経新聞） 」の件。 記事に書かれている内容からでは違法性が全く見えないんですよね。 例えばこれ。 立憲民主党 の 福山哲郎 幹事長（ 参院 京都選挙区）が...

>

[favicon.ico](../_resources/favicon-24.ico)>  誰かの妄想・はてなブログ版> [> まとめサイト産経、こじつけようとして失敗 - 誰かの妄想・はてなブログ版](http://scopedog.hatenablog.com/entry/2018/02/08/013000)> 産経が必死に“ブーメラン”とか“どっちもどっち”にこじつけようとしている「立民・福山氏は手ぬぐい代 政党支部などが２６万円支出（2/6(火) 7:55配信 産経新聞）」の件。記事に書かれている内容からでは違法性が全く見えないんですよね。例えばこれ。 立憲民主党の福山哲郎幹事長（参院京都選挙区）が代表を務める政党支部などが平成２２、２３年、手ぬぐい代として７件計２６万３６６５円を京都市内の業者に支出していたことが５日、政治資金収支報告書から分かった。 福山氏が代表を務めた「民主党京都府参議院選挙区第２総支部」は２２年に１２万８９５０円、関連団体「フォーラム共生社会２１」は２２年に計８万１７９５円…

> [![og-image-1500.png](../_resources/og-image-1500.png)](http://scopedog.hatenablog.com/entry/2018/02/08/013000)

[先物市場は、ビットコイン投資に警告を発している | 野口悠紀雄　新しい経済成長の経路を探る | ダイヤモンド・オンライン](http://diamond.jp/articles/-/158947)

1940年東京生まれ。63年東京大学工学部卒業、64年大蔵省入省、72年エール大学Ph.D.（経済学博士号）を取得。一橋大学教授、東京大学教授、スタンフォード大学客員教授、早稲田大学大学院ファイナンス研究科教授などを経て、2011年4月より早稲田大学ビジネス・ファイナンス研究センター顧問、一橋大学名誉教授。専攻はファイナンス理論、日本経済論。主な著書に『情報の経済理論』『財政危機の構造』『バブルの...

>

![apple-touch-icon-precomposed.png](../_resources/apple-touch-icon-precomposed.png)>  ダイヤモンド・オンライン> [> 先物市場は、ビットコイン投資に警告を発している](http://diamond.jp/articles/-/158947)> ビットコイン投資を考えるのに役に立つのは先物市場だ。売り越しや買い越しのポジションから将来の現物価格の予想の分布などがわかるからだ。いまは投資に慎重であるべきだと、先物市場は警告を発している。![img_9963f7bb503ac4f5df25251244233171782820.jpg](../_resources/img_9963f7bb503ac4f5df25251244233171782820.jpg)

[1988年ソウルと2018年平昌の「温度差」はどこからくるのか（崔 碩栄） | 現代ビジネス | 講談社（1/4）](http://gendai.ismedia.jp/articles/-/54389)

全てが輝いて見えた1988年のソウル 1988年 ソウルオリンピックを目前に控えた韓国の雰囲気は、今でも鮮明な記憶として残っている。街中が活気にあふれ、一日一日が慌ただしく賑やかに過ぎ去っていった。 これに先立って開催された1986年のアジア競技大会を成功裏に終えたことで、未だ戦後（厳密にいえば韓国は今なお停戦下であるが）を引きずっていた国民は活気を取り戻した。更に1987年に国民の念願であった大...

>

![apple-touch-icon.png](../_resources/apple-touch-icon-7.png)>  現代ビジネス> [> 1988年ソウルと2018年平昌の「温度差」はどこからくるのか（崔 碩栄）](http://gendai.ismedia.jp/articles/-/54389)> 1988年 ソウルオリンピックを目前に控えた韓国の雰囲気は、今でも鮮明な記憶として残っている。街中が活気にあふれ、一日一日が慌ただしく賑やかに過ぎ去っていった――。![img_771144b4d2b9c03374b63df7970ab34d70089.jpg](../_resources/img_771144b4d2b9c03374b63df7970ab34d70089.jpg)

[ソフトバンク、単なる資金繰り目当ての親子上場を群戦略に単語変換 : 市況かぶ全力２階建](http://kabumatome.doorblog.jp/archives/65912365.html)

ソフトバンクが上場したら、NTTとNTTドコモみたいな関係になるの？ まあ、NTTは立場的に親子上場の文句言えないよね。 — akasatana (@meteor0710_jp) 2018年1月15日 2018/02/07 ソフトバンク株式会社の株式上場準備の開始について https://www.softbank.jp/corp/group/sbm/news/press/2018/20180207...

[公立小「アルマーニデザインの標準服」を導入　校長の独断、全部で9万、親から批判も](http://www.huffingtonpost.jp/2018/02/07/schooluniform_a_23355576/)

メロン6600玉が全滅した農家に、クラウドファンディングで1600万円が集まった「世界がガラッと変わった」
>

[favicon.ico](../_resources/favicon-18.ico)>  HuffPost Japan> [> 公立小「アルマーニデザインの標準服」を導入　校長の独断、全部で9万、親から批判も](http://www.huffingtonpost.jp/2018/02/07/schooluniform_a_23355576/)> 「大人の思惑ばかりが先立ち、子どもが置き去りにされている」![IMG_7180.JPG](../_resources/IMG_7180-1.JPG)

**rss** [午前11:00 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518055205000051)

[地球平面論はなぜ信じられ続けるのか？](http://gigazine.net/news/20180208-why-believe-flat-earth/)

「地球が平面だ」と証明するために地球平面論者たちは、「地球が平面だと証明するためのロケット」の打ち上げをFacebookでを予告したりTwitterで民間宇宙会社のスペースXの創業者と論戦を繰り広げるなど、インターネット上での活躍が目立ちます。しかし、地球平面論者が集うFlat Earth Society(地球平面協会)の創設は、なんと1950年代にさかのぼります。科学を疑う「陰謀論」は昔からあり、陰謀論に心酔してしまう理由は心理的メカニズムや環境が関係しています。

[続きを読む...](http://gigazine.net/news/20180208-why-believe-flat-earth/)
>

![apple-touch-icon.png](../_resources/apple-touch-icon.png)>  GIGAZINE> [> 地球平面論はなぜ信じられ続けるのか？](http://gigazine.net/news/20180208-why-believe-flat-earth/)> By doug wells「地球が平面だ」と証明するために地球平面論者たちは、「地球が平面だと証明するためのロケット」の打ち上げをFacebookでを予告したりTwitterで民間宇宙会社のスペ![00_m.jpg](../_resources/00_m-4.jpg)

**rss** [午前11:13 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518055994000076)

[ニワトリの頭を手で切る9歳少年の｢食事情｣ 追われる難民たちの｢とてつもない食｣ | 満腹の惑星 | 東洋経済オンライン](http://toyokeizai.net/articles/-/204227?utm_source=rss&utm_medium=http&utm_campaign=link_back)

困難な状況に置かれたとき、人は何をどう「食べる」のか。フォトジャーナリストの木村聡氏が世界の食の現…
>

![apple-touch-icon.png](../_resources/apple-touch-icon-1.png)>  東洋経済オンライン> [> ニワトリの頭を手で切る9歳少年の｢食事情｣ | 満腹の惑星](http://toyokeizai.net/articles/-/204227?utm_source=rss&utm_medium=http&utm_campaign=link_back)> 9歳の少年は生きたニワトリの頭を強引に素手でねじり切った。頭部を失してもなお暴れるニワトリ。少年は血まみれの手で押さえつけると、大事そうに井戸端へと運んだ。「やっとニワトリをもらって、殺したんだよ。…![img_0ba86443474e885abdeed8aec6f14fad328139.jpg](../_resources/img_0ba86443474e885abdeed8aec6f14fad328139.jpg)

[白金台｢建物自体が芸術品｣､旧宮邸の全貌 ｢東京都庭園美術館｣を360度カメラで探訪！ | 360°カメラで巡る東京23区の名建築 | 東洋経済オンライン](http://toyokeizai.net/articles/-/207699?utm_source=rss&utm_medium=http&utm_campaign=link_back)

東京23区だけでも無数にある、名建築の数々。それらを360度カメラで撮影し、建築の持つストーリーととも…
>

![apple-touch-icon.png](../_resources/apple-touch-icon-1.png)>  東洋経済オンライン> [> 白金台｢建物自体が芸術品｣､旧宮邸の全貌 | 360°カメラで巡る東京23区の名建築](http://toyokeizai.net/articles/-/207699?utm_source=rss&utm_medium=http&utm_campaign=link_back)> JR目黒駅からほど近い白金台の東京都庭園美術館は、1933（昭和8）年に朝香宮邸として建てられた。日本国内でもめずらしいアール・デコ様式の洋館として知られる。朝香宮家は久邇宮鳩彦（やすひこ）王が、1906（明治…![img_11ae896669aa135970ce0f8e574ee620593893.jpg](../_resources/img_11ae896669aa135970ce0f8e574ee620593893.jpg)

**rss** [午前11:57 JST](https://xyvyxworkspace.slack.com/archives/C943569ED/p1518058622000238)

[No.1250 地区の美術展に作品が選ばれた長女とさらに上を行く妻(妻の描いた絵付き) - 新・ぜんそく力な日常](http://mraka2015.hatenablog.com/entry/20180208/1518037736)

2018 - 02 - 08 No.1250 地区の美術展に作品が選ばれた長女とさらに上を行く妻(妻の描いた絵付き) 絵日記漫画 あか男 妻 長女 Tweet Share on Tumblr いつも訪問ありがとうございます![blush.png](../_resources/blush.png) 昨年、長女のリナの美術の作品が、市内の美術展の銀賞を受賞しました。 そしてその作品が今度は… なんと市内展のさらに上、僕の市とその周り10市ぐらいの地区の美術展に展示される事...

>

![1514224490621616](../_resources/1514224490621616)>  新・ぜんそく力な日常> [> No.1250 地区の美術展に作品が選ばれた長女とさらに上を行く妻(妻の描いた絵付き) - 新・ぜんそく力な日常](http://mraka2015.hatenablog.com/entry/20180208/1518037736)> いつも訪問ありがとうございます![blush.png](../_resources/blush.png)>  昨年、長女のリナの美術の作品が、市内の美術展の銀賞を受賞しました。 そしてその作品が今度は… なんと市内展のさらに上、僕の市とその周り10市ぐらいの地区の美術展に展示される事が決まりました！ そんなお知らせの手紙を見て妻のユリは… ブログ初期からの読者さんならご存知だと思いますが、妻のユリは… めちゃくちゃ絵が上手い！ その腕前は学生時代から凄く、小・中・高通して、学校で有名だったそうです。 だから当然… 何回ぐらいか… ぶっちゃけほとんど毎回だったそうです！ 市内展で金賞！そして地区展で金賞！さらに県の美術展でも、なんかしら受賞していたそうです！ そんな凄い…![20180206085157.jpg](../_resources/20180206085157.jpg)