const express = require('express');
const router  = express.Router();
const User = require('../models/userModel');
const Celeb = require('../models/celeb');
const Movie = require('../models/movies');


router.get('/details/:searchFor/:theId', (req, res, next) => {
  if(!req.user){
    req.flash('error', `Sorry, you are not logged in!`);
    res.redirect('/');
  } else if(req.user.role !== "Boss") {
    req.flash('error', `Sorry ${req.user.username}, you are not the boss!`);
    res.redirect('/');
  }

  let searchParam;
  let isUser = false;
  let isMovie = false;
  let isCeleb = false;

  if(req.params.searchFor === 'user') {
    searchParam = User.findById(req.params.theId);
    isUser = true;
  } else if(req.params.searchFor === 'movie') {
    searchParam = Movie.findById(req.params.theId);
    isMovie = true;
  } else if(req.params.searchFor === 'celeb') {
    searchParam = Celeb.findById(req.params.theId);
    isCeleb = true;
  } else {
    req.flash('error', `Sorry ${req.user.username}, you did not have the required fields`);
    res.redirect('/');
  }

  console.log("the search param ========================= ", searchParam);
  searchParam.then(theInfo => {
    console.log('the info -------- ', theInfo);
    let theTitle;

    if(isUser) {
      theTitle = theInfo.username;
    } else if(isMovie) {
      theTitle = theInfo.title;
    } else {
      theTitle = theInfo.name;
    }

    data = {
      isUser: isUser,
      isMovie: isMovie,
      isCeleb: isCeleb,
      pageTitle: theTitle,
      info: theInfo
    };
    res.render('user/adminDetails', data);
  }).catch(err => next(err));
});



router.post('/updateUserRole', (req, res, next) => {
  User.findById(req.body.theId)
  .then(userFromDb => {
    userFromDb.role = req.body.contact;
    userFromDb.save()
    .then(updatedUser => {
      res.redirect('back');
    }).catch(err => next(err));
  }).catch(err => next(err));
});



module.exports = router;
