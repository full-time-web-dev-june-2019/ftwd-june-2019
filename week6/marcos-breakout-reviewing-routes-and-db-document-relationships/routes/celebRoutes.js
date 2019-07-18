const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celeb');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('celebs/index');
});

router.get('/create', (req, res, next) => {
  res.render('celebs/create');
});


router.post('/create', (req, res, next) => {
  // console.log("info from req.body from celeb create form >>>>>>> ", req.body);
  Celeb.create(req.body)
  .then(newCeleb => {
    console.log("the newly created celeb ---- ", newCeleb);
    res.redirect('/celeb/list');
  }).catch(err => next(err));
});


router.get('/list', (req, res, next) => {
  Celeb.find()
  .then(allCelebs => {
    res.locals.theMsg = "You are viewing the list of Celebs!";
    res.render('celebs/list', {allCelebs});
  }).catch(err => next(err));
});


router.get('/detail/:celebId', (req, res, next) => {
  Celeb.findById(req.params.celebId)
  .then(celebDetail => {
    res.render('celebs/details', {celebDetail});
  }).catch(err => next(err));
});


module.exports = router;
