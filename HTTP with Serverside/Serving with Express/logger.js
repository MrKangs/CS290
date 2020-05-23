function logger(req, res, next){
    console.log("== Request received");
    console.log(" --method:", req.method);
    console.log(" --URL:", req.url);
    next();
  };
  // This will get the infomration what we are using
  // we can see that some html file and style.css file everytime when we go

module.exports = logger;