const express = require("express");
const app = express();
require("dotenv").config();

const Dog = require("./models/dog");
const Owner = require("./models/owner");

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use(express.json());

app.get("/owners", (req, res) => {
  Owner.query().then((owners) => {
    // returns an array of owners objects, so you want to destructure it so it displays each one in json format
    res.json({ owners });
  });
});

app.get("/dogs", (req, res) => {
  Dog.query().then((dogs) => {
    res.json({ dogs });
  });
});

app.listen(process.env.EXPRESS_PORT, (err) => {
  if (err) console.log(err);
  console.log(
    `Listening on http://${process.env.DB_HOST}:${process.env.EXPRESS_PORT}`
  );
});
