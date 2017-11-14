var express = require('express');
var morgan = require('morgan');
var request = require('request');
var app = express();
app.use(morgan("dev"));
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var port = 80;
var server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});

app.post('/api/hello', function (req, res) {
    // Call 'metrics' service (ASP.NET WebAPI)
    request.get('http://metrics/api/server', function(err, response, body) {

        // Include response from /metrics service
        res.send({
            "type": "message",
            "text": "Hello " + req.body.from.name.split(' ')[0] + ", here's current server status: " + body
        });
    });
});

    
    // // Call 'metrics' service (ASP.NET WebAPI)
    // request.get('http://metrics/api/server', function(err, response, body) {

    //     // Include response from /metrics service
    //     res.send({
    //         "type": "message",
    //         "text": "Hello " + req.body.from.name.split(' ')[0] + ", here's current server status: " + body
    //     });
    // });




    // CODE SNIPPET
    // // Call 'metrics' service (ASP.NET WebAPI)
    // request.get('http://metrics/api/server', function(err, response, body) {

    //     // Include response from /metrics service
    //     res.send({
    //         "type": "message",
    //         "text": "Hello " + req.body.from.name.split(' ')[0] + ", here's current server status: " + body
    //     });
    // });