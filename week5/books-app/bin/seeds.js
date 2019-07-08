const mongoose     = require('mongoose');
const Book         = require('../models/Book');


mongoose
  .connect('mongodb://localhost/books-app', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });
  


  const blah = [
    {
        title: "Harry Potter And The Sorcerer's Stone",
        author: "JK Rowling",
        description: 'Guy is magic and goes to magic school and his super organized female friend saves his a bunch of times',
        rating: 7
    },
    {
        title: "Zen and The Art Of Motorcycle MAintenance",
        author: "Robert Pirsig",
        description: 'Guy is crazy and rides a motorcycle with his son. And writes about being crazy.',
        rating: 7
    },

    {
        title: "Catcher In the Rye",
        author: "JD Salinger",
        description: 'Guy thinks everything is phony but is rich and privileged but miserable anyway.',
        rating: 9
    }
  ];


  Book.create(blah)
  .then(()=>{
    console.log('it worked')
  })
  .catch(()=>{
    console.log('it didnt work')
  })

