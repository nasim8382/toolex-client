import React from "react";
import { Link } from "react-router-dom";
import banner from '../../images/banner.jpg';

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{background: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'Center', backgroundSize: 'cover'}}
    >
        <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div>
            <h2 className="mb-7 text-3xl md:text-5xl font-bold text-secondary">Free Shipping For</h2>
          <h1 className="mb-10 text-5xl md:text-7xl font-bold text-white">Best Mechanic Tool Set</h1>
          <Link to="/blogs">
            <button className="cursor-pointer rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white block mx-auto">Our Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
