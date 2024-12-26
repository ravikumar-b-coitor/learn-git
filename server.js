const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
	// Set the response header
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end(`Hello, World! ${process.version}.\n`);
});

console.log("Ok");

// console
// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}  ${process.version}.`);
});