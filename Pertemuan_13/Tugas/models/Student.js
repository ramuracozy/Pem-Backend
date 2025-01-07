// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    // Membuat fungsi untuk memasukkan atau menginsert data
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id){
    return new Promise((resolve, reject) => { 
      const sql = " SELECT * FROM students WHERE id = ?";
      db.query(sql, id,(err, results) => {
        const [students] = results;
        resolve(students);
      });
    });
  }
  
  static async update(id, data){
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql,[data, id], (err, results)=>{
        resolve(results);
      });
    });
    // Mencari data student atau siswa yang baru diubah
    const student = await this.find(id);
    return student;
  }

  static find(id){
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, results)=>{
        const [student] = results;
        resolve(student);
      });
    });
  }

}

// export class Student
module.exports = Student;
