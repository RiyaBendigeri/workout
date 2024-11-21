const mongoose=require('mongoose');
const Schema=mongoose.Schema
const bcrypt=require('bcrypt');
const validator = require('validator');
const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})
//static sign up method
userSchema.statics.signup = async function(email,password){
    //there is a package as validator for verifying if email is right or password is rigth
    //validation
    if(!email || !password)
        {
            throw Error('All fields must be filled');
        }
    if(!validator.isEmail(email))
        {
            throw Error('Email is not valid');
        }
        
    if(!validator.isStrongPassword(password))//1upper..1 lower..8 char..1 special
    {
        throw Error('Password not strogn enough');
    }
    const exists = await this.findOne({email})//if u use 'this' then u cant use arrow func.. have to use normal function() method else write user.
        if(exists){
            throw Error('Email already exists')
        }
    
    

//bcrypt is a package that is used to encrypt the password
//mypasswordj782bdhw..this is salt..int tthat package..generate salt and then hash then save
const salt=await bcrypt.genSalt(10)//default valeu is 10...longer salt long it will take for users to hash it...that long it will take to signup
const hash = await bcrypt.hash(password,salt)
const user= await this.create({email,password:hash})
return(user);

}

//static login method
userSchema.statics.login = async function(email,password){
    if(!email || !password)
        {
            throw Error('All fields must be filled');
        }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Incorrect email')
    }
    const match =await bcrypt.compare(password,user.password)
    if(!match)
        {
            throw Error('Incorrect password')
        }
    return user;

}
module.exports=mongoose.model('User',userSchema)