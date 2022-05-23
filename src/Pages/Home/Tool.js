import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { name, image, description, minimum_order, available_quantity, price } =
    tool;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Tool"/>
      </figure>
      <div className="card-body">
        <h2 className="text-secondary font-bold text-3xl">{name}</h2>
        <p className="text-gray-500 mb-1">{description}</p>
        <h3 className="text-lime-800 font-semibold text-xl">Minimum Order Quantity: {minimum_order}</h3>
        <h3 className="text-lime-800 font-semibold text-xl">Available Quantity: {available_quantity}</h3>
        <h3 className="text-lime-800 font-semibold text-xl">Product Price: ${price}</h3>
        <div className="card-actions justify-end">
            <Link to="/purchase">
                <button className="cursor-pointer rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white">Purchase</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
