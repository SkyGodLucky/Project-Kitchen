const recipeRouter = require('express').Router();
const recipeModel = require('../models/recipeModel');
const recipeController = require('../controllers/recipeController');

// Routes pour les recettes
recipeRouter.post('/recipe', recipeController.createRecipe);
recipeRouter.get('/recipe', recipeController.getAllRecipes);
recipeRouter.get('/recipe/search', recipeController.searchRecipes);
recipeRouter.get('/recipe/:id', recipeController.getRecipeById);
recipeRouter.put('/recipe/:id', recipeController.updateRecipe);
recipeRouter.delete('/recipe/:id', recipeController.deleteRecipe);

module.exports = recipeRouter; 