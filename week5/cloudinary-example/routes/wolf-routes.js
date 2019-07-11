
const express = require('express');

const router = express.Router();

const Wolf   = require('../models/Wolf');

const uploadMagic = require('../config/cloundinary-setup');

router.get('/wolves', (req, res, next)=>{
    Wolf.find()
    .then((theWolves)=>{

        res.render('wolf-list', {wolves: theWolves})

    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/new-wolf', (req, res, next)=>{
    res.render('new-wolf');
})


router.post('/create-wolf', uploadMagic.single('thePic') ,(req, res, next)=>{

    let name = req.body.name;
    let bio = req.body.bio;
    let homeTown = req.body.homeTown;
    let img = req.file.url
   


    Wolf.create({
        name: name,
        bio: bio,
        homeTown: homeTown,
        image: img
    })
    .then((wolf)=>{
        res.redirect('/wolves')
    })
    .catch((err)=>{
        next(err);
    })



})








module.exports = router;