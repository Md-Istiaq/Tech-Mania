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
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification: true});

    const Email = e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const Password = e =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const register = e =>{
        e.preventDefault()
        createUserWithEmailAndPassword(email,password)
    }
    if(user){
      Navigate('/inventory/:id')
    }
    if(error){
        alert(error)
    }
    return (
        <div>
            <h1> Please Register</h1>
            <div className='d-lg-flex d-xl-flex d-xxl-flex justify-content-evenly align-item-center'>
                <div>
                 <img height={400} width={600} src="https://cdn.dribbble.com/users/729829/screenshots/3936358/galshir_signup.png" alt="" srcset="" />
                </div>
                <div className='w-25'>
                <Form onSubmit={register} className=' from mx-auto input w-100'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  onBlur={Email} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={Password} type="password" placeholder="Password" required />
              </Form.Group>
              <div className='navigationlink'>
              <Link to="/login">Already have an account? Log in</Link>
              <button className='button ps-4 pe-4 mt-2'>Submit</button>
              </div>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;