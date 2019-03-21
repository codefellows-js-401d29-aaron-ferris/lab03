'use strict';
//requires
const fs = require('fs');
const faker = require('faker')
// const file = `${__dirname}/files/test.txt`;

/** Reads file, and gives back data that was there in console.
 * param file, error and data
 */
fs.readFile(extension, (err,data) => {
  const file = `${__dirname}/${extension}`;

  if (err){ 
    console.error(err);
    return; }
    console.log(data);
  let contents =(faker.random.number()).toString();
/** Interior function which takes replaces contents with a random number as a string
 * param file, contents, err, data
 */
  fs.writeFile(file, Buffer.from(contents), (err,data) =>{
    if (err) {
      console.error(err); 
      return;}
/** Last interior function which reads the new file data and returns it
 * param, err data
 */
      fs.readFile(file, (err,data)=>{
        if (err) {
          console.error(err);
          return
        }
        console.log(data.toString)
      });
  });
});