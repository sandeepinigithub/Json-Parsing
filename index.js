// jshint esversion:6

const express = require("express");
const parseJson = require('parse-json');
const app = express();

const json = '{"name": "Sandeep","rollno": "1729010140","section": "3cs-c"}';

var d = JSON.parse(json);
console.log("\nSee index.js File I have parsed name, section from json data : \n");
console.log(d.name,d.section);





//This shows that server is running
// app.listen(3000, function(req, res) {
//   console.log("Server is running on port 3000");
// });
