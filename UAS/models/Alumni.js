// import database
const db = require("../config/database");
// membuat class Alumni
class Alumni {
  // buat fungsi
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from alumnis";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(data) {
    // melakukan insert data ke database
    const id = await new Promise((resolve, reject) =>{
      const sql = "INSERT INTO alumnis SET ?";
      db.query(sql,data,(err, results) => {
        resolve(results.insertId);
      });
    });

    // melakukan querry berdasarkan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM alumnis WHERE id = ?";
      db.query(sql, id,(err, results) => {
        resolve(results);
      });
    });
  }

  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE alumnis SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });
    // mencari data yang baru diupdate atau diubah
    const alummni = await this.find(id);
    return alummni;
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM alumnis WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM alumnis WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [alummni] = results;
        resolve(alummni);
      });
    });
  }
}

// export class Alumni
module.exports = Alumni;
