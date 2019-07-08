const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');



router.get('/books', (req, res, next)=>{    
    Book.find()
    .then((allTheBooks)=>{
        res.render('bunchaBooks', {books: allTheBooks})
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
})

router.get('/books/details/:idOfBook', (req, res, next)=>{
    Book.findById(req.params.idOfBook)
    .then((oneSingleBook)=>{
        res.render('bookDetails', {theBook:oneSingleBook})
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/books/new', (req, res, next)=>{
    res.render('newBook');
})

router.post('/books/create-new-book', (req, res, next)=>{
    const {theTitle, theDescription, theAuthor, theRating} = req.body;
    // this is like saying
    // const title = req.body.title;
    // const descrtiption = req.body.descrition;
    // etc.
    let newBook = {title: theTitle, description: theDescription,
         author: theAuthor, rating: theRating }

    Book.create(newBook)
    .then(()=>{
        res.redirect('/books')
    })
    .catch((err)=>{
        next(err);
    })
})

router.get('/books/edit/:id', (req, res, next)=>{
    Book.findById(req.params.id)
    .then((bookFromDb)=>{
            res.render('editBook', {book: bookFromDb})
    })
    .catch((err)=>{
        next(err);
    })
})


router.post('/books/update/:bookID', (req, res, next)=>{
    let theID = req.params.bookID;
    Book.findByIdAndUpdate(theID, req.body)
    .then((book)=>{
        res.redirect('/books/details/'+theID)
    })
    .catch((err)=>{
        next(err);
    })
})


router.post('/books/delete/:id', (req, res, next)=>{

    Book.findByIdAndRemove(req.params.id)
    .then(()=>{
        res.redirect('/books');
    })
    .catch((err)=>{
        next(err);
    })


})








module.exports = router;
