---
title: EvernoteとIFTTTのおさらい（３）　〜アクションの中身〜
updated: 2018-02-27 15:55:49Z
created: 2018-02-27 15:55:49Z
source: https://rashita.net/blog/?p=12242
author: xyvyx10
tags:
  - Tips
  - Web
---

# EvernoteとIFTTTのおさらい（３） 〜アクションの中身〜

今回は、Evernoteが持つアクションの具体的な中身を紹介してきます。
※前回まで
第一回：[EvernoteとIFTTTのおさらい（１）　〜IFTTTとは何か〜](https://rashita.net/blog/?p=12150)
第二回：[EvernoteとIFTTTのおさらい（２）　〜トリガーとアクション〜](https://rashita.net/blog/?p=12228)
話をシンプルにするため、今回のレシピは
**「Evernoteでノートをシェアしたら→Evernoteにノートを作成する」**
というEvernoteだけで完結できるものにしておきましょう。
一見すると何の役にも立たなそうですが、たぶん何の役にも立たないでしょう。あくまで構造を理解するための例ですので、あしからず。

### 「Create a note」の中身

レシピ作成のステップ１から５は省略します。
トリガー（Evernote）→「New shared note link」→確定→アクション（Evernote）→「Create a note」
まで進んでください。すると、次のような画面が出てくるでしょう。
[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot30.png)

[![screenshot](../_resources/7d1115fdb5239553370dd297e9bbbae1.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot30.png)

普段Evernoteを使っている方ならば、お馴染みのものばかり。

- Title・・・新規作成されるノートのタイトル
- body・・・新規作成されるノートの中身
- Notebook・・・新規作成されるノートが入るノートブック（省略するとデフォルトのノートブックに）
- Tag・・・新規作成されるノートに付けられるタグ（コンマ（,）で複数入力できます）

これらを自由にカスタマイズできます。

そして、そのカスタマイズに一役買ってくれる機能が、IFTTTにはあります。入力エリア内にある青地に白の十字ボタンがそれです。ここには魔法の言葉がいくつか収納されているのです。

### 魔法の言葉:Ingredient

まずは、Titleの十字ボタンをぽちっと押してみましょう。

「Select an Ingredient」という選択バーが表示されるはずです。それをクリックして、ひとつ下にある「Note title」を選択します。すると、入力エリアはこんな感じに表示されるでしょう。

[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot31.png)

[![screenshot](../_resources/fce9305bcf97b4eb24b068cb46ac22d8.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot31.png)

入力エリアをクリックすると、こうなります。
[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot32.png)

[![screenshot](../_resources/b954c3814b1cdb6e414b148151d138ba.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot32.png)

この二つの{}に挟まれた単語が魔法の言葉です。ingredientとは、材料や構成要素といった意味。ノートタイトルや中身の素材になってくれる言葉なのです。言ってしまえば変数なのですが、その説明はスルーしておきましょう。

このIngredientは最初に選択した「トリガー」と緊密な関係を持っています。
たとえば、仮に「Note Title」というIngredientをTitle欄に入れたら、どうなるのでしょうか。今回のレシピをもう一度確認しましょう。
「Evernoteでノートをシェアしたら→Evernoteにノートを作成する」

Title欄に入力されたテキストが、新規作成されるノートのタイトルになります。もし、そこに{{Title}}という魔法の言葉を入れておくと、新規作成されるノートのタイトルが、シェアされたノートのタイトルになるのです。

つまり「私のEvernoteのとっておきの使い方」というノートをシェアしたら、「私のEvernoteのとっておきの使い方」というタイトルのノートが新規作成されます。それに続いて「私のEvernoteのとっておきの使い方ver.2」というノートをシェアしたら、今度は「私のEvernoteのとっておきの使い方ver.2」というタイトルのノートが新規作成されます。

Titleに{{Title}}ではなく、「私のEvernoteのとっておきの使い方」というフレーズを直接入れておいても、最初の動作は上とまったく同じです。しかし、二回目の動作が違ってくることに注意してください。

さて、「Note Title」以外に選べるIngredientには、他にどのようなものがあるでしょうか。
●「Evernoteでノートをシェアしたら→Evernoteにノートを作成する」で選べるIngredient

- 「Note Title」・・・シェアされたノートのタイトル
- 「Note URL」・・・シェアされたノートのURL
- 「Tags」・・・シェアされたノートのタグ
- 「Created Date」・・・シェアされたノートの作成日時

これらは、Title以外の欄にでも使用することができます。

たとえば、「Evernoteでノートをシェアしたら、そのノートのタイトルを持ったノートを新規作成し、その中身をシェアされたURLにする」なんてことができます。その動作に、どんな意味があるのかは私にはわかりませんが、そういう動き方ができるという点だけ押さえておいてください。

### レシピ・チェンジ

では、一旦ステップを戻って、アクションを「Append to note」に選び直してみましょう。
これは「既存のノートに追記する」という行動でしたね。つまり、
**「Evernoteでノートをシェアしたら→Evernoteのノートに追記する」**
というレシピに変更です。

もしまったく状況が変わっていなければ、「Append to note」を選択した場合、次のような画面が表示されるはずです。すでにいくつかの項目が入力されている状況です。

[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot33.png)

[![screenshot](../_resources/41ba952db6e79c16517a52843571e91d.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot33.png)

これは他の人が共有したレシピが参考例として表示されていると考えてください（[参照](https://ifttt.com/recipes/125314)）。
このレシピをそのまま使ってもよいですし、自分なりにアレンジを加えることもできます。
ちなみに、このレシピを動かすと、次のようなノートが生まれます。
[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot34.png)

[![screenshot](../_resources/126dbdbb15d3aea1e5b75433ebe6d98f.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot34.png)

自分がシェアしたノートのリストができあがるわけです。無論、IFTTTさえ稼働していれば、自分がノートをシェアするたびに、自動的にこのノートに項目が追加されていきます。これは、何かしら使う意味みたいなものはありそうです。

ちなみに、「既存のノート」は、ノートブック、タグ、ノートタイトルによって検索されていると思われます。もし、追記すべきノートが見つからない場合は、自動的にそれを作成してくれます。一見便利ですが、たとえばノートブックのスペルを間違えてしまうと（LifelogをLiferogとしてしまうなど）、その名前でノートブックが新規作成されてしまう点には注意してください。

あと、誠に誠に残念ながら日本語（全角文字ですね）が通りません。ノートブック名に全角文字を使っている場合には注意が必要です。
※私は[業務日誌]というノートブックを、仕方なく[Worklog]という名前に変更しました。

### アレンジのポイント

それぞれの入力欄にアレンジポイントは存在しますが、Evernoteで言えば、やはりBodyが気になるところ。
HTMLをご存じの方ならば、何も問題ありませんが、そうでないならば多少知識が必要です。

が、本当に基本的なことがらで押さえておきたいのは、改行したければ<BR>を入れる、ということぐらいでしょうか。水平線を入れる<HR>、太字にする<B>（あるいはStorng）なんかも便利です。

たとえばレシピをこのように変更すると、
[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot35.png)

[![screenshot](../_resources/dd0ad438bc514126146ffe6f141a85d2.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot35.png)

ノート上では、このような変更になります。
[(L)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot36.png)

[![screenshot](../_resources/602e663e1269ab79893e7fe25016b092.png)](https://rashita.net/blog/wp-content/uploads/2013/12/screenshot36.png)

ちなみにマニアックな話になりますが、<en-todo />あたりは通りません。

### さいごに

これでチャンネル、トリガー、アクション、についての理解がずいぶんと深まりましたね。
次回は、TwitterとEvernoteとのレシピを掘り下げてみます。
次回→[EvernoteとIFTTTのおさらい（４）　〜Twitterとのレシピ〜](https://rashita.net/blog/?p=12267)