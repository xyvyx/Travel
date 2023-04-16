---
title: コーディングに役立つ！Visual Studio Codeのちょっとかゆいところに手が届くような便利な機能とテクニック
updated: 2021-07-22 02:53:52Z
created: 2021-07-22 02:53:52Z
source: >-
  https://coliss.com/articles/build-websites/operation/work/visual-studio-code-hacks-by-ishakmohmed.html
---

[サイト構築 -制作](https://coliss.com/articles/category/build-websites/operation/work/)

[0](https://www.facebook.com/sharer.php?src=bm&u=https://coliss.com/articles/build-websites/operation/work/visual-studio-code-hacks-by-ishakmohmed.html&t=%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4%EF%BC%81Visual%20Studio%20Code%E3%81%AE%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E3%81%8B%E3%82%86%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AB%E6%89%8B%E3%81%8C%E5%B1%8A%E3%81%8F%E3%82%88%E3%81%86%E3%81%AA%E4%BE%BF%E5%88%A9%E3%81%AA%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF)

[111](https://getpocket.com/edit?url=https://coliss.com/articles/build-websites/operation/work/visual-studio-code-hacks-by-ishakmohmed.html)

Post on:2021年7月20日
sponsors
[![](https://coliss.com/shared/img/ad-adobe-16@2x.jpg)](https://xdtrail.com/)
あまり知られていないけれど、コーディングの作業が捗るVS Codeの機能とテクニックを紹介します。

今開いているファイルを残しながら新しいファイルを開けるようにしたり、コード内のコメントのカラーだけを自分好みに変更する方法など、ちょっとかゆいところに手が届くような便利なテクニックです。

![](https://coliss.com/wp-content/uploads-202103/2021071801.png)
下記は各ポイントを意訳したものです。
※当ブログでの翻訳記事は、元サイト様にライセンスを得て翻訳しています。

## はじめに

コーダーの皆さん、こんにちは！

VS Codeの記事というと、「コードを整形するにはPrettierが便利」「コードを複製するにはalt+shift+downキー」などを繰り返し見たことがあると思います。

この記事では、あまり共有されていないVS Codeの機能とテクニックをいくつか紹介しようと思います（5番目を除いて）。
この記事があなたの役に立つことを願います。

## 1. ファイルを常に新しいタブで開くようにする

ファイルAを開いていて、ファイルBを開きたいのに、ファイルBをクリックすると、ファイルBは開くがファイルAは閉じてしまう、ということはありませんか？
ファイルBをダブルクリックして新しいタブで開くこともできますが、私と同じようにがっかりすることがありませんか？

この問題を解決するには、設定で「workbench.editor.enablePreview」を検索し、このオプションのチェックを外します。これで、VS Codeはファイルを常に新しいタブで開くようになります。

![](https://coliss.com/wp-content/uploads-202103/2021071802-01.png)
「workbench.editor.enablePreview」のチェックを外す

## 2. コメントのカラーを変更する

無理にとは言いませんが、コメントのカラーによっては違和感があります。私の場合は、コードの中で自分のコメントを見つけるのが簡単なので、コメントにはこのグリーンを使っています。

![](https://coliss.com/wp-content/uploads-202103/2021071802-02.png)
コメントのカラーをグリーンに
コメントのカラーを変更するには、settings.jsonファイルに下記のコードを追加するか、すでに存在している場合は削除して置換してください。
settings.json
1
2
3
 "editor.tokenColorCustomizations":  {
 "comments":  "#229977"  // あなたが見やすいカラーにしてください
 },

## 3. コードを大きく表示する

時には、ファイルやフォルダを、そしてコードを大きく表示したいことがあります。そんな時に便利なショートカットがあります。
ズームアウト
`ctrl`+`-`キーを押す。
ズームイン
`ctrl`+`=`キーを押す。
さらに、`F11`キーを押すと、VS Codeが全画面に表示されます。
macOSの場合は、
ズームアウト
`command`+`-`キーを押す。
ズームイン
`command`+`=`キーを押す。
F11はmacOSのショートカット（デスクトップを表示）と競合するため`command`+`ctrl`+`F`でVS Codeが全画面に表示されます。

## 4. カスタムスニペットを生成する

カスタムスニペットとはコードのテンプレートのことで、キーボードで数文字を入力だけで、そのテンプレートがVS Codeで利用できます。

VS Codeで使用するカスタムスニペットを作成するには、[snippet generator](https://snippet-generator.app/)にアクセスして、よく使用するコード（スニペット）を入力します。

![](https://coliss.com/wp-content/uploads-202103/2021071802-04.png)
[snippet generator](https://snippet-generator.app/)

「Tab Trigger」には起動するためのキーを必ず入力してください。その後、表示されたスニペットをコピーします。VS Codeに戻り、「基本設定」から「ユーザースニペット」を選択し、「新しいグローバルスニペット」をクリックします。あとは、さきほどのコピーしたスニペットをペーストするだけです。

macOSの場合は、「基本設定」から「ユーザースニペット」を選択し、「新しいグローバルスニペット」をクリックします。
![](https://coliss.com/wp-content/uploads-202103/2021071802-03.png)
VS Codeのユーザースニペット

## 5. VS Codeのテーマを変更する

5番目は前述した通り、当たり前のことですが（もちろんタイトルに反しています）、[VSCodeThemes](https://vscodethemes.com/)にアクセスして、自分にあった新しいテーマを使用するのは非常に素晴らしいことです。各テーマをプレビューすることができる大規模なコレクションです。

当ブログの記事も参考にどうぞ。コードがはっきりと見やすくて、使いやすいダーク系とライト系のテーマをまとめました。
![](https://coliss.com/wp-content/uploads-202103/2021071802-05.png)

[Visual Studio Codeで見やすいテーマファイルのまとめ](https://coliss.com/articles/build-websites/operation/work/best-of-visual-studio-code-themes.html)

sponsors

[0](https://www.facebook.com/sharer.php?src=bm&u=https://coliss.com/articles/build-websites/operation/work/visual-studio-code-hacks-by-ishakmohmed.html&t=%E3%82%B3%E3%83%BC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%81%AB%E5%BD%B9%E7%AB%8B%E3%81%A4%EF%BC%81Visual%20Studio%20Code%E3%81%AE%E3%81%A1%E3%82%87%E3%81%A3%E3%81%A8%E3%81%8B%E3%82%86%E3%81%84%E3%81%A8%E3%81%93%E3%82%8D%E3%81%AB%E6%89%8B%E3%81%8C%E5%B1%8A%E3%81%8F%E3%82%88%E3%81%86%E3%81%AA%E4%BE%BF%E5%88%A9%E3%81%AA%E6%A9%9F%E8%83%BD%E3%81%A8%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF)

[111](https://getpocket.com/edit?url=https://coliss.com/articles/build-websites/operation/work/visual-studio-code-hacks-by-ishakmohmed.html)