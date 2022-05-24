import React from 'react';
import Banner from './Banner';
import BrandLogo from './BrandLogo';
import BusinessSummary from './BusinessSummary';
import FeaturedProducts from './FeaturedProducts';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <FeaturedProducts></FeaturedProducts>
            <BrandLogo></BrandLogo>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;