const express = require("express");
const cors = require("cors");
const router = require("./routes/routes.js");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
var allowCrossDomain = function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
};
app.use(cors({ allowCrossDomain }));
const port = process.env.PORT || 3000;

app.use("", router);

app.listen(port, () => {
  console.log(`Server is running at port # ${port}`);
});
