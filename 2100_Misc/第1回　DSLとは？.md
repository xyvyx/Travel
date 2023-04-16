---
title: 第1回　DSLとは？
updated: 2017-03-08 01:25:23Z
created: 2017-03-08 01:25:23Z
source: http://gihyo.jp/admin/feature/01/dsl/0001
tags:
  - SI
---

# 第1回 DSLとは？

この記事を読むのに必要な時間：およそ 2.5 分

### DSLのメリットとデメリット

DSLは万能ではありません。なぜなら，ある特定の問題の解決のみに提供されている言語だからです。次に，DSLのメリットとデメリットについて見ていきます。

#### DSLのメリット

（1）DRY（Don't Repeat Yourself）

- 繰り返しの排除（参考：『達人プログラマ』（⁠Dave Thomas ISBN10:4894712741）
- 似ている処理のコードの自動生成（テンプレート）

（2）生産性の向上

- プログラミングするコード量が少ない
- 可読性が高い

（3）ある特定の分野に従事している人（特定言語のプログラマ）とコミュニケーションが可能

- XML，CSS，SQLなど

#### DSLのデメリット

（1）設計が難しい

- APIの設計が難しいように，DSLの設計も難しい

（2）読み難いコードになる可能性がある

- たとえば，Cのマクロ
- 良く設計されていないDSL

（3）マイグレーション

- 下位互換の維持

（4）ハイリスク・ハイリターン

- 処理の結果が想定出来難くなる可能性が高い．しかし，良く設計されたDSLでは，破壊的な生産性を提供可能

### 身近にあるDSL

私達の身の回りには，すでに多くのDSLが存在してます。しかしながら，まだDSLには明確な定義というのがありません。
**表**　身近にある代表的なDSL

| 分類  | DSL |
| --- | --- |
| Java | ANT, Maven，struts-config.xml，Seasar2 S2DAO，Hibernate Query Language，JMock expectations |
| Ruby | Rails Validations，Rails ActiveRecord，Rake，RSpec，Capistrano，Cucumber |
| その他 | SQL，CSS，Regular Expression（正規表現）⁠，Make，graphviz |

### 内部DSLと外部DSL

#### 内部DSL

言語自身で強力なDSLを記述する事のできるLispは，「⁠プログラム可能なプログラミング言語」と言われてます。この手法をとっているDSLは，内部DSLもしくは，組み込みDSLと言われてます。

RubyはLispの血統であることから，Ruby，Ruby on Railsを使って書かれたコードの中には，多くの内部DSLが含まれてい ます。以下のサンプルコードは，内部DSLを使って書かれてます。ここで重要なのは，Rubyのシンタックスを違反することなく書かれている，ということです。このことにより，ホスト言語のパワーと既存のツールのすべてを利用することができます。

**リスト**　内部DSLの例（Ruby）

```
attr_reader    :id, :age
attr_writer    :name
attr_accessor  :color
```

```
#内部DSLのソースコード
class Module
  def attr_reader(*symbols)
    symbols.each do |symbol|
      class_eval %{
        def #{symbol}
          @#{symbol}
        end
      }
    end
  end

  def attr_writer(*symbols)
    symbols.each do |symbol|
      class_eval %{
        def #{symbol}= (value)
          @#{symbol} = value
        end
      }
    end
  end

  def attr_accessor(*symbols)
    attr_reader(symbols)
    attr_writer(symbols)
  end
end
```

#### 外部DSL

ホスト言語とは異なる言語（XML，Makefileのような独自形式）で作成されたDSLは，外部DSLと呼ばれてます。UNIX伝統のリトル言語がそれに相当します。外部DSLの最大のメリットは，DSL設計者が自由にフォーマットを決められるということです。しかし，この方法を採用すると，フォーマットをパースする処理を書かねばなりません。

また，この手法を使ったDSLは，GUIツールを提供していることが多いのも大きな特徴です。Eclipseには，外部DSLをサポートする多くのプラグイン（Seasar2，Spring，Hibernate，JBoss Rules など）が既に存在してます。

外部DSLの例（JBoss Rules）

```
rule "Due date for Test"
when
   task : Task()
   Test(id == Test.TEST)
then
   setTestsDueTime(task, 10);
end
```

### まとめ

DSLは，多くのプログラマの身近な存在であることがわかりました。DSLを使っている，という認識がなかっただけで，それを意識することが新しいプログラミング技術を身につけることができると思っております。

次回は，今回取り上げたCSVファイルのデータロードのコードなどを示しながら，より詳細なDSLの世界をご案内いたします。