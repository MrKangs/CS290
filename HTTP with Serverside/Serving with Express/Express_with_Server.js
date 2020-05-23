// npm can do more than just install 

// You can change this project as a npm package
// npm init will start the process of making a npm package
// The first question will the name: express-serving
// The second will be the version of the package
// The third will be description: HTTP serving with Node.js and Express
// The fourth question will be which file be editing for server related code
// The fifth is unit test, which we don't have
// The sixth is the git repository, which will save the files
// The Seventh is the jey words that other people can search your package: tag names: HTTP, Server, Node, Express
// The Eight is the author: MrKangs
// And the last is the licenses: OSU
// When you go next, it will give the json format and make sure for checking
// You can see in package.json in this folder

// The reason why to set up as a package is
// while we did npm install [install package name]
// for all the module, while the package will do it all at once 
// npm install will do all the work

// If you want to install a module just for development, 
// it will be: npm install --save-dev [module name]

var express = require('express');
var app = express();
// This will create on object ot store the server as Express

const port = 8001;
const hostname = "127.0.0.1";

var logger = require('./logger')
// This is from the logger.js file

app.use(logger);
// This will print the what method and url
// Check out the logger.js file

app.get('/about', function(req, res, next){
  res.statusCode = 200;

  res.send("<html><body><h1>About page</h1></body></html>");
  // The send put content into the response body and send the response
});
// This is the get method in the HTTP 
// The first argument is url after the path: 
// to see the function that happens, the port needs to be 127.0.0.1:8001/about  
// The second argument is call function when we execute the function
// Inside the second argument function, there is a third ardument: next
// This will lead to the next function unless this function is the last function

app.use(express.static(__dirname + "/public"));
// This will set that all the information will be use these files
// The style.css will automatically applied because .html references the style.css file
// Which we will be using
// This can also be used for javascript files
// Try 127.0.0.1:8001/style.css

app.get('/', function(req, res, next){
  res.status(200).sendFile(__dirname + "/public/index.html");
  // This will read the index.html and put in the content information as res.send() function do
  // and do the statusCode as 200
  // __dirname is important because that is telling that it means the directory name as "" in this route
});

app.get('/people', function(req, res, next){
  res.status(200);
  res.sendFile(__dirname + "/public/people.html");
});
// Same idea above

var availablePeople= [
  'luke',
  'rey',
  'leia',
  'finn',
  'r2d2'
];

app.get('/people/:name', function(req, res, next){
  console.log(" ==req.params", req.params);
  // This will get the store the name as we make a new object

  var name = req.params.name;
  // Then we store the params that came from the url as name

  if (availablePeople.indexOf(name) >= 0){
    res.status(200).sendFile(__dirname + "/public/people/" + name + ".html");
    // Then we will add the html as the corresponding html file
  }
  // If the name in the array, then do it

  else {
    next();
  }
  // Else, then it will go to the next function below 
  // Since the '/people/:name/:photo will not be invalid, that will also go to next
  
});
// :name will be the the object of names that will take the name  
// when the user enter that certain path name


app.get('/people/:name/:photo', function(req, res, next){
  console.log(" == req.params", req.params);
  next();
  // This will get out and move to the next function below, which will be 404.html
});
// As you can see, you can have many parameters to store as an object



app.get('*', function(req ,res ,next){
  res.status(404).sendFile(__dirname + "/public/404.html");
})
// The * means everthing except that we declare before, then it will do this function
// Only people and / are the only one that will give a different html page
// Since the * is looking all the other exeepts before, the order matters
// As you see, we can have all the functions that is related to HTTP 
// such as .get, .post, .delete, or something else


app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// In the dependecies, we can see that nodemon is install
// This dependecies will show the results without restarting the server to see the change
// Everytime we make a modification, we get an output on the terminal
// However, in order to run it: it will be the following command line
// ./node_modules/nodemon/bin/nodemon.js Express_with_Server.js
// That is long!
// Therefore, we will encode commandlines as we work on the projects
// You can modify in the package.json file
// See the comments to how 
// To run the command key, it will be the following:
// npm run [script_name]


// Reference 1: https://docs.npmjs.com/about-npm/index.html
// Reference 2: https://docs.npmjs.com/downloading-and-installing-packages-locally
// Reference 3: https://docs.npmjs.com/creating-a-package-json-file
// Refernece 4: https://expressjs.com/en/starter/hello-world.html
// Reference 5: https://expressjs.com/en/starter/basic-routing.html
// Refernece 6: https://expressjs.com/en/guide/writing-middleware.html
// Reference 7: https://expressjs.com/en/starter/static-files.html

