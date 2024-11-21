import React from "react";
import {useState} from 'react'
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const {login,isLoading,error} = useLogin();


    const handleSubmit = async (e)=>{
        e.preventDefault()
        console.log(email,password);
        await login(email,password);
    }


    return(
        <form className="login" onSubmit={handleSubmit}>
            <h3 className="log">Login</h3>
            <label className="emails">Email:</label>
            <p><input type="email" className="ebox" onChange={(e)=>setEmail(e.target.value)} value={email}></input></p>
            <label className="emails">Password:</label>
            <p><input type="password" className="ebox" onChange={(e)=>setPassword(e.target.value)} value={password}></input></p>
            <button disabled={isLoading} className="logbutton">Log in</button>
            {error && <div className="error">{error}</div>}

        </form>
    )

}
export default Login;