import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link} from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import DeleteOrder from "./DeleteOrder";

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const email = user.email;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/orders?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full font-roboto">
          <thead>
            <tr>
              <th></th>
              <th>Parts Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Payment</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <tbody key={order._id}>
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td>
                  {order.price && !order.paid && (
                    <div>
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-xs btn-access">Pay</button>
                      </Link>
                      <label
                        htmlFor="delete-modal"
                        className="btn btn-xs btn-accent"
                        onClick={() => setDeleteOrder(order._id)}
                      >
                        Delete
                      </label>
                      {deleteOrder && (
                        <DeleteOrder
                          refetch={refetch}
                          deleteOrder={deleteOrder}
                        ></DeleteOrder>
                      )}
                    </div>
                  )}

                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
