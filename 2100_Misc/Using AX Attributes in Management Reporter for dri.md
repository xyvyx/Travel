---
title: Using AX Attributes in Management Reporter for drilldown on steroids
updated: 2017-12-30 23:43:00Z
created: 2017-12-30 23:43:00Z
source: >-
  http://www.frxbuzz.com/management-reporter-ax-attributes-drilldown-on-steroids/
author: xyvyx10
tags:
  - SI
---

# Management Reporter - AX属性を使用してステロイドのドリルダウンを取得する方法

2013年8月22日  [(L)](http://www.frxbuzz.com/management-reporter-ax-attributes-drilldown-on-steroids/#comments)

## MRでAX属性を使用してトランザクションに関する多くのドリルダウン情報を取得する方法

**管理Reporter 2012 CU6の最新リリースには、AXに利用可能な新しい属性が数多くあります。 **
*[別名バージョン2.1.6041.36、累積更新6]*
**ところで、これらのすべての概念は、GPとSLにも当てはまります。 **別の属性リストが表示されます。
これらの属性は、ドリルダウン時にトランザクションレベルで多くの情報を提供します。それを設定する方法は次のとおりです。

### ATTR列型を使用する

![media_1377202352139.png](../_resources/348cfe4c6b2aaa852e93d99de85b8b09.png)
In the column definition, set **Column Type** to **ATTR**.

That allows you to drop down the box in **Book Code / Attribute Category** and take a look at the attributes available.

Here I’ve populated 6 different ATTR columns with different attributes, the last two being Vendor and Customer (two that will prove to be quite popular).

The attributes that are available are only the ones that are populated in the data mart. **So you may not see all of these.** But here is at least a partial list:

- Account Category
- Account Currency
- Account Type
- Acknowledgement Date
- Active From
- Active To
- Amount Type
- Budget Model
- Budget Plan Name
- Budget Plan Priority
- Budget Plan Scenario
- Budget Plan Workflow Status
- Budget Planning Stage
- Budget Type
- Budget Class
- Carry Forward
- Comment
- Consolidation Account
- Created By
- Currency Code
- Customer Name
- Document
- Document Date
- Document Number
- Document Status
- Entry Number
- Group Dimension
- Journal Category
- Journal Description
- Journal Entry Date
- Journal Name
- Journal Number
- Last Modified By
- Last Modified Date
- Offset Account
- Parent Budget Plan
- Payment Reference
- Posting Type
- PostingLayer
- Price
- Quantity
- Reason Code
- Reason Comment
- Return of Budget Funds
- Reversal
- Reversing Entry
- Source Document
- Status
- Suspended
- Totaling
- Transaction Date
- Transaction Description

By the way, **AutoFit** in the **Column Width **cell is a great idea so you don’t have to fool around and guess at widths.

GP users may be scratching their heads and wondering what’s up. You guys have had Vendor and Customer available in GP all along. But AX…not so much. I could explain, in a semi-convoluted way, why they haven’t been available in AX—it has to do with a normalized database—but I’d rather move on. Suffice to say that the data mart is what’s probably making this possible for AX users.

One more thing—you have to have a **DESC** and an **FD** column, or you won’t be able to save the column definition. **I usually put the attributes to the right of the last FD column because I think it looks better that way.**

### Over in the report definition, be sure to set the Detail Level correctly

![media_1377201836937.png](../_resources/65107de07109a888a4d10d9d00bec69b.png)

None of this will work if the **Detail Level** isn’t right. Setting the **Detail Level** to **Financial, Account, & Transaction** is what allows you to drill past the summary levels and into the transaction detail to get to the attributes once the report generates.

Oh yeah, one more thing—you might experiment with the **Shrink to page width** option under the **Settings** tab > **Other** button.

Enjoy the drilldown! Cheers—Jan