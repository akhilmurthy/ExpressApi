import mongoose from "mongoose";
import credentials from "../secrets";

var username = credentials.username;
var password = credentials.password;

mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0-uehug.mongodb.net/Customers`,
  { useNewUrlParser: true }
);

let CustomerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  }
});

export default mongoose.model("Customer", CustomerSchema);
