const express=require('express')
const placeController=require('../controllers/places')



const router=express.Router();


router.get('',placeController.getPlaceByName)


module.exports=router;