import React from 'react'
import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,isLoading,error} = useSignup()

const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(email,password)
   await signup(email,password)
}

    return(
        <form className='signup' onSubmit={handleSubmit}>
            <h3 className="log">Signup</h3>


            <label className="emails">Email:</label>
            <p><input type="email" className="ebox" onChange={(e)=>setEmail(e.target.value)} value={email}></input></p>

            <label className="emails">Password:</label>
            <p><input type="password" className="ebox" onChange={(e)=>setPassword(e.target.value)} value={password}></input></p>


            <button disabled = {isLoading} className="logbutton">Signup</button>
            {error && <div className='error'>{error}</div>}




        </form>
    )


}
export default Signup;