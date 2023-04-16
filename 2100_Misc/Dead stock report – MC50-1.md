---
title: Dead stock report – MC50
updated: 2017-05-06 13:11:58Z
created: 2017-05-06 13:11:58Z
source: https://sapmentalnotes.wordpress.com/2008/11/20/dead-stock-report-mc50/
tags:
  - SI
---

# Dead stock report – MC50

[10 Replies](https://sapmentalnotes.wordpress.com/2008/11/20/dead-stock-report-mc50/#comments)

The dead stock report often leads to misinterpretations. Hence a little guidance on the dead stock report.

The dead stock report analyses what part of stock is never touched in a defined period of time. If you look at the below graph you will see stock level through time.

[![Stock level through time](../_resources/graph-300x180.jpg)](https://sapmentalnotes.files.wordpress.com/2008/11/graph.jpg)

Stock level through time

In analyzing stock movement between period 1 and 5, stock never drops below 30. 30 is your dead stock. It’s the part of stock that was never touched. Now what does this tell you? That’s not easy to say:

- If your setting for safety stock is 10, you can safely assume you’re overbuying. This may be due to lot size that forces the procurement planner to procure more than strictly necessary.
- If your safety stock is 50, you know that you used some of your safety stock. This is not necessarily a bad thing since you may have run into vendor delivery problems.
- If your safety stock happens to be 30 and stock never dips below this level for a whole year, then your safety stock may be set too high. The value of safety stock is to cover unexpected rise in demand or problems with supply. If this “never” happens there is no need for safety stock.
- Ask yourself the question, how many days’ supply does this dead stock quantity represent. This will give you a good idea on how to judge the dead stock. 2 days can put the service level under pressure while 40 days may make your treasury department shiver.

The report is very useful but does not offer the full picture of your stock position. Always use this report in combination with other reports.

The report takes into account movement types and the consumption indicator in the movement type. If the consumption indicator in the movement type is set then the report records a consumption. You can check this indicator in customizing transaction OMJJ. This way you can also in/exclude movement types. Be careful as this will also affect the way forecasts are calculated and how other reports are built. Also: don’t change standard movement types, but create custom ones and include these in your processes.

[![Consumption indicator movement type 641](../_resources/omjj-300x217.jpg)](https://sapmentalnotes.files.wordpress.com/2008/11/omjj.jpg)

OMJJ - Consumption indicator movement type 641
Advertisements

This entry was posted in [MM](https://sapmentalnotes.wordpress.com/category/mm/) and tagged [MM](https://sapmentalnotes.wordpress.com/tag/mm/), [reporting](https://sapmentalnotes.wordpress.com/tag/reporting/) on [November 20, 2008](https://sapmentalnotes.wordpress.com/2008/11/20/dead-stock-report-mc50/) by [mensenjh](https://sapmentalnotes.wordpress.com/author/mensenjh/).