import React from 'react'
import { Navigate } from 'react-router-dom';

const Privateroute = ({children}) => {
    
    const isAuth = "";

    if(!isAuth) {
        return <Navigate to="/Login" />
    }else{
        return children;
    }
};

export default Privateroute