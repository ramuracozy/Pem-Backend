// import AlumniController
const StudentController = require("../controllers/AlumniController");
// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Alumni API Express");
});

// Membuat routing alumni
// Menambahkan route untuk melihat data secara keseluruhan
router.get("/alumnis", AlumniController.index);

// Menambahkan route untuk menambahkan data alumni
router.post("/alumnis", AlumniController.store);

// Menambahkan route untuk mengupdate data alumni
router.put("/alumnis/:id", AlumniController.update);

// Menambahkan route untuk menghapus data alumni
router.delete("/alumnis/:id", AlumniController.destroy);

// Menambahkan route untuk menampilkan detail data alumni
router.get("/alumnis/:id", AlumniController.show);
// export router
module.exports = router;
