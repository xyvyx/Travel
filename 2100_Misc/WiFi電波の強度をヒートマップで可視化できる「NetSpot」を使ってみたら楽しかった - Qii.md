---
title: WiFi電波の強度をヒートマップで可視化できる「NetSpot」を使ってみたら楽しかった - Qiita
updated: 2018-03-18 11:35:27Z
created: 2018-03-18 11:35:27Z
source: https://qiita.com/suin/items/44746cfd7ee221e2948d
author: xyvyx10
tags:
  - SI
  - Web
---

# WiFi電波の強度をヒートマップで可視化できる「NetSpot」を使ってみたら楽しかった

オフィスのWiFiルータが破損したので、ついでに社内インフラを良くするため強いWiFiルータと、コンパクトな中継器に置き換えることになった。作業前と作業後で電波の入り具合が気になっていたのでNetSpotというWiFiマッピングツールを使って可視化してみた。特にスキャンする作業が楽しかった。インフラ案件で活用したい。

[(L)](https://camo.qiitausercontent.com/fd53f74c6ccbd95dbd9ab51baa8b660f0f4d8a61/68747470733a2f2f63646e2e7375696e2e696f2f3537352f302e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f302e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f302e706e67.png)](https://camo.qiitausercontent.com/fd53f74c6ccbd95dbd9ab51baa8b660f0f4d8a61/68747470733a2f2f63646e2e7375696e2e696f2f3537352f302e706e67)

ヒートマップは赤いほどWiFiの電波の入りがいい。

## NetSpotについて

[NetSpot](https://www.netspotapp.com/jp/)は間取り図にWiFiの電波の強さをヒートマップで可視化してくれるツールで、macOSとWindowsで使える。単体で買うとお値段が、Homeが49ドル、Proが149ドルと高い……。なので今回は、[SetApp](https://go.setapp.com/invite/c079d6d8-8141-4af1-a0e9-01127e935342)(月額9.99ドル)のサブスクリプションで使えるPro版を使ってみた。NetSpotの機能の概要については公式の紹介ビデオを見てもらったほうが分かりやすいと思うので、そちらに丸投げする(マッピングの流れは1分20秒〜を参照):

## マッピングのやりかた

### 間取り図を用意する

オフィスや自宅の間取り図を用意する。これが一番の難所ではある。賃貸なら募集図面があるといいが、入居時に捨ててしまっていたので、Google画像検索で探した。運良く見つかったのでそれを使った。

### 間取り図をNetSpotに読みこませる

NetSpotを起動し「Start a new survey」を押す。

[(L)](https://camo.qiitausercontent.com/b28c0f15d95633acee4464b1967c7c68ed345ae3/68747470733a2f2f63646e2e7375696e2e696f2f3537352f312e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f312e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f312e706e67.png)](https://camo.qiitausercontent.com/b28c0f15d95633acee4464b1967c7c68ed345ae3/68747470733a2f2f63646e2e7375696e2e696f2f3537352f312e706e67)

- 「New project name」は物件名など適当にいれる。
- 「First zone name」は部屋番号など適当に入れる。
- 「Zone's area type」は物件の特性に合わせて選ぶ。
- 「Load from file」を選択し「Choose file」ボタンを押して、間取り図を読みこませる。

[(L)](https://camo.qiitausercontent.com/10bdb10cf9cbcd82c14085cfeec7a5c3a3d883d9/68747470733a2f2f63646e2e7375696e2e696f2f3537352f322e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f322e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f322e706e67.png)](https://camo.qiitausercontent.com/10bdb10cf9cbcd82c14085cfeec7a5c3a3d883d9/68747470733a2f2f63646e2e7375696e2e696f2f3537352f322e706e67)

間取り図のスケールを決めるために、表示された間取り図に2点ピンを立て、その距離を入力する。

[(L)](https://camo.qiitausercontent.com/55caf8b2162d2a2e958add9c43738007527837ee/68747470733a2f2f63646e2e7375696e2e696f2f3537352f332e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f332e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f332e706e67.png)](https://camo.qiitausercontent.com/55caf8b2162d2a2e958add9c43738007527837ee/68747470733a2f2f63646e2e7375696e2e696f2f3537352f332e706e67)

「Network selection」では特に何もせず「Continue」。

[(L)](https://camo.qiitausercontent.com/227362fcc32a03b687b6231dd98b77c59cf422ab/68747470733a2f2f63646e2e7375696e2e696f2f3537352f342e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f342e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f342e706e67.png)](https://camo.qiitausercontent.com/227362fcc32a03b687b6231dd98b77c59cf422ab/68747470733a2f2f63646e2e7375696e2e696f2f3537352f342e706e67)

### 屋内を歩き回ってスキャンする

MacBookなどを持ち歩きながら、自分が立っている地点にピンをどんどん立てていく。これが結構楽しい。
3点以上、隣接してスキャンすると「STOP SCAN」が押せるようになる。「STOP SCAN」を押すとヒートマップが見れる。

[(L)](https://camo.qiitausercontent.com/8c800baec3d5aa86a3825c604cdbcdabdcdedd47/68747470733a2f2f63646e2e7375696e2e696f2f3537352f352e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f352e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f352e706e67.png)](https://camo.qiitausercontent.com/8c800baec3d5aa86a3825c604cdbcdabdcdedd47/68747470733a2f2f63646e2e7375696e2e696f2f3537352f352e706e67)

### できあがったヒートマップからレポートを作る

ヒートマップができたら、左ペインでレポートに出したいWiFiアクセスポイントを選び、「EXPORT」を押す。レポートは業務業務したPDFレポートや、PNG画像など様々な形式で出力することができる。

[(L)](https://camo.qiitausercontent.com/ce651961864e0d3287253548cab17dba34121a32/68747470733a2f2f63646e2e7375696e2e696f2f3537352f362e706e67)

[![68747470733a2f2f63646e2e7375696e2e696f2f3537352f362e706e67.png](../_resources/68747470733a2f2f63646e2e7375696e2e696f2f3537352f362e706e67.png)](https://camo.qiitausercontent.com/ce651961864e0d3287253548cab17dba34121a32/68747470733a2f2f63646e2e7375696e2e696f2f3537352f362e706e67)

## 後記

ガチな商用利用は[Airmagnet](https://enterprise-jp.netscout.com/products/airmagnet-survey)がデファクトという情報を頂きました。ありがとうございます。