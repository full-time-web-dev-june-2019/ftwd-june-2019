
const express = require('express');
const app = express();

app.use(express.static('public'));




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
  });


  app.get('/blah', (request, response) => {
    response.send('<h2>Welcome TOTALLY CHANGED :)</h2>');
  });



  app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html');
  });
  


  app.listen(3000, () => {
    console.log('My first app listening on port 3000!');
  });



  

  