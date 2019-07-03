const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static('public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');





app.get('/', (req, res, next)=>{
    res.render('home');
});



app.get('/about/wolf-guy', (req, res, next)=>{
    let stuff = {
        name: 'wolf-guy',
        img: '/images/resume-wolf.jpg',
        bio: 'wolf-guy was abandoned at a young age and was raised by wolves, he emulated them to the point that his bone structure began to mimick that of the wolves',
        wolfGuy: true
    }
    res.render('about', {thePerson: stuff});
});






app.get('/random', (req, res, next)=>{

    punkAPI.getBeers()
    .then(beers => {

        console.log(beers);
        res.render('blah', {bunchaBeers: beers})




  
    })
    .catch(error => {
      console.log(error)
    })  
})






app.get('/about/wolf-girl', (req, res, next)=>{
    let stuff = {
        name: 'wolf-girl',
        img: '/images/business-casual-wolf.jpeg',
        bio: 'wolf-girl actually is a pretty normal girl. she just identifies as a wolf',
        wolfGuy: false
    }
    res.render('about', {thePerson: stuff});
});




app.get('/photos', (req, res, next)=>{

    let allTheImages = [{src: '/images/business-casual-wolf.jpeg', desc: "this is wolf girl"},
     {src:'/images/resume-wolf.jpg', desc: "this is wolf guy"}, 
     {src:'/images/suit-wolf.jpg', desc: "this is a rather unsettling picture of a realistic looking wolf in a suit"}];

    allTheImages.forEach((eachImage, ind)=>{
        if(ind%3=== 0)
        eachImage.cl = 'blue'
        else if (ind%3=== 1)
        eachImage.cl = 'green'
        else if (ind%3=== 2)
        eachImage.cl = 'red'
    })


    res.render('gallery', {photos: allTheImages});

});













app.listen(3000, () => {
    console.log('Listening on port 3000!');
  });