const gamesRouter = require('./games')
const userRouter = require('./users')
const categoriesRouter = require('./categories')
const authRouter = require("./auth");


const apiRouter = require('express').Router()

apiRouter.use('/api', gamesRouter)
apiRouter.use('/api', userRouter)
apiRouter.use('/api', categoriesRouter)
apiRouter.use('/api', authRouter)

module.exports = apiRouter;
