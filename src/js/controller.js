// require("babel-core/register");
// require("babel-polyfill"); // ---> tak robiło się dawniej

import * as model from "./model.js";
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

// console.log(model);

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    await model.loadRecipe(id);

    // 2) Rendering Recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // console.log(err);
    // recipeView.error(`${err} :<`);
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    resultsView.renderSpinner();
    console.log(resultsView);

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearch(query);

    // 3) Render results
    // console.log(model.state.search.query);
    // console.log(model.state.search.result);

    resultsView.render(model.state.search.result);
  } catch (err) {
    console.log(err);
  }
};

// [("hashchange", "load")].forEach((ev) =>
//   window.addEventListener(ev, controlRecipes)
// );
// window.addEventListener("hashchange", controlRecipes);
// window.addEventListener("load", controlRecipes);

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerRender(controlSearchResult);
};
init();
