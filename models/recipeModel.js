const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est obligatoire'],
    match: [/^[a-zA-Z0-9\s]+$/, 'Le titre ne peut contenir que des lettres, des chiffres et des espaces']
  },
  ingredients: [{
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient',
      required: [true, 'L\'ingrédient est obligatoire']
    },
    quantity: {
      type: Number,
      required: [true, 'La quantité est obligatoire'],
      min: [0, 'La quantité ne peut pas être négative']
    }
  }],
  instructions: {
    type: String,
    required: [true, 'Les instructions sont obligatoires'],
    match: [/^[a-zA-Z0-9\s]+$/, 'Les instructions ne peuvent contenir que des lettres, des chiffres et des espaces']
  },
  preparationTime: {
    type: Number,
    required: [true, 'Le temps de préparation est obligatoire'],
    min: [0, 'Le temps de préparation ne peut pas être négatif']
  },
  cookingTime: {
    type: Number,
    required: [true, 'Le temps de cuisson est obligatoire'],
    min: [0, 'Le temps de cuisson ne peut pas être négatif']
  },
  difficulty: {
    type: String,
    required: [true, 'La difficulté est obligatoire'],
    enum: ['facile', 'moyen', 'difficile']
  },
  category: {
    type: String,
    required: [true, 'La catégorie est obligatoire'],
    enum: ['entrée', 'plat principal', 'dessert', 'apéritif', 'boisson']
  },
  image: {
    type: String,
    default: null
  }
},)

module.exports = mongoose.model('Recipe', recipeSchema);