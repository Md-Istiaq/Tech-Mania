import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const Navigate = useNavigate()

    const ItemDetails = id =>{

            Navigate(`/inventory/${id}`)
    }
    return (
        <div>
            <Card className='product mt-5 '  style={{ width: '24rem' }}>
  <Card.Img variant="top" src={product.img} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <h5>Price:- ${product.price}</h5>
    <h5>Quantity:-{product.quantity}</h5>
    <h5>Supplier:-{product.supplier}</h5>
    <Card.Text>{product.description}</Card.Text>
    <button onClick={() => ItemDetails(product._id)} className='button'> Stock Update</button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Product;