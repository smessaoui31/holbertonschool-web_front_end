function createElement(data) {
  const p = document.createElement('p');
  p.textContent = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const pages = data.query.pages;
      const pageId = Object.keys(pages)[0];
      callback(pages[pageId].extract);
    }
  };
  xhr.send();
}

queryWikipedia(createElement);
