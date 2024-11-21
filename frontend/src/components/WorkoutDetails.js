
import React from 'react';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';


const WorkoutDetails = (props) => {
    const {dispatch}=useWorkoutsContext()
    const {user}=useAuthContext();

    const handleClick=async()=>{
        if(!user)
            {
                return
            }
        const response = await fetch(`http://localhost:4000/api/workouts/${props.workout._id}`, {
        method: 'DELETE',
        headers:{
            'Authorization':`Bearer ${user.token}`
        }
    });
        const json=await response.json()
        if(response.ok)
            {
                dispatch({type:'DELETE_WORKOUT',payload:json})


            }

    }
    return (
        <div className="workout-details">
            <h4 className="worktitles">{props.workout.title}</h4>
            <p><strong>Load: {props.workout.load}</strong></p>
            <p><strong>Reps: {props.workout.reps}</strong></p>
            <p>Created At: {(props.workout.createdAt)}</p>
            <span><button onClick={handleClick} className="delete">Delete</button></span>
        </div>
    );
};

export default WorkoutDetails;