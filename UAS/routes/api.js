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
router.get("/alumni", AlumniController.index);

// Menambahkan route untuk menambahkan data alumni
router.post("/alumni", AlumniController.store);

// Menambahkan route untuk mengupdate data alumni
router.put("/alumni/:id", AlumniController.update);

// Menambahkan route untuk menghapus data alumni
router.delete("/alumni/:id", AlumniController.destroy);

router.get("/alumni/status/freshgraduate", AlumniController.freshgraduate);

router.get("/alumni/status/employeed", AlumniController.employeed);

router.get("/alumni/status/unemployeed", AlumniController.unemployeed);

// Menambahkan route untuk menampilkan detail data alumni
router.get("/alumni/:id", AlumniController.show);
// export router
module.exports = router;
