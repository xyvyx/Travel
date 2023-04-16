---
title: 固定資産カレンダー - Microsoft Dynamics AXコミュニティフォーラム
updated: 2018-05-29 00:24:43Z
created: 2018-05-29 00:24:43Z
source: https://community.dynamics.com/ax/f/33/t/143295
tags:
  - 会計
---

# Microsoft Dynamics AXコミュニティフォーラム

### 質問のステータス

 **検証済み**

 **  [Chris Tan](https://community.dynamics.com/members/christianto-adi) が2014年10月27日の午後10時8分に質問した **

皆さんこんにちは、

私たちの会社は新しいダイナミクス2012R3の実装を開始しています。 多くの資産（固定資産）はもともと長年前に取得されていたため（1996年以降）、取得日=当初の購入日の資産をアップロードしました。問題は、買収（および/または減価償却）を掲載しようとしたときに、現在の暦年（たとえば1996年）の期間が開かれていないと斧が言います。私たちはすでに元帳（2014年のみ）と固定資産（1996年から2014年まで）の2つの会計カレンダーを作成しています。バリュー・モデルは固定資産カレンダーを指しており、2014年以前の日付で買収/減価償却を開始しようとするたびに、固定資産カレンダーではなく元帳カレンダーの期間が開いていないため、エラーが表示されます。

そのため、2014年以前の日付の資産の取引をどのように転記するのが問題なのでしょうか？
ありがとう！

 [応答](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1527481625&rver=6.5.6508.0&wp=MBI&wreply=https:%2F%2Fcommunity.dynamics.com%2F%2Fdynamics%2FLoginRedirect.ashx%3FRedirectUrl%3D%2Fax%2Ff%2F33%2Ft%2F143295%2Freply%3FReplyToContentTypeID%3D0%26GroupToJoin%3D56&lc=1033&id=292217)

 **  [AndréArnaud de Calavon](https://community.dynamics.com/members/andre-arnaud-de-calavon) が2014年10月28日に反応しました1:35 **

こんにちはクリス、
次の手順は、私が通常従う手順です：

まず、システムに固定資産を持たせる必要があります。おそらく、データインポート/エクスポートフレームワークの助けを借りてこれらをインポートすることができます。また、このツールを使用して、以下で説明するjounalsをインポートすることもできます。

変換日を決定する必要があります。変換日が会計年度の冒頭にある場合、会計年度中に変換を行う場合よりも手順が簡単です。昨年と前のassestは、常に以下の2つのステップで行われます：

1昨年と前の買収価値資産

旧会計年度末の固定資産メモを使用して資産の取得価額を転記することができます。オフセット元帳のアカウントについて考える。私たちは主に残高を開設するために特別な口座を使用しています。たとえば、AXを1-1-2015に開始すると、このジャーナルの日付は2014年12月31日になります。

2昨年と前の減価償却資産
その後、旧会計年度末に新しい固定資産メモに償却値を転記することができます。オフセット元帳のアカウントについて考える。これは買収ジャーナルと同じ日付になります。
今年中にコンバージョンがあって前の手順を完了した場合は、次の手順を実行できます。
3当期の資産価値資産
実際の過去の日付または変換前の日付に固定資産メモを使用して資産の取得価額を転記することができます。
4減価償却資産現在の年度

その後、実際の過去の日付または変換前の日付に新しい固定資産メモに償却値を転記することができます。また、このメモには、現会計年度の減価償却額を用いた古い検定が含まれています。

これらのステップでは、元帳勘定をもう一度考え直してください。通常の相殺口座または口座を使用することができます。

これらの手順を完了した後、いくつかのレポートを印刷してすべての値をチェックします。通常、あなたはネットブックの価値を持ち、すべての資産は、今年とそれ以上の年の両方のために買収と減価償却のためにどのような価値があるかを知っています

しかし、あなたがしなければならない最後のことは、あなたの資産のすべての価値モデルをチェックすることです。取得および減価償却メモを転記するとき、減価償却開始日と残存減価償却期間のような項目が影響を受けます。正しい値を設定してください。

残りの期間は将来減価償却を決定する。

 [応答](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1527481625&rver=6.5.6508.0&wp=MBI&wreply=https:%2F%2Fcommunity.dynamics.com%2F%2Fdynamics%2FLoginRedirect.ashx%3FRedirectUrl%3D%2Fax%2Ff%2F33%2Ft%2F143295%2Freply%3FReplyToContentTypeID%3D0%26GroupToJoin%3D56&lc=1033&id=292217)

 **  [Chris Tan](https://community.dynamics.com/members/christianto-adi) が2014年10月28日に返信しました2:40 AM **

こんにちはアンドレ、
速い応答をありがとう、あなたの記事は非常に有用で有益です！

2014年12月31日あたりのすべての前年度資産の取得（および減価償却も同様）を投稿する提案として、私たちはAXを2015年1月1日に使用することから始めます。 2014年12月31日の会計年度カレンダーが開かれています。2015年1月1日以降の会計カレンダーのみを設定しているためです。

ありがとう！

 [応答](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1527481625&rver=6.5.6508.0&wp=MBI&wreply=https:%2F%2Fcommunity.dynamics.com%2F%2Fdynamics%2FLoginRedirect.ashx%3FRedirectUrl%3D%2Fax%2Ff%2F33%2Ft%2F143295%2Freply%3FReplyToContentTypeID%3D0%26GroupToJoin%3D56&lc=1033&id=292217)

 **  [AndréArnaud de Calavon](https://community.dynamics.com/members/andre-arnaud-de-calavon) が2014年10月28日に返答しました3:55 **

こんにちはクリス、
はい、2014年12月31日の期間を開いておく必要があります。利点は、最後の減価償却日がこの日付で満たされることです。
2015年の期首残高に金額を転送するには、「残高照会」ジョブを実行する必要があります。

 [応答](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1527481625&rver=6.5.6508.0&wp=MBI&wreply=https:%2F%2Fcommunity.dynamics.com%2F%2Fdynamics%2FLoginRedirect.ashx%3FRedirectUrl%3D%2Fax%2Ff%2F33%2Ft%2F143295%2Freply%3FReplyToContentTypeID%3D0%26GroupToJoin%3D56&lc=1033&id=292217)

 **  [Chris Tan](https://community.dynamics.com/members/christianto-adi) が2014年10月28日に返信しました4:14 **

こんにちはアンドレ、
あなたの答えは私の質問に完全に合っています。
要約すると、私の間違いは、資産取引の過去の日付を買収と減価償却の転記日付にして、斧がその日付の期間を見つけようとしている間にエラーになることです。
回避策は、前年度の取引を2014年12月31日の日付として転記し（期間を最初に開いて）、残高を期首残高ジョブを使用して2013年1月1日に転記することです。
問題が解決しました。
ありがとうアンドレ:)

 [応答](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1527481626&rver=6.5.6508.0&wp=MBI&wreply=https:%2F%2Fcommunity.dynamics.com%2F%2Fdynamics%2FLoginRedirect.ashx%3FRedirectUrl%3D%2Fax%2Ff%2F33%2Ft%2F143295%2Freply%3FReplyToContentTypeID%3D0%26GroupToJoin%3D56&lc=1033&id=292217)

 **  [Preveen](https://community.dynamics.com/members/preveen) は2017年3月8日1:11 AMに[返信](https://community.dynamics.com/members/preveen)しました **

こんにちはアンドレ、
長い間、ケースを開けて申し訳ありません。
同様の状況で、2000年に取得した資産もそこにあるFA残高をアップロードします。

|     |     |     |     |     |     |     |     |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 資産グループ | アセットID | サービス日付 | 原価  | 終わりの終わり。 | 閉じるDepr。 | NBV。OP | NBV。CL |
| 建物  | BL00001-1 | 2000年9月1日 | 1980404.193 | 1950904.193 | 1065213.816 | 934462.982 | 885690.377 |

上記の資産の寿命は30年です。
私たちは01/10/2016にLIVEエントリーを開始しました。クローズ残高とクローズ減価償却は、20/09/2016のとおりです。

1.以前のブログでは、20/09/2016の締め切り残高と終了減価償却額のみをアップロードする必要がありますか？次に、元の原価と元の購入日をどのように表示できますか？

2. 2020年9月30日に原価と終了減価償却費をアップロードする必要がありますか？
それでも私は不明であり、親切に助言します。
ありがとう

 [応答](https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1527481626&rver=6.5.6508.0&wp=MBI&wreply=https:%2F%2Fcommunity.dynamics.com%2F%2Fdynamics%2FLoginRedirect.ashx%3FRedirectUrl%3D%2Fax%2Ff%2F33%2Ft%2F143295%2Freply%3FReplyToContentTypeID%3D0%26GroupToJoin%3D56&lc=1033&id=292217)

Measure
Measure