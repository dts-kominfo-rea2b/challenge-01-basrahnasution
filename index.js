// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


//isHavePet
let isHavePet = new Map();
isHavePet.set('Monica','Yes');
isHavePet.set('Wendy','No');

//Monica's Edu
 const edMonica = {
     name: "SD 01",
     city: "Jakarta",
     graduate: "2016"
}
 const edMonica2 = {
    name: "SMP 02",
    city: "Jakarta",
    graduate: "2019"
} 
const edMonica3 = {
    name: "SMA 03",
    city: "Tangerang"
}
 
 const eduMonica = [];
 eduMonica.push(edMonica);
 eduMonica.push(edMonica2);
 eduMonica.push(edMonica3);

// Wendy's Edu
const edWendy = {
    name: "SD 02",
    city: "Jakarta",
    graduate: "2010"
}
const edWendy2 = {
   name: "SMP 03",
   city: "Bogor",
   graduate: "2013"
} 
const edWendy3 = {
   name: "SMA 01",
   city: "Surabaya",
   graduate: "2016"
}
const edWendy4 = {
    name: "Universitas Maju",
    city: "Tangerang"
 }

const eduWendy = [];
eduWendy.push(edWendy);
eduWendy.push(edWendy2);
eduWendy.push(edWendy3);
eduWendy.push(edWendy4);

// fav restoran
const favoriteRestMonica = Array.from(
    new Set([
      "Bento",
      "Sushi",
      "Pancake",
      "Eggy",
      "Tempura",
      "Bento",
      "Eggy",
      "Padang",
      "Tteok",
      "Sushi",
      "Sushi"
    ])
)
  


const favoriteRestWendy = Array.from(
    new Set([
        "Tempura",
        "Bento",
        "Sushi",
        "Pancake",
        "Padang",
        "Katsu",
        "Geprek",
        "Pancake",
        "Eggy"
    ])
)


const firstUser = {
    name: "Monica",
    gender:"Female",
    age:"17",
    email:"monica@dingdong.com",
    favoriteColor: [
        'Yellow', 'Pink', 'White', 'Purple'
    ],
    isHavePet: isHavePet.get('Monica'),
    education: eduMonica,
    favoriteRestaurant: favoriteRestMonica
};

const secondUser = {
    name: "Wendy",
    gender:"Male",
    age: "23",
    email:"wendy@dingdong.com",
    favoriteColor: [
        'Blue', 'Black', 'Grey'
    ],
    isHavePet: isHavePet.get('Wendy'),
    education: eduWendy,    
    favoriteRestaurant: favoriteRestWendy    
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
