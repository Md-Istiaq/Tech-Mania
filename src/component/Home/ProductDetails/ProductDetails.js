import React ,{useState,useEffect} from 'react';
import useProduct from '../../hooks/useProduct';
import {Link , useParams} from 'react-router-dom'
import { Card } from 'react-bootstrap';

const ProductDetails = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({}) 
    const [quantity,setQuantity] = useState(0)
    const [newQuantity,setNewQuantity] = useState(0)

    
    useEffect( () =>{
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data)) 

    },[])
        return (
        <div>
            <div className='d-flex justify-content-evenly align-item-center mt-5'>
                <div>
                    <img src={product.img} alt="" srcset="" />
                </div>
                <div>
                <Card border="danger" style={{ height:'28rem', width: '25rem' }}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <h5>Price:-${product.price}</h5>
                    <h5>Quantity:-{product.quantity}</h5>
                    <h5>Supplier:-{product.supplier}</h5>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                    <button className='button'> Delivered</button>
                  </Card.Body>
                </Card>
                </div>
            </div>
           
            <Link to="/manageitem">
                <button class="button">Manage Inventories</button>
            </Link>
        </div>
    );
};

export default ProductDetails;