const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});
/*
app.post("/api/notes", (req, res, next) => {
  const note = req.body;
  console.log(note);
  res.status(200).json({
    messages: "note fetched successfully",
    notes: notes
  });
});
app.get("/api/notes", (req, res, next) => {
  const notes = [
    {
      id: "fad123456",
      title: "first server-side note",
      content: "this comes from server page"
    },
    {
      id: "fad123456",
      title: "second server-side note",
      content: "this comes from server page"
    }
  ];
});
*/
app.post("/api/notes", (req, res, next) => {
  const note = req.body;
  console.log(note);
  res.status(201).json({
    message: "Note added successfully"
  })
});
app.get("/api/notes", (req, res, next) => {
  const notes = [
    {
      id: "fad123456",
      title: "first server-side note",
      content: "this comes from server page"
    },
    {
      id: "fad123456",
      title: "second server-side note",
      content: "this comes from server page"
    }
  ];

  res.status(200).json({
    messages: "note fetched successfully",
    notes: notes
  });
});

app.get("*", (req, res, next) => {
  const note = req.body;
  console.log(note);
  res.status(301).json({
    message: "wrong page"
  })
});

module.exports = app;
