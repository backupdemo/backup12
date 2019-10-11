const fs = require('fs');
const data = fs.readFileSync("cyber.json","utf-8");
const words = JSON.parse(data);
$(document).ready(function(){
  alert("words");
});
