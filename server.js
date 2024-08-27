const express = require('express')
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require('cors')
const port = 3500
const route = require('./routes/route.js')
const connect = require("./database/connect.js")
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(route)


app.use("",(req,res)=>{
    res.status(404).json({msg:"not-fount"})
})

connect()
app.listen(port||process.env.port,()=>{
    console.log("serveur écoute sur le port:3500"); 
})



