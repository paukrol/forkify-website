// require("babel-core/register");
// require("babel-polyfill"); ---> tak robiło się dawniej

// require("fractional").Fraction; lub:
import Fraction from "fractional";

import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

// console.log(model);

const recipeContainer = document.querySelector(".recipe");

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

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

// [("hashchange", "load")].forEach((ev) =>
//   window.addEventListener(ev, controlRecipes)
// );
// window.addEventListener("hashchange", controlRecipes);
// window.addEventListener("load", controlRecipes);

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
