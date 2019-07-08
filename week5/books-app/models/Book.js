const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const bookSchema = new Schema({
    title: String,
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    description: String,
    rating: Number
})

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;