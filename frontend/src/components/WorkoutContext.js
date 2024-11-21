import React from 'react';
import { createContext, useReducer } from "react";

export const WorkoutsContext=createContext()
export const workoutsReducer =(state,action)=>{
    //check action type..what u wan to do with the workout
    //action type would be diff for diff things
    switch(action.type)
    {
        case 'SET_WORKOUTS':
            return{
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                workouts:state.workouts.filter((w)=>
                    w._id!==action.payload._id)

                }
            
        default:
            return state
    }


}
export const WorkoutsContextProvider=({children})=>{//children represents the app component
    const [state,dispatch]=useReducer(workoutsReducer,{//similar to use state 
        workouts:null}
    )//we paass 2 args
    
    return(
        <WorkoutsContext.Provider value={{...state,dispatch/*whatever u want to expose*/}}>
            {children}

        </WorkoutsContext.Provider>
    )

}