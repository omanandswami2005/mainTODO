const mongoose = require('mongoose');


const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(
        `mongodb://localhost:27017/todo?retryWrites=true&w=majority`
      );
      console.log(
        'MongoDB connected...with host:',
        connectionInstance.connection.host
      );
    } catch (error) {
      console.error('Database connection error:', error);
      process.exit(1);
    }
  };

  module.exports = connectDB;

