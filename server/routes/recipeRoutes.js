const express = require("express");
const router = express.Router();
// const app = express();
const recipeController = require("../controllers/recipeController");

// app routes

router.get("/", recipeController.homepage);
router.get("/categories_2", recipeController.exploreCategories);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.get("/categories_2/:id", recipeController.exploreCategoriesByID);
router.post("/search", recipeController.searchRecipe);
router.get("/explore-latest", recipeController.exploreLatest);
router.get("/explore-random", recipeController.exploreRandom);
router.get("/submit-recipe", recipeController.submitRecipe);

// app.get("/", recipeController.homepage);
// app.get("/categories_2", recipeController.exploreCategories);
// app.get("/recipe/:id", recipeController.exploreRecipe);
// app.get("/recipe/:id", recipeController.exploreRecipe);
// app.get("/categories_2/:id", recipeController.exploreCategoriesByID);

module.exports = router;
