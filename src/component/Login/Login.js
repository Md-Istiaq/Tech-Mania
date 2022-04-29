import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../_firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const Navigate = useNavigate()

    const Email = e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const Password = e =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const Login = e =>{
        signInWithEmailAndPassword(email,password)
    }
    if(error){
        alert(error)
    }
    return (
        <div>
            <h1>Please Log In</h1>
            <div className='d-flex justify-content-evenly align-item-center'>
                <div>
                 <img src="https://images.assetsdelivery.com/compings_v2/rudipranata/rudipranata2010/rudipranata201000003.jpg" alt="" srcset="" />
                </div>
                <div>
                <Form onSubmit={Login} className=' from mx-auto input'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  onBlur={Email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={Password} type="password" placeholder="Password" />
              </Form.Group>
              <div className='navigationlink'>
              <Link to="/register">Don't have an account? Register</Link>
              <button className='button ps-4 pe-4 mt-2'>Submit</button>
              </div>
              <div>
                  <button className='button'> <img width={30} height={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_drVCd199yYvCPpFHn88MZ08txZR2yOcQ_g&usqp=CAU" alt="" srcset="" />  Continue with google</button>
              </div>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;