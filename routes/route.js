const express = require('express')
const { getAll ,postPasseport,deletePasseport,editPasseport,getById} = require("../controllers/passport.js")
const route = express.Router()



route.get("/api/identitydocs",getAll)
route.post("/api/identitydocs",postPasseport)
route.delete("/api/identitydocs/:id",deletePasseport)
route.put("/api/identitydocs/:id",editPasseport)
route.get("/api/identitydocs/:id",getById)
route.get("/",(req,res)=>{
  res.send("welcome in the passport API,use /public/api/identitydocs for get all passport registraition")
})


module.exports = route
