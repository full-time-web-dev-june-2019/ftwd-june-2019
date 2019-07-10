const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const User    = require('../models/User');

const passport = require('passport');


const ensureLogin = require("connect-ensure-login");





router.get('/signup', (req, res, next)=>{
    res.render('user-views/signup');
})

router.post('/signup', (req, res, next)=>{

    const thePassword = req.body.thePassword;
    const theUsername = req.body.theUsername;
    const email       = req.body.theEmail

    const salt = bcrypt.genSaltSync(12);
    const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

    User.create({
        username: theUsername,
        password: hashedPassWord,
        email: email
    })
    .then(()=>{
        console.log('yay');
        res.redirect('/')
    })
    .catch((err)=>{
        next(err);
    })
})


router.get('/login', (req, res, next)=>{
    res.render('user-views/login')
})

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true,
    passReqToCallback: true
  }));



  router.post('/logout', (req, res, next)=>{
    req.logout();
    res.redirect("/login");
  })



  router.get("/auth/google", passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login",
            "https://www.googleapis.com/auth/userinfo.email"
        ]
  }));

  
  router.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "/blah"
  }));



module.exports = router;