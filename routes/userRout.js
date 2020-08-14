// для навешивания обработчика на приложение
const userRout = require('express').Router();

// Подключили обработчик из контроллера
const {
  getUser, getAllUsers, createUser,
} = require('../controllers/userController');

// запрос приходит сюда и включается getUser
userRout.get('/user/:id', getUser);
userRout.get('/users', getAllUsers);
userRout.post('/user', createUser);
userRout.post('/user/create', createUser);

// Экспортируем рут - он потом используется в app.js
module.exports = { userRout };
