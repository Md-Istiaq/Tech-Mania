import React ,{useState,useEffect} from 'react';
import useProduct from '../../hooks/useProduct';
import { useForm } from "react-hook-form";
import {Link , useParams} from 'react-router-dom'
import { Card } from 'react-bootstrap';

const ProductDetails = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({}) 
    
    useEffect( () =>{
        const url = `https://mighty-oasis-70513.herokuapp.com/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data)) 

    },[])

    const handleQuantity = e =>{
        e.preventDefault()
        let givenQuantity = e.target.quantity.value
        let quantity = product.quantity
        let newQuantity = parseInt(givenQuantity) + parseInt(quantity)
        console.log(newQuantity)
        product.quantity = newQuantity
        console.log(product.quantity)

        
       
        const url = `https://mighty-oasis-70513.herokuapp.com/product/${id}`
        fetch(url ,{
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:  JSON.stringify(newQuantity)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            alert("Deliveard")
            e.target.reset()
        })
    }
    

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
            <form onSubmit={handleQuantity}>
                    <input placeholder='quantity' name='quantity' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10'  required/>
                    <input className=' button bg-white border-0 textstyle' type="submit" value="Add quanity" />
                  </form>
            <Link to="/manageitem">
                <button class="button">Manage Inventories</button>
            </Link>
        </div>
    );
};

export default ProductDetails;