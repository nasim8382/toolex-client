import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const DeleteOrder = ({ deleteOrder, refetch }) => {
  const [user] = useAuthState(auth);
  const [userOrders, setUserOrders] = useState([]);
  const navigate = useNavigate();
  console.log(deleteOrder);

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
        console.log(data);
      });
  }, [user, navigate]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = userOrders.filter((order) => order._id !== id);
        refetch();
        setUserOrders(remaining);
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="delete-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="font-bold text-lg">
            Are you sure want to delete this order?
          </h3>
          <div class="modal-action">
            <label
              onClick={() => handleDelete(deleteOrder)}
              for="delete-modal"
              class="btn"
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