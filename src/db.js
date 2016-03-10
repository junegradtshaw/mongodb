// var MongoClient = require('mongodb').MongoClient
//
// var URL = 'mongodb://localhost:27017/db'
// MongoClient.connect(URL, function(err, db) {
//  if (err) return
//
//  var collection = db.collection('test')
//  collection.insert({name: 'taco', tasty: true}, function(err, result) {
//    collection.find({name: 'taco'}).toArray(function(err, docs) {
//      console.log(docs[0])
//      db.close()
//    })
//  })
// })
//
// var MongoClient = require('mongodb').MongoClient
//
// var state = {
//  db: null,
// }
//
// exports.connect = function(url, done) {
//  if (state.db) return done()
//
//  MongoClient.connect(url, function(err, db) {
//    if (err) return done(err)
//    state.db = db
//    done()
//  })
// }
//
// exports.get = function() {
//  return state.db
// }
//
// exports.close = function(done) {
//  if (state.db) {
//    state.db.close(function(err, result) {
//      state.db = null
//      state.mode = null
//      done(err)
//    })
//  }
// }

// module.exports =
// {
//   test: function() {
//     return db.test.find()
//   }
//
//   Authors: function() {
//   return knex('authors');
// },
//
//   Books: function() {
//   return knex('books');
// },
//
//   BookContributors: function() {
//   return knex('book_contributors');
// },
//
//   Users: function() {
//   return knex('users');
// },
//
//   insertAuthor: function (author) {
//    return(this.Authors().insert(author).returning('id'));
// },
//
//   author: function(id) {
//   return(this.Authors().where('id', id))
// },
//
//  updateAuthor: function(id, author) {
//   return(this.Authors().where('id', id).first().update(author));
// },
//
//   deleteAuthor: function(id) {
//   return(this.Authors().where('id', id).del())
// },
//
//   insertBook: function(book) {
//   return(this.Books().insert(book).returning('id'));
// },
//
//   book: function(id) {
//   return(this.Books().where('id', id))
// },
//
//   updateBook: function(id, book) {
//   return(this.Books().where('id', id).first().update(book));
// },
//
//   deleteBook: function(id) {
//   return(this.Books().where('id', id).del());
// },
//
//   insertBookContributor: function(bookContributor) {
//     return(this.BookContributors().insert(bookContributor).returning('id'));
// },
//
//   bookContributor: function (id) {
//   return(this.BookContributors().where('id', id))
// },
//
//   updateBookContributor: function(id, bookContributor) {
//   return(this.BookContributors().where('id', id).first().update(bookContributor));
// },
//
//   deleteBookContributor: function(id) {
//   return(this.BookContributors().where('id', id).del());
// },
//
//   insertUser: function (user) {
//     return(this.Users().insert(user).returning('id'));
// },
//
//   user: function(id) {
//     return(this.Users().where('id', id))
// },
//
//   updateUser: function(id, user) {
//     return(this.Users().where('id', id).first().update(user));
// },
//
//   deleteUser: function(id) {
//     return(this.Users().where('id', id).del())
// },
//
//   userByName: function(user_name) {
//     return(this.Users().where('user_name', user_name));
// },
//
//   authorDefaults: function(id) {
//     return({'first_name': "", 'last_name': "", 'biography': "", 'portrait_url': ""});
// },
//
//   bookDefaults: function() {
//     return({'title': "", 'genre': "", 'portrait_url': "", 'description': ""});
// },
//
//   bookContributorsByBook: function(book_id) {
//     return(this.BookContributors().where('book_id', book_id));
// },
//
//   bookContributorsByAuthor: function(author_id) {
//     return(this.BookContributors().where('author_id', author_id));
// },
// };
