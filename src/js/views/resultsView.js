import View from "./View.js";
import icons from "../../img/icons.svg"; // Parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector(".results");
  _errorMessage = "No recipes found for your query! Please try again ;)";
  _message = "";

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join("");
  }

  _generateMarkupPreview(element) {
    return `
    <li class="preview">
      <a href="#${element.id}" class="preview__link">
          <figure class="preview__fig">
              <img src="${element.image}" alt="${element.title}" />
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
}

export default new ResultsView();
