import React from "react";
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const { _id,  name, image, description, minimum_order, available_quantity, price } =
    tool;
    const navigate = useNavigate();

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Tool"/>
      </figure>
      <div className="card-body">
        <h2 className="text-secondary font-bold text-3xl">{name}</h2>
        <p className="text-gray-500 mb-1">{description}</p>
        <h3 className="font-semibold text-xl"><span className="text-accent">Minimum Order Quantity: </span>{minimum_order}</h3>
        <h3 className="font-semibold text-xl"><span className="text-accent">Available Quantity: </span> {available_quantity}</h3>
        <h3 className="font-semibold text-xl"><span className="text-accent">Product Price: </span> ${price}</h3>
        <div className="card-actions justify-end">
            <button className="cursor-pointer rounded-md bg-secondary px-4 py-3 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white" onClick={ () => navigate(`/purchase/${_id}`)}>Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Tool;
