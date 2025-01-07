// import Model Student
const db = require("../config/database");
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
  
  //  TODO 2: memanggil method create.
  //  Method create mengembalikan data yang baru diinsert.
  //  Mengembalikan response dalam bentuk json.
    
  // Untuk Menambah data siswa atau students
    const { nama } = req.body;
    Student.create(nama)

    const data = {
      message: "Menambahkan data siswa atau student",
      data: [],
    };

    res.json(data);
  }

  async update(req, res) {
    const { id } = req.params;
    // mencari id student atau siswa yang ingin diubah 
    const student = await Student.find(id);

    if (student) {
      // melakukan update data student atau siswa
      const student = await Student.update(id, req.body);
      const data = {
        message: `Merubah data student atau siswa`,
        data: student,
      };
      res.status(200).json(data);
    }
    else{
      const data = {
        message: `Data student atau siswa tidak ditemukan`,
      };
      res.status(404).json(data);
    }
   
  }

  destroy(req, res) {
    const { id } = req.params;

    const data = {
      message: `Menghapus data siswa atau student id`,
      data: [],
    };

    res.json(data);
  }

  async destroy(req, res) {
    const {id} = req.params;
    const student =await Student.find(id);

    if (student){
      await Student.delete(id);
      const data = {
        message: `Menghapus data students atau siswa`,
      };
      res.status(404).json(data);
    }
  }

  static delete(id){
    return new Promise((resolve, reject) => {
      const sql =`DELETE FROM students WHERE id = ?`;
      db.query(sql, id, (err, result)=>{
        resolve(results);
      });
    });
  }

  async show(req, res){
    const {id} = req.params;
    // mencari data student atau siswa berdasarkan id
    const student = await Student.find(id);

    if (student){
      const data = {
        message: `Menampilkan detail data student atau siswa`,
        data: student,
      };
      res.status(200).json(data);
    }
    else{
      const data = {
        message: `Students atau siswa tidak ditemukan`,
      };
      res.status
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
