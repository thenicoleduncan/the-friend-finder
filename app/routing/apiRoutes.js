app.get('/api/friends', function (request, response) {
    response.sendFile(path.join(__dirname, "./app/data/friends.js"));
});

app.post('/api/friends', function (request, response) {
    response.send('Hello World')
});