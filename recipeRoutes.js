const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController") ;
// define the routes and map them to controller actions 
router.post("../",recipeController.createRecipe);
 router.get("../",recipeController.getAllRecipes);
// router.get("/:id",recipeController.getRecipeByID);
// router.put("/:id",recipeController.updateRecipe);
// router.delete("/:id",recipeController.deleteeRecipe);
module.exports = router; 

