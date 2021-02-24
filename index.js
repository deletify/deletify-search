/**
 * Author: Salman Waheed
 * Github: https://github.com/deletify/deletify-search
 */

class DeletifySearch {
  // hash (#) to make properties or methods private
  #searchInputId
  #resultsContainerId

  constructor({
    searchInputId=null,
    resultsContainerId=null,
    noResultsText='No Results found'
  }) {
    this.#searchInputId = searchInputId
    this.#resultsContainerId = resultsContainerId
    this.noResultsText = noResultsText
    this.search()
  }

  #getSearchInputId() {
    return document.getElementById(this.#searchInputId)
  }

  #getResultsContainerId() {
    return document.getElementById(this.#resultsContainerId)
  }

  #getElements() {
    return this.#getResultsContainerId().getElementsByTagName('li')
  }

  search() {
    this.#getSearchInputId().addEventListener('keyup', (e) => {
      for (let list of this.#getElements()) {
        let targetValue = e.target.value.toLowerCase()
        let matchValue = list.getElementsByTagName("a")[0].textContent.toLowerCase()
        // let matchValue = list.getElementsByTagName("a")[0].getAttribute('title').toLowerCase()
        if (matchValue.indexOf(targetValue) > -1) {
          list.style.display = ""
        } else {
          list.style.display = "none"
        }
      }
    })
  }
}
