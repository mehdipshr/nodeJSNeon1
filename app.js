const fs = require('fs');

/* in yek method syncronous hast ke estefadeh azash tosiye nemishe magar dar 
zamani ke motmaen hastim hich err pish nemiyad dar gheyre in sorat mororgar 
dastor haye baadi residegi nemikone va stop mishe */
const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./' , (err,files)=> {  /* arrow function method*/
  console.log(err);
  console.log(files);
});


  fs.readdir('./s', function(err, files){  /* normal function method ,  fs readdir yek method hast ke yek function barmigardone chon Asyncronous hast */
    console.log(err);
    console.log(files);
  });





// const calculator = require('./calculator');
// const {addition, subtraction,multiplication,division} = require('./calculator');  //destructor method

// console.log(addition(3,7));
// console.log(calculator.addition(3,7));
// console.log(calculator.multiplication(213,300));


//path module daghighe 51
const path = require('path')
const os = require ('os');

console.log('free memory' ,os.freemem());
console.log('total memory' ,os.totalmem());

// let parsedPath = path.parse(__filename);
// console.log(parsedPath);
// console.log(__filename);

// var port = 4000 ;
// app.listen(port, () => {consol.log(`server running on ${port} `)})