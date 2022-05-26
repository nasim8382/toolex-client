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
    <div className="mt-12 md:px-5">
      <div className="overflow-x-auto">
        <table className="table w-full font-roboto">
          <thead>
            <tr>
              <th className='text-primary text-lg text-semibold'>No</th>
              <th className='text-primary text-lg text-semibold'>Name</th>
              <th className='text-primary text-lg text-semibold'>Price</th>
              <th className='text-primary text-lg text-semibold'>Quantity</th>
              <th className='text-primary text-lg text-semibold'>Payment</th>
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
                        <button className="cursor-pointer rounded-md bg-secondary py-1 px-2 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white mr-3">Pay</button>
                      </Link>
                      <label
                        htmlFor="delete-modal"
                        className="cursor-pointer rounded-md bg-red-500 text-white py-1 px-2 text-center text-sm font-bold uppercase transition duration-200 ease-in-out hover:bg-primary"
                        onClick={() => setDeleteOrder(order._id)}
                      >
                        Cancel
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
                        <span className="text-accent">Paid</span>
                      </p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-accent">
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
