const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const User    = require('../models/userModel');

const passport = require('passport');

const ensureLogin = require("connect-ensure-login");





router.get('/signup', (req, res, next)=>{
    res.render('auth/signup');
});

router.post('/signup', (req, res, next)=>{

    const thePassword = req.body.thePassword;
    const theUsername = req.body.theUsername;

    const salt = bcrypt.genSaltSync(12);
    const hashedPassWord =  bcrypt.hashSync(thePassword, salt);

    User.create({
        username: theUsername,
        password: hashedPassWord
    })
    .then(newlyCreatedUser=>{
        console.log('yay');
        req.flash('success', `Congradulations ${newlyCreatedUser.username} on creating a new user!`);
        res.redirect('/');
    })
    .catch((err)=>{
        next(err);
    });
});


router.get('/login', (req, res, next)=>{
    res.render('auth/login');
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
    passReqToCallback: true
  }));



  router.get('/logout', (req, res, next)=>{
    req.logout();
    res.redirect("/auth/login");
  });

module.exports = router;
