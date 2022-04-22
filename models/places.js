const mongoose=require('mongoose')

const placesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("places",placesSchema,"places")