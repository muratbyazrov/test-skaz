// Подключили библиотеку экспресс
const express = require('express');
// mongoos помогает подружить JS с документами в MongoDB
const mongoose = require('mongoose');
// чтобы читать данные .env
require('dotenv').config();
// Этот модуль объединяет приходящие пакеты из запроса. Они доступны так: const { body } = req;
const bodyParser = require('body-parser');

// Подключим рут
const { userRout } = require('./routes/userRout');
// создали приложение на экспресс
const app = express();
// Достали из перем. окружения порт (для упрощения в process.env стоит этот же адрес)
const { PORT = 3000, DATA_BASE = 'mongodb://localhost:27017/test-skaz' } = process.env;

// Собрали приходящие пакеты в json
app.use(bodyParser.json());

// Подключили приложениея рутам, а рут обращается к контроллеру
app.use('/', userRout);

// Для всех неправильных запросов к апи
app.all('/*', (req, res) => {
  res.status(404).send({ message: 'Упс, Запрашиваемый ресурс не найден' });
});

// подключили мангус
mongoose.connect(DATA_BASE, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => { console.log('БД подключена!'); })
  .catch(() => { console.log('БД не подключена(('); });

// Наше приложение будеn слушать запросы, которые приходят на PORT
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
