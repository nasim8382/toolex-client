import React from 'react';

const Banner = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mt-20 font-bold text-secondary'>This is banner page</h1>
            <button className="cursor-pointer rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white block mx-auto">Button</button>
        </div>
    );
};

export default Banner;