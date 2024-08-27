const  modelPasseport  = require("../models/passport.js")

 const getAll = async (req,res)=>{
    try {
        const data = await modelPasseport.find({})
        res.status(200).json({data})
    } catch (error) {
        res.status(500).json(error)
    }
}

 const postPasseport = async (req,res)=>{
    const passport = req.body
 
    
     
    if(passport){
       
        try {
            const newPasseport = new modelPasseport(passport)
            const data = await newPasseport.save()

            res.status(200).json(data)
          } catch (error) {
            if(error.code === 11000) {
                res.status(404).json(error)
            }else{
                res.status(500).json(error)
                console.log(error);
            }
           
          }
    }else{
        const message= "your don't entries data"
        res.status(404).json(message)
    }
      
}

 const deletePasseport = async (req,res)=>{
    const id = req.params.id
    if(id){
       modelPasseport.deleteOne({_id:id}).then(()=>{
         res.status(200).json("successful removal "+id)
       }).catch(error=>{
        res.status(500).json(error)
       })
    }else{
        const message= "entries id"
        res.status(404).json(message)
    }
      
}

 const editPasseport = async (req,res)=>{
    const id = req.params.id
    const data = req.body
    if(data&&id){

       modelPasseport.updateOne({_id:id},data).then(response=>{
        const message="editing successfull"
        res.status(200).json(message)
       }).catch(error=>{
        res.status(500).json(error)
       })

    }else{
        const message= "your don't entries data"
        res.status(404).json(message)
    }
      
}

 const getById = async (req,res)=>{
    const id = req.params.id
    if(id){
       modelPasseport.find({_id:id}).then(response=>{
        res.status(200).json({data:response})
       }).catch(error=>{
        res.status(500).json(error)
       })

    }else{
        const message= "your don't entries data"
        res.status(404).json(message)
    }
      
}

module.exports = { getAll ,postPasseport,deletePasseport,editPasseport,getById}