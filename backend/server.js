require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require("./routes/workout")

const app = express()

app.use((req,res,next)=>{
  console.log(req.path, req.method)
  next()
})

app.use("/workout",workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(process.env.PORT,()=>{
      console.log(process.env.PORT)
    })    
  })
  .catch((error)=>{
    console.log(error)
  })
