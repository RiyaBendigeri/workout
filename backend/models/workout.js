const mongoose=require('mongoose')
const Schema=mongoose.Schema
const workoutSchema=new Schema({
    title: {
        type:String,//it wont allow any other data type
        required:true
    },
    reps:{
        type:Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    user_id:{
        type:String,
        required:true
    }
},{
    timestamps:true//it creates new doc when it was last updated etc
})
module.exports=mongoose.model('Workout',workoutSchema)

