---
title: 一見普通のUSBケーブルなのにキーボードで打ち込んだ内容をすべてWi-Fi経由で外部に送信してしまう「O.MGケーブル」が登場
updated: 2021-09-03 12:09:12Z
created: 2021-09-03 12:09:12Z
source: https://gigazine.net/news/20210903-o-mg-cable-leak-key-type/
---

×

2021年09月03日 10時54分[セキュリティ](https://gigazine.net/news/C14/)
![](https://i.gzn.jp/img/2021/09/03/o-mg-cable-leak-key-type/00_m.jpg)

一見すると普通のUSBケーブルですが、実際にPCに挿すと悪意のある挙動をしてハッキングの手助けをするというのが「**O.MGケーブル**」です。これまでも通常のUSBケーブルと見分けがつかないO.MGケーブルが発表されていたのですが、新たにPCのキーボードに打ち込んだ内容を保存する**[キーロガー](https://ja.wikipedia.org/wiki/%E3%82%AD%E3%83%BC%E3%83%AD%E3%82%AC%E3%83%BC)**を内蔵し、Wi-Fi経由で入力内容を外部に送信してしまうという新バージョンが登場しています。

**O.MG Keylogger Cable**
**https://mg.lol/blog/keylogger-cable/**

**This Seemingly Normal Lightning Cable Will Leak Everything You Type**
**https://www.vice.com/en/article/k789me/omg-cables-keylogger-usbc-lightning**

**Security Researcher Develops Lightning Cable That Leaks Everything You Type [Video] - iClarified**

**https://www.iclarified.com/82341/security-researcher-develops-lightning-cable-that-leaks-everything-you-type-video**

「O.MGケーブル」は、セキュリティ研究者の**[MG](https://twitter.com/_MG_)**さんが制作した、コネクタ部分にWi-Fiのマイクロコントローラーを内蔵したUSBケーブルです。2019年に発表された際には、外部からWi-Fi経由でO.MGケーブルにアクセスし、専用アプリを使ってO.MGケーブルを挿している端末を遠隔操作する様子を披露していました。

**[USBケーブルのコネクタ内にWi-Fiモジュールを内蔵した「バックドア付きUSBケーブル」登場 - GIGAZINE](https://gigazine.net/news/20190221-omg-malicious-usb-cable/)**

![](https://i.gzn.jp/img/2019/02/21/omg-malicious-usb-cable/03_m.jpg)

このO.MGケーブルは改良が続けられており、基本的には同じ動作でLightningケーブルに偽装したバージョンだけでなく、USB Type-C版やMicro-USB版も販売されていました。

**[見た目はUSBケーブル、中身はハッキングツールの悪用厳禁ケーブル「O.MG Cable」がLightningに続きUSB Type-Cバージョンなども販売開始 - GIGAZINE](https://gigazine.net/news/20200303-omg-cable-released/)**

![](https://i.gzn.jp/img/2020/03/03/omg-cable-released/00_m.png)

そんなO.MGケーブルにキーロガーを搭載した最新バージョンが登場しました。USBケーブルのコネクタ部分に新しくストレージが搭載され、キーロガーで盗み取ったデータを保存することが可能になりました。MGさんによると、保存可能なキーストローク回数は約65万回分だそうで、この保存されたキーストローク内容を外部の端末に送信することもできます。O.MGケーブルがWi-Fiのホットスポットとなり、これに外部の端末でアクセスすることで、データを外部に送信可能となる模様。

実際に最新版のO.MGケーブルでキーボードに入力した内容を盗み出している様子は以下のムービーでチェックできます。ディスプレイの右に置かれたスマートフォンは、O.MGケーブルが盗み出したデータを受け取るための端末です。

**[omg cables keyboard - YouTube](https://www.youtube.com/watch?v=CqnXchka9Ec)**

以下のムービーはスマートフォンの画面に表示される、キーロガーが盗み出したタイピング内容を表示したもの。上の動画でタイピングされていた「username」「password」という単語がしっかりと画面上に表示されます。

**[omg cable interface - YouTube](https://www.youtube.com/watch?v=DKCz_0vDfRI)**

MGさんと独自に連絡を取り合ったテクノロジーメディアのMotherboardによると、同氏は「十分なスペースがないため、USB Type-Cはこの種の埋め込みハッキング型ツールに対して安全であると言う人もいますが、それは明らかに間違っています。これを証明するために改良を続けてきました」と語り、O.MGケーブルのコンポーネントの小型化に注力してきたことを明かしています。

実際、これまでのO.MGケーブルはUSB A to LightningケーブルやUSB A to USB Type-Cケーブルのように、片側にUSB Aコネクタを持つものでした。しかし、最新版ではUSB Type-Cコネクタ部分に専用コンポーネントを埋め込むことに成功しており、MGさんによると、コネクタ部分に隠されたO.MGケーブル専用の特殊なコンポーネント(緑線)は元からあるコンポーネントの約半分を占めるほどだそうです。

[![](https://i.gzn.jp/img/2021/09/03/o-mg-cable-leak-key-type/s01_m.jpg)](https://i.gzn.jp/img/2021/09/03/o-mg-cable-leak-key-type/s01.jpg)

キーロガーが搭載された新しいO.MGケーブルは**[ジオフェンシング](https://www.fujitsu.com/jp/solutions/business-technology/intelligent-data-services/digitalmarketing/column/column019.html)**機能を搭載しており、ユーザーはケーブルの位置情報に基づきキーロガーが収集したデータを送信したり送信停止したりすることが可能となります。また、最新版のO.MGケーブルではケーブルから1マイル(約1.6km)以上離れた位置の端末とデータの送受信が可能になっており、これまで以上にリアルな使用状況を想定したものに仕上がっているとのこと。

最新版のO.MGケーブルにおけるその他の改善点には、キーボードマッピングの変更機能やシステムの脆弱性を利用して特定のUSBデバイスのIDを偽造する機能などが含まれています。

MGさんは「新型コロナウイルスのパンデミックによる半導体不足が、すでに困難だったプロセスをさらに困難にしました。O.MGケーブルを構成する個々のコンポーネントが在庫切れとなった場合、非常に小型なコンポーネントの代替品を見つけることはほとんど不可能です。そのため、最新のキーロガー搭載のO.MGケーブルを作るのに12カ月以上待つ必要がありました」と、最新版の制作秘話を語っています。

なお、キーロガー搭載の最新版O.MGケーブルはハッキングツールの販売を行うHak5上で販売されており、159.99ドル(約1万8000円)から購入できます。

**O.MG Cable - * to USB-A - Hak5**
**[https://shop.hak5.org/products/o-mg-cable-usb-a**
![](https://i.gzn.jp/img/2021/09/03/o-mg-cable-leak-key-type/01.png)

この記事のタイトルとURLをコピーする

2021年09月03日 10時54分00秒 in [ハードウェア](https://gigazine.net/news/C6/), [動画](https://gigazine.net/news/C9/), [セキュリティ](https://gigazine.net/news/C14/), Posted by logu_ii

You can read the machine translated English article **[here](https://gigazine.net/gsc_news/en/20210903-o-mg-cable-leak-key-type)**.