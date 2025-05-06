const recipeRouter = require('express').Router();
const recipeModel = require('../models/recipeModel');
const recipeController = require('../controllers/recipeController');

// Routes pour les recettes
recipeRouter.post('/', recipeController.createRecipe);
recipeRouter.get('/', recipeController.getAllRecipes);
recipeRouter.get('/search', recipeController.searchRecipes);
recipeRouter.get('/:id', recipeController.getRecipeById);
recipeRouter.put('/:id', recipeController.updateRecipe);
recipeRouter.delete('/:id', recipeController.deleteRecipe);

module.exports = recipeRouter; 