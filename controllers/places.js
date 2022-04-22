const Places = require('../models/places')

exports.getPlaceByName=(req,res)=>{
    Places.find().then(result=>{
        res.status(200).json({ message:"places fetched", data:result})
    }).catch(e=>
        res.status(500).json({ message:"Error in DB" , error:e})
 
        )

}