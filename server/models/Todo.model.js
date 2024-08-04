
const mongoose = require('mongoose');

// Todo schema and model
const todoSchema = new mongoose.Schema({
  text: String,
});

module.exports = mongoose.model('Todo', todoSchema);

