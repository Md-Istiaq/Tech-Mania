import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../_firebase.init';

const RequirAuth = ({children}) => {
    const[user,loading] = useAuthState(auth)

    const location = useLocation()

    if(loading){
        return <>
        <Spinner  animation="grow" size="sm" />
        <Spinner animation="grow" />
        </>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>;
    }
    return children;
};

export default RequirAuth;