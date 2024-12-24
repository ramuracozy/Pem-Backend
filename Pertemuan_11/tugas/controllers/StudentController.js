//Untuk Mengimport file students.js
const students = require("../data/students.js");

// Membuat Class StudentController
class StudentController {
// Untuk Melihat keseluruhan data siswa atau students
  index(req, res) {
    const data = {
      message: "Menampilkan semua data siswa",
      data: [students],
    };
    res.json(data);
  }

// Untuk Menambah data siswa atau students
  store(req, res) {
    const { nama } = req.body;
    students.push(nama)
    const data = {
      message: `Menambahkan data siswa: ${nama}`,
      data: [students],
    }
    res.send(data);
  }

// Untuk Mengubah atau mengupdate data siswa atau students
  update(req, res) {
    const {id} = req.params;
    const {nama} = req.body;
    students.splice(id, 1, nama);
    const data = {
      message: `Mengedit data siswa ${id}, nama ${nama}`,
      data: [students],
    }
    res.json(data);
  }

// Untuk Menghapus data siswa atau students
  destroy(req, res) {
    const {id} = req.params;
    students.splice(id, 1);
    const data = {
      message: `Menghapus data siswa ${id}`,
      data: [students],
    }
    res.send(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
