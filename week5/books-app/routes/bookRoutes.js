const express = require('express');
const router  = express.Router();
const Book    = require('../models/Book');
const Author  = require('../models/Author');



router.get('/books', (req, res, next)=>{    
    Book.find().populate('author')
    .then((allTheBooks)=>{
        res.render('book-views/bunchaBooks', {books: allTheBooks})
    })
    .catch((err)=>{
        console.log(err);
        next(err);
    })
})

router.get('/books/details/:idOfBook', (req, res, next)=>{
    Book.findById(req.params.idOfBook)
    .then((oneSingleBook)=>{
        res.render('book-views/bookDetails', {theBook:oneSingleBook})
    })
    .catch((err)=>{
        next(err);
    })
})





router.get('/books/new', (req, res, next)=>{

    Author.find()
    .then((allTheAuthors)=>{
        
        res.render('book-views/newBook', {authors: allTheAuthors});
    })
    .catch((err)=>{
        next(err);
    })



})







router.post('/books/create-new-book', (req, res, next)=>{
    const {theTitle, theDescription, theAuthor, theRating} = req.body;
    console.log(theTitle, theDescription, theRating, theAuthor)

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
            res.render('book-views/editBook', {book: bookFromDb})
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
