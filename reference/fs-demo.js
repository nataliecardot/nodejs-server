const fs = require('fs');
const path = require('path');

// Create folder (this is the async version, which is what you'd normally want to use). {} is for options (including empty options object just to indicate options can be used, but works without)
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if (err) throw err;
  console.log('Folder created...');
});

// Create and write to file (open method creates file only). If file already exists, overwrites what's already inside it
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world', err => {
  if (err) throw err;
  console.log('File created and written to...');

  // Append to file
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!', err => {
    if (err) throw err;
    console.log('Content appended to file...')
  });
});

// Read file. If you don't provide character encoding and you want to get the data in the file, it will give you a raw buffer, not the actual data
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), err => {
  if (err) throw err;
  console.log('File renamed...');
});

