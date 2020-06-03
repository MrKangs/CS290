var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
// This will add the express server with handlebars
// In order to use it, you need to install express-handlebars for express with handlebars
var app = express();
var peopleData = require("./peopleData");

const port = 8003;
const hostname = "127.0.0.1";

app.engine('handlebars',exphbs({defaultLayout: null}));
// We are setting up that we are using handlebars with express to the server
// The first argument is the engine name which is handlebars
// The second argument with express-handlebars

app.set("view engine", 'handlebars');
// The second argument came from the app.engine first argument


app.use(express.static('public'));

app.get('/people', function (req, res, next) {
  res.status(200).sendFile(__dirname + '/public/people.html');
});

var availablePeople = [
  'luke',
  'leia',
  'rey',
  'finn',
  'r2d2'
];

app.get('/people/:person', function (req, res, next) {
  var person = req.params.person.toLowerCase();
  if (availablePeople.indexOf(person) >= 0) {
    
    res.status(200).render('photoPage', peopleData[person]);
    // This will add the photo card to the corresponding person in the data file

    // Same information above yet different methods
    //res.status(200).sendFile(
    //  __dirname + '/public/people/' + person + '.html'
    //);
  } else {
    next();
  }
});

app.get("*", function (req, res, next) {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, hostname, function (err) {
  if(err){
    throw err;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Reference 1: https://www.sitepoint.com/a-beginners-guide-to-handlebars/
//Reference 2: https://handlebarsjs.com/guide/
//Reference 3: https://handlebarsjs.com/guide/builtin-helpers.html
//Reference 4: https://handlebarsjs.com/guide/partials.html
//Refernece 5: https://github.com/ericf/express-handlebars/#readme
//Refernece 6: http://expressjs.com/en/guide/using-template-engines.html
//Refernece 7: https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
