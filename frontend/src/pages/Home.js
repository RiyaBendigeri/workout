
import React from 'react';
import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails'
import Workoutform from '../components/Workoutform'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext';
const Home = () => {
  //const [workouts, setWorkouts] = useState(null);
  const {workouts,dispatch}=useWorkoutsContext();
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/workouts',{
          headers:{
            'Authorization':`Bearer ${user.token}`

          }
        })

        const json = await response.json();
        if (response.ok) {
          console.log("Fetched workouts:", json);  // Log fetched data
          //setWorkouts(json);
          dispatch({type:'SET_WORKOUTS',payload:json})
        } else {
          console.error("Failed to fetch workouts:", json);
        }
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    if(user)
      {
        fetchWorkouts();

      }
    
  }, [dispatch,user]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => (
        
           
          <WorkoutDetails  key={workout._id} workout={workout}>{console.log(workout.title)} </WorkoutDetails>
          
        ))}
      </div>
      <Workoutform></Workoutform>
    </div>
  );
};

export default Home;