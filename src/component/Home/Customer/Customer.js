import React, { useEffect, useState } from 'react';

const Customer = () => {
    const[reviews , setReviews] = useState([])
    useEffect( () =>{
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div>
            <h1 className='textstyle'>What our Customer;s say??</h1>
            <div>
                {
                    reviews.map(review => 
                    <div class="card w-50 mb-3 mx-auto">
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={review.img} class="rounded-start" height={300} width={300}  alt="" srcset="" />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">Customer Name:-{review.name}</h5>
                          <h5 class="card-title">Ratings:-{review.ratings}</h5>
                          <p class="card-text">FeedBack:-{review.review}</p>
                        </div>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Customer;