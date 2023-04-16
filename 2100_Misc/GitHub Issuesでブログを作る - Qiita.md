---
title: GitHub Issuesでブログを作る - Qiita
updated: 2018-03-18 11:35:57Z
created: 2018-03-18 11:35:57Z
source: https://qiita.com/miyaoka/items/1922d5d8528fe31016b9
author: xyvyx10
tags:
  - SI
  - Web
---

# Headless CMS

はじめにHeadless CMSについて解説しておきます。旧来のAPI無しのWordPressのような一体型CMSではなく、コンテンツ管理部分を切り離してAPIでやりとりできるようにするのがHeadlessなCMSです。これによりフロントの実装やデプロイが疎結合になり、好きにできるようになります。

[(L)](https://camo.qiitausercontent.com/c7be5efbbd3a9fea2aee20dbcfa6bf67c0b669df/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f31633735636162332d356430352d313632662d396237342d6661366130643038356139392e706e67)

[![スクリーンショット 2018-03-13 6.44.47.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f31633735636162332d356430352d313632662d396237342d6661366130643038356139392e706e67.png)](https://camo.qiitausercontent.com/c7be5efbbd3a9fea2aee20dbcfa6bf67c0b669df/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f31633735636162332d356430352d313632662d396237342d6661366130643038356139392e706e67)

例としてCMSに[Contentful](https://www.contentful.com/)、デプロイに[Netlify](https://www.netlify.com/)を使う構成だとこんな感じになります。

参考）

こうして分けたところで何が便利って思われるところもあるかもしれませんが、自分的にはバックエンドを作る必要が無く、フロント一人居れば全部できるのが非常にラクだなと思います。そして各所が最適化されているので、フロントの最適化に注力しやすくなりますし、必要であればweb以外にアプリ用など複数の画面を作ることも可能になります。

# GitHub Issueをブログ化する

[(L)](https://camo.qiitausercontent.com/c745f6150c2e762e83fbc312790b5180ff6d3db4/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f63383838326664662d666666392d636636612d306463652d6634356165353333646466652e706e67)

[![スクリーンショット 2018-03-13 6.46.42.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f63383838326664662d666666392d636636612d306463652d6634356165353333646466652e706e67.png)](https://camo.qiitausercontent.com/c745f6150c2e762e83fbc312790b5180ff6d3db4/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f63383838326664662d666666392d636636612d306463652d6634356165353333646466652e706e67)

コンテンツ管理であり、APIでやりとりできるといえばGitHubのIssueなどもそうです。
GitHub Issueを簡易CMSとしてブログを作ってみるというのが今回の主旨になります。

## 環境変数設定

APIを使うためtokenなど環境固有の設定ができるように変数設定をします。

[direnv](https://github.com/direnv/direnv)をインストールしておくことで`.envrc`で設定した値を`process.env`として扱えるようになります。

.envrc

# Create your tokens at https://github.com/settings/tokens

## Public token to fetch repository on production

export GH_READONLY_TOKEN=

## Private token to edit repository on local. Don't use in public!!!

export GH_WRITE_TOKEN=

## Target repository

export GH_REPO_OWNER=
export GH_REPO_NAME=

### OAuth Token

ここではGitHubの[Personal Access Tokens](https://github.com/settings/tokens)を2つと、ターゲットとなるリポジトリの設定をしています。

トークンが2つあるのはIssueの読み取り用と編集用です。読み取り用トークンは最終的にデプロイされるソースに含めるため、権限は必ず全部外した状態にしてください。

編集用トークンはoptionalでローカルサーバー上でのみ使うことを想定しています。こちらは後ほど解説します。

# フロント実装

## Nuxt

フロントはなんでも良いのですが、静的ビルドできるのが便利なのでVueフレームワークの[Nuxt.js](https://nuxtjs.org/)を使ってます。使い方はドキュメントがめっちゃ丁寧で親切なのでとにかく読みましょう。

## Apollo

GitHubはAPI v4でGraphQLに対応しているので使いましょう。

クライアントはApolloを入れます。Nuxt用には[@nuxtjs/apollo](https://github.com/nuxt-community/apollo-module)があるので、インストールして`nuxt.config.js`のmodulesに追加するだけOKです。

### apolloクライアント設定

/apollo/client-configs/default.js
import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
export default (ctx) => {
const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql' })
// middleware
const middlewareLink = new ApolloLink((operation, forward) => {
const token = ctx.env.GH_READONLY_TOKEN
operation.setContext({
headers: { authorization: `Bearer ${token}` }
})
return forward(operation)
})
const link = middlewareLink.concat(httpLink)
return {
link,
cache: new InMemoryCache()
}
}
クライアントはこんな感じ。
先ほどの環境変数で設定した`GH_READONLY_TOKEN`をヘッダに入れます。

### クエリ

/apollo/queries/getIssues.gql
query getIssues(
$repoOwner: String!
$repoName: String!
$fetchIssuePerPage: Int = 5
$endCursor: String
) {
repository(owner: $repoOwner, name: $repoName) {
name
description
issues(
orderBy: { field: CREATED_AT, direction: DESC }
first: $fetchIssuePerPage
after: $endCursor
) {
totalCount
pageInfo {
startCursor
endCursor
hasPreviousPage
hasNextPage
}
nodes {
author {
avatarUrl
login
resourcePath
url
}
id
number
title
body
createdAt
updatedAt
url
}
}
}
}
Issueを取得するクエリはこんな感じに作ってます。

[(L)](https://camo.qiitausercontent.com/ccdbee2f17d22bff5c55ce31fbfcc7e13f2cdab7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f33653437323539392d316336662d323261322d303062342d3165333365366635343434342e706e67)

[![スクリーンショット 2018-03-14 8.31.12.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f33653437323539392d316336662d323261322d303062342d3165333365366635343434342e706e67.png)](https://camo.qiitausercontent.com/ccdbee2f17d22bff5c55ce31fbfcc7e13f2cdab7/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f33653437323539392d316336662d323261322d303062342d3165333365366635343434342e706e67)

どんなクエリでどんな値が取れるかは[GraphQL API Explorer | GitHub Developer Guide](https://developer.github.com/v4/explorer/)で試せるので、必要な情報が取得できるように好きに作りましょう。ここで一気にIssueのコメント一覧なども取ることができます。

## store

/store/index.js
import getIssues from '~/apollo/queries/getIssues'
export const actions = {
async nuxtServerInit({ commit, state }, { app, env }) {
const { GH_REPO_OWNER: repoOwner, GH_REPO_NAME: repoName } = env
commit('setRepoOwner', repoOwner)
commit('setRepoName', repoName)
try {
const { data } = await app.apolloProvider.defaultClient.query({
query: getIssues,
variables: {
repoOwner,
repoName,
fetchIssuePerPage: state.fetchIssuePerPage
}
})
commit('setIssues', data.repository.issues)
} catch (err) {
console.error(err)
}
}
}

これまでに設定した環境変数とGraphQLクエリを使うことでGitHubのIssueを取得します。[nuxtServerInit](https://ja.nuxtjs.org/guide/vuex-store/#nuxtserverinit-%E3%82%A2%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3)という特別なアクションに記述することでレンダリング前に取得してstoreに格納することができます。

## 画面表示

/pages/index.vue
<template>
<section class="container">
<header>
<h2>Issues</h2>
<small>count: {{totalCount}}</small>
</header>
<entry-item
v-for="post in nodes"
:key="post.id"
:post="post"
/>
<no-ssr>
<infinite-loading @infinite="loadMore" ref="infiniteLoading">
<span slot="no-results">
no more articles
</span>
<span slot="no-more">
no more articles
</span>
</infinite-loading>
</no-ssr>
<div class="page">
{{nodes.length}} / {{totalCount}}
</div>
</section>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import getIssues from '~/apollo/queries/getIssues'
import EntryItem from '~/components/EntryItem.vue'
export default {
components: {
EntryItem
},
computed: {
...mapState([
'repoOwner',
'repoName',
'fetchIssuePerPage',
'totalCount',
'nodes',
'pageInfo'
])
},
storeに格納したissue一覧を表示してます。このへんは好きにやりましょう。
Issue本文はmarkdownになってるので`vue-markdown`に突っ込めばHTMLになります。

ページングはページ下部にinfinite loadingをつけてスクロールで追加読み込みしてます。[vue-infinite-loading](https://github.com/PeachScript/vue-infinite-loading)はSSRでエラーになるので、no-ssrタグで括ることで回避してます。

## (optional) ローカルからIssue編集する

[(L)](https://camo.qiitausercontent.com/7948eb9cf93b3086d0d6ae2e05ee2f8443c25d40/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f66363234386665372d623263612d643533622d373730362d6336613566363830616666332e676966)

[![2.gif](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f66363234386665372d623263612d643533622d373730362d6336613566363830616666332e676966.gif)](https://camo.qiitausercontent.com/7948eb9cf93b3086d0d6ae2e05ee2f8443c25d40/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f66363234386665372d623263612d643533622d373730362d6336613566363830616666332e676966)

GitHubのIssues画面だけじゃなくて、自サイトの画面で内容更新したほうが見た目の確認など楽なので編集機能もつけてみました。
/components/EntryItem.vue
<div class="body" :class="{hasDiff}">
<section>
<vue-markdown
class="marked"
:source="previewBody"
:anchorAttributes="{
target: '_blank',
rel: 'noopener'
}"
/>
</section>
<transition name="fade">
<div
v-if="isEditing"
class="editor"
>
<textarea
v-model="editorBody"
:disabled="isCommiting"
/>
</div>
</transition>
<div class="edit-toggle" v-if="isDev">
<button @click="toggleEdit">{{isEditing ? 'プレビュー' : '編集'}}</button>
</div>
<transition name="edit-action">
<div class="edit-action" v-if="hasDiff">
<button
@click="discardEdit"
:disabled="isCommiting"
>変更を破棄</button>
/
<button
@click="saveEdit"
:disabled="isCommiting"
>保存</button>
</div>
</transition>
</div>
記事表示コンポーネントのこのへんでやってるのが編集機能です。
`v-if="isDev"`で、ローカルの開発環境でのみ編集ボタンを表示し、その場で編集できるようにしてます。

ここでIssue更新用に必要なのが先ほどoptionalで設定していた編集用トークンです。こちらのトークンには`public_repo`の権限を付加することでIssue編集が可能になります。（public環境にはデプロイしないでください）

GraphQLではIssueのmutationはどうもできないっぽかったので、REST APIを使ってます。

# Netlifyで継続的デプロイ

## 環境変数

ビルドに必要な変数をNetlifyにも設定します。

[(L)](https://camo.qiitausercontent.com/20ce0f6ab2dc80a3e8a84773e8f09b64118e857b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f34656536396235622d316631312d343363662d313532382d6435373263633233613363342e706e67)

[![スクリーンショット 2018-03-13 8.19.29.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f34656536396235622d316631312d343363662d313532382d6435373263633233613363342e706e67.png)](https://camo.qiitausercontent.com/20ce0f6ab2dc80a3e8a84773e8f09b64118e857b/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f34656536396235622d316631312d343363662d313532382d6435373263633233613363342e706e67)

## Webhook

デプロイを発火させるために必要なのがWebhook設定です。

Netlifyでプロジェクトを作ると、対象Gitリポジトリの更新に応じてデプロイが行われるWebhookが自動的に追加されます。今回はこれとは別にIssueに更新があったとき用のWebhookも追加します。

[(L)](https://camo.qiitausercontent.com/6ded83d85ba01270b08c57fca3e132944b930b1d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f37623739326331632d653536352d336461302d613730392d3434373461646431316161612e706e67)

[![スクリーンショット 2018-03-13 8.25.58.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f37623739326331632d653536352d336461302d613730392d3434373461646431316161612e706e67.png)](https://camo.qiitausercontent.com/6ded83d85ba01270b08c57fca3e132944b930b1d/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f37623739326331632d653536352d336461302d613730392d3434373461646431316161612e706e67)

まずNetlify側でhookのURLを作成し、

[(L)](https://camo.qiitausercontent.com/532c949cfc874e0fd2b591c807c0b8830465e004/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f33356638366233612d333730392d383939372d303831622d6434336336616530663034632e706e67)

[![スクリーンショット 2018-03-13 8.22.48.png](../_resources/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f33356638366233612d333730392d383939372d303831622d6434336336616530663034632e706e67.png)](https://camo.qiitausercontent.com/532c949cfc874e0fd2b591c807c0b8830465e004/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3131373734332f33356638366233612d333730392d383939372d303831622d6434336336616530663034632e706e67)

GitHubのリポジトリ設定からWebhookを追加し、Payload URLに先ほどのURLを記入、イベント一覧からIssue、Issue commentsを選択して設定します。

これでソースの更新とIssueの更新のどちらでも、最新の内容でビルドされたものが自動的にデプロイされるようになります。

# 作ったもの

はい。というわけで出来ましたね。詳しくはリポジトリとか見てください。

## リポジトリ

https://github.com/miyaoka/gh-blog

## デモサイト

https://gh-blog.netlify.com/

# そもそもの経緯

もともとazuさんがGitHub issue as blogについて話しているのを目にして、たしかにユースケースとしては「Issueそのものを見ればいいじゃん」となってしまうので微妙なんですが、まあGitHubのAPI使ってみる練習にちょうどいいかなーと実装してみた感じです。

# その他雑感

## カスタムフィールド

Issueだとタイトルと本文とラベルくらいしか設定できませんが、Front-matterで記述すればそのへんも設定できるとは思います。ただまあそういうフィールド欲しいなら素直にContentful使うのがいいなと思います。

まあどっちかっていうと既存のIssueがあってあくまでそのドキュメント化という用途にするべきなんでしょう。

## 下書き投稿

ラベルとか使って制御すれば出来ると思います。まあGitHub側では見えますが。

## コメント表示/投稿

実装すればできるはず