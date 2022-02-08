const fs = require("fs");
const path = require("path");

const express = require("express");
const app = express();

app.get("/create", (req, res) => {
  var timestamp = currentTime.toString();
  var currentTime = date.getTime();
  var date = new Date();
  var dateAndTime = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}`;
  var finalTime = `${dateAndTime} ${".txt"}`;
  fs.writeFile(`${finalTime}`, timestamp, function (err) {
    if (err) throw err;
    console.log("file created");
  });
});

app.get("/files", (req, res) => {
  fs.readdir(function (err, files) {
    if (err) throw err;
    res.json({ files });
    console.log(files);
  });
});


app.listen(3000);