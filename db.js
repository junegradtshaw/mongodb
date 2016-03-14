// var mongoose = require( 'mongoose' );
var mongoose = require('./db/db')
var Schema   = mongoose.Schema;
var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : String
});

var TodoModel = mongoose.model('todo', Todo)
console.log('MONGOOSE', mongoose.connection);

// var User = db.model('User');
//
// var u = new User();
// u.name = 'Foo';
// u.save();
// Creating one user.
var johndoe = new Todo ({
  user_id:"23", content: "23content", updated_at : "23date"});

// Saving it to the database.
johndoe.save(function (err, results) {if (err) console.log ('Error on save!')
else {
  console.log('Save success!');
}});

TodoModel.find().exec( function (err,docs) {
  console.log('db.js err: ', err);
    console.log("db.js docs:", docs);
});


module.exports = TodoModel;
