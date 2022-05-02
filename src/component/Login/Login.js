import React, { useState } from 'react';
import { Form, Spinner } from 'react-bootstrap';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../_firebase.init';
import { GoogleAuthProvider , signInWithPopup} from "firebase/auth";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const provider = new GoogleAuthProvider();
    
    const Navigate = useNavigate()

    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    const Email = e =>{
        e.preventDefault()
        setEmail(e.target.value)
    }

    const Password = e =>{
        e.preventDefault()
        setPassword(e.target.value)
    }

    const Login = e =>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    if(user){
      Navigate(from,{replace:true})
    }
    if(error){
        alert(error)
    }
    const googleSignIn = () =>{
      signInWithPopup(auth,provider)
      .then(result =>{
          Navigate('/inventory/:id');
      })
      .catch(error =>{
        alert(error.massage);
      })
  };
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
              <p>---------------or---------------</p>
              <div>
                  <button onClick={googleSignIn} className='button'> <img width={30} height={30} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_drVCd199yYvCPpFHn88MZ08txZR2yOcQ_g&usqp=CAU" alt="" srcset="" />  Continue with google</button>
              </div>
            </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;