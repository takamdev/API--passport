const express = require('express')
const { getAll ,postPasseport,deletePasseport,editPasseport,getById} = require("../controllers/passport.js")
const route = express.Router()



route.get("/public/api/identitydocs",getAll)
route.post("/public/api/identitydocs",postPasseport)
route.delete("/public/api/identitydocs/:id",deletePasseport)
route.put("/public/api/identitydocs/:id",editPasseport)
route.get("/public/api/identitydocs/:id",getById)




module.exports = route