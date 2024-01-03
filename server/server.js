const express = require('express');
const coordinatesData = require('./Austin.json');
const protobuf = require('protobufjs');
const proto = protobuf.loadSync('./racing_data.proto');
const dgram = require('dgram');
const http = require('http');
const app = express();
const server = http.createServer(app);
const port = 8080;
const cors = require('cors');
const socketIO = require('socket.io');
const RacingData = proto.lookupType('RacingData');
let latestData;

app.use(cors())

//Express server

const io = socketIO(server);

io.on("connection",(socket)=>{
  console.log("connection successful");
  socket.on('disconnect',()=>{
    console.log('client disconnected');
  })
})

app.get('/api/coordinates', (req, res) => {
  res.json(coordinatesData);
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//UDP server

const udpServer = dgram.createSocket('udp4');
const UDP_PORT = 9876; 

udpServer.on('error', (err) => {
  console.log(`UDP server error:\n${err.stack}`);
  udpServer.close();
});

udpServer.on('message', (msg) => {
  const decodedData = RacingData.decode(msg);
  latestData = RacingData.toObject(decodedData, {
    defaults: true,
    longs: String,
    enums: String,
    bytes: String,
  });
  console.log(`Received data: ${latestData}`);
  io.emit('udpData', latestData);
});

udpServer.on('listening', () => {
  const address = udpServer.address();
  console.log(`UDP server listening on ${address.address}:${address.port}`);
});

udpServer.bind(UDP_PORT);



