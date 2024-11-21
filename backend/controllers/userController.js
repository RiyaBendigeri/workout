//login user
const User=require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{//id is payload of token..u can also use id instead of _id
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'})//_id:_id === _id ..we dont want to give sensitive info here..so we can write it in .env file

}


const loginUser=async(req,res)=>{
const {email,password}=req.body;
try{
    const user=await User.login(email,password)
    const token = createToken(user._id)
    res.status(200).json({email,token})
}
catch(error)
{
    res.status(400).json({error:error.message})
}
}



//signup user
const signupUser=async(req,res)=>{
    const {email,password}=req.body
    try{
        const user= await User.signup(email,password)
        const token = createToken(user._id)
        res.status(200).json({email,token})

    }catch(error)
    {
        res.status(400).json({error:error.message})

    }
    
    //u can create the hashing of password in this funtion or in usermodel
    }



    module.exports={signupUser,loginUser};