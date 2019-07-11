const express = require('express');
const router  = express.Router();
const Animal  = require('../models/Animal');




router.get('/animals', (req, res, next)=>{

Animal.find()
.then((listOfAnimals)=>{

    // res.render('animal-list', 
    // {theAnimals: listOfAnimals})
    // normally we res render a page and pass in the list of animals or whatever it is that we wrre getting from the DB
    // when were making an API, we res.json instead and just send the pure info

    res.json(listOfAnimals)

})
    .catch((err)=>{
        next(err);
    })
})




router.post('/animals', (req, res, next)=>{
    let type = req.body.type;
    let name = req.body.name;
    let goodBoy = req.body.goodBoy;

    Animal.create({
        type: type,
        name: name,
        goodBoy: goodBoy
    })
    .then((response)=>{


        res.json({message: 'Successfully Created Animal'});

    })
    .catch((err)=>{
        res.json(err);
    })

})







module.exports = router;