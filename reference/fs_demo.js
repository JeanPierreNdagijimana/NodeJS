//file system module

const fs = require('fs');
const path = require('path');

//create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created..');
// });

//create and write to a file
// fs.writeFile(path.join(__dirname, '/test', 'jp.txt'), 'Hello JP', err => {
//     if (err) throw err;
//     console.log('Folder created..');

//     //file append
//     fs.appendFile(path.join(__dirname, '/test', 'jp.txt'), ' you are a champ broh!', err => {
//         if (err) throw err;
//         console.log('file edited..');
//     });
// });

//read a file 
// fs.readFile(path.join(__dirname, '/test', 'jp.txt'), 'utf8' , (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

//rename a file
fs.rename(path.join(__dirname, '/test', 'jp.txt'), path.join(__dirname, '/test', 'champ.txt'), err => {
    if (err) throw err;
    console.log('File renamed..');
});