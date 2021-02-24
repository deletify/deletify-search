# deletify-search

quick and easy javascript search

[demo](../demo/index.html)

```html
<!-- index.html -->
<input id="search-input" type="search" placeholder="Search..." autocomplete="off">
<ul id="results-container">
  <li><a href="#">Adele</a></li>
  <li><a href="#">Agnes</a></li>
  <li><a href="#">Billy</a></li>
  <li><a href="#">Bob</a></li>
  <li><a href="#">Calvin</a></li>
  <li><a href="#">Christina</a></li>
  <li><a href="#">Cindy</a></li>
</ul>
```

```js
// main.js
const deletify_search = new DeletifySearch({
  searchInputId: 'search-input',
  resultsContainerId: 'results-container'
})
```
