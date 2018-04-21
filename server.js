var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;
var app = express();
// ... other imports
const path = require("path")

// ... other app.use middleware setups
app.use(express.static(path.join(__dirname, "client", "build")))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());



// ...
// Right before your app.listen(), add this:
app.get("/hello", (req, res) => {  
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});