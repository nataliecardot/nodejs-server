const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Build the file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Get file extension
  let extname = path.extname(filePath);

  // Set initial content type
  let contentType = 'text/html';

  // Check extension and set content type accordingly
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Commented out because not dynamic; have to have req.url for each url
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // }

  // For REST API
  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Bob Smith', age: 40 },
  //     { name: 'John Doe', age: 30 }
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(content);
  //   });
  // }
});

// When this is deployed, will run on whatever the host is going decide, which is going to be in an environment variable. This will first look for the environment variable, and if that's not found, it will run it on 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));