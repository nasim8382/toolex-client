import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);

  const [tools, setTools] = useState([]);
  const [isReload, setIsReload] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/tool/${id}`)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [isReload]);

  const myFunction = (event) => {
    const qquantity = parseInt(event.target.value);
    if (qquantity < tools.minimum_order) {
      setError(
        "You have to purchase product more than our minimum order quantity"
      );
      setDisabled(true);
      return;
    } else if (qquantity > tools.available_quantity) {
      setError("You can't purchase product more than our available quantity");
      setDisabled(true);
      return;
    } else if (qquantity <= tools.available_quantity && qquantity >= tools.minimum_order) {
      setError(" ");
      setDisabled(false);
    }
  };

  const handleOrder = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    const number = event.target.number.value;
    const address = event.target.address.value;

    const allData = {
      image: tools.image,
      name: tools.name,
      quantity: quantity,
      price: tools.price,
      userName: user.displayName,
      email: user.email,
      number: number,
      address: address,
    };

    fetch(`http://localhost:5000/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Your order is taken !!!`);
        }
        else {
          toast.error(`You already ordered this product !!!`);
        }
        setIsReload(!isReload);
        event.target.reset();
      });
  };

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="text-center lg:text-left px-4">
            <figure>
              <img src={tools.image} alt="Shoes" className="w-80" />
            </figure>
            <h1 className="text-5xl font-bold mt-4">{tools.name}</h1>
            <p className="font-roboto text-neutral mt-4 text-justify">
              {tools.description}
            </p>
            <p className="font-roboto text-neutral  mt-2">
              <span className="font-bold text-accent">
                Minimum Quantity Order:
              </span>{" "}
              {tools.minimum_order}
            </p>
            <p className="font-roboto text-neutral  mt-2 ">
              <span className="font-bold text-accent">Available Quantity:</span>{" "}
              {tools.available_quantity}
            </p>
            <p className="font-roboto text-neutral  mt-2">
              <span className="font-bold text-accent">Price:</span> $
              {tools.price}
            </p>
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleOrder} className="font-roboto">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Name
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    disabled
                    name="name"
                    value={user.displayName}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    disabled
                    name="email"
                    value={user.email}
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Address
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="address"
                  />
                </div>

                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-accent text-lg font-bold">
                      Phone Number
                    </span>
                  </label>
                  <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="number"
                  />
                </div>

                <div className="form-control w-full max-w-xs flex-row items-center mt-4 ">
                  <label className="label w-full">
                    <span className="label-text text-accent text-lg font-bold">
                      Order Quantity:
                    </span>
                  </label>
                  <input
                    onChange={myFunction}
                    className="input input-bordered w-full max-w-xs"
                    type="number"
                    name="quantity"
                  />
                </div>
                <p className="text-error mt-2">{error}</p>
                <button
                  className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
                  // disabled={error && true}
                  disabled={disabled && true}
                >
                  Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
