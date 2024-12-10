// const nama = "Raka Muhammad Rabbani";
// const umur = 20;
// const jurusan = "Teknik Informatika";

// console.log(nama, umur, jurusan);
console.log('======');
console.log('Contoh Kondisional');

const nilai = 90;
let grade = "";
if (nilai > 90){
    grade = 'A';
} else if(nilai > 80) {
    grade = 'B';
} else {
    grade = 'C';
}
console.log(`Nilai anda : ${grade}`);
// jenis - jenis function
// arrow function
// declare function
// function expression

console.log('Contoh Object');
const user = {
    nama: "Raka Muhammad Rabbani",
    address: "Bogor",
    age: 20,
    isMarried: false,
}
// didalam object ada dua bagian
// yaitu key dan value
// contoh key => name, address, age
// contoh value => "Raka Muhammad Rabbani"
// console.log(user.nama)
const {nama, address, age, isMarried} = user;
console.log(nama, address, age, isMarried);