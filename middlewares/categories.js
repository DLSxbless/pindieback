const categories = require('../models/category');

const findAllCategories = async (req, res, next) => {
    console.log('GET /categories')
    req.categoriesArray = await categories.find({});
    next()
}

const findCategoryById = async (req, res, next) => {
    console.log("GET /categories/:id");
    try {
        req.category = await categories.findById(req.params.id);
        next();
    }
    catch (err) {
        res.status(404).send({ message: "Category not found" })
    }
}

const createCategory = async (req, res, next) => {
    console.log("POST /categories");
    try {
        req.game = await categories.create(req.body);
        next();
    }
    catch (err) {
        res.status(400).send({ message: "Error creating category" })
    }
}

const updateCategory = async (req, res, next) => {
    console.log("PUT /categories/:id");
    try {
        req.category = await categories.findByIdAndUpdate(req.params.id, req.body)
        next()
    }

    catch (err) {
        res.status(404).send({ message: "Error with update category" })
    }
}


const checkEmptyName = async (req, res, next) => {
    if (!req.body.name) {
        res.status(400).send({ message: "Введите название категории" });
    } else {
        next();
    }
};


const deleteCategory = async (req, res, next) => {
    console.log("DELETE /categories/:id");
    try {
        req.category = await categories.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error deleting category" });
    }
};


module.exports = { findAllCategories, findCategoryById, createCategory, updateCategory, checkEmptyName, deleteCategory }
