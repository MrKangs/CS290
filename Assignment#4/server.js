// Name: Kenneth Kang
// Email: kangken@oregonstate.edu


var http = require('http');
var path = require('path');
var fs = require('fs');
// Take modules from the node.js package

var publicDirectory = path.join(__dirname, 'public');
// Set the directory path of the files in public

var indexFileName = 'index.html';
var notFoundFileName = '404.html';
// Set the index.html and 404.html as indexFileName and notFoundFileName

var port = process.env.PORT || 3000;
// Set the port number as 3000 since that must be 3000 given in the assignment

var files = {};
// Set the files of the index.html or 404.html as files

var staticFiles = fs.readdirSync(publicDirectory);
// Read all the staticFiles from the publicDirectory in general: both 404 and index

staticFiles.forEach(function(fileName){
    var fileData = fs.readFileSync(path.join(publicDirectory, fileName));
    if(fileData){
        files[fileName.toLowerCase()] = fileData;
    }
});
// For each general statticFiles, we change all the fileData into lowercase if fileData exsits

server = http.createServer(function(req, res){
    var fileName = req.url;
    // It iwll take the url as the user input 

    var statusCode = 200;
    var headers = {};
    // set the statusCode as 200 and headers as an object

    if(fileName[0] === '/'){
        fileName = fileName.substr(1);
    }
    // If the fileName[0] location index has /,
    // get information that starts from after the /

    if(fileName === ''){
        fileName = indexFileName;
    }
    // If the fileName is empty, then it is not an issue that it will return all index content as fileName

    fileName = fileName.toLowerCase();
    // Set all the fileName as toLowerCase

    if(!files[fileName]){
        fileName = notFoundFileName;
        statusCode = 404;
    }
    // If there is not files in the array, then return the server that it is 404.html

    if(fileName.endsWith('.jpg')){
        headers['Content-Type'] = 'image/jpeg';
    } else if(fileName.endsWith('.html')){
        headers['Content-Type'] = 'text/html';
    } else if(fileName.endsWith('.css')){
        headers['Content-Type'] = 'text/css';
    } else if(fileName.endsWith('.js')){
        headers['Content-Type'] = 'application/javascript';
    } else{
        headers['Content-Type'] = 'text/plain';
    }
    // Thesse conditions will tell what type of content is to the server
    // Most of them are self explainable
    // All of them will save as an array object

    res.writeHead(statusCode, headers);
    res.write(files[fileName]);
    res.end();
    // Return the value of content type, files with the fileName to the server
});
// This whole function is all about the server 

server.listen(port, function(err){
    if(!err){
        console.log("Server listening on port:", port);
    }
});
// If there is no error from the server, it will print the server port number, which should be 3000, to the console