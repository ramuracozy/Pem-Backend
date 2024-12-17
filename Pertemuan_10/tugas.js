// Fungsi untuk mendownload file dengan simulasi waktu 5 detik
// Nama file yang ingin didownload
// Mengembalikan hasil download

  const downloadFile = (file) => {
    console.log(`Download ${file} sedang berlangsung.....`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulasi keberhasilan download
        if (success) {
          resolve(`${file} berhasil didownload`);
        } else {
          reject(`${file} Gagal didownload`);
        }
      }, 7000); // Waktu download 7 detik
    });
  };

// Fungsi untuk menampilkan hasil download
  const showDownload = (result) => {
    console.log("Download telah selesai");
    console.log(`${result}`);
  };
  
  
  
// Fungsi utama menggunakan Async/Await

  const main = async () => {
    try {
      const result = await downloadFile("Postman.exe"); // Menunggu proses download selesai
      showDownload(result); // Menampilkan hasil download
    } catch (error) {
      console.error(error); // Menangkap dan menampilkan error
    }
  };
  
  main();