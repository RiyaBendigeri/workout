import React from 'react';
import { WorkoutsContext } from "../components/WorkoutContext";
import { useContext } from "react";
export const useWorkoutsContext=()=>{
    const context=useContext(WorkoutsContext)
    if(!context)
        {
            throw Error('useworkout context must be used inside workoutcontextprovider');
        }
    return context;
}