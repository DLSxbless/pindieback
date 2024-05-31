
const usersRouter = require('express').Router();


const {findAllUsers, createUser, findUserById, updateUser, deleteUser, checkEmptyNameAndEmail, checkIsUserExists, checkEmptyNameAndEmailAndPassword, hashPassword} = require('../middlewares/users');
const {sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe} = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');


usersRouter.get('/users', findAllUsers, sendAllUsers);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
); 
 usersRouter.get('/users/:id', findUserById, sendUserById);

 usersRouter.get("/me", checkAuth, sendMe); 

 usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  ); 

  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;