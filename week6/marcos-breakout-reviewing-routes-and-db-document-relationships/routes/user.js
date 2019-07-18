const express = require('express');
const router  = express.Router();
const User = require('../models/userModel');
const Celeb = require('../models/celeb');
const Movie = require('../models/movies');

/* GET home page */
router.get('/profile', (req, res, next) => {
  if(!req.user){
    req.flash('error', `Sorry, you are not logged in!`);
    res.redirect('/');
  }else if(req.user.role === 'Boss') {
    res.redirect('/user/admin');
  }
  res.render('user/profile');
});


router.get('/admin', (req, res, next) => {
  User.find({_id: {$ne: req.user._id}})
  .then(allUsers => {
    Movie.find()
    .then(allTheMovies => {
      Celeb.find()
      .then(allTheCelebs => {

        data = {
          allUsers: allUsers,
          allMovies: allTheMovies,
          allCelebs: allTheCelebs
        };

        res.render('user/admin', data);
      }).catch(err => next(err));
    }).catch(err => next(err));
  }).catch(err => next(err));
});

module.exports = router;
