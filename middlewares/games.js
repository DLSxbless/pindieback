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


module.exports = { findAllGames, createGame, findGameById, updateGame, deleteGame }