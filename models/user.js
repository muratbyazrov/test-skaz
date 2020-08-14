// Подключим мангус, чтобы испольовать его метод Shema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  balance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('user', userSchema);
