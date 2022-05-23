import React from "react";
import { Link } from "react-router-dom";
import featured1 from "../../images/feature1.jpg";
import featured2 from "../../images/feature2.jpg";
import HorizontalLine from "../Shared/HorizontalLine";

const FeaturedProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-12 mt-20 md:mt-32">
      <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
        Featured Products
      </h1>
      <HorizontalLine></HorizontalLine>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <div style={{background: `url(${featured1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="text-primary pl-5 py-20">
              <p className="mb-5">Get Save 35% Off</p>
              <h1 className="mb-5 text-3xl font-bold">Best Stone Cutter</h1>
              <Link to="/signup">
                <button className="cursor-pointer rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white">Open Account</button>
              </Link>
          </div>
        </div>

        <div style={{background: `url(${featured2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="text-primary pl-5 py-20">
              <p className="mb-5">Get Save 45% Off</p>
              <h1 className="mb-5 text-3xl font-bold">Buy Power Tool</h1>
              <Link to="/signup">
                <button className="cursor-pointer rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white">Open Account</button>
              </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeaturedProducts;
