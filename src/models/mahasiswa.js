const mongoose = require('mongoose');
const Mahasiswa = mongoose.model('mahasiswas',{
    name:{
        type: String,
    },
    email:{
        type: String
    }
})
module.exports= Mahasiswa;
// const Mahasiswa2 = new Mahasiswa({
//     name:"keyaru",
//     email:"keyaru@mail.com"
// });

// Mahasiswa2.save().then((mahasiswa) => console.log(mahasiswa))
// Mahasiswa.insertMany()

// Mahasiswa.find(function(error, result) {
//     if(error){
//         return console.log(error)
//     }
//     return console.log(result)
//  });
// console.log(response)