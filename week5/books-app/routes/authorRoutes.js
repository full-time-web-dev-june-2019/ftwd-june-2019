const express = require('express');
const router  = express.Router();
const Author  = require('../models/Author');



router.get('/authors', (req, res, next)=>{

    Author.find()
    .then((allAuthors)=>{
        res.render('author-views/list-of-authors', {authors: allAuthors})
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/authors/create-new', (req, res, next)=>{
    res.render('author-views/new-author')
})


router.post('/authors/create-the-author', (req, res, next)=>{
    Author.create({
        name: req.body.authorName,
        birthday: req.body.birthDay,
        birthplace: req.body.birthPlace,
        image: req.body.img
    })
    .then(()=>{
        res.redirect('/authors')
    })
    .catch((err)=>{
        next(err);
    })

})




module.exports = router;