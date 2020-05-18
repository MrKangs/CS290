var http = require('http');
// Importing the http module from the node.js

var server = http.createServer(function(req, res){
    // req is request and res is response
    // The user will import the req, which will be the url
    // while the res will send data or information to the clinet as response

    console.log('== Got a request');
    console.log('-- HTTP method', req.method);
    console.log('-- Resources', req.url);
    console.log('-- Headers', req.headers);
    
    


});
// This will return as server as an object as server
// This is a long single statement that will be created for a new server 
// when the user request a server 

server.listen(8000, function(){
    console.log("== Server is listening on port 8000");
});
// This is how to call the server from the request from users
// The 8000 is the port number of the server: The default port number is 80
// The function will be called when the port 8000 request came in
