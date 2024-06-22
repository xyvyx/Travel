javascript:(function() {
  function extractProductInfo() {
    const productTitleElement = document.querySelector('#productTitle');
    const productTitle = productTitleElement ? productTitleElement.textContent.trim() : '';
    const productImageElement = document.querySelector('#imgTagWrapperId img');
    const productImageURL = productImageElement ? productImageElement.src : '';
    const authorInfoElement = document.querySelector('.author .a-link-normal');
    const authorInfo = authorInfoElement ? authorInfoElement.textContent.trim() : '';
    return { title: productTitle, imageURL: productImageURL, author: authorInfo };
  }
  function sendToScrapbox(productInfo) {
    const lines = `[${productInfo.title}]\nAuthor: ${productInfo.author}\n[${productInfo.imageURL}]`;
    var body = encodeURIComponent(lines.trim());
    window.open('https://scrapbox.io/data/' + encodeURIComponent(productInfo.title.trim()) + '?body=' + body);
  }
  const productInfo = extractProductInfo();
  sendToScrapbox(productInfo);
})();