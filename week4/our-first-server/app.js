const http = require('http');

const server =
  http.createServer((request, response) => {
    console.log(`Someone has requested ${request.url}`);

    if (request.url === '/') {
      response.write('Hello, world!');
      response.end();
    }
    else if(request.url ==="/pokemon"){
      response.write(`<h1> Welcome To Pokemon Page </h1>
      <p> Here's a not so random list of pokemon </p>
      <div> You requested ${request.url} </div>
      <ul>
      <li> Charmander</li>
      <li> Bulbasaur </li>
      <li> Squirtle </li>
      </ul>
      `);
      response.end();
    }
    else  {
      response.statusCode = 404;
      response.write(`404 Page, sorry ${request.url} is not a valid address on this site`);
      response.end();
    }
  });


server.listen(3000);
