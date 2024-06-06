オリジナル
javascript:(function(){var title=window.prompt('Scrap "Scrapbox" to data.',document.title);if (!title) return;var lines=['','['+window.location.href+' '+document.title+']'];var quote=window.getSelection().toString();if (quote.trim()) lines=lines.concat(quote.split(/\n/g).map(function(line){return ''+line}));lines.push('');var body=encodeURIComponent(lines.join('\n'));window.open('https://scrapbox.io/data/'+encodeURIComponent(title.trim())+'?body=%27+body)})();


サイトから取得

javascript:(function(){var time = new Date();var ym = time.getFullYear().toString().substr(-2)+  ('0' + (time.getMonth() + 1)).slice(-2);var htagym = '#' + ym;var title= ym + '-' + ('0' + time.getDate()).slice(-2)+ ' ' + ('0' + time.getHours()).slice(-2)+ ':' + ('0' + time.getUTCMinutes()).slice(-2)+' '+document.title;if (!title) return;var lines=[htagym,'['+window.location.href+' '+document.title+']'];var quote=window.getSelection().toString();if (quote.trim()) lines=lines.concat(quote.split(/\n/g).map(function(line){return line}));lines.push('');var body=encodeURIComponent(lines.join('\n'));location.href='https://scrapbox.io/data/'+encodeURIComponent(title.trim())+'?body='+body})();


日付タグあり

javascript:(function(){var time = new Date();var ym = time.getFullYear().toString()+ '-' +   ('0' + (time.getMonth() + 1)).slice(-2)+ '-' +   ('0' + (time.getDate() )).slice(-2);var htagym = '#' + ym;var title= ym  ;if (!title) return;var lines=[htagym,'['+window.location.href+' '+document.title+']'];var quote=window.getSelection().toString();if (quote.trim()) lines=lines.concat(quote.split(/\n/g).map(function(line){return line}));lines.push('');var body=encodeURIComponent(lines.join('\n'));location.href='https://scrapbox.io/data/'+encodeURIComponent(title.trim())+'?body='+body})();

日付タグなし
javascript:(function(){var time = new Date();var ym = time.getFullYear().toString()+ '-' +   ('0' + (time.getMonth() + 1)).slice(-2)+ '-' +   ('0' + (time.getDate() )).slice(-2);var htagym =  ym;var title= ym  ;if (!title) return;var lines=[htagym,'['+window.location.href+' '+document.title+']'];var quote=window.getSelection().toString();if (quote.trim()) lines=lines.concat(quote.split(/\n/g).map(function(line){return line}));lines.push('');var body=encodeURIComponent(lines.join('\n'));location.href='https://scrapbox.io/data/'+encodeURIComponent(title.trim())+'?body='+body})();




javascript:(function(){var time = new Date();var ym = time.getFullYear().toString()+ '-' +   ('0' + (time.getMonth() + 1)).slice(-2)+ '-' +   ('0' + (time.getDate() )).slice(-2);var htagym =  ym;var title= ym  ;if (!title) return;var lines=[htagym,'['+window.location.href+' '+document.title+']'];var quote=window.getSelection().toString();if (quote.trim()) lines=lines.concat(quote.split(/\n/g).map(function(line){return line}));lines.push('');var body=encodeURIComponent(lines.join('\n'));;window.open('https://scrapbox.io/data/'+encodeURIComponent(title.trim())+'?body='+body})();


日付タグなしで使ってみるが、意味あるか？
本当は、タイトルを文字列で入れたい？　オリジナルと同じように
同じページで遷移してしまうが、新しいタブの方が、良いかもしれない
