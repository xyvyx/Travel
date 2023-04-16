---
title: SQL Serverの構造を理解する
updated: 2016-12-06 12:33:13Z
created: 2016-12-06 12:33:13Z
source: http://enterprisezine.jp/dbonline/detail/8016?p=2
tags:
  - SI
---

# SQL Serverの構造を理解する

## プロセス/スレッド構成

![](../_resources/b1b7e862d0f1eb0559a7bdcc33b5c459.png)

　SQL ServerはWindows上で動作するマルチスレッドアプリケーションですので、Windowsスケジューラーの支配下にあるわけですが、より効率的にCPUリソースを活用するため、SQL ServerがOSのような機能を持っており、その機能の中でスケジューラーを独自に実装しています。この仕組みは、サイベース社をオリジナルとするSQL Server 6.5から全面的にアーキテクチャーを刷新したSQL Server 7.0にてUMS(User Mode Scheduler)として初めて実装されました。この機能はSQL Server 2005 からSQL OSと改称され、NUMAアーキテクチャーのネイティブ対応とともに、CPUやメモリなどのサーバーリソースをより効率的に扱うことが出来るようになっています。

## SQL OSスケジューラー

　SQL Server上で実行される様々な処理（ユーザーによるクエリの実行や、バックグランドプロセス等）を実行するスレッドのスケジュール管理は、SQL OSスケジューラーにてノンプリエンプティブに管理しているため、不適切なタイミングでOSからのスレッド切り替えが起こることや、過度なコンテキストスイッチの発生によるオーバーヘッドを防いでいます。

## メモリ

　SQL Serverは、SQL Server 7.0よりメモリの動的・自己チューニングの考え方を実装しており、メモリの利用状況と処理要求から、その時点で最善なメモリサイズと構成をSQL Server自身が判断するメモリ管理機構が搭載されているため、メモリ設定はシンプルですが、各設定値の意味を正しく理解することで、より適切なメモリ設定を行うことが可能となります。

![](../_resources/7380ad584f473662461c9e3e668f370a.png)

## SQL Serverのメモリ設定(SQL Server Management Studio – サーバーのプロパティ- メモリ)

　SQL Serverのメモリ設定は、基本的に「最小サーバー メモリ：min server memory」と「最大サーバーメモリ：max server memory」の2つを設定するのみなので、とてもシンプルですが、各項目の意味を正しく理解しないと、不用意な問題が発生する可能性がありますので、ご注意ください。

![](../_resources/5898e738018d0112ba2bdcb35d9cedae.png)

　最小サーバーメモリ（min server memory）：SQL Serverがメモリ確保を行う際に、この値を下回ってメモリ解放しないことを指定します。他のアプリケーションの利用による、OSからのメモリ開放要求があっても、この値を下回って開放することはありません。しかしながらSQL Serverの起動時にすべてのメモリ領域を確保するわけではありませんので、min server memoryよりも小さいメモリサイズで稼働していることがあります。

　最大サーバーメモリ（max server memory）：SQL Serverが確保する最大メモリサイズの指定となりますが、既定値（2,147,483,647MB）の設定では、稼働しているサーバーの物理的な空きメモリが残り4MBから10MBの間になるまで、SQL Serverは必要に応じてメモリを確保しようとしますので、他のアプリケーションとの混在環境では、SQL Serverに割り当てるメモリサイズを明示的に指定する必要があります。

## メモリ内のページのロック

　OS側の設定となりますが、SQL Serverインスタンスの起動アカウントに「メモリ内のページのロック」権限を付与することで、連続的なメモリ領域を確保し、ディスク上の仮想メモリへのページングを防止することで、不要な性能劣化を防ぐことが出来ます。

![](../_resources/7288d340b49d9dd5b6cd80c1aca91082.png)

　次回以降、SQL Server Reporting Services入門、SQL Serverデータベースの基本的な利用方法、と連載が続きますので、ぜひ下記の自習書を活用してSQL Serverの評価環境を構築いただき、実際の環境で試しながら本連載を読み進めて頂くと、より効果的かと思います。

**SQL Server 2014自習書シリーズNo.1 ささっと試せるSQL Server超入門**

 http://download.microsoft.com/download/9/8/0/980B9E8B-0147-4730-9AD1-964D06A7095A/SQL14_SelfLearning01_ABC.pdf

　Microsoft のData Platform最新情報や、SQL Serverの活用方法などは、以下のブログで随時アップデートしてまいりますので、こちらも定期的にチェックしてみてください。

 https://blogs.msdn.microsoft.com/dataplatjp/

　次回以降もお楽しみに。