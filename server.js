const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
let { PythonShell } = require("python-shell");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const io = require("socket.io")();

//Get message from server on page mount
app.get("/api/welcome", (req, res) => {
  res.send({ welcome: "Successfuly connected to backend!" });
});

//Socket.io for clock
io.on("connection", client => {
  client.on("subscribeToTimer", interval => {
    console.log("client is subscribed to timer with interval ", interval);
    setInterval(() => {
      client.emit("timer", new Date().toLocaleTimeString());
    }, interval);
  });
});

//Send requested image to frontend
app.get("/file", function(req, res, next) {
  var options = {
    root: __dirname + "/",
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true
    }
  };

  res.sendFile("./figure.png", options, function(err) {
    if (err) {
      next(err);
    } else {
      console.log("Sent an image");
    }
  });
});

//Receive all parameters and data set and call python script to calculate, then send the results back to frontend
app.post("/calculate", (req, res) => {
  const data = req.body;
  let options = {
    mode: "text",
    pythonOptions: ["-u"], // get print results in real-time
    scriptPath: "engine/",
    args: [
      data.allData[0],
      data.allData[1],
      data.allData[2],
      data.allData[3],
      data.allData[4]
    ]
  };

  //call python script and make calculations
  PythonShell.run("RadialBasisNN.py", options, function(err, results) {
    if (err) throw err;

    //send results to frontend
    res.send(results);
  });
});

//listen on port 5000
app.listen(5000, function() {
  console.log("Started on PORT 5000");
});
io.listen(8000);
console.log("Socket.io on port 8000");
