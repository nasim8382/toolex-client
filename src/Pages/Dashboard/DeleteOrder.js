import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const DeleteOrder = ({ deleteOrder, refetch }) => {
  const [user] = useAuthState(auth);
  const [userOrders, setUserOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = user.email;
    fetch(`http://localhost:5000/orders?email=${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserOrders(data);
      });
  }, [user, navigate]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remaining = userOrders.filter((order) => order._id !== id);
        refetch();
        setUserOrders(remaining);
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="delete-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-secondary text-primary hover:bg-accent hover:text-white"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-red-500">
            Are you sure want to delete this order?
          </h3>
          <div className="modal-action">
            <label
              onClick={() => handleDelete(deleteOrder)}
              htmlFor="delete-modal"
              className="cursor-pointer rounded-md bg-red-500 px-4 py-3 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-primary mt-4"
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteOrder;