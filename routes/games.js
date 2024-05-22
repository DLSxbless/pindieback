const gamesRouter = require('express').Router();
const { findAllGames, createGame, findGameById, updateGame, deleteGame}  = require('../middlewares/games');
const { sendAllGames, sendGameCreated, sendGameUpdated, sendGameDeleted} = require('../controllers/games');
const {checkAuth} = require("../middlewares/auth")

gamesRouter.get('/games', findAllGames, sendAllGames);
gamesRouter.post('/games', findAllGames, checkAuth ,createGame, sendGameCreated);
gamesRouter.put('/games/:id', findGameById, checkAuth ,updateGame, sendGameUpdated)
gamesRouter.delete('/games/:id', checkAuth ,deleteGame,sendGameDeleted)

module.exports = gamesRouter;