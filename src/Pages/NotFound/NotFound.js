import React from 'react';
import error from '../../images/404.gif';

const NotFound = () => {
    return (
        <div className='flex h-screen justify-end items-center max-w-7xl px-5 md:px-12 mx-auto'>
             <img src={error} alt="" />
        </div>
    );
};

export default NotFound;