const mongoose = require('mongoose');
const Schema   = mongoose.Schema;




const animalSchema = new Schema({

    type: String,
    name: String,
    goodBoy: Number

})



const Animal = mongoose.model('Animal', animalSchema);


module.exports = Animal;