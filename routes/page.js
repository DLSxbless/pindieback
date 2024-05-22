const pagesRouter = require("express").Router();
const { checkCookiesJWT, checkAuth } = require("../middlewares/auth");
const { sendIndex, sendDashboard } = require("../controllers/auth");

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
pagesRouter.get("/", sendIndex);

module.exports = pagesRouter;