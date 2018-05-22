var express = require('express')
var ws = require('ws')
var app = express()
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/client.html');
})
app.listen(3003, function () {
    console.log('Example app listening on port 3003!')
})

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 40510})
wss.on('connection', function (ws) {
    ws.on('message', function (message) {
        console.log('received: %s', message)
    })
    setInterval(
        () => ws.send(`${new Date()}`),
        1000
    )
})
