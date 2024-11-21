
import React from 'react';
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';
const Workoutform=()=>{

    const {dispatch}=useWorkoutsContext();
    const {user}=useAuthContext();
    const[title,setTitle]=useState('')
    const[reps,setReps]=useState('')
    const[load,setLoad]=useState('')
    const[error,setError]=useState(null);
    const[emptyFields,setEmptyFields]=useState([])
    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!user)
            {
                setError('You must be logged in');
                return
            }
        const workout={title,load,reps}

        const response=await fetch('http://localhost:4000/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.token}`
            }

        })
        const json=await response.json()
        if(!response.ok)
            {
                setError(json.error)
                setEmptyFields(json.emptyFields)

            }
            if(response.ok)
                {
                   
                    setTitle('')
                    setReps('')
                    setLoad('')
                    setError(null)
                    //setEmptyFields([])
                    setEmptyFields([]);
                    console.log('new workout added')
                    dispatch({type:'CREATE_WORKOUT',payload:json})

                }

    }
    return(
        <form className="workout-form" onSubmit={handleSubmit}>
            <h3 className="newwork">ADD A NEW WORKOUT</h3>
            <label>Exercise Title:</label>
            <p><input  type="text" onChange={(e)=>{setTitle(e.target.value)}} value={title} className={emptyFields.includes('title')?'rederror':''}></input></p>

            
            <p><label> Load(kg):</label></p>
            <input  type="number" onChange={(e)=>{setLoad(e.target.value)}} value={load} className={emptyFields.includes('load')?'rederror':''}></input>


            <p><label> Reps(kg):</label></p>
            <input   type="number" onChange={(e)=>{setReps(e.target.value)}} value={reps} className={emptyFields.includes('reps')?'rederror':''}></input>



            <p><button className="addw">
                Add workout
            </button></p>
            {error && <div className="errors">{error}
               
                
                
                </div>}





        </form>

    );
}
export default Workoutform;