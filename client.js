let io = require('socket.io-client');

const socket = io('ws://127.0.0.1:3000');

console.log("connection to server ");


socket.emit("ClientTopic", " I am a Client - Testing system");

socket.on("WeatherTopic", (arg) => {
    console.log("Message from Server - WeatherTopic : "+arg);
})

socket.on("ServerTopic1", (arg) => {
    console.log("Message from Server - ServerTopic1 : "+arg);
})

socket.on("ServerTopic2", (arg) => {
    console.log("Message from Server - ServerTopic2 : "+arg);
})





//console.log("connection closed ");