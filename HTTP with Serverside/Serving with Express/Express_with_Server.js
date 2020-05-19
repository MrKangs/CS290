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

//app.get();
// This is the get method in the HTTP

//app.post();
// This is the post method in the HTTP

// Both functions will be used as middler as we write the express with routing

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

