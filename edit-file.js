'use strict';
//requires
const fs = require('fs');
const faker = require('faker')
const file = `${__dirname}/files/test.txt`;

fs.readFile(file, (err,data) => {
  if (err){ 
    console.error(err);
    return; }
    console.log(data);
  let contents =(faker.random.number()).toString();
  fs.writeFile(file, Buffer.from(contents), (err,data) =>{
    if (err) {
      console.error(err); 
      return;}
      fs.readFile(file, (err,data)=>{
        if (err) {
          console.error(err);
          return
        }
        console.log(data.toString)
      });
  });

});