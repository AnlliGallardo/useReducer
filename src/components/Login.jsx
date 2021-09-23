import React, { useReducer } from 'react';
import { authReducer, initialState } from '../reducers/authReducer';
import { login,logout } from '../actions/authAction';

export const Login = () => {
    const[state, dispatch] = useReducer(authReducer, initialState)
    return (
        <div>
            <h1>Login</h1>
            <hr />
            <button 
                className="btn btn-primary" 
                onClick={()=>dispatch(login('123456','Anlli Gallardo'))}
            >
                Login
            </button>
            <button 
                className="btn btn-danger" 
                onClick={()=>dispatch(logout())}
            >
                Logout
            </button>
        </div>
    )
}