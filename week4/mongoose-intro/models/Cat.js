const mongoose = require('mongoose');

const Schema   = mongoose.Schema;

const catSchema = new Schema({
  name : {type: String, required: true, unique: true, minlength: 3, maxlength: 10},
  color: String,
  age  : Number
});


const TheCatObject = mongoose.model('Cat', catSchema);

module.exports = TheCatObject;