function circumference(r) {
    return 2 * Math.PI * r;
  }
  
  function area(r) {
    return Math.PI * r * r;
  }
  
  module.exports = {
    circumference: circumference,
    area: area,
    message: "Hello, World!"
  };
  // When you want to return multiple of functions or statements, 
  // you use them as objects to return them