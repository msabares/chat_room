const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');
const bodyParser = require('body-parser');

let userNameList = [];

//Middleware??
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

io.on('connection', function(socket){

    socket.on('connect status', function (userName, userColor) {
        userNameList.push({userName: userName, colorID: userColor});
        io.emit('connectStatus', userName, userColor);
    });

    socket.on('chat message', function(userName,userColor,message){
        if(message.length > 0) {
            io.emit('chatMessage', userName, userColor , message);
        }
    });

    socket.on('disconnected status', function (userName) {
        userNameList.splice(userNameList.indexOf(userName), 1);
        io.emit('disconnectStatus', userName);
    })
});

app.get('/userList', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(userNameList);
});

http.listen(3000, function(){
    console.log('Server: http://localhost:3000');
});