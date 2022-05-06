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
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="dark" />
        </>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>;
    }
    return children;
};

export default RequirAuth;