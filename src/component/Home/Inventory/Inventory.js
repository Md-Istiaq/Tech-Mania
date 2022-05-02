import React from 'react';
import { useEffect, useState } from "react";
import useProduct from '../../hooks/useProduct';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {

    const[products,setProducts] = useProduct()


    return (
        <div>
            <h1 className='textstyle'>Inventory</h1>
            <div className='products container'>
            {
                products.slice(0,6).map( product => <Product product={product} key={product._id}></Product>)
            }
            </div>
        </div>
    );
};

export default Inventory;