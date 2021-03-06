"use strict";

// Include require packages for our server.

const express = require("express");
const cors = require("cors");

// Require monogoose.
// We are going to include mongoose inside models file.
// Model is instance of mongoose.
const mongoose = require("mongoose");

require("dotenv").config();

// require the controllers we are going to work with!
// artic API controller

const articController = require("./controller/artic.controller");

// CRUD controllers

const crud = require("./controller/artic.crud.contreller");
// 2- Initialize the server packages.

const app = express();

// Define the port.
const PORT = process.env.PORT || 8081;

// Connect to mongoose
mongoose.connect("mongodb://localhost:27017/art", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 27017 => this is the port where mongo is working.

// Define our middleware (use) :

// - Enable cors.
app.use(cors());
// - Enable JSON data.
app.use(express.json());

// Use mongoose.

// Server endpoints

// Proof of life endpoint : "define our first route"
app.get("/", (req, res) => {
  res.send("Server is working!");
});

// Get request from the art pieces from the API.

app.get("/art", articController.getArtData);

// CRUD endpoints

// create a favourite art piece endpoint  (CREATE / POST)
app.post("/art/favourite", crud.createFavourtieArtPiece);
// getting the favourite pieces of an art endpoint. (READ / GET)
app.get("/art/favourite", crud.getFavourtieArtPiece);
// deleting a favourtite piece of art endpoint. (DELETE / DELETE)
app.delete("/art/favourite/:slug", crud.deleteFavourtieArtPiece);
// updating a favourite pieces of art endpoint (UPDATE / PUT)
app.put("/art/favourite/:slug", crud.updateFavourtieArtPiece);

// :slug => params, we are sending a params

// test the server if its working
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
