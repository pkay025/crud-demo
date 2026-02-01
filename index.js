const express = require("express");
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send("Hello World!, Emmanuel is a software engineer");
});

app.get('/about', (request, response) => {
    response.send("My name is Emmanuel, I am a software engineer and I am 23 years old");
});

app.get('/contact', (request, response) => {
    response.send("My email is [EMAIL_ADDRESS]");
});

app.get('/skills', (request, response) => {
    response.send("My skills are HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, React.js");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});