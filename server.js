const express = require('express');
const path = require(`path`);
const friendsList = require(`./app/data/friends`);

// const apiRoutes = require(`./app/routing/apiRoutes`);
// const htmlRoutes = require(`./app/routing/htmlRoutes`);


const app = express();
const PORT = process.env.PORT  || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', function (request, response) {
    response.sendFile(path.join(__dirname, "./app/public/home.html"));
});

app.get('/survey', function (request, response) {
    response.sendFile(path.join(__dirname, "./app/public/survey.html"));
});


app.get('/api/friends', function (request, response) {
    response.sendFile(path.join(__dirname, "./app/data/friends.js"));
});

app.post('/api/friends', function (request, response) {
    response.send('Hello World')
});


 
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`)
});