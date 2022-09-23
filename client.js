let io = require('socket.io-client');

const socket = io('ws://127.0.0.1:3000');

console.log("connection to server ");


socket.on("Topic1", (arg) => {
    console.log("Message from Server - hello : "+arg);
})


socket.emit("howdy", " I am a Client");



socket.on("number", (arg) => {
    console.log("Message from Server - number : "+arg);
})



//console.log("connection closed ");