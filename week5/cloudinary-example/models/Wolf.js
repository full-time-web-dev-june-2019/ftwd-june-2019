const mongoose = require('mongoose');
const Schema   = mongoose.Schema;



const woflSchema = new Schema({

    name: String,
    hometown: String,
    image: String,
    bio: String


})


const Wolf = mongoose.model('Wolf', woflSchema);


module.exports = Wolf;