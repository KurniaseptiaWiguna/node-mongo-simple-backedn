const express = require("express");
const {findAll, findOne, create, updateOne, deleteOne} = require("../controllers/mahasiswa")
const router = express.Router();

const {welcome} = require("../controllers/mahasiswa")
router.get("/welcome",welcome);
router.get("/mahasiswa", findAll)
router.get("/detail-mahasiswa",findOne)
router.post("/mahasiswa",create)
router.patch("/mahasiswa",updateOne)
router.delete("/mahasiswa",deleteOne)
module.exports = router;