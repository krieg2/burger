const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));



app.listen(PORT, () => {
  console.log("Listening on PORT " + PORT);
});
