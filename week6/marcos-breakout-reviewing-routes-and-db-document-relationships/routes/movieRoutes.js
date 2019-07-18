const express = require('express');
const router  = express.Router();
const Celeb = require('../models/celeb');
const Movie = require('../models/movies');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('movies/index');
});

router.get('/create', (req, res, next) => {
  Celeb.find()
  .then(celebs => {
    res.render('movies/create', {celebs});
  }).catch(err => next(err));
});

router.post('/create', (req, res, next) => {
  Movie.create(req.body)
  .then(newlyCreatedMovie => {
    res.locals.message = "You have successfully created a new movie";
    res.render(`movies/details`, {movieDetail: newlyCreatedMovie});
  }).catch(err => next(err));
});

 router.get('/list', (req, res, next) => {
   Movie.find()
   .then(moviesList => {
     res.render('movies/list', {moviesList});
   }).catch(err => next(err));
 });


router.get('/detail/:movieId', (req, res, next) => {
  // req.session.currentUser
  // if(!req.user) {
  //   res.redirect('/login');
  // }

  // .populate will populate the field that you enter
  // in order for it to work, the field has to be set up in the Schema as type Schema.Types.ObjectId and must reference the collection that it populate.
  // it is a way of doing a find for the field without having to do nested .then's to have all the info available.
  // * reference the movie model on line 18 for an example *
  // you can see the outcome of this and how to display the populated field in /views/movies/details.hbs on line 9 - 12
  Movie.findById(req.params.movieId).populate('celeb')
  .then(movieDetail => {
    // let theMSG = false;
    // if(req.params.created === 'movieDetails') {
    //   theMSG = "You have successfully created a new movie";
    //   res.locals.message = "You have successfully created a new movie";
    // }
    // data = {
    //   movieDetail: movieDetail,
    //   message: theMSG
    // };

    res.render('movies/details', {movieDetail});
  }).catch(err => next(err));
});


router.post('/delete/:movieId', (req, res, next) => {
  Movie.findByIdAndRemove(req.params.movieId)
  .then(() => {
    res.redirect('/movie/list');
  }).catch(err => next(err));
});


module.exports = router;
