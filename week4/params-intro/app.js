// app.js
const express = require('express');
const app     = express();
const path    = require('path'); 
const hbs     = require('hbs');

const bodyParser = require('body-parser');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



app.use(bodyParser.urlencoded({ extended: true }));




app.get('/', function (req, res) {
    res.render('home')
})

app.get('/users/:theUsername', (req, res, next) => {
    res.render('profile', {theUserNameForThisPage:
                         req.params.theUsername});
  })


  app.get('/users/:username/books/:bookname', (req, res, next)=>{
    res.send(req.params);
  })



  app.get('/searchpage', (req, res, next)=>{
    res.render('searchpage')
  })


  app.get('/searchResults', (req, res, next)=>{
    res.send(req.query);
  })

  app.post('/loginVerify', (req, res, next)=>{
    res.send(req.body);
  })



app.listen(3000, () => console.log('App listening on port 3000!'));