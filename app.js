var express = require('express');
var app = express();

app.use(express.json());
app.use(express.urlencoded());

// Routes/endpoint initialization
var routes = require("./routes");
routes(app);

// Start the server on port 3000
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://localhost:%s', port);
});

module.exports = server;
