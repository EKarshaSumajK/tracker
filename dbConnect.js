const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://ekarshasumaj69:kvljvnlkeskos@cluster0.6yk5ysx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;



connection.on('connected', () =>
  console.log('Mongo DB Connection Successfull')
);
