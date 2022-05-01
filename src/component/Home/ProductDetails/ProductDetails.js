import React ,{useState,useEffect} from 'react';
import useProduct from '../../hooks/useProduct';
import {Link , useParams} from 'react-router-dom'
import { Card } from 'react-bootstrap';

const ProductDetails = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({}) 
    
    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data)) 

    },[])
    
        return (
        <div>
            <Card className='product mt-5 mb-5 mx-auto ' style={{ width: '30rem' }}>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <h5>Price:- ${product.price}</h5>
                <h5>Quantity:-{product.quantity}</h5>
                <h5>Supplier:-{product.supplier}</h5>
                <Card.Text>{product.description}</Card.Text>
                <button className='button'> Deliveard</button>
              </Card.Body>
            </Card>
            <Link to="/manageitem">
                <button class="button">Manage Inventory</button>
            </Link>
        </div>
    );
};

export default ProductDetails;