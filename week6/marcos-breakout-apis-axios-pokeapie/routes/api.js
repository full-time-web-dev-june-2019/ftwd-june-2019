const express = require('express');
const router  = express.Router();
const axios = require('axios');

/* GET API Home */
router.get('/home', (req, res, next) => {
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0')
  .then(allPoke => {
    // console.log("info from the api ====== ", allPoke.data.results);
    res.render('api/index', {allPoke: allPoke.data.results});
  }).catch(err => next(err));
});

router.get('/details/:pokeId', (req, res, next) => {
  // console.log("the pokeId >>>>>>>>> ", req.params.pokeId);
  axios.get(`https://pokeapi.co/api/v2/pokemon/${Number(req.params.pokeId)+1}`)
  .then(pokeDetails => {
    axios.get(`${pokeDetails.data.forms[0].url}`)
    .then(formInfo => {
      console.log(" the form info for the pokemon >>>>>>>>>>>>> ", formInfo.data);
      console.log("details of the pokemon --------- ", pokeDetails.data);

      data = {
        pokeDetails: pokeDetails.data,
        formInfo: formInfo.data
      };

      res.render('api/details', data);
    }).catch(err => next(err));
  }).catch(err => next(err));
});



router.get('/pokeType', (req, res, next) => {
  console.log("poke type route is being called. ");
  axios.get('https://pokeapi.co/api/v2/type')
  .then(typeList => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0')
      .then(allPoke => {
        // console.log("info from the api ====== ", allPoke.data.results);
        data = {
          randomVar: "This is a random Var",
          allPoke: allPoke.data.results,
          allTypes: typeList.data.results
        };
        res.render('api/index', data);
      }).catch(err => next(err));
      console.log('list by type of poke >>>>>>>>>>>>>>> ', typeList.data.results);
  }).catch(err => next(err));
});



router.get('/typeSearch/:pokeType', (req, res, next) => {
  axios.get(`https://pokeapi.co/api/v2/type/${Number(req.params.pokeType) + 1}`)
  .then(listOfTypes => {
    console.log("list of types of pokemon ", listOfTypes.data.pokemon);
    res.render('api/index', {allPokeByType: listOfTypes.data.pokemon});
  }).catch(err => next(err));
});


router.post('/detailsByType', (req, res, next) => {
  console.log("the body of the post 0------------------0 ", req.body);
  axios.get(`${req.body.theUrl}`)
  .then(pokeDetails => {
    axios.get(`${pokeDetails.data.forms[0].url}`)
    .then(formInfo => {
      data = {
        pokeDetails: pokeDetails.data,
        formInfo: formInfo.data
      };
      res.render('api/details', data);
    }).catch(err => next(err));
  }).catch(err => next(err));
});


module.exports = router;
