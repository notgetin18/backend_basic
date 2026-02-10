require('dotenv').config()
const express = require("express");
const app = express();

console.log(process.env.PORT)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
res.send("Amitsingh4063223")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
