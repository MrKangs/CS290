/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Kenneth Kang 
 * Email: kangken@oregonstate.edu
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
// This will add the express server with handlebars
// In order to use it, you need to install express-handlebars for express with handlebars
var app = express();
var twitData = require("./twitData");

const port = 3001;
const hostname = "127.0.0.1";

app.engine('handlebars',exphbs({defaultLayout: "main"}));
// We are setting up that we are using handlebars with express to the server
// The first argument is the engine name which is handlebars
// The second argument with express-handlebars

app.set("view engine", 'handlebars');
// The second argument came from the app.engine first argument


app.use(express.static('public'));

app.get('/', function(req, res){
  res.status(200);
  res.render('twitPage', {
    TWITS: twitData,
    add: true
  });
}); 


app.get("/twits/:n", function (req, res, next){
  var n = req.params.n;
  console.log("Twit Index:", n);
  if(n >= 0 && n < 8){
    var twit = [twitData[n]];
    res.render('twitPage',{ 
    TWITS: twit,
    add: false
    });
    res.status(200);
  }
  else{
    next();
  }
});

app.get('*', function(req, res){
  res.status(404);
  res.render('404', {});
});

app.listen(port, hostname, function (err) {
  if(err){
    throw err;
  }
  console.log(`Server running at http://${hostname}:${port}/`);
});


