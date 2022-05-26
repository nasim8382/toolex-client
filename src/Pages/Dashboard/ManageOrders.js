import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AllOrders from './AllOrders';
import DeleteAllOrder from './DeleteAllOrder';

const ManageOrders = () => {
   const [deletingOrder, setDeletingOrder] = useState(null);

    const {
      data: orders,
      isLoading,
      refetch,
    } = useQuery("allorders", () =>
      fetch("http://localhost:5000/allorders", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
    );
    if (isLoading) {
      return <Loading></Loading>;
    }
  
  return (
    <div>
      <h2 className="text-4xl text-center pt-8 pb-5 font-bold text-secondary">All Orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Tool Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <AllOrders
                key={order._id}
                order={order}
                index={index}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
              ></AllOrders>
            ))}
          </tbody>
        </table>
      </div>
      {deletingOrder && (
        <DeleteAllOrder
          deletingOrder={deletingOrder}
          refetch={refetch}
          setDeletingOrder={setDeletingOrder}
        ></DeleteAllOrder>
      )}
    </div>
  );
};

export default ManageOrders;