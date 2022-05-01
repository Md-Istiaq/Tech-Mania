import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products,setProducts] = useProduct()
    return (
        <div>
         <div className='allitems ms-5 mb-5'>
         {
                products.map(product => 
                    <Card className='product mt-5 '  style={{ width: '24rem' }}>
                    <Card.Img variant="top" src={product.img} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <h5>Price:- ${product.price}</h5>
                      <h5>Quantity:-{product.quantity}</h5>
                      <h5>Supplier:-{product.supplier}</h5>
                      <button className='button'> Delete Item</button>
                    </Card.Body>
                  </Card>
                    )
            }
         </div>
         <Link to='/additem'>
         <button className='button mb-5'> Add new Item</button>
         </Link>
        </div>
    );
};

export default ManageInventory;