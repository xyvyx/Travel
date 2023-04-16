---
title: これは便利、VS Codeの設定を変更しよう！v.1.60のアップデートで、ブラケットのカラー化にネイティブ対応
updated: 2021-09-08 23:28:43Z
created: 2021-09-08 23:28:43Z
source: >-
  https://coliss.com/articles/build-websites/operation/work/vscode-bracket-pair-colorization.html
---

[サイト構築 -制作](https://coliss.com/articles/category/build-websites/operation/work/)

[12](https://www.facebook.com/sharer.php?src=bm&u=https://coliss.com/articles/build-websites/operation/work/vscode-bracket-pair-colorization.html&t=%E3%81%93%E3%82%8C%E3%81%AF%E4%BE%BF%E5%88%A9%E3%80%81VS%20Code%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%97%E3%82%88%E3%81%86%EF%BC%81v.1.60%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E3%81%A7%E3%80%81%E3%83%96%E3%83%A9%E3%82%B1%E3%83%83%E3%83%88%E3%81%AE%E3%82%AB%E3%83%A9%E3%83%BC%E5%8C%96%E3%81%AB%E3%83%8D%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E5%AF%BE%E5%BF%9C)

[0](https://getpocket.com/edit?url=https://coliss.com/articles/build-websites/operation/work/vscode-bracket-pair-colorization.html)

Post on:2021年9月8日
sponsors
[![](https://coliss.com/shared/img/ad-adobe-16@2x.jpg)](https://xdtrail.com/)
VS Codeがどんどん便利になっていきますね。
先日のv.1.60のアップデートで、ブラケットのカラー化に対応しました！

VS Codeの設定を変更するだけで、開始と終了のブラケットをセットで同じカラーにします。今までは機能拡張を入れないとできなかったことが、ネイティブ対応したのは朗報です。

![](https://coliss.com/wp-content/uploads-202103/2021090701@2x.png)
上: 今まで、下: v.1.60でブラケットがカラー化
VS Code v.1.60のアップデートは、下記の通りです。
![](https://coliss.com/wp-content/uploads-202103/2021090702-01.png)

Visual Studio Code: [August 2021 (version 1.60)](https://code.visualstudio.com/updates/v1_60)

自動言語検出 - VS Codeにペーストする際にプログラミング言語を検出します。
ビルトイン高速ブラケットカラー化 - 大規模ファイルでも高速にブラケットのマッチングとカラー化。
設定エディタのシンタックスハイライト - 設定のコードブロックでリッチなシンタックスハイライトに対応。
ターミナルでグリフのレンダリング - ボックス描画とブロック要素文字の表示が改善。
デバッグウォッチ値の設定 - デバッグセッション中にウォッチ値を変更します。
ノートブックの改善 - Markdownリンクのナビゲーション、大きな出力のレンダリングを高速化。
JavaScript/TypeScriptのインレイヒント - パラメータ名やタイプなどのインラインヒントを提供。
ロックされたエディタグループのプレビュー - エディタグループをロックすることで、好みのエディタレイアウトを維持。
Python拡張テストの更新-テストの検出、ナビゲーション、ステータスのサポートが向上。
Web拡張機能のオーサーガイド - ブラウザでVS Codeの拡張機能を更新する方法を学べます。
上記の中から、ブラケットのカラー化に注目です！

[ビルトイン高速ブラケットカラー化](https://code.visualstudio.com/updates/v1_60#_high-performance-bracket-pair-colorization)

ブラケットのカラー化は[Bracket Pair Colorizer 2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)という機能拡張が有名ですが、パフォーマンス面で問題がありました。そこで、VS Codeにネイティブに実装されました。

どんな感じかというと、今まではブラケットは開始も終了も同じカラーで、開始と終了のペアを探すのも大変でした。
![](https://coliss.com/wp-content/uploads-202103/2021090702-02.png)
今まで

VS Code v.1.60にアップデートすると、設定を変更するだけで、開始と終了のブラケットをセットで同じカラー（最大6種類）にします。使用しているテーマに沿った色味になります。

![](https://coliss.com/wp-content/uploads-202103/2021090702-03.png)
v.1.60でブラケットがカラー化
設定変更は、簡単です。
設定（歯車アイコン）をクリックします。
![](https://coliss.com/wp-content/uploads-202103/2021090702-04.png)
VS Codeの設定画面
「設定の検索」に、「editor.bracketPairColorization.enabled」を入力し、チェックボタンをオンにします。
![](https://coliss.com/wp-content/uploads-202103/2021090702-05.png)
チェックボタンをオンに
これで、ブラケットのカラー化が完了です。
いくつまで対応しているか確認してみました。
![](https://coliss.com/wp-content/uploads-202103/2021090702-06.png)
6種類のカラーでカラー化
今回使用したテーマファイルは、最近お気に入りの「ドラキュラ」です。
背景は落ち着いたダークで、テキストの鮮やかなカラーがはっきりとしていて見やすいです。
![](https://coliss.com/wp-content/uploads-202103/2021090702-07.png)

[Dracula Theme](https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula)

VS Codeでは、便利な機能拡張がたくさんあります！
例えば、タグを変更する時に対応するもう一つのタグも変更してくれる機能拡張とかもあります。
![](https://coliss.com/wp-content/uploads-202101/2021022011-02.gif)

[2021年、VS Codeのおすすめ機能拡張のまとめ、HTMLやCSSやJavaScriptなどのコードを書く時に便利](https://coliss.com/articles/build-websites/operation/work/favorite-vscode-extensions-by-katherine.html)

sponsors

[12](https://www.facebook.com/sharer.php?src=bm&u=https://coliss.com/articles/build-websites/operation/work/vscode-bracket-pair-colorization.html&t=%E3%81%93%E3%82%8C%E3%81%AF%E4%BE%BF%E5%88%A9%E3%80%81VS%20Code%E3%81%AE%E8%A8%AD%E5%AE%9A%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%97%E3%82%88%E3%81%86%EF%BC%81v.1.60%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%87%E3%83%BC%E3%83%88%E3%81%A7%E3%80%81%E3%83%96%E3%83%A9%E3%82%B1%E3%83%83%E3%83%88%E3%81%AE%E3%82%AB%E3%83%A9%E3%83%BC%E5%8C%96%E3%81%AB%E3%83%8D%E3%82%A4%E3%83%86%E3%82%A3%E3%83%96%E5%AF%BE%E5%BF%9C)

[0](https://getpocket.com/edit?url=https://coliss.com/articles/build-websites/operation/work/vscode-bracket-pair-colorization.html)