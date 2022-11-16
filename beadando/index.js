const fs = require("fs");
const { parse } = require("csv-parse");

const Websocket = require('ws');

const wss = new Websocket.Server({port:8082});

const data = [];
const state = 0;
fs.createReadStream("./dtl.csv").pipe(parse({delimiter:";"}))
  .on("data", function (row) {
    data.push(row);
  })
  .on("error", function (error) {
    console.log(error.message);
  })
  .on("end", function () {
    console.log("finished");
  });
  console.log(data.length);
wss.on("connection", ws=>{
  console.log("Client connected");

  var n = 0;
  function sendinData(){
    if(n == data.length){
      n = 0;
    }
    ws.send(JSON.stringify(data[n]));
    n++;
  }
  

  var t=setInterval(sendinData,17);
})