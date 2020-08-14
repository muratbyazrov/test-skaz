// подключили схему пользователя
const User = require('../models/user');

// обработчик, отдающий данные пользователя
module.exports.getUser = async (req, res) => {
  // находим пользователя
  await User.findById(req.params.id)
    .orFail(new Error('Нет пользователя с указанным ID'))
    .then((user) => {
      res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};

// обработчик создания нового пользователя
module.exports.createUser = (req, res) => {
  // берем данные из запроса
  const { name, balance } = req.path === '/user/create' ? req.query : req.body;
  User.create({ name, balance })
    .then((user) => user._id)
    .then((id) => res.send({ id }))
    .catch((err) => res.status(400).send({ message: err.message }));
};

// отдать всех пользователей
module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send({ data: users });
    })
    .catch((err) => res.status(500).send({ message: err.message }));
};
