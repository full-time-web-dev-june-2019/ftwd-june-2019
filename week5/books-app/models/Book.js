const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: String,
    author: String,
    description: String,
    rating: Number
})

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;