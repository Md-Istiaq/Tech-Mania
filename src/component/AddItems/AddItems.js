import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './AddItems.css'

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const Navigate = useNavigate()
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
        Navigate('/manageitem')
    }  ;
    return (
        <div>
            <h1 className='textstyle'> Please Add a item</h1>
            <div className='ms-4 me-4' >
            <div className='row gx-5'>
                <div className='col-6'>
                 <img height={500} width={650} src="https://miro.medium.com/max/1400/1*cdEkrQkfLVJVH52hieWwoA.jpeg" alt="" srcset="" />
               </div>
               <div className='col-6'>
                   <form className="from d-flex flex-column input" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder='name' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("name")}  required/>
                    <input placeholder='price' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("price")} required />
                    <input placeholder='quantity' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("quantity")}  required/>
                    <input placeholder='supplier' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("supplier")}  required/>
                    <input placeholder='photo url' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("img")} required />
                    <input placeholder=' your E-mail 'className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("email")} required />
                    <textarea placeholder='description' className=' input-filed ms-3 me-3 border-0 border-dark border-2 rounded border-dark mt-3 mb-3 bg-secondary bg-opacity-10' {...register("description")} />
                    <div className='button mt-3'><img width={40} height={40} src="https://cdn.pixabay.com/photo/2017/01/18/17/39/cloud-computing-1990405_1280.png" alt="" srcset="" /><input className='bg-white border-0 textstyle' type="submit" value="Add Item" /></div>
                  </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AddItems;