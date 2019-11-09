const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('<h1>Homepage</h1>');
  }
});

// When this is deployed, will run on whatever the host is going decide, which is going to be in an environment variable. This will first look for the environment variable, and if that's not found, it will run it on 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));