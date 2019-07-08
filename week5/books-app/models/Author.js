const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authorSchema = new Schema({
    name: String,
    birthday: String,
    birthplace: String,
    image: String
})


const Author = mongoose.model('Author', authorSchema);

module.exports = Author;