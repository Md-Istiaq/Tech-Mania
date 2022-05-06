import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://c8.alamy.com/comp/KFEADG/black-friday-big-sale-banner-design-with-man-hands-typing-on-laptop-KFEADG.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Big sale is comming on this friday</h3>
      <p>we are  going to give some discount on some of our laptop. this offer will only available on friday.be ready to grab your desire laptop on a discount price.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://cdn2.f-cdn.com/contestentries/1414523/974321/5b9b47a565e42_thumb900.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-dark'>Best Service in city</h3>
      <p  className='text-dark'>After buying laptop from us you will reacive best service from us . we always care about our customer that why we provide service to our customer </p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://img.freepik.com/free-psd/beautiful-laptop-screen-mockup-ad-with-presentation-slides_53876-98790.jpg?t=st=1651200221~exp=1651200821~hmac=6f4fc708cd7031f7e8d725937d55fdcbac01930f412a1fd77c622a632ba08257&w=1060"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Special discount offer</h3>
      <p>We are giving a special discount on Lenovo laptop(selected item). this discount wil only available for few days. so buy as soon as possible to get our special offer.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100 h-50"
      src="https://i0.wp.com/www.tech-critter.com/wp-content/uploads/MSI-RTX-Laptop-Banner_1200x600.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Good news for Gammers</h3>
      <p>The new MSI Gaming laptop with GEFORCE RTX 20 serise is available. pre order now to get the best gaming experience with GEFORCE RTX 20 as soon as possible.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;