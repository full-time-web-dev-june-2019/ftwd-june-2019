const express = require('express');
const router  = express.Router();
const bcrypt  = require('bcryptjs');
const User    = require('../models/User');

const passport = require('passport');


const ensureLogin = require("connect-ensure-login");

const nodemailer = require('nodemailer')


let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAILEMAIL,
    pass: process.env.GMAILPASS 
  }
});



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
    }).then(()=>{

      transporter.sendMail({
        from: 'DONOTREPLY@WHATEVER.com',
        to: email, 
        subject: 'Thank you for signing up', 
        text: 'WOW, you actually dont even have a computer. check your beeper for details',
        html: `<p> Thank you for signing up for an account with us </p>
            Your username is ${theUsername}
        `
      }).then(info => {

        console.log(info)
        console.log('yay');
        res.redirect('/')
      
      })
      .catch(error => console.log(error))
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


  router.get('/forgot-password', (req, res, next)=>{



    res.render('user-views/forgot-pass')
  })



  router.post('/forgot-pass', (req, res, next)=>{

    User.findOne({email: req.body.theEmail})
    .then((theUser)=>{




        transporter.sendMail({
          from: 'DONOTREPLY@WHATEVER.com',
          to: req.body.theEmail, 
          subject: 'You Requested to Reset Your Password', 
          text: 'WOW, you actually dont even have a computer. check your beeper for details',
          html: `<p> Thank you for using our password reset feature.  If you did not 
          request this action please go to www.yougothacked.com to for more info
          please use the following link to reset your password <a href="http://localhost:3000/forgot-password-update/${theUser._id}">9857^%$bvndkd/:http:.com</a>
          `
        })
        .then(()=>{
          req.flash('error', 'please check your email for instructions')
          res.redirect('/')
        })
        .catch((err)=>{
          next(err)
        })
  })


  })


  router.get('/forgot-password-update/:id', (req, res, next)=>{

    res.render('user-views/update-password', {userid: req.params.id})

  })



  router.post('/password-update/update', (req, res, next)=>{

   let newPass = req.body.newPassword
   let confirm = req.body.confirm
   let id = req.body.id

    if(newPass !== confirm){
      req.flash('error', 'passwords do not match please make sure to enter the same password twice')
      res.redirect('/forgot-password-update/'+id)
    }

    const salt = bcrypt.genSaltSync(12);
    const hashedPassWord =  bcrypt.hashSync(newPass, salt);

    User.findByIdAndUpdate(id, {password: hashedPassWord})
    .then(()=>{
      res.redirect('/')
    })
    .catch((err)=>{
      next(err);
    })

  })



module.exports = router;