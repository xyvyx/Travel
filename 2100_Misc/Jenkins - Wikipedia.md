---
title: Jenkins - Wikipedia
updated: 2016-12-06 00:28:42Z
created: 2016-12-06 00:28:42Z
source: https://ja.wikipedia.org/wiki/Jenkins
tags:
  - SI
---

# Jenkins

移動先:[案内](https://ja.wikipedia.org/wiki/Jenkins#mw-head)、[検索](https://ja.wikipedia.org/wiki/Jenkins#p-search)

**Jenkins**とは[Java](https://ja.wikipedia.org/wiki/Java)で書かれた[オープンソース](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%BC%E3%83%97%E3%83%B3%E3%82%BD%E3%83%BC%E3%82%B9)[継続的インテグレーション](https://ja.wikipedia.org/wiki/%E7%B6%99%E7%B6%9A%E7%9A%84%E3%82%A4%E3%83%B3%E3%83%86%E3%82%B0%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3)ツールである。このプロジェクトは[Hudson](https://ja.wikipedia.org/wiki/Hudson)から[フォーク](https://ja.wikipedia.org/wiki/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF_(%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E9%96%8B%E7%99%BA))された。[オラクル](https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%A9%E3%82%AF%E3%83%AB_(%E4%BC%81%E6%A5%AD))が2010年12月にHudsonの商標を登録したことによるものである[[3]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-3)。

ソフトウェア開発向けに継続的インテグレーションサービスを提供しており、[Apache Tomcat](https://ja.wikipedia.org/wiki/Apache_Tomcat)などの[Servlet](https://ja.wikipedia.org/wiki/Java_Servlet)で動作しているサーバーベースシステムである。[CVS](https://ja.wikipedia.org/wiki/Concurrent_Versions_System)、[Subversion](https://ja.wikipedia.org/wiki/Apache_Subversion)、[Git](https://ja.wikipedia.org/wiki/Git)、[Mercurial](https://ja.wikipedia.org/wiki/Mercurial)、[Perforce](https://ja.wikipedia.org/wiki/Perforce)、[Clearcase](https://ja.wikipedia.org/wiki/Rational_ClearCase)といった[バージョン管理システム](https://ja.wikipedia.org/wiki/%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0)ツールに対応し、[Apache Ant](https://ja.wikipedia.org/wiki/Apache_Ant)や[Apache Maven](https://ja.wikipedia.org/wiki/Apache_Maven)における任意のシェルスクリプトやWindowsバッチコマンドといったプロジェクトを実行することが出来る。おもなJenkins開発者には川口耕介がおり[[4]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-dyer-4)、[MIT License](https://ja.wikipedia.org/wiki/MIT_License)で公開されている[フリーソフトウェア](https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AA%E3%83%BC%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2)である[[5]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-license-5)。

ビルドはバージョン管理システムにおけるコミットでのトリガ、[cron](https://ja.wikipedia.org/wiki/Cron)ライクのメカニズムを通したスケジューリング、他のビルドが完了した時の構築、特定のビルドURLによるリクエストといった様々な方法で起動することができる。

## 歴史[[編集](https://ja.wikipedia.org/w/index.php?title=Jenkins&action=edit&section=1)]

2007年頃このプロジェクトは[CruiseControl](https://ja.wikipedia.org/w/index.php?title=CruiseControl&action=edit&redlink=1)や他のオープンソース構築サーバーに対する人気のある代替として登場した[[4]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-dyer-4)[[6]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-stackoverflow-6)。2008年5月の[JavaOne](https://ja.wikipedia.org/wiki/JavaOne)カンファレンスでDuke's Choice Award開発者ソリューション部門を受賞した[[7]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-javaone-7)。2011年、開発者の川口耕介はこのプロジェクトにおける自身の働きを讃えられ[Google–O'Reilly Open Source Award](https://ja.wikipedia.org/w/index.php?title=Google%E2%80%93O%27Reilly_Open_Source_Award&action=edit&redlink=1)を受賞した。

## Hudson[[編集](https://ja.wikipedia.org/w/index.php?title=Jenkins&action=edit&section=2)]

Jenkinsは当初Hudsonプロジェクトが開発していた。2010年11月頃、スチュワードシップとコントロールがオラクルの下にあるという疑問が顕在化したことでHudsonコミュニティに根本的な問題をもたらした[[8]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-hudson-driving-8)。プロジェクトの主要メンバーとオラクル間の交渉が行われ、Hudsonの名の商標登録という重大な問題点に関して多くの合意分野があったものの[[9]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-hudson-discussions-9)、結果、2011年1月11日にプロジェクト名をHudsonからJenkinsに変更するかどうか投票を呼びかけ[[10]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-jenkins-rename-10)、Jenkinsプロジェクトを立ち上げる提案は同月29日にコミュニティの投票において圧倒的多数で承認された[[11]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-jenkins-vote-11)[[12]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-jenkins-vote-announce-12)。同年2月1日、オラクルはHudsonの開発を継続とJenkinsを名称の変更ではなくフォークとみなす意思を示した[[13]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-oracle-future-hudson-13)。

## プラグイン[[編集](https://ja.wikipedia.org/w/index.php?title=Jenkins&action=edit&section=3)]

Jenkinsに対応するプラグインはJavaプロジェクトの純粋なビルドツールを超える形でJenkinsを拡張している[[14]](https://ja.wikipedia.org/wiki/Jenkins#cite_note-14)。プラグインはほとんどのバージョン管理システムとバグデータベースと共にJenkinsに統合される形になっている。多くのビルドツールはそれぞれのプラグインを通して対応している。またプラグインはJenkinsの外見を変えたり、新たな機能を追加することもできる。

ビルドは数種類のフォーマット（[JUnit](https://ja.wikipedia.org/wiki/JUnit)はプラグインを通してアウトオブボックスなどに対応している）でテストレポートを生成でき、Jenkinsでレポートを表示したりトレンドを生成したりグラフィカルユーザーインターフェース内でそれらを表現する事が出来る。

## 脚注[[編集](https://ja.wikipedia.org/w/index.php?title=Jenkins&action=edit&section=4)]

1. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-1)**  [Jenkins 1.396 released](http://jenkins.361315.n4.nabble.com/Jenkins-1-396-released-td3257106.html), *The first release of Jenkins is posted*, Kohsuke Kawaguchi

2. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-2)**  “[LTS Changelog](https://jenkins.io/changelog-stable/)”. 2016年11月12日閲覧。

3. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-3)**  Blewitt, Alex. “[Hudson Renames to Jenkins](http://www.infoq.com/news/2011/01/jenkins)”. InfoQ. 2011年2月8日閲覧。

4. ^ [***a***](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-dyer_4-0)  [***b***](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-dyer_4-1)  Dyer, Dan (2008年5月9日). “[Why are you still not using Hudson?](http://blog.uncommons.org/2008/05/09/why-are-you-still-not-using-hudson/)”. *New Adventures in Software*. uncommons.org. 2008年5月21日閲覧。

5. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-license_5-0)**  Kawaguchi, Kohsuke, et al. “[Use Hudson: License](http://hudson.gotdns.com/wiki/display/HUDSON/Use+Hudson#UseHudson-License)”. 2011年1月30日閲覧。

6. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-stackoverflow_6-0)**  Jay R. [user name]; Jeffery Frederick, Jonik, et al [user names]. “[What is the difference between Hudson and CruiseControl for Java projects?](http://stackoverflow.com/questions/604385/what-is-the-difference-between-hudson-and-cruisecontrol-for-java-projects)”. *Stack Overflow*. 2011年1月17日閲覧。

7. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-javaone_7-0)**  Duboscq, Geneviève (2008年). “[2008 JavaOne Conference:](http://java.sun.com/javaone/sf/2008/articles/2008dukeschoiceawards.jsp)  [Duke](https://ja.wikipedia.org/wiki/Java)'s Choice Awards Winners for 2008”. *2008 Java One Conference*. java.sun.com. 2008年5月21日閲覧。

8. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-hudson-driving_8-0)**  “[Who's driving this thing?](http://hudson-labs.org/content/whos-driving-thing)”. 2011年1月31日閲覧。

9. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-hudson-discussions_9-0)**  “[Hudson Process Discussion Summary](http://hudson-ci.org/docs/process_summary.html)”. 2011年1月31日閲覧。

10. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-jenkins-rename_10-0)**  Bayer, Andrew (2011年1月11日). “[Hudson's future](http://jenkins-ci.org/content/hudsons-future)”. *Jenkins CI: A Jenkins community resource*. 2011年1月11日閲覧。

11. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-jenkins-vote_11-0)**  Bayer, Andrew (2011年1月29日). “[Rename Vote Results](http://hudson.361315.n4.nabble.com/Rename-Vote-Results-tp3246526p3246526.html)”. *Hudson-dev Google Group*. 2011年1月29日時点の[オリジナル](http://groups.google.com/group/hudson-dev/browse_thread/thread/7d540f26ec249a6c)よりアーカイブ。2011年1月29日閲覧。

12. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-jenkins-vote-announce_12-0)**  Bayer, Andrew (2011年1月29日). “[Jenkins!](http://jenkins-ci.org/content/jenkins)”. 2011年1月30日閲覧。

13. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-oracle-future-hudson_13-0)**  “[The Future of Hudson](http://java.net/projects/hudson/lists/dev/archive/2011-02/message/0)”. *Hudson-dev mailing list*. 2011年2月2日閲覧。

14. **[^](https://ja.wikipedia.org/wiki/Jenkins#cite_ref-14)**  [Plugins - Jenkins](https://wiki.jenkins-ci.org/display/JENKINS/Plugins)

## 外部リンク[[編集](https://ja.wikipedia.org/w/index.php?title=Jenkins&action=edit&section=5)]