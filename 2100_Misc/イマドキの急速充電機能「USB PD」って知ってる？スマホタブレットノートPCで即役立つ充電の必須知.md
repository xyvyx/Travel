---
title: イマドキの急速充電機能「USB PD」って知ってる？スマホタブレットノートPCで即役立つ充電の必須知識
updated: 2021-08-18 12:21:23Z
created: 2021-08-18 12:21:23Z
source: https://pc.watch.impress.co.jp/docs/topic/feature/1343673.html
---

[![](https://asset.watch.impress.co.jp/img/pcw/docs/1343/673/01_l.jpg)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/01_o.jpg.html)

USB PDはノートPCやスマホ、タブレットなどの対応機器で、共通の充電器を使えるのが大きな強みだ。また専用のAC充電器に比べ、サイズがコンパクトなのもメリットと言える

　難解とされるUSB Type-C関連の様々な規格の中でも、知っておくとユーザーにとってメリットが大きいのは、急速充電にまつわる規格「USB PD(USB Power Delivery)」だ。

　最近はノートPCやスマホ、タブレットの多くがUSB PDによる急速充電をサポートするようになりつつあるだけに、基本的な知識を押さえておけば「この組み合わせだと最速で充電できる」とか、「この充電器だとスマホはイケてもノートPCはキツイかも」といった具合に、知識を即戦力として活かしやすい。

　今回はそうしたUSB PD周りの基礎知識について、以前掲載したのUSB 3.xのGen表記やUSB Type-C/Thunderboltに関する記事編と同様に、規格策定時のみ存在した古いルールや細かな例外を一旦除外し、アウトラインを重視して紹介する。

　重要なものから順に並べているので、無理に最後まで読まなくとも、読み進められる箇所まで読んでもらえば、一定の知識が身に付くはずだ。
関連記事

 [![](https://pc.watch.impress.co.jp/img/pcw/list/1339/890/list.jpg)](https://pc.watch.impress.co.jp/docs/topic/feature/1339890.html)

半導体/周辺機器
アクセサリ
その他

[「USB 3.0」＝「USB 3.1 Gen 1」＝「USB 3.2 Gen 1」? すぐ分かるUSBの「Gen」表記ルール](https://pc.watch.impress.co.jp/docs/topic/feature/1339890.html)

 [![](https://pc.watch.impress.co.jp/img/pcw/list/1341/762/list.jpg)](https://pc.watch.impress.co.jp/docs/topic/feature/1341762.html)

半導体/周辺機器
アクセサリ
その他

[「USB Type-C」と「Thunderbolt」って同じもの？よく分かる最新コネクタ解説](https://pc.watch.impress.co.jp/docs/topic/feature/1341762.html)

記事目次
　■
　■
　■
　■

## USB PDでの充電速度はデバイスと充電器の組み合わせで決まる

　「USB PD」は、USBケーブルを使って急速充電するための規格だ。急速充電ないしは高速充電を可能にする技術はいくつもあるが、その多くはベンダー独自の規格だ。USB関連の仕様策定を行なう標準化団体USB-IFが策定したUSB PDはデバイス間の互換性も高く、将来性もピカイチだ。

　USB PDでの充電に使用するUSBケーブルは、両端がともにUSB Type-Cであることが原則だ。原則、と書いたのは、Appleは独自にLightningでUSB PD準拠の高速充電を可能にしているためで、つまり現時点ではケーブルの両端が「USB Type-C」のものと、iPhoneのみ「Lightning - USB Type-C」という、2種類のケーブルが使えることになる。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/11_o.jpg.html)

USB PDでの充電には両端USB Type-Cのケーブルを用いる。片方がUSB Standard A(一般的な四角いコネクタ)のケーブルはどれもUSB PDに対応しない

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/12_o.jpg.html)

iPhoneのみ例外的に「Lightning - USB Type-C」のケーブルを使う

　USB PDでの充電速度は、デバイスと充電器の組み合わせで決まる。USB PDに対応したデバイスおよび充電器は、それぞれ利用可能な電流と電圧の組み合わせである「PDO」(Power Data Object)を持っており、相互に通信し合ってもっとも高速なPDOで充電を行なう。充電器が45W(15V/3A)まで対応していても、デバイス側が30W(15V/2A)までしか対応していなければ、30Wでの充電となる。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/13_o.jpg.html)

USB PD充電器はそれぞれ最大何W(電圧[V]、電流[A])まで対応かが明記されている。製品によっては複数ポートの合計値が書かれている場合もあるので要注意

　この電流と電圧は、例えば60Wでの充電が不可能な場合は45W、それが無理なら30Wという具合に、段階的に下がっていく。後述する「PPS」(Programmable Power Supply)という技術に対応していれば若干話が違ってくるのだが、考え方としてはいくつかの大きな段階があって、1つずつ下がっていくと考えればよい。60Wがダメなら59W、それもダメなら58Wと、小刻みに変わっていくわけではない。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/14_o.png.html)

デバイス側の仕様欄には必要なワット数が明記されているので、それに合った充電器を用意するとよい。例えば今回検証で使用した冒頭の写真にも映っているマウスコンピューターの14型モバイルノート「[MousePro-NB420H](https://www.mouse-jp.co.jp/store/g/gmousepro-nb420h/)」は、「65W(20V/ 3.25A)以上」が必要であることが製品ページに明記されている

## USB PDで充電できないケースとは？

　USB PDで充電したいのにできない、または充電はできるものの高速でない場合、考えられる原因はいくつかある。

　1つはデバイス自体がUSB PDに対応していないケースだ。USB Type-Cポートを備えているからと言って、全てのデバイスがUSB PDによる充電をサポートしているわけではない。この場合、USB PD充電器に繋いでも、USB PDでない通常のUSBの電源供給仕様の範囲内、具体的には15W(5V/3A)が上限となる。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/21_o.jpg.html)

USB Type-Cポートを搭載しているからと言ってUSB PDに対応しているとは限らない。例えば過去に発売されているAmazonの「Fire HD」シリーズは、伝統的にUSB PDには非対応だ

　もう1つは、USB PD充電器の出力が小さすぎる場合だ。ノートPCのように消費電力が大きいデバイスでは、USB PDでの給電に最低限必要な電力が決まっていて、それを下回ると充電できない。

　例えば「45Wの出力が必要」と記載されているノートPCに、最大出力30Wや18Wの充電器を繋いだ場合、充電器として認識されないか、認識されてもバッテリの減りを緩やかにするだけで、バッテリの残量が増えないという事態に陥る。

　この「最低どれだけの出力が必要」という下限については、最近はきちんと記載するデバイスも増えているが、依然として明記していないデバイスも少なくない。

　45W対応の充電器で一切充電できなかったという話はあまり聞かないが、30Wあたりから、こうした話はちらほら聞こえてくる。Amazonの充電器のレビューで「充電できなかった」と低い点数を付けているのは、このパターンが非常に多い。メーカーからするととばっちりだ。

　こうした事態を防ぐには、なるべく出力に余裕のある充電器を買えばよいわけだが、充電器は出力が大きくなるほどサイズも巨大化し、発熱も増え、さらに値段も高くなるので、やみくもに出力の大きな充電器を買うのは(特に持ち歩き前提ならば)考えものだ。

　結果的に、スマホならば最大18Wや20W、ノートPCならば45Wや60W、タブレットはその中間といった具合に、デバイスに合わせた充電器を調達することになりがちだ。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/22_o.jpg.html)

もっとも最近はGaN(窒化ガリウム)など新素材の採用により、USB PD充電器は小型化が進んでいる。「[Anker Nano II 65W](https://www.amazon.co.jp/exec/obidos/ASIN/B08X11GD52/impresswatch-6-22/ref=nosim)」(手前)は「[Apple 20W USB-C電源アダプタ](https://www.apple.com/jp/shop/product/MHJA3AM/A/20w-usb-c%E9%9B%BB%E6%BA%90%E3%82%A2%E3%83%80%E3%83%97%E3%82%BF)」(奥)とそう変わらないサイズだ

　もう1つ、速度が出ない原因になり得るのが、使用するケーブルの規格だ。USB PDに対応するUSB Type-Cケーブルには3A対応と5A対応の2種類があり、3A対応であれば60W(20V/3A)、5A対応であれば100W(20V/5A)が上限になる。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/23_o.png.html)

Appleのページには、Mac付属のUSB-Cケーブルについて「61Wを上回る電源アダプタに繋いだ場合、十分な電力を供給し切れません」とある。これは前述の、3A対応のケーブルで給電できる上限(60W)のことを指しているが、USB PDの知識がないと意味不明だ

　そのため、USB PD充電器とデバイスがともに100Wに対応していても、ケーブルが3A対応であれば、そこがボトルネックとなって、給電は60Wに制限されてしまう。この場合は、5A対応のケーブルに交換することで、100Wで給電できるようになる。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/24_o.jpg.html)

別記事の『[「USB Type-C」と「Thunderbolt」って同じもの？よく分かる最新コネクタ解説](https://pc.watch.impress.co.jp/docs/topic/feature/1341762.html)』で紹介したThunderbolt 4ケーブルは、規格上5Aに対応しているので、USB PDでの充電において足を引っ張られることはない

　ちなみにUSBの規格、つまりUSB 2.0とかUSB 3.0といった数字は、このUSB PDでの充電に一切関係ない。USB PDに関係してくるのは前述の「3A対応」「5A対応」というアンペア数にすぎない。USB 2.0対応だったUSB Type-Cケーブルを、USB4対応に替えたからと言って、充電速度がアップするわけではない。

## 急速充電が行なわれているか判別する方法は？

　USB PDによる急速充電が実際に行なわれているかどうかを、目で見て確認するにはどうすればよいだろうか。

　例えばAndroidスマホでは、ケーブルを繋いでUSB PDによる充電が開始されれば「充電中」ではなく「急速充電中」という表示が出るので、USB PDでの充電が行なわれていることが分かる。またMacBookなどのノートPCでは、メーカーのユーティリティを使って確認できる場合が多い。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/31_o.jpg.html)

Androidスマホは「急速充電中」の表示が出るので判別できる。これはPixel 3

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/32_o.png.html)

ノートPCではメーカー製ユーティリティで電源の詳細を表示できることが多い。これはレノボの「Lenovo Vantage」で、65W対応のUSB PD充電器が接続されていることが分かる

　一方、こうした表示が一切ないのがiPhoneだ。iPhoneで急速充電が行なわれているかを判別するためには、ケーブルに取り付けて電流電圧を検出する外付けのチェッカーを使うしかない。1つ持っておけば、バッテリの残量に応じて電流電圧の値が変化する様子も可視化できて面白い。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/33_o.jpg.html)

チェッカーを使えば実際に流れている電流電圧の値を可視化できる。写真はルートアールの「[RT-TC5VABK](https://www.amazon.co.jp/exec/obidos/ASIN/B095RJYT39/impresswatch-6-22/ref=nosim)」

## 「PPS」とは？そして最大240Wの「USB PD EPR」とは？

　基本的な説明は以上なのだが、最後に2つ、補足となるUSB PD関連の知識を紹介して本稿の締めとしたい。

　1つはUSB PDのバージョン3.0(USB PD 3.0)で追加された「PPS」(Programmable Power Supply)なる技術だ。これは60Wの次が45W、その次が30Wという大雑把な段階ではなく、電流と電圧を小刻みに調整して効率的に充電を行なう機能だ。電流電圧の変換方式が異なるためムダな発熱も少なく、将来的にはこちらの方式が主流になっていく可能性が高い。

　ただし現時点では、デバイス側がPPSに正しく対応しないせいで、充電が上手くいかないトラブルも起こっている。PPS対応の充電器の方が将来性はあるので、品選びにあたっては悩ましいところだが、現段階ではトラブルの原因になる場合があることは、知っておいた方がよいかもしれない。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/41_o.jpg.html)

PPS対応であることは充電器側に記載されている。ちなみに電流は50mA刻み、電圧は100mV刻みと、かなり小刻みに変化する

　もう1つは新規格「USB PD EPR」(USB PD Extended Power Range)についてだ。USB PDは将来的に、電流は最大5Aのまま、電圧を最大20Vから48Vに引き上げ、最大出力を現行の100Wから240Wへと拡張することが決まっている。240Wあれば、実質全てのノートPC、またディスプレイについても、USB PDでの駆動が可能になるだろう。

　ただしこの場合、デバイスおよび充電器はもちろん、それらを繋ぐケーブルについても、EPRに対応していなくてはいけないので、将来EPRに対応したノートPCが登場し、100Wを超える電力供給が必須となれば、EPR対応の充電器とケーブルを新たに調達しなくてはいけなくなる。

　これらはEPR非対応の現行のUSB PDとは棲み分けが行なわれるはずなので、現行の機器まで買い替える必要は発生しないだろうが、この話からも、USB機器が1つあればあらゆるデバイスが充電できてしまう流れは、より一層加速しつつあることが分かる。そうした意味でも、USB PDにまつわる基本的な知識は、知っておいて損はないと言えるだろう。

[![](https://pc.watch.impress.co.jp/img/watch/parts/icon/loading.png)](https://pc.watch.impress.co.jp/img/pcw/docs/1343/673/html/42.jpg.html)

USB-IFの資料より。最大48Wまで拡張することが明記されている。ちなみにEPRは「Extended Power Range」の略