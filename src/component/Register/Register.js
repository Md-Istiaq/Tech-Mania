import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../_firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css'
import { toast } from 'react-toastify';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const Email = e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const Password = e =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const register = e =>{
        createUserWithEmailAndPassword(email,password)
        Navigate('/productdetails')
    }
    if(loading){
        toast("Creating account")
    }
    if(error){
        toast(error)
    }
    return (
        <div>
            <h1> Please Register</h1>
            <Form onSubmit={register} className='from w-50 mx-auto'>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control onBlur={Email} type="email" placeholder="Enter email" />
                 <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                 </Form.Text>
               </Form.Group>
               
               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control onBlur={Password} type="password" placeholder="Password" />
               </Form.Group>
               <div className="navigationlink">
               <Link to="/login">Already have an account? Log in</Link>
               <button className='button w-25 mt-2'>Submit</button>
               </div>
            </Form>
        </div>
    );
};

export default Register;