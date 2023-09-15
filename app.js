const inquirer = require('inquirer');

const express= require('express');
const app =express()
;// This line imports the inquirer module, which provides a simple way to prompt use
const qr = require('qr-image')
// This line imports the gr-image module, which allows you to generate QR codes.
const fs = require('fs');
// This line imports the fs module, which provides methods for working with the fil
inquirer
.prompt([
{
message: "Type in your URL: ", // prompts user for input
name: "URL"
},
])
.then((answers) => {
const url = answers.URL;
var qr_svg = qr.image(url);
qr_svg.pipe(fs.createwritestream("qr_img.png")); //
fs.writeFile("URL.txt", url, (err) => {
if (err) throw err;
console.log( "The file has been saved!");
});
})

.catch((error) => {
    if (error.isTtyErroe) {

    } else {

    }
});


/* const PORT = process.env.PORT|| 3000;

app.listen(PORT); */