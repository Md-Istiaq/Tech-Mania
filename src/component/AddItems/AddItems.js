import React from 'react';
import { useForm } from "react-hook-form";

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1> Please Add a item</h1>
     <form className="from d-flex flex-column w-25 mx-auto input" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='name' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("name")} />
      <input placeholder='price' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("price")} />
      <input placeholder='quantity' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("quantity")} />
      <input placeholder='supplier' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("supplier")} />
      <input placeholder='photo url' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("img")} />
      <textarea placeholder='description' className='border-0 border-dark border-2 rounded border-bottom mt-3 mb-3 bg-secondary bg-opacity-10' {...register("description")} />
      <input className='button mt-3' type="submit" />
    </form>
        </div>
    );
};

export default AddItems;