const server = require('http').createServer();
const io = require('socket.io')(server);

//let port = 3000;
server.listen(3000);

console.log("opening a stocket : 3000 ");

io.on("connection", (socket) => {
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