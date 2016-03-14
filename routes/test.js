var express = require('express')
var router = express.Router()
var Todo = require('../db/db')
var Item = require('../db/items')
var validation = require('../src/validation.js')
var jquery = require('jquery')


router.get('/', function(req, res, next) {
  mongoose.model('Item').find({}, function (err, results) {

      res.render('index',{results:results})

  })
});

router.get('/create', function(req, res, next) {
  res.render('create');
});



router.post('/create', function(req, res, next) {
  mongoose.model('Item').create({
    name: req.body.number,
    badge: req.body.description
  })
res.redirect('/');
});

module.exports = router;
