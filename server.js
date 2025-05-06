const express = require('express');
const mongoose = require('mongoose');
const recipeRouter = require('./router/recipeRouter');
const ingredientRouter = require('./router/ingredientRouter');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(ingredientRouter);
app.use(recipeRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Serveur démarré sur le port ${PORT}`);
  }
});
mongoose.connect(process.env.MONGO_URI)

