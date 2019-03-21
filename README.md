![CF](http://i.imgur.com/7v5ASc8.png) LAB 03
=================================================

## Async

### Author: Aaron Ferris

### Links and Resources
* [repo](https://github.com/codefellows-js-401d29-aaron-ferris/lab03)
* [travis](https://travis-ci.com/codefellows-js-401d29-aaron-ferris/lab03)


#### Documentation
* [jsdoc](http://xyz.com) (All assignments)

### Modules
#### `edit-file.js`
##### No Exported Values and Methods

###### `readFile -> string`
reads the contents of a txt file, nested  writefile to change the content, and nexted with read file again to return value

#### `reader-fixed.js`
##### Exported Values and Methods

###### `readAll(paths, callback) -> string, string, string`
uses read one three times and creates an array of the content from 3 external files as given by readOne. Exports to indesx
###### `readOne(paths,callback) -> string`
takes in a path given by readAll, returns error or the contents of a file so readAll can return that 
#### `reader-promise.js`
not completed
#### `index.js`
##### Exported Values and Methods

###### `foo(thing) -> string`
Usage Notes or examples

###### `bar(array) -> array`
Usage Notes or examples


### Setup
#### `.env` requirements
* use files given
* scripts
  * "test": "jest --verbose --coverage",
  *  "test-watch": "jest --verbose --coverage --watchAll",
  *   "lint": "**/*.eslint",
  *  "jsdocs": "jsdoc -c .docs/config/jsdoc.config.json"
* dependancies:
  * faker
  * fs
  * lint

#### Running the app
* for edit-file, in directory where edit-file.js is run  `node edit-file.js ./(myfilepath)`
* for reader-fixed in directory where reader-fixed is run `node index.js ./files/1.txt ./files/2.txt ./files/3.txt`
  * make sure you have 3 files after, and make sure that the index.js has reader-fixed as its point for exporting data

  
#### Tests
couldn't get to tests

