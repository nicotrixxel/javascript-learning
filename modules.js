let os = require("os");
let path = require("path")
let bytes = os.freemem();
let kbytes = bytes / 1000;

console.log("Free Memory: " + kbytes + " MB");

const fs = require('fs');
let current_path = "C:/Users/Klaus-Dieter/Desktop/Projects/Github/javascript-learning/"

fs.readdir(current_path, dirRead)
function dirRead(err, files) {
    console.log("Path Readed: "+current_path)
    console.log(files)

    files.forEach(processFile);
}


function processFile(file) {
    let extension = path.extname(file);
    console.log("File format is " + extension)
    fs.makedir(extension, fileCreated)
}

    
fs.rename(current_path+"test.txt", current_path+"TXTs/test.txt", copySuccess)
function copySuccess () {
    console.log("Copy File Successfull") //move file
}

fs.appendFile("test.txt", "Hello World", fileCreated);

function fileCreated() {
    console.log("created file")
}
