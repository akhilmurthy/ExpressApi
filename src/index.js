import express from "express";
import path from "path";
import customerRoute from "./routes/customer";
import bodyParser from "body-parser";

let app = express();

app.use(bodyParser.json());

//MiddleWare
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl} `, req.body);
  next();
});
app.use(customerRoute);
app.use(express.static("public"));
//Handler for 404 - Resource not found
app.use((req, res, next) => {
  res.status(404).send("We think you are lost");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
