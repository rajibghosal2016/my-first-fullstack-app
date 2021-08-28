const express = require("express");
const mongoose = require("mongoose");
const route = require("./route/router");
const cors = require("cors");
const bodyParser = require("body-parser");

const url = "your mongodb Server";

const app = express();
const PORT = 8000;

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", route);

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connected to mongodb server");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
