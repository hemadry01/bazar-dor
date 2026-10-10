import React from 'react';
import TodayPriceRising from './TodayPriceRising';
import TodayPriceDropped from './TodayPriceDropped';
import AllProduct from './AllProduct';

const ProductPage = () => {
    return (
        <div>
            <TodayPriceRising/>
            <TodayPriceDropped/>
            <AllProduct/>
        </div>
    );
};

export default ProductPage;