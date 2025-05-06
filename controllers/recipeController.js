const Recipe = require('../models/recipeModel');

// Créer une nouvelle recette
exports.createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      title: req.body.title,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      preparationTime: req.body.preparationTime,
      difficulty: req.body.difficulty,
      category: req.body.category,
      image: req.body.image
    });
    await recipe.save();
    res.status(201).json({
      message: 'Recette créée avec succès',
      recipe: recipe
    });
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la création de la recette',
      error: error.message
    });
  }
};

// Obtenir toutes les recettes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la récupération des recettes',
      error: error.message
    });
  }
};

// Rechercher des recettes
exports.searchRecipes = async (req, res) => {
  try {
    const { title, category, ingredient } = req.query;
    let query = {};

    if (title) {
      query.title = { $regex: title, $options: 'i' };
    }
    if (category) {
      query.category = category;
    }
    if (ingredient) {
      query.ingredients = { $regex: ingredient, $options: 'i' };
    }

    const recipes = await Recipe.find(query);
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la recherche des recettes',
      error: error.message
    });
  }
};

// Obtenir une recette par ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la récupération de la recette',
      error: error.message
    });
  }
};

// Mettre à jour une recette
exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true
      }
    );
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({
      message: 'Erreur lors de la mise à jour de la recette',
      error: error.message
    });
  }
};

// Supprimer une recette
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: 'Recette supprimée avec succès',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erreur lors de la suppression de la recette',
      error: error.message
    });
  }
}; 