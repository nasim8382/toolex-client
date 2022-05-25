import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Purchase = () => {
  const { id } = useParams();
  // const [tool, setTool] = useState([]);
  // const [singleTool, setSingleTool] = useState(null);

  const [user] = useAuthState(auth);

  const { isLoading, data: tool } = useQuery(["tool", id], () =>
    fetch(`http://localhost:5000/tool/${id}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  /* useEffect( () => {
        axios.get(`http://localhost:5000//tool/${id}`)
            .then(res => setTool(res.data));
    }, [ id, tool ]); */

  return (
    <div className="max-w-7xl px-5 md:px-12 mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="card w-80 md::w-96 bg-base-100 shadow-xl mx-auto">
          <figure>
            <img src={tool.image} alt="Tool" />
          </figure>
          <div className="card-body">
            <h2 className="text-secondary font-bold text-3xl">{tool.name}</h2>
            <p className="text-gray-500 mb-1">{tool.description}</p>
            <h3 className="text-lime-800 font-semibold text-xl">
              Minimum Order Quantity: {tool.minimum_order}
            </h3>
            <h3 className="text-lime-800 font-semibold text-xl">
              Available Quantity: {tool.available_quantity}
            </h3>
            <h3 className="text-lime-800 font-semibold text-xl">
              Product Price: ${tool.price}
            </h3>
          </div>
        </div>

        <div className="card  flex-shrink-0 w-full max-w-sm bg-secondary shadow-xl">
          <div className="card-body text-primary">
            <h2 className="text-center text-primary text-2xl font-bold mb-3">
              Purchase Information
            </h2>
            <form>
              <div className="form-control w-full max-w-xs mb-2">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="your name"
                  className="input input-bordered w-full max-w-xs text-xl"
                  value={user?.displayName}
                  disabled
                />
              </div>

              <div className="form-control w-full max-w-xs mb-2">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs text-xl"
                  value={user?.email}
                  disabled
                />
              </div>

              <div className="form-control w-full max-w-xs mb-2">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your address"
                  className="input input-bordered w-full max-w-xs text-xl"
                  required
                />
              </div>

              <div className="form-control w-full max-w-xs mb-2">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Phone No"
                  className="input input-bordered w-full max-w-xs text-xl"
                  required
                />
              </div>

              <div className="form-control w-full max-w-xs mb-2">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Order Quantity</span>
                </label>
                <input
                  type="text"
                  placeholder={tool.minimum_order}
                  className="input input-bordered w-full max-w-xs text-xl"
                  required
                />
              </div>

              <input
                className="w-full max-w-xs cursor-pointer rounded-md bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-lime-700 mt-3"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
