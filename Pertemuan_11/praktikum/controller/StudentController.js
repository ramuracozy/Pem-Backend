// Membuat class studentcontroller
class StudentController {
    index(req, res) {
        res.send("Menampilkan semua data students");
    }

    store(req, res) {
        res.send("Menambahkan data students");
    }

    update(req, res) {
        const {id} = req.params;
        res.send(`Mengedit id students ${id}`);
    }

    delete(req, res) {
        const {id} = req.params;
        res.send(`Menghapus id students ${id}`);
    }
}
// Membuat object studentcontroller
const object = new StudentController();

// export object studentcontroller
module.exports = object;
