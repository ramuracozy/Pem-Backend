<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalsController extends Controller
{
    //
    public $animals= [
        ['name' => 'Ayam', 'habitat' => 'perkampungan'],
        ['name' => 'Paus', 'habitat' => 'Laut lepas'],
    ];
    public function index(){
        foreach ($this->animals as $animal) {
            echo "Nama hewan: " . $animal['name'] . "<br>";
            echo "Habitat:" . $animal['habitat'] . "<br>";
        }
    }

    public function store(Request $request){
         // Menambahkan data hewan baru ke dalam array $animals
         array_push($this->animals, [
            'name' => $request->nama,
            'habitat' => $request->habitat
        ]);

        echo "Menambahkan hewan baru";
        echo "<br>";
        echo "Nama hewan: $request->nama";
        echo "<br>";
        echo "Habitat hewan: $request->habitat";
    }

    public function update(Request $request, $id){
        // Mengubah data hewan
        $this->animals[$id] = $request->nama;
        $this->animals[$id] = $request->habitat;

        // Menampilkan data terbaru
        $this->index();
        echo "Mengupdate hewan baru";
        echo "<br>";
        echo "Nama hewan: $request->nama";
        echo "<br>";
        echo "Habitat hewan: $request->habitat";
    }

    public function destroy($id){
        $this->index();
        array_splice($this->animals, $id, 1);
        echo "Menghapus data hewan id $id";
    }
}
