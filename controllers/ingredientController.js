const ingredientModel = require('../models/ingredientModel');
const recipeModel = require('../models/recipeModel');

// Créer un nouvel ingrédient
exports.createIngredient = async (req, res) => {
  try {
    req.body.recipe = req.params.recipeId;
    const newIngredient = new ingredientModel(req.body);
    await newIngredient.save();
    await recipeModel.findByIdAndUpdate(req.params.recipeId, { $push: { ingredients: newIngredient._id } });
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la création de l\'ingrédient',
      error: error.message
    });
  }
};

// Obtenir tous les ingrédients d'une recette
exports.getIngredientsByRecipeId = async (req, res) => {
  try {
    const ingredientsRecipe = await recipeModel.findById(req.params.recipeId).populate('ingredients');
    res.status(200).json(ingredientsRecipe);
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la récupération des ingrédients',
      error: error.message
    });
  }
};

// Mettre à jour un ingrédient
exports.updateIngredient = async (req, res) => {
  try {
    const ingredient = await ingredientModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true
      }
    );
    res.status(200).json(ingredient);
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la mise à jour de l\'ingrédient',
      error: error.message
    });
  }
};

// Supprimer un ingrédient
exports.deleteIngredient = async (req, res) => {
  try {
    const ingredient = await ingredientModel.findByIdAndDelete(req.params.id);
    await recipeModel.findByIdAndUpdate(req.params.recipeId, { $pull: { ingredients: req.params.id } });
    res.status(200).json({
      message: 'Ingrédient supprimé avec succès'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la suppression de l\'ingrédient',
      error: error.message
    });
  }
}; 