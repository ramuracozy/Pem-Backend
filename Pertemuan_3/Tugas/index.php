<?php
    require "hewan.php";
    $animals = new animal([
        ['name' => 'Kucing', 'habitat' => 'Rumah', 'makanan' => 'Daging', 'keunikan' => 'Dapat mendengar suara frekuensi tinggi'],
        ['name' => 'Anjing', 'habitat' => 'Rumah, taman', 'makanan' => 'Daging', 'keunikan' => 'Setia pada pemiliknya'],
    ]);
    
    echo 'Index - Menampilkan semua data hewan <br>';
    $animals->index();
    echo '<br>';

    echo 'Store - Menambahkan data hewan <br>';
    $animals->store([
        'name' => 'Burung Hantu',
        'habitat' => 'Hutan',
        'makanan' => 'Karnivora',
        'keunikan' => 'Dapat memutar kepala hingga 270 derajat',
    ]);
    
    $animals->store([
        'name' => 'Ikan Paus',
        'habitat' => 'Lautan',
        'makanan' => 'Karnivora',
        'keunikan' => 'Hewan mamalia terbesar di dunia',
    ]);
    $animals->index();
    echo '<br>';

    echo 'Update - Mengubah data hewan <br>';
    $animals->update(3, [
        'name' => 'Ikan hiu',
        'habitat' => 'Lautan',
        'makanan' => 'Karnivora',
        'keunikan' => 'Hewan predator terganas di lautan',
    ]);
    echo '<br>';

    echo 'Destroy - Menghapus data hewan <br>';
    $animals->destroy(1);
    $animals->index();
    echo '<br>';

    
?>