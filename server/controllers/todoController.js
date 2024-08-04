const Todo = require('../models/Todo.model');

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createTodo = async (req, res) => {
    const text = req.body.text;
  const newTodo = new Todo({
    text: text,
  });

  try {
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
    
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
};
