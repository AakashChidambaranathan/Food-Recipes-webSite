const Recipes = require("../models/recipe");

// Get all recipes
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipes.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes" });
    }
};

// Get a recipe by ID
const getRecipe = async (req, res) => {
    try {
        const recipe = await Recipes.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipe" });
    }
};

// Add a new recipe
const addRecipe = async (req, res) => {
    const { title, ingredients, instructions, time, coverImage } = req.body;

    if (!title || !ingredients || !instructions || !coverImage) {
        return res.status(400).json({ message: "Required field can't be empty" });
    }

    try {
        const newRecipe = await Recipes.create({
            title,
            ingredients,
            instructions,
            time,
            coverImage
        });
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error creating recipe" });
    }
};

// Edit a recipe
const editRecipe = async (req, res) => {
    try {
        const recipe = await Recipes.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });

        const updatedRecipe = await Recipes.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error updating recipe" });
    }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipes.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe" });
    }
};

module.exports = {
    getRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe
};
