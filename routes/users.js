const userRouter = require('express').Router();
const { findAllUsers, createUser, updateUser, checkEmptyNameAndEmail, deleteUser, hashPassword } = require('../middlewares/users')
const { sendAllUsers, sendUserCreated, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users');
const {checkAuth} = require("../middlewares/auth");

userRouter.get('/users', findAllUsers, sendAllUsers);
userRouter.post('/users', findAllUsers, hashPassword, checkAuth ,createUser, sendUserCreated);
userRouter.put('/users/:id', checkEmptyNameAndEmail, checkAuth ,updateUser, sendUserUpdated)
userRouter.delete("/users/:id", checkAuth ,deleteUser, sendUserDeleted);
userRouter.get("./me", checkAuth, sendMe)
module.exports = userRouter;