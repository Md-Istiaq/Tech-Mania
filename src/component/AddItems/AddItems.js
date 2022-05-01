import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`
        fetch(url ,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }  ;
    return (
        <div>
            <h1> Please Add a item</h1>
     <form className="from d-flex flex-column w-25 mx-auto input" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("name")}  required/>
      <input placeholder='price' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("price")} required />
      <input placeholder='quantity' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("quantity")}  required/>
      <input placeholder='supplier' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("supplier")}  required/>
      <input placeholder='photo url' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("img")} required />
      <textarea placeholder='description' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("description")} />
      <input className='button mt-3' type="submit" value="Add Item" />
    </form>
        </div>
    );
};

export default AddItems;