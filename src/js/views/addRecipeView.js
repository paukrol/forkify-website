import icons from "../../img/icons.svg"; // Parcel 2
import View from "./View.js";

class AddRecipeView extends View {
  _parentElement = document.querySelector(".upload");
  _message = "Recipe was successfully uploaded :)";

  _btnOpen = document.querySelector(".nav__btn--add-recipe");
  _btnClose = document.querySelector(".btn--close-modal");
  _window = document.querySelector(".add-recipe-window");
  _overlay = document.querySelector(".overlay");

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  _generateMarkup() {}

  toggleWindow() {
    this._window.classList.toggle("hidden");
    this._overlay.classList.toggle("hidden");
  }

  _addHandlerShowWindow = function () {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  };

  _addHandlerHideWindow = function () {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  };

  addHandlerUpload = function (handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);

      handler(data);
    });
  };
}

export default new AddRecipeView();
