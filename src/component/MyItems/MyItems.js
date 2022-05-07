import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init';
import { Button, Card } from 'react-bootstrap';
import './MyItems.css'

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [ items,setItems] = useState([])
    useEffect( () =>{
        console.log(user.email)
        const getItems = async() =>{
            const email = user.email
            const url = `https://mighty-oasis-70513.herokuapp.com/myitems?email=${email}`
            const {data} = await axios.get(url , {
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            })
            setItems(data)
        }
        getItems();
    },[user])

    const deleteItem = id =>{
        const proceed = window.confirm("are you sure you want to delete??")
        if(proceed){
          const url = `https://mighty-oasis-70513.herokuapp.com/product/${id}`
          fetch(url,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            alert("Item Deleted")
          })
  
        }
  
      }
    return (
        <div>
            <h1 className='textstyle'>You added {items.length} items</h1>
                <div className='myitems'>
                {
                    items.map(item => 
                        <Card className='product mt-5 border-2 border-dark'  style={{ width: '24rem' }}>
                        <Card.Img variant="top" src={item.img} />
                        <Card.Body>
                          <Card.Title>{item.name}</Card.Title>
                          <h5>Price:- ${item.price}</h5>
                          <h5>Quantity:-{item.quantity}</h5>
                          <h5>Supplier:-{item.supplier}</h5>
                          <Card.Text>{item.description}</Card.Text>
                          <button onClick={() => deleteItem(item._id)} className='button'>Delete item</button>
                        </Card.Body>
                      </Card>
                        )
                }
                </div>
        </div>
    );
};

export default MyItems;