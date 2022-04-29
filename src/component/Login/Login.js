import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    

    const Email = () =>{

    }
    return (
        <div>
            <h1>Please Log In</h1>
            <div className='d-flex justify-content-evenly align-item-center'>
                <div>
                 <img src="https://images.assetsdelivery.com/compings_v2/rudipranata/rudipranata2010/rudipranata201000003.jpg" alt="" srcset="" />
                </div>
                <div>
                <Form className=' from mx-auto input'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  onBlur={Email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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