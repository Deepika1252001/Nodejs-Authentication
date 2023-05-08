// const mongoose = require('mongoose');

// const connection_url = 'mongodb+srv://admin:Iagd@jims1@cluster0.enhdn.mongodb.net/sponsortruckdb?retryWrites=true&w=majority';

// mongoose.connect(connection_url, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error connecting to mongodb'));

// db.once('open', () => {
//     console.log('Connected successfully to Mongodb');

// });

// module.exports = db;




const mongoose = require("mongoose");

// const env = require('./environment');

mongoose.connect('mongodb://127.0.0.1:27017/');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

db.once("open", () => {
  console.log("Connected to MongoDB successfully!");
});

module.exports = db;