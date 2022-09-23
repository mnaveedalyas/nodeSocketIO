
/*
let io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(()=>{
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);

});
*/

//import { Server } from "socket.io";

//const Server = require("socket.io");

//const io = new Server(3000);
let port = 3000;
let io = require('socket.io')(port);

console.log("opening a stocket ");

io.on("connection", (socket) => {
    //send a message to client
    socket.emit("hello", "world");

    //receive a message from client
    socket.on("howdy", (arg) => {
        console.log('Message received from client  - howdy : '+ arg);
    });

    setInterval(()=>{
        let anum = parseInt(Math.random()*10);
        console.log("A number sent to client : "+anum)
        socket.emit('number', anum);
      }, 2000);
    

});

//console.log("connection closed ");