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
  //send a message to client
  socket.emit("WeatherTopic", "WeatherTopic: Weather Information");

  //receive a message from client
  socket.on("ClientTopic", (arg) => {
      console.log('Message received from client  - ClientTopic : '+ arg);
  });

  setInterval(()=>{
      let anum = parseInt(Math.random()*10);
      console.log("ServerTopic1: A number is sent to client : "+anum)
      socket.emit('ServerTopic1', anum);
    }, 4000);
  
    setInterval(()=>{
      let anum = parseInt(Math.random()*10);
      console.log("ServerTopic2: A number is sent to client : "+anum)
      socket.emit('ServerTopic2', anum);
    }, 6000);

});

//console.log("connection closed ");