import React from 'react';
import { useEffect, useState } from "react";
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {

    const[products,setProducts] = useState([])

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div>
            <h1>Inventory</h1>
            <div className='products container'>
            {
                products.slice(0,6).map( product => <Product product={product} key={product._id}></Product>)
            }
            </div>
        </div>
    );
};

export default Inventory;