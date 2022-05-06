import React, { useEffect, useState } from 'react';
import './Customer.css'

const Customer = () => {
    const[reviews , setReviews] = useState([])
    useEffect( () =>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='textstyle mt-5 mb-5'>What our Customer's say??</h1>
            <div>
                {
                    reviews.map(review => 
                    <div class=" border-0 border-start border-end border-5 border-danger card w-75 mb-3 mx-auto mt-5">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={review.img} class="rounded-start" height={300} width={300}  alt="" srcset="" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h3 class="card-title">{review.name}</h3>
                          <h5 class="card-title">Ratings:-{review.ratings}</h5>
                          <p class="card-text">{review.review}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  )
                }
            </div>
        </div>
    );
};

export default Customer;