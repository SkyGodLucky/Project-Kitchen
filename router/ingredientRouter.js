const ingredientRouter = require('express').Router();
const ingredientModel = require('../models/ingredientModel');
const ingredientController = require('../controllers/ingredientController');

// Routes pour les ingrédients
ingredientRouter.post('/recipe/:recipeId/ingredient', ingredientController.createIngredient);
ingredientRouter.get('/recipe/:recipeId/ingredients', ingredientController.getIngredientsByRecipeId);
ingredientRouter.put('/:id', ingredientController.updateIngredient);
ingredientRouter.delete('/:id', ingredientController.deleteIngredient);

module.exports = ingredientRouter; 