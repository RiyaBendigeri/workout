const express=require('express')
const {
    createWorkout,getWorkout,getWorkouts,deleteWorkout,updateWorkout



}=require('../controllers/workoutController')

const requireAuth = require('../middleware/requireAuth')

const router=express.Router()
//require auth for all workouts
router.use(requireAuth);
//this is to get all workouts
router.get('/',getWorkouts)
router.get('/:id',getWorkout)
router.post('/',createWorkout)
    //console.log('Request Body:', req.body);
    
    


router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)
module.exports=router