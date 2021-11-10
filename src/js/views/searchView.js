class SearchView {
  #parentElement = document.querySelector(".search");

  #query;
  #data;

  getQuery() {
    this.#query = this.#parentElement.querySelector(".search__field").value;
    // console.log(this.#query);
    this.#clearInput();

    return this.#query;
  }

  #clearInput() {
    this.#parentElement.querySelector(".search__field").value = "";
  }

  addHandlerRender(handler) {
    this.#parentElement.addEventListener("submit", (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
