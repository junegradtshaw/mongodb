require('dotenv').load();
var mongoose = require('mongoose');
var environment = process.env.NODE_ENV || 'development';
var config = require('../mongofile.js')[environment];
mongoose.connect('mongodb://localhost/todo');
var db = mongoose.connection;
console.log('***connection***', db);
// db.on('error', console.log('error'));
db.once('open', function callback (results) {
  console.log('open results: ', results);
  console.log("h");
});

module.exports = mongoose;
// db.find({}, function(err, results) {
//   console.log('results from db find: ', results);
// })

// mongoose.connect('mongodb://localhost/data/db');
