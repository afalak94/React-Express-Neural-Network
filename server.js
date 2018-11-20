const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
let { PythonShell } = require("python-shell");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/welcome", (req, res) => {
  res.send({ welcome: "Successfuly connected to backend!" });
});

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
  //let PythonShell = require("python-shell");
  PythonShell.run("RadialBasisNN.py", options, function(err, results) {
    if (err) throw err;

    //send results to frontend
    res.send(results);
  });

  //res.send(options.args);
});

app.listen(5000, function() {
  console.log("Started on PORT 5000");
});
