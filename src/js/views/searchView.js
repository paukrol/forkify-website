class SearchView {
  #parentElement = document.querySelector(".search");
  #resultsElement = document.querySelector(".results");
  #query;
  #data;

  getQuery() {
    this.#query = this.#parentElement.querySelector(".search__field").value;
    // console.log(this.#query);
    this.#clearInput();

    return this.#query;
  }

  render(data) {
    this.#data = data;
    // console.log(this.#data);

    this.#clear();

    this.#data.forEach((element) => {
      const markup = this.#generateMarkup(element);
      this.#resultsElement.insertAdjacentHTML("afterbegin", markup);

      // console.log(element);
    });
  }

  #clearInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }

  #clear() {
    this.#resultsElement.innerHTML = "";
  }

  #generateMarkup(element) {
    return `
        <li class="preview">
          <a href="#${element.id}" class="preview__link">
              <figure class="preview__fig">
                  <img src="${element.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                  <h4 class="preview__title">
                      ${element.title}
                  </h4>
                  <p class="preview__publisher">${element.publisher}</p>
              </div>
          </a>
      </li>
        `;
  }

  addHandlerRender(handler) {
    this.#parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
