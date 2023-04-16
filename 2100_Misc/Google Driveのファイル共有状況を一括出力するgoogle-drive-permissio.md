---
title: Google Driveのファイル共有状況を一括出力するgoogle-drive-permission-searchを作った
updated: 2017-05-06 14:01:57Z
created: 2017-05-06 14:01:57Z
source: https://techracho.bpsinc.jp/morimorihoge/2014_10_02/19117
tags:
  - SI
---

# Google Driveのファイル共有状況を一括出力するgoogle-drive-permission-searchを作った

morimorihogeです。最近は遠征回すくらいしかやってなくて、6-1, 6-2も未消化です。流石に飽きてきたのかも。
共同作業やファイル共有に便利なGoogle Drive、仕事で使われている方も多いのではないでしょうか？

Google Driveは簡単に共有できて便利なのですが、進行中にメンバが出入りを繰り返す様なプロジェクトの場合、権限管理を忘れがちです。特に、新規共有するのは良いのですが、メンバがいなくなるときに正しく権限を外す処理は面倒なものです。

前半は、そうした場合のオペレーション方法を解説します。

また、ある特定のメンバについて検索する以外に、情報の整理として現在の手持ちドキュメント全ての権限を閲覧したいこともあるかと思います。後半はGoogle Driveの全ドキュメントの共有先を一覧する[google-drive-permission-search](https://github.com/morimorihoge/google-drive-permission-search)を作ったので、それについての解説です。

## Google Driveの検索オプションを使う方法

ある特定のメンバに対して共有されているドキュメントを一括検索したいときは、Google Driveのto:検索オプションが便利です。

参考： [ファイルを検索する – ドライブ ヘルプ](https://support.google.com/drive/answer/2375114?hl=ja)

例えばGoogle Driveの検索窓に「**to:hoge@example.com**」と入れて検索してやれば、hoge@example.comアカウントに閲覧・編集許可しているドキュメントが一覧されます。

共有を外したいファイルの左側チェックボックスをチェックして共有メニューを開けば、そのまま一括で共有状態を変更することも可能です。

[(L)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.20.56.png)

[![Screenshot 2014-10-02 13.20.56](../_resources/1f45f023ead579fb63807dc2d8cf20da.png)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.20.56.png)

一般的なオペレーションならこれで大体どうにかなると思います。

## 全権限を一覧するgoogle-drive-permission-search

プロジェクトメンバやドキュメントが増えてくると、どのドキュメントが誰に共有されているのかが分からなくなりがちです。色々とドキュメントが蓄積されてくると、どこかのタイミングで全ドキュメントがそれぞれ誰に対して共有されているのか一覧したいということが出てきます。

また、機密情報などの情報管理上、いつの時点で誰に共有されていたのかを記録したい、ということもあるでしょう。
これはGoogle Driveの標準機能ではできないので、今回プログラムを書いてみました。
Github: https://github.com/morimorihoge/google-drive-permission-search
このプログラムを実行することで、以下の様なExcelファイルが生成されます（セルに改行を入れたかったのでExcelにしました。TSVもサポートしてます）。

[(L)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.36.48.png)

[![Screenshot 2014-10-02 13.36.48](../_resources/111eec04ebeddf4096b256380f572b2f.png)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.36.48.png)

データ形式は以下の通りです。

- A列: ファイル名
- B列: ファイルタイプ（ファイルやフォルダ）
- C列: データ形式（spreadsheetやformなど）
- D列: ドキュメントID（主にデバッグ・他のプログラムでの読み込み用）
- E列: 所有者情報（「名前 <メールアドレス>」形式）
- F列: 共有先情報（権限: 「名前 <メールアドレス>」形式、複数人に共有されていれば改行区切り）

後は、Excelでフィルタするなり何なりすることで、よしなに管理することができるかと思います。

### 使い方

[GithubのREADME](https://github.com/morimorihoge/google-drive-permission-search)に書いておきましたが、すこし手順が煩雑なので解説です。

手順は [google-api-ruby-client-sampleのREADME](https://github.com/google/google-api-ruby-client-samples/tree/master/drive) に一通りまとまっているのですが、始めてだと使い方がよく分からないかもしれないので、備忘録がてら解説してみます。

#### Google API Consoleでの設定

[Google API Console](https://code.google.com/apis/console/)にログインし「API & Auth」メニューから「APIs」を選択し、「Drive API」を有効化します。

[(L)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.52.33.png)

[![Screenshot 2014-10-02 13.52.33](../_resources/c72a469868d91ffab0612ad263aa100a.png)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.52.33.png)

次に、「API & Auth」メニューから「Credentials」を選択し、OAuthの「Create new Client ID」を開きます。「APPLICATION TYPE」は「Installed Application」、「INSTALLED APPLICATION TYPE」は「Other」を選択します。

[(L)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.57.35.png)

[![Screenshot 2014-10-02 13.57.35](../_resources/3be237b399998e8079f3fa647293622a.png)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.57.35.png)

[(L)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.56.42.png)

[![Screenshot 2014-10-02 13.56.42](../_resources/1f04cd0d72d14199d110f2837ef38e36.png)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-13.56.42.png)

これで「Client ID for native application」が生成されるので、接続情報のJSONファイルをダウンロードし「**client_secrets.json**」というファイル名で保存します。

[(L)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-14.56.52.png)

[![Screenshot 2014-10-02 14.56.52](../_resources/e6073a77e92515233a167638f198588a.png)](https://techracho.bpsinc.jp/wp-content/uploads/2014/10/Screenshot-2014-10-02-14.56.52.png)

あとはこのclient_secrets.jsonをgithubからcloneしてきたディレクトリに配置すれば準備完了です。
**client_secrets.jsonはAPI利用の認証情報が入っているので、他の人に渡さないように注意して下さい。**

#### 実行方法

Ruby 2.0.0以上＋bundlerがインストールされていれば、以下の通りで動くと思います。
git clone https://github.com/morimorihoge/google-drive-permission-search.git
cd google-drive-permission-search
cp ~/client_secrets.json ./
bundle
bundle exec ./google-drive-permission-search.rb --type excel -v
ドキュメント数が多いと時間がかかる（400ドキュメントで数分程度）ので、-v/–verboseオプションで途中経過を表示すると良いかもしれません。
その他のオプションはREADMEを参照して下さい。–only-includesを使えば特定のユーザに共有されたドキュメントで絞り混むことも可能です。

## まとめ

Google Driveは気軽＆柔軟にファイル共有できる反面今一つ権限情報の見通しが悪いのが難点です。本記事ではGoogle Driveの検索機能を使う方法と、google-drive-permission-searchを使って全ファイルの権限リストを取得する方法を紹介しました。

大事なファイルがいつの間にか知らない相手に共有されていないかチェックするのにでも使って頂ければと思います。

個人的にGoogle Drive APIは一度は触ってみようと思っていたので良い機会でした。Rubyでは[google-api-ruby-client](https://github.com/google/google-api-ruby-client)という公式Gemがあるので割と楽に開発できました。

またそのうち気が向いたらGoogle Driveをごりごり使うアプリでも書いてみようかと思います。
ではでは