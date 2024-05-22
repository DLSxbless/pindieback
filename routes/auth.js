const authRouter = require("express").Router();
const { login } = require("../controllers/auth");

authRouter.post("/auth/login", login);


module.exports = authRouter;