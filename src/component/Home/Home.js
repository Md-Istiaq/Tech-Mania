import React from 'react';
import Footer from '../Home/Footer/Footer'
import Banner from './Banner/Banner';
import Customer from './Customer/Customer';
import Inventory from './Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Customer></Customer>
            <Footer></Footer>

        </div>
    );
};

export default Home;