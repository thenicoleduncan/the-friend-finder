const path = require(`path`);

module.exports = function (app) {


    app.get('/api/friends', function (request, response) {
        response.sendFile(path.join(__dirname, "../data/friends.js"));
    });
    
    app.post('/api/friends', function (request, response) {
        response.send('Hello World')
    });

}