<?php
// Membuat class hewan
class animal {
    private $animals = [];

    // Metode construct untuk mengisi data awal hewan
    public function __construct($animaldata) {
        $this->animals = $animaldata;
    } 

    // Metode index untuk menampilkan data hewan
    public function index(){
        foreach ($this->animals as $animal) {
            echo "Nama hewan: " . $animal['name'] . "<br>";
            echo "Habitat: " . $animal['habitat'] . "<br>";
            echo "Jenis makanan: " . $animal['makanan'] . "<br>";
            echo "Keunikan: " . $animal['keunikan'] . "<br><br>";
        }
    }

    // Metode untuk menambahkan data hewan baru
    public function store($animalnew){
        array_push($this->animals, $animalnew);
    }

    // Metode untuk memperbarui data hewan
    public function update($index, $updateanimal){
        $this->animals[$index] = $updateanimal;
    }

    // Metode untuk menghapus data hewan
    public function destroy($index) {
        array_splice($this->animals, $index, 1);
    }
}

?>