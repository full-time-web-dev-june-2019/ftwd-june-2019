const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');




/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.get('/list-of-books', (req, res, next)=>{
  Book.find()
  .then((theThingWeGetBackFromDB)=>{
    res.render('books-list',{allTheBooks:
               theThingWeGetBackFromDB})
  })
  .catch((err)=>{
    next(err);
  })
})


router.get('/books/:blah', (req, res, next)=>{

  let theID = req.params.blah;
  Book.findById(theID)
  .then((oneSingleBook)=>{

    res.render('bookDetails', {theBook:
                       oneSingleBook})

  })
  .catch((err)=>{
    next(err);
  })

})










module.exports = router;
