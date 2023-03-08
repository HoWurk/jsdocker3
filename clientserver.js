let express = require('express');
let port = 80;
let server = express();
server.listen(port);
console.log('Server is running on port ', port);


server.use(express.static(__dirname));

server.get('/', function (req, res) {
    res.sendFile(__dirname + "/simplepage.html");
});

server.get('/new', function (req, res) {
    res.sendFile(__dirname + "/new.html")
});