// const gamesRouter = require("express").Router();

// const {
//   findAllGames,
//   createGame,
//   findGameById,
//   updateGame,
//   deleteGame,
//   checkEmptyFields,
//   checkIfUsersAreSafe,
//   checkIfCategoriesAvaliable,
//   checkIsGameExists,
//   checkIsVoteRequest,
// } = require("../middlewares/games");
// const {
//   sendAllGames,
//   sendGameCreated,
//   sendGameById,
//   sendGameUpdated,
//   sendGameDeleted,
// } = require("../controllers/games");
// const { checkAuth } = require("../middlewares/auth");

// gamesRouter.get("/games", findAllGames, sendAllGames);

// gamesRouter.post(
//   "/games",
//   findAllGames,
//   checkIsGameExists,
//   checkIfCategoriesAvaliable,
//   checkEmptyFields,
//   checkAuth,
//   createGame,
//   sendGameCreated
// );

// gamesRouter.get("/games/:id", findGameById, sendGameById);

// gamesRouter.put(
//   "/games/:id",
//   findGameById,
//   checkIsVoteRequest,
//   checkIfUsersAreSafe,
//   checkIfCategoriesAvaliable,
//   checkEmptyFields,
//   checkAuth,
//   updateGame,
//   sendGameUpdated
// );

// gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

// module.exports = gamesRouter;
const gamesRouter = require("express").Router();
const {
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  findGameById,
  createGame,
  checkIfUsersAreSafe,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIsVoteRequest
} = require("../middlewares/games.js");
const {
  sendAllGames,
  sendGameById,
  sendGameCreated,
  sendGameUpdated,
  sendGameDeleted
} = require("../controllers/games.js");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  createGame,
  sendGameCreated
);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated
);
gamesRouter.delete("/games/:id", deleteGame, sendGameDeleted);
module.exports = gamesRouter;
