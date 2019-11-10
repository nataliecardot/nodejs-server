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

  // Read file (computes the whole file and then sends it to content)
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-type': 'text/html' });
          res.end(content, 'utf8');
        });
      }
      else {
        // Some server error (most likely 500, meaning server cannot process the request for an unknown reason)
        res.writeHead(500);
        res.end(`Server error: ${err.code}`)
      }
    }
      else {
        // Successful response
        res.writeHead(200, { 'Content-Type': contentType });
        // Signals to the server that all of the response headers and body have been sent; that server should consider this message complete. If data is specified (as it is here, with content), it is similar in effect to calling response.write(data, encoding) followed by response.end(callback)
        res.end(content, 'utf8');
      }
  });

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
  //   // When sending data to a web server, the data has to be a string
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