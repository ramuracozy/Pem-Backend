<?php
class person{
    public $nama;
    public $alamat;
    public $jurusan;

    public function __construct($nama, $alamat, $jurusan){
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan; 
    }
    public function cetak(){
        echo '<br>Nama : ' .$this->nama;
        echo '<br> Alamat :' .$this->alamat;
        echo '<br> Jurusan :' .$this->jurusan;
    }
}
// $edo = new person('Edo Riansyah', 'Depok', 'Teknik Informatika');
// $ahmad = new person('Ahmad Fakhri', 'Bandung', 'Sistem Informasi');
?>