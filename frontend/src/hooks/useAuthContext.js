import React from 'react'
import { AuthContext } from '../components/AuthContext';
import { useContext } from 'react';
export const useAuthContext=()=>{
    const context=useContext(AuthContext)
    if(!context)
        {
            throw Error('Authcontext must be inside authcontextprovider')
        }
    return(context);
}