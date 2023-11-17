const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;



connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);
