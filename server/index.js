const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const todoRoutes = require('./routes/todoRoutes');

const Todo = require('./models/Todo.model');

const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());



  connectDB();


// Routes
app.use('/api', todoRoutes);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
