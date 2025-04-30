const express = require('express');
const router = express.Router();
const {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe
} = require('../controller/recipe');

// Routes
router.get('/', getRecipes);         // Get all recipes
router.get('/:id', getRecipe);       // Get a recipe by ID
router.post('/', addRecipe);         // Add a new recipe
router.put('/:id', editRecipe);      // Edit a recipe by ID
router.delete('/:id', deleteRecipe); // Delete a recipe by ID

module.exports = router;
