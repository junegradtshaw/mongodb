var express = require('express')
var router = express.Router()
var validation = require('../src/validation.js')
var jquery = require('jquery')
var mongoose = require('mongoose')


router.get('/', function(req, res, next) {
  mongoose.model('Item').find({}, function (err, results) {
    console.log('****results: ', results);
    console.log('err: ', err);
      res.render('index',{results:results})

  })
});

router.get('/create', function(req, res, next) {
  console.log('in the create form');
  res.render('create');
});



router.post('/create', function(req, res, next) {
  console.log('req.body', req.body);
  mongoose.model('Item').create({
    num: req.body.num,
    description: req.body.description
  })
res.redirect('/');
});

module.exports = router;
