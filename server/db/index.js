const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
      const connectionInstance = await mongoose.connect(process.env.MONGO_URI,
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

