// import Model Alumni

const Alumni = require("../models/Alumni");

// buat class AlumniController
class AlumniController {
  // buat fungsi
// Method untuk memanggil keseluruhan data alumni
  async index(req, res){
    const alumni = await Alumni.all();
    if (alumnni.length > 0) {
      // Jika data tersedia
      const data = {
          message: 'Get All Resource',
          data: students,
      };
      res.status(200).json(data);
    } else {
      // Jika data kosong
      const data = {
          message: 'Data is empty',
      };
      res.status(200).json(data);
    
    }
  }
  async store(req, res){
    const { name, phone, addres, graduation_year, status, company_name, position } = req.body;

    // jika data tidak ditemukan maka kirim respon error
    if (!name|| !phone || !addres || !graduation_year || !status || !company_name || !position){
      const data = {
        message: "Semua data harus dikirim",
      };
      return res.status(422).json(data);
    }
    else{
      const alumni = await Alumni.create(req.body);

      const data = {
        message: "Berhasil menambahkan data alumni",
        data: alumni,
      };
      return res.status(201).json(data);
    }
  }

  // Membuat method untuk update data alumni
  async update(req, res) {
    const {id} = req.params;
    // mencari id alumni yang diupdate atau diubah
    const alumni = await Alumni.find(id);

    if(alumni){
      // melakukan update data alumni
      const alumni = await Alumni.update(id, req.body);
      const data = {
        message: "Berhasil Mengedit data alumni",
        data: alumni,
      };
      res.status(200).json(data);
    }
    else{
      const data = {
        message: "data alumni tidak ditemukan",
      };

      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    const {id} = req.params;
    const alumni = await Alumni.find(id);

    if (alumni) {
      await Alumni.delete(id);
      const data = {
        message: "Berhasil menghapus data alumni",
      };
      res.status(200).json(data);

    }else{
      const data = {
        message: "Data alumni tidak ditemukan",
      };
      res.status(404).json(data);
    }
  }

  // Membuat method untuk melihat detail data alumni
  async show(req, res) {
    const {id} = req.params;
    // Mencari data alumni berdasarkan id
    const alumni = await Alumni.find(id);

    if (alumni) {
      const data = {
        message: "Menampilkan detail data alummni",
        data: alumni,
      };
      res.status(200).json(data);
    }
    else {
      const data = {
        message: "Data alumni tidak ditemukan",
      };
    }
    res.status(404).json(data);
  }
}

// membuat object AlumniController
const object = new AlumniController();

// export object AlumniController
module.exports = object;
