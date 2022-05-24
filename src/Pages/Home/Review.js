import React from "react";
import './Review.css';

const Review = ({ review }) => {
  const { name, image, rating, description } = review;

  return (
    <div className="card w-96 bg-base-100 shadow-xl py-5">
      <div className="avatar text-center">
        <div className="w-24 rounded-full ring ring-secondary ring-offset-2 mx-auto">
          <img src={image} alt="" />
        </div>
      </div>
      <h2 className="text-2xl text-center text-primary my-4">{name}</h2>
      <h3 className="text-xl text-center text-lime-800 mb-3">Rating: {rating}</h3>
      <p className="text-gray-500 text-center px-5">{description}</p>
    </div>
  );
};

export default Review;
