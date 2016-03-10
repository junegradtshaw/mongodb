// var mongoose = require( 'mongoose' );
var mongoose = require('./db/db')
var Schema   = mongoose.Schema;
var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

var Todo = mongoose.model( 'todos', Todo)
console.log('MONGOOSE', mongoose.connection);

// var User = db.model('User');
//
// var u = new User();
// u.name = 'Foo';
// u.save();

Todo.find({user_id:"June"}, function (err,docs) {
    console.log(docs);
});


module.exports = Todo;
