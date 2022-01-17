const mongoose = require('mongoose');
const url = "mongodb+srv://adminMongo:cluster0mongo@cluster0.ld8gg.mongodb.net/unpad?retryWrites=true&w=majority";

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology:true,
})

// const Mahasiswa = mongoose.model('mahasiswas',{
//     name:{
//         type: String,
//     },
//     email:{
//         type: String
//     }
// })

// const Mahasiswa2 = new Mahasiswa({
//     name:"keyaru",
//     email:"keyaru@mail.com"
// });

// // Mahasiswa2.save().then((mahasiswa) => console.log(mahasiswa))
// // Mahasiswa.insertMany()

// Mahasiswa.find(function(error, result) {
//     if(error){
//         return console.log(error)
//     }
//     return console.log(result)
//  });
// console.log(response)