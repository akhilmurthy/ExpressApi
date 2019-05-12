let express = require("express");
let path = require("path");

let app = express();
let personRoute = require("./routes/person");
let customerRoute = require("./routes/customer");

let bodyParser = require("body-parser");

app.use(bodyParser.json());

//MiddleWare
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});
app.use(personRoute);
app.use(customerRoute);
app.use(express.static("public"));
//Handler for 404 - Resource not found
app.use((req, res, next) => {
  res.status(404).send("We think you are lost");
});
//Handler for 500 - Internal Server Error
//serves an html file 500.html
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, "../public/500.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
