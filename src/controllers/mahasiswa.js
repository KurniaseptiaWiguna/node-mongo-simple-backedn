const { ObjectId } = require("mongodb")
const Mahasiswa = require("../models/mahasiswa")
const mahasiswa = require("../models/mahasiswa")
exports.welcome = async (req, res) => {
    try {
        res.send({
            message: "welcome"
        })
    } catch (error) {
        res.send({
            message: "Failed"
        })
    }
}
exports.create = async (req, res) => {
    try {
        const newMahasiswa = new mahasiswa({
            name:req.body.name,
            email:req.body.email,
        })
        newMahasiswa.save(function (error,data){
            if(error){
                console.log(error)
                return res.status(400).send({
                    message:"failed"
                })
            }
            return res.status(200).send({
                message:"success",
                data:data
            })
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"server failed"
        })
    }
}

exports.findAll = async (req, res) => {
    try {
        
        mahasiswa.find(function(error, result) {
        if(error){
            return console.log(error)
        }
        return res.status(200).send({
            message:"success",
            data:result
        });
    });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"server failed"
        })
    }
}

//find detail mahasiswa by id
exports.findOne = async (req, res) => {
    const id = req.body.id;
    try {
        mahasiswa.findOne({_id :ObjectId(id)},function(error, result){
            if(error){
                return console.log(error);
            }
            return res.status(200).send({
                message:"success",
                data:result
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            message:"server failed"
        })
    }
}
exports.updateOne = async (req, res) => {
    const id = req.body.id
    const body = {
        name:req.body.name,
    }
    try {
        mahasiswa.updateOne({_id: ObjectId(id)}, body, function (error, data) {
            if(error){
                console.log(error);
                return res.status(400).send({
                    message: "failed"
                })
            }
            console.log(data)
            mahasiswa.findOne({_id: ObjectId(id)}, function (error, newData){
                if(error){
                    console.log(error)
                }
                return res.status(200).send({
                    message:"success",
                    data:newData
                })
            })
            
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"server failed"
        })
    }
}
exports.deleteOne = async (req, res) =>{
    const id = req.body.id;
    try {
        mahasiswa.deleteOne({_id:ObjectId(id)},function(error, data){
            if(error){
                console.log(error)
                return res.status(400).send({
                    message: "failed"
                })
            }
            console.log(data)
            return res.status(200).send({
                message: "success",
                _id : id
            })
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "server failed"
        })
    }
}
