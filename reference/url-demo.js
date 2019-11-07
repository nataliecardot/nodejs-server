const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Get serialized URL (both are equivalent)
console.log(myUrl.href);
console.log(myUrl.toString());

// Get host (root domain)
console.log(myUrl.host);

// Get hostname (the difference is the hostname doesn't include the port, if for example the url had ":8000" after .com)
console.log(myUrl.hostname);

// Get pathname (file after root domain, e.g., "/hello.html")
console.log(myUrl.pathname);

// Get serialized query (the query parameters, e.g., "?id=100&status=active")
console.log(myUrl.search);

// Get params object from the query parameters
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));