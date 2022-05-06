import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [ items,setItems] = useState([])
    useEffect( () =>{
        console.log(user.email)
        const getItems = async() =>{
            const email = user.email
            const url = `http://localhost:5000/myitems?email=${email}`
            const {data} = await axios.get(url , {
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data)
        }
        getItems();
    },[user])
    return (
        <div>
            <h1>You added {items.length} items</h1>
        </div>
    );
};

export default MyItems;