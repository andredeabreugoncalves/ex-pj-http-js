const message = 'Hello world' // Try edit me

// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)
=======
const { JSDOM } = require("jsdom");

const dom = new JSDOM('<!DOCTYPE html><html><body><div id="header"></div></body></html>');
const document = dom.window.document;

document.querySelector('#header').innerHTML = 'Hello World';
console.log(document.querySelector('#header').innerHTML);  // Saída: Hello World

// Adicionando um servidor HTTP para manter o container em execução
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>' + document.querySelector('#header').innerHTML + '</h1>');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
