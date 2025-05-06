const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom de l\'ingrédient est obligatoire'],
    match: [/^[a-zA-Z0-9\s]+$/, 'Le nom de l\'ingrédient ne peut contenir que des lettres, des chiffres et des espaces']
  },
  unit: {
    type: String,
    required: [true, 'L\'unité de mesure est obligatoire'],
    enum: ['g', 'kg', 'ml', 'l', 'c.à.s', 'c.à.c', 'unité', 'pincée', 'tasse']
  },
  category: {
    type: String,
    required: [true, 'La catégorie est obligatoire'],
    enum: ['légume', 'fruit', 'viande', 'poisson', 'féculent', 'produit laitier', 'épice', 'autre']
  }
},);

module.exports = mongoose.model('Ingredient', ingredientSchema); 