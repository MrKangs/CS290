var http = require('http');
// Importing the http module from the node.js

const hostname = '127.0.0.1';
const port = 8000;
const statusCode = 200;

var server = http.createServer(function(req, res){
    // req is request and res is response
    // The user will import the req, which will be the url
    // while the res will send data or information to the clinet as response

    // All the four statements will be the request data
    console.log('== Got a request');
    // Indicator of the starting point: look at the console/terminal

    console.log('-- HTTP method', req.method);
    // The HTTP method will be used as GET: There are more than that, so research for more
    // Also we will be using more method as we continue the lecture 

    console.log('-- Resources', req.url);
    // The tells the path of the server: right now it is / which is nothing
    // Most will be like /inde.html or /about or something else after the /

    console.log('-- Headers', req.headers);
    // All the headers object as the default


    // All the statement below will be response back to the webpage

    //res.statusCode = statusCode
    // This will tell that the statuCode is clear to response back
    // There are more code number that indicate different things
    // Can be found in Server Basic.pdf 
    // Common known code is 404 page not found code error

    //res.setHeader('Content-Type', 'text/plain');
    // This will set the text message as text

    //res.write("Hello World!");
    // This will print hello world on the page

    //res.write("What is going on?");

    res.writeHead(statusCode, {
        "Content-Type": "text/html"
    });
    // This will let the server know that beyond this point will be as html content
    res.write("<html>");
    res.write("<body>");
    res.write("<h1> Hello Kenneth </h1>");
    res.write("<p>You requested this page: " + req.url + "</p>");
    res.write("</body>");
    res.write("</html>");
    // As you see, it can also be desplay was a html format 

    // Note that you can't have two type of text format at once: either html or normal text

    res.end();
    // This indicates that the server response is done
    // Beyond this point, it will never do anything else even though you add more 
    // responses


    
    


});
// This will return as server as an object as server
// This is a long single statement that will be created for a new server 
// when the user request a server 

server.listen(port, hostname, function(){
    console.log(`Server running at http://${hostname}:${port}/`);
});
// This is how to call the server from the request from users
// The 8000 is the port number of the server: The default port number is 80
// The function will be called when the port 8000 request came in

// In order to see this happening in the server and the webpage, the address will be https://127.0.0.1:8000
// But before you go to that address, you need to write node server.js in order to start the server that will able to access to the website
