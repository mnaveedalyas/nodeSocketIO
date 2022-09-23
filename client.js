let io = require('socket.io-client');

const socket = io('ws://127.0.0.1:3000');

console.log("connection to server ");

socket.on("hello", (arg) => {
    console.log("Message from Server - hello : "+arg);
})

socket.on("number", (arg) => {
    console.log("Message from Server - number : "+arg);
})

socket.emit("howdy", " I am a Client");

//console.log("connection closed ");