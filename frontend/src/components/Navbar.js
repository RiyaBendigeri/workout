import React from 'react';
import {Link} from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar=()=>{
    const {logout}=useLogout()
    const {user} = useAuthContext()
    const handleClick = () =>{
        logout()

    }
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1 className='buddy'>Workout Buddy</h1>
                </Link>
                <nav>
                   {user && (

                    <div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}className='logout'>LOGOUT</button>
                    </div>
                    )}
                    {!user && (

                    
                    <div>
                        
                        <Link to="/login" className='loginbut'>Login</Link>
                        <Link to="/signup"className='loginbut'>Signup</Link>
                    </div>
                    )}
                </nav>

            </div>
        </header>
    )
}
export default Navbar
