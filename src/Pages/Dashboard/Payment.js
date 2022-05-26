import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51L3PvxA7Cbxpvhd95xL0HCT86R6xjkWJHITMmjzRa6lKxWjr8wTzMgZilcCAUkXxVTT4JTPbUHh3aStVgCKCevKF00exTvXMZO"
  );

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/orders/${id}`;

  const { data: order, isLoading } = useQuery(["orders", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto">
      <div className="card flex-shrink-0 w-50 max-w-md bg-base-100 shadow-xl">
        <figure>
          <img src={order.image} alt="Shoes" className="w-80" />
        </figure>
        <div className="card-body">
          <h2 className="text-secondary font-bold text-4xl">
            {order.name}
          </h2>
          <p className="font-semibold text-xl">
            <span className="font-bold text-accent">Order Quantity: </span>
            {order.quantity}
          </p>
          <p className="font-semibold text-xl">
            <span className="font-bold text-accent">Price:</span> ${order.price}
          </p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 mt-4">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
