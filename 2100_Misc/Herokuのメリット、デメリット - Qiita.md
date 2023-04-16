---
title: Herokuのメリット、デメリット - Qiita
updated: 2018-03-10 01:41:55Z
created: 2018-03-10 01:41:55Z
source: https://qiita.com/shu_0115/items/0106198f7a0be2f2a509
author: xyvyx10
tags:
  - Trello
  - Web
---

# Herokuのメリット、デメリット

[(L)](https://qiita.com/tags/Heroku)

# メリット

## メンテナンスコストがほぼゼロ

- ほぼ何もしなくても勝手に動いてくれます。
- 個人的な体感値だとAWSでEC2やロードバランサで環境を組んだ場合と比べると1:100ぐらいの手間無し感です。

## デプロイがコマンド一発

- デプロイは基本的に`git push heroku master`でHerokuにpushするだけです。(Railsのマイグレーションを行う場合は`heroku run rake db:migrate`も必要)
- 自分でデプロイスクリプトを頑張って書かなくてもいいので楽です。

## スケールアウトがコマンド一発、もしくはGUIで非エンジニアでも操作可能

- Herokuはdynoという独自のWebサーバプロセスの単位で操作するのですが、`heroku ps:scale web=3`でプロセス数を変更出来ます。
    - Herokuサイト上のダッシュボードからバーをスライドさせる事によって1〜100までdyno数を変更する事も可能です。

## リリースのバージョン管理を勝手にやってくれる

- `heroku releases`というコマンドを打つと下記のように直近のリリース一覧が表示されます。

=== APP-NAME Releases
v50 Deploy 45de3e3 xxxxxxxxxx@gmail.com 2014/11/25 17:37:55 (~ 27m ago)
v49 Deploy ff3082d xxxxxxxxxx@gmail.com 2014/11/25 16:49:20 (~ 1h ago)
v48 Deploy 0508f80 xxxxxxxxxx@gmail.com 2014/11/25 14:05:57 (~ 3h ago)
v47 Deploy cfed7f8 xxxxxxxxxx@gmail.com 2014/11/25 13:44:55 (~ 4h ago)
v46 Deploy e847a65 xxxxxxxxxx@gmail.com 2014/11/25 12:27:30 (~ 5h ago)
v45 Deploy 0848019 xxxxxxxxxx@gmail.com 2014/11/25 12:14:57 (~ 5h ago)
v44 Deploy 5a5b056 xxxxxxxxxx@gmail.com 2014/11/25 11:56:16 (~ 6h ago)
v

- ロールバックもコマンド一発で、上記の場合は`heroku rollback v49`と打つと最新の1つ前のバージョンまでロールバックしてくれます。(ロールバックのロールバックも可能らしいです。)

## DBのバックアップもアドオンを入れると自動的に取ってくれる

- [PG Backups](https://addons.heroku.com/pgbackups) というアドオンを入れると日次、週次のバックアップを自動的に取る事が可能です。
- `heroku pgbackups`コマンドで下記のようにバックアップ一覧表示、`heroku pgbackups:restore DATABASE_URL a009`でバックアップからデータをリストア、これもコマンド一発で操作出来ます。

ID Backup Time Status Size Database

---- ------------------------- ------------------------------------ ------- ------------

a001 2014/11/11 03:00.12 +0000 Finished @ 2014/11/11 03:00.15 +0000 21.9KB DATABASE_URL

a008 2014/11/18 05:22.53 +0000 Finished @ 2014/11/18 05:22.58 +0000 23.3KB DATABASE_URL

a009 2014/11/19 04:57.28 +0000 Finished @ 2014/11/19 04:57.33 +0000 23.3KB DATABASE_URL

a010 2014/11/20 05:57.49 +0000 Finished @ 2014/11/20 05:57.53 +0000 23.3KB DATABASE_URL

a011 2014/11/21 06:10.54 +0000 Finished @ 2014/11/21 06:10.59 +0000 26.7KB DATABASE_URL

## アドオンが豊富

[Heroku Add-ons](https://addons.heroku.com/)

- Herokuは他のサービスをアドオンとして追加出来るので、パフォーマンスチェック、エラー通知、メール配信、MongoDBやRedis等のデータストアなどを簡単に連携させる事が出来ます。

## ステージング環境が無料で複数作れる

- 基本的にはステージング用に新しいHerokuアプリを作って、そっちにデプロイするだけなので、簡単にステージング環境を作れます。
- Herokuは無料の範囲内で使えばアクセス数などに関わらず無料で使えるので、費用を掛けずにステージング用、デモ用、プレビュー用など、色々な用途別にステージング環境を作る事が出来ます。(さすがに無駄に作りまくったら怒られると思いますがw)
- プロダクション環境があれば、当然ステージング環境も必要になりますが、AWSで自前で構築した場合、ステージング環境にはプロダクション環境とほぼ同等の環境が必要になるため、約2倍の費用が掛かってしまいます。Herokuなら無料で複数のステージング環境が作れます。(個人的にはこれがAWSで自己構築する場合とHerokuを比較した際の一番のHerokuオススメ理由です)

※追記：Herokuのアプリケーションはクレジットカードを登録済みであれば最大100個まで作成出来るようです。(カード未登録は最大5個)

source: https://devcenter.heroku.com/articles/account-management#application-limit

# デメリット

## 東京リージョンに対応していない

- これだけです。本当にこれさえあればHeroku一択と胸を張って勧められます。