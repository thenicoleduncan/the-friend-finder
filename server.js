const express = require('express');
const path = require(`path`);
const friendsList = require(`./app/data/friends`);

const app = express();
const PORT = process.env.PORT  || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require(`./app/routing/apiRoutes`)(app);
require(`./app/routing/htmlRoutes`)(app);

 
app.listen(PORT, function () {
    console.log(`Listening on http://localhost:${PORT}`)
});