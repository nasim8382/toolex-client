import React from 'react';
import Banner from './Banner';
import BrandLogo from './BrandLogo';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <BrandLogo></BrandLogo>
        </div>
    );
};

export default Home;