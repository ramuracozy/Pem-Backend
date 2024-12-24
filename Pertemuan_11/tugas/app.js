// import express
const express = require("express");
//Untuk Mengimport router
const router = require("./routes/api.js");
//Untuk Membuat object express
const app = express();

//Menggunakan middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(router);

// mendefinisikan port
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});