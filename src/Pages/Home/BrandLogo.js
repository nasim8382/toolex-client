import React from 'react';
import HorizontalLine from '../Shared/HorizontalLine';
import logo1 from '../../images/brand_logo/logo1.png';
import logo2 from '../../images/brand_logo/logo2.png';
import logo3 from '../../images/brand_logo/logo3.png';
import logo4 from '../../images/brand_logo/logo4.png';
import logo5 from '../../images/brand_logo/logo5.png';
import logo6 from '../../images/brand_logo/logo6.png';

const BrandLogo = () => {
    return (
        <div className='max-w-7xl mx-auto px-12 mt-20 md:mt-32'>
            <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">Brand Logo</h1>
            <HorizontalLine></HorizontalLine>
            <div className='border border-inherit p-5 md:p-10 grid grid-cols-3 gap-5 md:flex justify-around'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
                <img src={logo6} alt="" />
            </div>
        </div>
    );
};

export default BrandLogo;