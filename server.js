const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "John", lastName: "Doe" },
    { id: 2, firstName: "Steve", lastName: "Smith" }
  ];

  res.json(customers);
});

app.post("/calculate", (req, res) => {
  const data = req.body;
  res.send(data.allData);
});

app.listen(5000, function() {
  console.log("Started on PORT 5000");
});
