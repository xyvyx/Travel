---
title: 手書き風の図形を描画できるライブラリ「Rough.js」
updated: 2018-03-17 10:56:23Z
created: 2018-03-17 10:56:23Z
source: https://gigazine.net/news/20180317-rough-js/
author: xyvyx10
tags:
  - Web
---

# 手書き風の図形を描画できるライブラリ「Rough.js」

[![00_m.png](../_resources/00_m.png)](https://i.gzn.jp/img/2018/03/17/rough-js/00.png)

「**Rough.js**」は**[JavaScript](https://ja.wikipedia.org/wiki/JavaScript)**で作られたライブラリで手描き感あふれる図形を描く事ができます。「直線」や「多角形」「円」などを描画できることはもちろん、**[SVG](https://ja.wikipedia.org/wiki/Scalable_Vector_Graphics)**のPath要素の記述も可能なため、複雑な図形を描くこともできるとのことです。

**Rough.js**
**http://roughjs.com/**

Rough.jsを使って、たとえば正方形を描くコードは以下の通り。

```
const rc = rough.canvas(document.getElementById('canvas'));
rc.rectangle(10, 10, 200, 200);
```

線が少しゆがんだ形となり味のある正方形になります。
![01.png](../_resources/01.png)
また以下のようなコードを書いて……

```
rc.circle(80, 120, 50);
rc.ellipse(300, 100, 150, 80);
rc.line(80, 120, 300, 100);
```

以下の「円」「直線」「楕円」のように複数の図形を描いて、重ね合わせることも可能です。

[![02_m.png](../_resources/02_m.png)](https://i.gzn.jp/img/2018/03/17/rough-js/02.png)

正方形や円に色を塗るときは、以下のようなコードを書きます。

```
rc.circle(50, 50, 80, { fill: 'red' });
rc.rectangle(120, 15, 80, 80, { fill: 'red' });
rc.circle(50, 150, 80, {
  fill: "rgb(10,150,10)",
  fillWeight: 3
});
rc.rectangle(220, 15, 80, 80, {
  fill: 'red',
  hachureAngle: 60,
  hachureGap: 8
});
rc.rectangle(120, 105, 80, 80, {
  fill: 'rgba(255,0,200,0.2)',
  fillStyle: 'solid'
});
```

すると、手で塗ったかのように斜線で色を塗ることができ、斜線の太さや方向を変えることも可能です。また、べた塗りにも対応しています。

[![03_m.png](../_resources/03_m.png)](https://i.gzn.jp/img/2018/03/17/rough-js/03.png)

また、以下のコードのようにSVGのPath要素の記述にも対応しているので……

```
rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', { fill: 'green' });
rc.path('M230 80 A 45 45, 0, 1, 0, 275 125 L 275 80 Z', { fill: 'purple' });
rc.path('M80 230 A 45 45, 0, 0, 1, 125 275 L 125 230 Z', { fill: 'red' });
rc.path('M230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z', { fill: 'blue' });
```

複雑な図形を描くことも可能。
![04.png](../_resources/04.png)
例えば、アメリカの地図を描くと以下のような感じになり、どこか温かみのある図形に感じることができます。

[![05_m.png](../_resources/05_m.png)](https://i.gzn.jp/img/2018/03/17/rough-js/05.png)