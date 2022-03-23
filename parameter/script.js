// function tambah(a, b) {
//   return a + b
// }
// var hasil = tambah(2,5);
// console.log(hasil);


// function hitung(angkaPertama, angkaKedua){
//   return angkaPertama+angkaKedua
// }
// if (parameterKetiga == 'tambah'){
//   return angkaPertama + angkaKedua
// }
// var hasil = hitung (10,11);
// console.log(hasil)

// bagian 1

// console.log('panggil pertama');

// bagian 2

// const angkaPertama = 1;
// const angkaKedua = 2;

// console.log(angkaPertama + angkaKedua);

// bagian 3

// console.log('panggilan terakhir');

function bagian1() {
  return 'panggil pertama'
}

const bagian2 = (parameter1, parameter2, parameter3) => {
  const angkaPertama = parseInt(parameter1);
  const angkaKedua = parameter2;

  let hasil = 0;

  switch (parameter3) {
      case 'kurang':
          hasil = angkaPertama - angkaKedua;
          break;
      case 'bagi':
          hasil = angkaPertama / angkaKedua;
          break;
      case 'tambah':
          hasil = angkaPertama + angkaKedua;
          break;
      default:
          break;
  }

  return hasil
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function bagian3() {
  return 'panggilan terakhir'
}

async function main() {

  const bagian1Result = bagian1();
  console.log(bagian1Result)

  const bagian3Result = bagian3();
  console.log(bagian3Result)

  await timeout(3000)

  const bagian2Result = bagian2(10, 20, 'tambah');
  console.log(bagian2Result)
}

main()


// const namaFunction2 = () => {
//     // kode disini
// }

// const namaFunction3 = () => new Promise((resolve, reject) => {
//     // kode disini
// })