import React from 'react';
import useProduct from '../../hooks/useProduct';

const ProductDetails = () => {
    const [products] = useProduct()
    return (
        <div>
            <h1>this is product details</h1>
        </div>
    );
};

export default ProductDetails;