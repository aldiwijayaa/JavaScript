// bagian 1

// console.log('panggil pertama');

// bagian 2

// const angkaPertama = 1;
// const angkaKedua = 2;

// console.log(angkaPertama + angkaKedua);

// bagian 3

// console.log('panggilan terakhir');

// function bagian1() {
//     return 'panggil pertama'
// }

// const bagian2 = (parameter1, parameter2, parameter3) => {
//     const angkaPertama = parseInt(parameter1);
//     const angkaKedua = parameter2;

//     let hasil = 0;

//     switch (parameter3) {
//         case 'kurang':
//             hasil = angkaPertama - angkaKedua;
//             break;
//         case 'bagi':
//             hasil = angkaPertama / angkaKedua;
//             break;
//         case 'tambah':
//             hasil = angkaPertama + angkaKedua;
//             break;
//         default:
//             break;
//     }

//     return hasil
// }

// function timeout(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function bagian3() {
//     return 'panggilan terakhir'
// }

// async function main() {

//     const bagian1Result = bagian1();
//     console.log(bagian1Result)

    
//     const bagian3Result = bagian3();
//     // console.log(bagian3Result)
//     setTimeout(function () {
//       console.log(bagian3Result);
//       }, 5000);

//       await timeout(3000)
//     const bagian2Result = bagian2(10, 20, 'tambah');
//     console.log(bagian2Result)



    
// }

// main()


// const namaFunction2 = () => {
//     // kode disini
// }

// const namaFunction3 = () => new Promise((resolve, reject) => {
//     // kode disini
// })



// contoh Promise

// const myPromise = new Promise ((resolve, reject) => {
//   let ditepati= true;

//   if(ditepati) {
//     resolve('Promise is resolved successfully.');
//   } else {
//     reject('Promise is Rejected.');
//   }

// });

//  console.log(myPromise)

 const arrayTest = [
  {
    name:'amin',
    role:'owner',
    error:'error field not allowed'
  },
  {
    name:'you',
    role:'member',
    error:'error field not allowed'
  },
  {
    name:'me',
    role:'member',
    error:'error field not allowed'
  }
  ];
  const 
  for( let i = 0; i < arrayTest.length; i++){ 
    if ( arrayTest[i] == error) { 
      arrayTest.splice(i, 1); 
    }
  }
 console.log(arrayTest)
  // lopping array tersebut boleh menggunakan for ataupun map lalu return menjadi array baru tanpa field error
  
  // Example output :
  // [
  // {
  //   name:'amin',
  //   role:'owner'
  // },
  // {
  //   name:'you',
  //   role:'member'
  // },
  // {
  //   name:'me',
  //   role:'member'
  // }
  // ]

//   const arrayTest= new Map ([
//   { 
//      name:'amin',
//      role: 'owner',
//      error:'error field not allowed'
//   },
//   { 
//     name:'jaya',
//     role: 'owner',
//     error:'error field not allowed'
//  },
//  { 
//     name:'aldi',
//     role: 'owner',
//     error:'error field not allowed'
//  }
// ]);
