const path = require('path');

// Extract base filename from file path (called the base)
console.log(path.basename(__filename));

// Extract directory name from file path (the file path excluding base filename)
console.log(path.dirname(__filename));

// Extract file extension
console.log(path.extname(__filename));

// Create path object with root, dir, base, ext, name (base without extension). Can use dot notation to then get individual properties
console.log(path.parse(__filename).base);

// Concatenates paths
console.log(path.join(__dirname, 'test', 'hello.html'));