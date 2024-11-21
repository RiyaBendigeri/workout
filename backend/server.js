
require('dotenv').config()
const express=require('express')
const cors = require('cors');
const mongoose=require('mongoose')
const workout=require('./routes/workouts')
const userRouter=require('./routes/user');
//express app
const app=express()
app.use(cors()); 
app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//

app.use('/api/workouts',workout)
app.use('/api/user',userRouter);
//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{

    app.listen(process.env.PORT,()=>{
        console.log("listenign on port 4000")
    })
})
.catch((error)=>{
console.log(error)
})
//listen for a request
//react to request//respond to a get req



