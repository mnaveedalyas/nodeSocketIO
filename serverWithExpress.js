//const server = require('http').createServer();
//const io = require('socket.io')(server);

const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000);

console.log("opening a Web Server at http://localhost:3000/ ");
//let port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("<h1>App is running </h1>");
})




io.on("connection", (socket) => {
    console.log("opening a stocket at :3000 ");
    //send a message to client
    socket.emit("Topic1", "Weather Information");

    //receive a message from client
    socket.on("howdy", (arg) => {
        console.log('Message received from client  - howdy : '+ arg);
    });

    setInterval(()=>{
        let anum = parseInt(Math.random()*10);
        console.log("A number sent to client : "+anum)
        socket.emit('number', anum);
      }, 4000);
    
      setInterval(()=>{
        let anum = parseInt(Math.random()*10);
        console.log("A 2ndnumber sent to client : "+anum)
        socket.emit('2ndnumber', anum);
      }, 6000);

});


//console.log("connection closed ");