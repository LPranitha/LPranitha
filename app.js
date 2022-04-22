//import
const express=require('express')
const bodyParser=require('body-parser')
var cors = require('cors')
const placeRoutes=require('./routes/places')

const mongoose=require('mongoose')

var app=express()


const PORT= 6750
const log=console.log

const MONGO_URI="mongodb://localhost/tourist";
mongoose.connect(MONGO_URI,
  ()=>{
  console.log("MongoDB connected")},
  e=>console.log("error occured",e))

app.use(cors())
app.use(bodyParser.json())
app.use('/places',placeRoutes)

app.listen(PORT,()=>{
  log(`app is running on ${PORT}`)
})