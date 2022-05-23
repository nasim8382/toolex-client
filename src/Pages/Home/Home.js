import React from 'react';
import Banner from './Banner';
import BrandLogo from './BrandLogo';
import BusinessSummary from './BusinessSummary';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <FeaturedProducts></FeaturedProducts>
            <BrandLogo></BrandLogo>
        </div>
    );
};

export default Home;