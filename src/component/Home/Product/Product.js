import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Product.css'

const Product = ({product}) => {
    return (
        <div>
            <Card className='product mt-5 ms-5'  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.img} />
  <Card.Body>
    <Card.Title>{product.name}</Card.Title>
    <h5>Price:- ${product.price}</h5>
    <h5>Quantity:-{product.quantity}</h5>
    <h5>Supplier:-{product.supplier}</h5>
    <Card.Text>{product.description}</Card.Text>
    <button className='button'> Stock Update</button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Product;