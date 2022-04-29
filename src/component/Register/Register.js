import React from 'react';
import {Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div>
            <Form className='from w-50 mx-auto'>
               <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                 <Form.Control type="email" placeholder="Enter email" />
                 <Form.Text className="text-muted">
                   We'll never share your email with anyone else.
                 </Form.Text>
               </Form.Group>
               
               <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" placeholder="Password" />
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