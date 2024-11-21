import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  {WorkoutsContextProvider}  from './components/WorkoutContext';//{}why rhis 
import { AuthContextProvider } from './components/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <WorkoutsContextProvider>
    <App />
    </WorkoutsContextProvider>
    </AuthContextProvider>
   
  </React.StrictMode>
);

