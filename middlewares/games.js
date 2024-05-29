const { message } = require('statuses');
const games = require('../models/game');

const findAllGames = async (req, res, next) => {
    console.log('GET /games')
    req.gamesArray = await games.find({})
        .populate('categories')
        .populate({
            path: "users",
            select: "-password"
        })

    next();
}

const createGame = async (req, res, next) => {
    console.log("POST /games");
    try {
        req.game = await games.create(req.body);
        next();
    }
    catch (err) {
        res.status(400).send({ message: "Error creating game" })
    }
}


const findGameById = async (req, res, next) => {
    console.log("GET /game/:id");
    try {
        req.game = await games.findById(req.params.id)
            .populate("categories")
            .populate("users");
        next();
    }
    catch (err) {
        res.status(404).send({ message: "Game not found" })
    }
}

const updateGame = async (req, res, next) => {
    try {
        req.game = await games.findByIdAndUpdate(req.params.id, req.body)
        next()
    }

    catch (err) {
        res.status(404).send({ message: "Error with update game" })
    }
}


const deleteGame = async (req, res, next) => {
    try {
        req.game = await games.findByIdAndDelete(req.params.id)
        next()
    }

    catch (err) {
        res.status(404).send({ message: "Error with delete game" })
    }
}

const checkIsGameExists = async (req, res, next) => {
    console.log(req.gamesArray);
    const isInArray = req.gamesArray.find((game) => {
        return req.body.title === game.title;

    });

    console.log(isInArray);
    if (isInArray) {
        res.status(400).send({ message: "Игра с таким названием уже существует" });

    } else {
        next();

    };
}

const checkEmptyFields = async (req, res, next) => {
    if (req.isVoteRequest) {
        next();
        return;

    }
    if (
        !req.body.title ||
        !req.body.description ||
        !req.body.image ||
        !req.body.link ||
        !req.body.developer
    ) {
        res.status(400).send({ message: "Заполните все поля" })

    } else {
        next();

    }
};
const checkIfCategoriesAvaliable = async (req, res, next) => {
    if (req.isVoteRequest) {
        next();
        return;
    }
    if (!req.body.categories || req.body.categories.length === 0) {
        res.headers = { "Content-Type": "application/json" };
        res.status(400).send({ message: "Выберите хотя бы одно категорию" });

    } else {
        next();

    }
};

const checkIfUserAreSafe = async (req, res, next) => {
    console.log(req.body.users);

    if (!req.body.users) {
        next();
        return;
    }
    if (req.body.users.length - 1 === req.game.users.length) {
        next();
        return;
    } else {
        res.status(400).send({ message: "Нельзя удалить пользователей или добавлять больше одного пользователя" });


    }
};

module.exports = { findAllGames, createGame, findGameById, updateGame, deleteGame, checkIsGameExists, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUserAreSafe }