var mongoose = require('mongoose');
var itemSchema = new mongoose.Schema({
  num: Number,
  description: String
});
mongoose.model('Item', itemSchema);
mongoose.model('Item', itemSchema);
