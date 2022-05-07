import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
import './ManageInventory.css'

const ManageInventory = () => {
    const [products,setProducts] = useProduct()

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
          <h1 className='textstyle mt-3 mb-2'>All Inventories</h1>
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
                      <p>{product.description}</p>
                      <button onClick={() => deleteItem(product._id)} className='button'> Delete Item</button>
                    </Card.Body>
                  </Card>
                    )
            }
         </div>
         <Link to='/additem'>
         <button className='button mt-5 mb-5'> Add new Item</button>
         </Link>
        </div>
    );
};

export default ManageInventory;