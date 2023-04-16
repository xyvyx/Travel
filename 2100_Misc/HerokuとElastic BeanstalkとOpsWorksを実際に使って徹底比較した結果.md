---
title: HerokuとElastic BeanstalkとOpsWorksを実際に使って徹底比較した結果
updated: 2018-03-10 07:39:57Z
created: 2018-03-10 07:39:57Z
source: http://webfood.info/heroku-vs-elastic-beanstalk-vs-opsworks/
author: xyvyx10
tags:
  - Web
---

# HerokuとElastic BeanstalkとOpsWorksを実際に使って徹底比較した結果

2016/12/01

WEBスタートアップにとってサーバーの管理というのはできるだけコストや手間をかけたくないところです。そこで重宝するのがPaaS（Platform as a Service）です。

## 人気の3つのPaaS

その代表格がHerokuです。Herokuの登場以降、こぞって大手もPaaSを出して来ています。クラウドの巨人Amazon Web Service（以降AWS）が提供する二つのPaaS、Elastic BeanstalkとOpsWorksは完成度が高く、他AWSのサービスとの親和性の良さから根強い人気があります。

今回はそんな三つのサービスを使ってきた私が、様々な観点から比較します。

なお、当方のユースケースとしては、1〜2人の開発者がRailsやCakePHPなどのWEBフレームワークを利用し、ユーザー投稿型のソーシャルサービスを構築、運用するような形です。その他のユースケース（例えばエンタープライズ系のシステムや資金調達して人数が多いスタートアップ）などでは、違う結果もありうると考えます。

## Heroku vs Elastic Beanstalk vs OpsWorks 比較結果

結論からいうと、以下の比較表の通りとなりました。

| Heroku | Elastic Beanstalk | OpsWorks |
| --- | --- | --- |
| 費用  | ![3点](../_resources/review_3.gif) | ![3点](../_resources/review_3.gif) | ![4点](../_resources/review_4.gif) |
| 拡張性 | ![4点](../_resources/review_4.gif) | ![3点](../_resources/review_3.gif) | ![5点](../_resources/review_5.gif) |
| レスポンスの速さ | ![3点](../_resources/review_3.gif) | ![5点](../_resources/review_5.gif) | ![5点](../_resources/review_5.gif) |
| ノウハウの多さ | ![5点](../_resources/review_5.gif) | ![3点](../_resources/review_3.gif) | ![3点](../_resources/review_3.gif) |
| ロックインリスクの低さ | ![3点](../_resources/review_3.gif) | ![3点](../_resources/review_3.gif) | ![5点](../_resources/review_5.gif) |
| スケーラビリティ | ![4点](../_resources/review_4.gif) | ![5点](../_resources/review_5.gif) | ![4点](../_resources/review_4.gif) |
| コマンドラインの使いやすさ | ![5点](../_resources/review_5.gif) | ![5点](../_resources/review_5.gif) | ![3点](../_resources/review_3.gif) |
| 合計  | 27  | 27  | 29  |

総合した結果、僅差でOpsWorksが1位となりました。もちろん、項目ごとの重みは人によって違うので、参考程度にしてくみてください。私は、実際に今はOpsWorksに落ち着いています。

では、一つずつ詳しく見ていきましょう。

## 項目ごとの詳しい比較

### 費用

#### Herokuはアドオン単位で課金される

正直に言いますと、Herokuはプロダクションでは使ったことがありません。なので、料金に関して正確ではないかもしれません。

ただ、Herokuは最初こそ無料で始められるものの、一定以上のデータ使用、アドオンの利用などにつきいちいち課金されます。数年前の記事ですが、[CoffeeMeeting](http://coffeemeeting.jp/)というサービスは、以下の構成で**月額約250ドル**かかっていたそうです。

[CoffeeMeetingはこんな感じで動いています](http://coffeemeeting.tumblr.com/post/19781359823/coffeemeeting%E3%81%AF%E3%81%93%E3%82%93%E3%81%AA%E6%84%9F%E3%81%98%E3%81%A7%E5%8B%95%E3%81%84%E3%81%A6%E3%81%84%E3%81%BE%E3%81%99)

- WebDyno 4つ

- WorkerDyno 1つ

- Airbrakeアドオン

- ClearDB アドオン

- New Relic アドオン

- SendGrid アドオン

私はこのアドオンを追加するごとに課金されるというシステムに抵抗があり、Herokuはプロダクションでは使っていません。個人的にこの構成で、250ドルは高く感じます。とはいえ、相当な手間をはぶいてくれていることを考慮すれば、十分ペイしているのかもしれませんが。

#### Elastic BeanstalkもOpsWorksもそれ自体は無料で使える

Elastic BeanstalkやOpsWorksはそれ自体に料金がかかるのではなく、使用したAWSのリソースに対して費用がかかります。

例えば、Elastic BeanstalkでEC2を1台とRDSを1台を使ったなら、EC2の1台分とRDS１台分の料金のみかかるということです。OpsWorksも同じです。

なので、この二つのサービスは「AWSのリソースを管理する無料のツール」と考えてもらってOKです。

今まで生のEC2だけでシステムを組んでいた方で、現状管理が大変だと思っていた方は、これらのサービスは特に追加料金が発生するわけではないので、検討する価値はあると思います。

#### Elastic Beanstalkの最小構成はDBのインスタンスが別に必要

当方としては、最小構成のコストの低さを重視しています。スタートアップとしては、数多くのサービスをどんどんリリースしていって、需要のあるサービスを探したいため、一つリリースするのにかかるコストを抑えたいからです。

Elastic Beanstalkは基本は用意された構成を使う必要があります。大抵のWEBサービスで使うような構成は用意されています。ですが、そのデフォルトの構成がデータベースにRDSを使用する構成になっています。1インスタンス内にWEBサーバーとDBサーバーを同居させることができないのです。（やろうと思えばできるがトリッキー）

なので、最小構成でEC2とRDSの料金が必要になります。また、Redisなどを導入したい場合、EC2内にインストールして使うことが想定されていないため、ElastiCacheを使う必要があります。つまり、別料金がかかるということです。

#### OpsWorksの最小構成は1インスタンスで完結できる

OpsWorksは[Chef](https://www.chef.io/chef/)というプロビジョニングツールを利用したPaaSです。とはいえ、典型的な構成のシステムであれば、Chefを触ることなく運用することが可能です。そのような典型的な構成はデフォルトのRecipeとして準備されているからです。例えば、RailsやPHPやNode.js、Java、Pythonなどの主要な構成はそろっています。

例えばRailsの構成でいうと、「Railsサーバー」レイヤーと「MySQLサーバー」レイヤーに分かれています。こういうと、最低二つのインスタンスがいるのでは、と思うかもしれません。でも、このレイヤーという概念はChefでいうRole（役割）ととらえてもらって大丈夫です。なので、１つのインスタンスが、「Railsサーバー」レイヤーと「MySQLサーバー」レイヤーを兼ねることができます。

また、Redisが必要になった場合は、「Redis」レイヤーを作って、その一つのインスタンスに適用させることもできます。ということは追加で費用がかからないということです。

なので、最小のインスタンスt2.microが1インスタンスから始められるので、

$0.013（1時間分） × 24時間 × 30日 = $9.36 = **1,123円**

で月々運用できます。（1ドル120円として計算）

### 拡張性

HerokuはAddonを利用し、ほとんどあらゆる機能を追加できるようになっています。ElasticBeanstalkはAWSのサービスであれば、簡単に連携できるようになっていますが、他社サービスの場合はちょっと調査する作業が必要になります。

OpsWorksはChefを利用しているため、ほとんどどんな構成にもできるといっても過言ではないでしょう。また、ノウハウもChefのコミュニティのものが使えるので、Chefがわかれば意外とハマることは少ないです。

### レスポンスの速さ

これがHerokuが日本でそこまで圧倒的な地位をとれない最大の理由だと思いますが、Herokuのサーバーは日本にはなく、アメリカとヨーロッパにしかありません。なので、日本向けのサービスの場合、数百msほどですがレスポンスが遅いと言われています。

[[Heroku] Amazon EC2 北米リージョンで動いるので、日本からのレスポンスタイムは300msぐらい](http://codenote.net/heroku/618.html)

それに対して、Elastic BeanstalkもOpsWorksも東京リージョンを使うことができるので、レスポンスに遅れはありません。

### ノウハウの多さ

グローバルで見ると使っている人の多さはHerokuが圧倒的に多いです。なので、ネット上にある記事も一番多いです。日本語のHerokuの本も出ています。他の二つのサービスはそれだけをとりあげた本はありません。（AWSの本の中に少し出ていたりしますが）

Stack Overflowでそれぞれで検索した結果の数にも差が出ています。

- Heroku : 52,167件

- Elastic Beanstalk : 3,423件

- OpsWorks : 682件

### ロックインリスクの低さ

PaaSを使っていて感じるリスクで大きいのが、何かあった時他のインフラに移行できるか、ということです。例えば、ありえない値上げを要求してきたり、突如としてレスポンスが悪くなったり、などのような事態です。そのような時に、簡単に他のインフラに移行できない状態を**「ロックインされる」**といいます。

これに関していうと、Herokuは独自のアドオンに依存してしまっています。（そのおかげで手間をはぶけているのですが）他のインフラでも同じような機能を実現するのはかなり大変そうです。

Elastic Beanstalkはシンプルな構成のままの時はいいですが、拡張してElastiCacheを始めとするAWSの他のサービスとの連携を強めている段階になると、きつくなってきます。

その点、OpsWorksはオープンソースであるChefという技術を使っているので、Chefさえ理解できれば、他のクラウドにもすぐに構築することができます。ですが、そのまままるまるレシピが再利用できるというわけではありません。Chefを起動しているのがOpsWroksコンソールと独自エージェントなので、他の環境に合わせて多少書き換える必要はあります。

とはいえ、Chefが分かっていれば、書き換えにそこまで時間をとられることはないです。

### スケーラビリティ

トラフィックが増えてきた際は、VMを簡単に増やせるようなスケーラビリティや、負荷に合わせてVM数を自動的に増減できる機能が重要になってきます。これに関しては、3サービスとも問題ないレベルです。Herokuも簡単にdynoを増やせますし、Auto Scaleを実現するAddonも豊富です。

Elastic BeanstalkはAWSが提供する[Auto Scaling](http://docs.aws.amazon.com/ja_jp/AutoScaling/latest/DeveloperGuide/WhatIsAutoScaling.html)という機能を利用できます。

OpsWroksの場合は、このAWSが提供するAuto Scalingではなく、[Load-based instances](http://docs.aws.amazon.com/opsworks/latest/userguide/workinginstances-autoscaling.html#workinginstances-autoscaling-loadbased)というOpsWorks独自の仕組みで自動スケールを実現しています。

どうやら、扱いやすさや反応速度などはAuto Scalingのほうが上のようです。

### コマンドラインの使いやすさ

WEBコンソールに関してみれば、どのサービスも使いやすいと感じましたが、コマンドラインはそれなりに差があります。Herokuのコマンドラインを中心とした操作は、エンジニアにとってみれば非常に魅力的です。Elastic Beanstalkもよく追随していると思います。それに対しOpsWorksはあまりコマンドラインを重視していないようです。

以下は各サービスでデプロイを実行するコマンドです。OpsWorksだけやたら長いコマンドになってしまっています。

#### Heroku

|     |     |
| --- | --- |
| 1   | $ git push heroku master |

#### Elastic Beanstalk

|     |     |
| --- | --- |
| 1   | $ eb deploy |

#### OpsWorks

|     |     |
| --- | --- |
| 1<br>2 | $ aws opsworks --region us-east-1 create-deployment --stack-id cfb7e082-ad1d-4599-8e81-de1c39ab45bf<br>--app-id 307be5c8-d55d-47b5-bd6e-7bd417c6c7eb --command "{\"Name\":\"deploy\"}" |

## まとめ

いかがでしたでしょうか。少しでも各サービスの特徴が伝わり、選択の一助になればと思います。

今回1位になったOpsWorksはその柔軟さから最近日本のスタートアップでMicro Servicesの実践として使われる傾向が多いようです。その一例がGunousyです。GunousyではserviceごとにOpsWorksのStackに分割していて、50以上のStackになっているそうです。

[GunosyのMicroServicesとOpsWorks / よくわかる AWS OpsWorks](https://speakerdeck.com/koid/yokuwakaru-aws-opsworks)

もしこれまでの説明でAWSまわりの用語や概念でわかりにくい部分があれば、一度AWSのデザインパターンについての本を読んでみるといいかもしれません。そのなかに、Elasitc BeanstalkやOpsWorksのもとになるデザインパターンも登場したりして、自分は勉強になりました。少し前の本ですが、下の本は図が豊富で分量は少なめにまとまっていて読みやすいです。

[Ａｍａｚｏｎ　Ｗｅｂ　Ｓｅｒｖｉｃｅｓ　クラウドデザインパターン設計ガイド　改訂版](http://www.amazon.co.jp/gp/product/4822277372/ref=as_li_qf_sp_asin_il?ie=UTF8&camp=247&creative=1211&creativeASIN=4822277372&linkCode=as2&tag=rakuzone-22)

玉川憲 (著), 片山暁雄 (著), 鈴木宏康 (著), 野上 忍 (著), 瀬戸島 敏宏 (著), 坂西 隆之 (著), 日経SYSTEMS (編集) 日経BP社; 改訂版 (2015/5/28)