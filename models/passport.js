const mongoose = require("mongoose");

const schema = mongoose.Schema

// creation du scheam passport
const schemaPasseport = new schema({
    name:{type:String,maxLength:100,require:true},
    contry:{type:String,maxLength:100,require:true},
    cartId:{type:String,maxLength:50,require:true,unique:true},
    dateDel:{type:String,maxLength:100,require:true},
    dateExp:{type:String,maxLength:100,require:true},
    img:{type:String,maxLength:200,require:true,unique:true},
    fileName:{type:String,maxLength:200,require:true,unique:true},
},{timestamps:true})

// creation de la collection passport
const modelPasseport = mongoose.model("passeport",schemaPasseport)

//exportation du modul
module.exports = modelPasseport
   // construction des données
