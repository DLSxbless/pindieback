const users = require('../models/user');
const bcrypt = require("bcryptjs");
const findAllUsers = async (req, res, next) => {
    console.log('GET /users')
    req.usersArray = await users.find({});
    next()
}

const findUserById = async (req, res, next) => {
    console.log("GET /users/:id");
    try {
        req.category = await users.findById(req.params.id);
        next();
    }
    catch (err) {
        res.status(404).send({ message: "Users not found" })
    }
}

const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        req.user = await users.create(req.body);
        next();
    }
    catch (err) {
        res.status(400).send({ message: "Error creating user" })
    }
}

const updateUser = async (req, res, next) => {
    console.log("PUT /users/:id");
    try {
        req.user = await users.findByIdAndUpdate(req.params.id, req.body)
        next()
    }

    catch (err) {
        res.status(404).send({ message: "Error with update user" })
    }
}


const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
        res.status(400).send({ message: "Введите имя и email" });
    } else {
        next();
    }
};


const deleteUser = async (req, res, next) => {
    console.log("DELETE /users/:id");
    try {
        req.user = await users.findByIdAndDelete(req.params.id);
        next();
    } catch (error) {
        res.status(400).send({ message: "Error deleting user" });
    }
};


const hashPassword = async(req, res, next) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt)
        req.body.password =  hash;
        next();
    }

    catch (err) {
        res.status(400).send({ message: "Ошибка хеширования пароля" })
    }
}


module.exports = { findAllUsers, findUserById, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword }
