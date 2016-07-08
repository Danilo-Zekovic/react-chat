/*
var express = require('express')
var path = require('path')
var compression = require('compression')
var http = require('http')
var socketIo = require('socket.io')

var app = express()

var server = http.createServer( app )
var io = socketIo.listen( server )
*/
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var compression = require('compression')
var path = require('path')

//app.use(compression())

// serve our static stuff like index.css
//app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory works
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/' + 'index.html')
})



var PORT = process.env.PORT || 8080
server.listen(PORT, function() {
  console.log('Production Express server running at localhost:' + PORT)
})

//io.listen(http)  // tried not doing anything
io.on('connection',  function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
    });
});
