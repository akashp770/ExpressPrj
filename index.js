var express = require("express");

app.post("/create-user", (req, res) => {
  res.send("List of users");
});

app.put("/update-user", (res, req) => {
  res.send("List ofn user");
});
