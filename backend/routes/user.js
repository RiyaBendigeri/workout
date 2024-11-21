
const express=require('express');//need to maek instance of express

const {signupUser,loginUser}=require('../controllers/userController')

const router=express.Router();//instance of express router
//login route
router.post('/login',loginUser);



//signup route
router.post('/signup',signupUser);
module.exports=router
