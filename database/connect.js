const mongoose = require('mongoose')

const curl = "mongodb+srv://panguslariss:qriaqiyMfoPlPLU4@mongojunior.he7h2bb.mongodb.net/passport?retryWrites=true&w=majority&appName=mongojunior"
const connect = async ()=>{
    try {
       await mongoose.connect(curl)
       console.log("connexion a la base de donnée etablie");
       
    } catch (error) {
        console.log("connexion echoué"+error);
        
    }
}

module.exports = connect