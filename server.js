const server = require('http').createServer();
const io = require('socket.io')(server);

//let port = 3000;
server.listen(3000);

console.log("opening a stocket : 3000 ");

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