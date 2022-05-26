import React from "react";

const AllOrders = ({ order, index, setDeletingOrder, refetch }) => {
  const { _id, userName, email, number, name, quantity, price, paid, status } =
    order;

  const handleOrderStatus = () => {
    fetch(`https://young-waters-24686.herokuapp.com/allorders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
        {!paid && <button className="cursor-pointer rounded-md bg-rose-300 px-1.5 py-0.5 text-center text-sm uppercase">Unpaid</button>}
      </td>
      <td>
        {paid &&
          (status ? (
            <button className="cursor-pointer rounded-md bg-accent px-1.5 py-0.5 text-center text-sm text-white uppercase">Shipped</button>
          ) : (
            <button
              onClick={() => handleOrderStatus()}
              className="cursor-pointer rounded-md bg-secondary px-1.5 py-0.5 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white"
            >
              Pending
            </button>
          ))}
      </td>
      <td>
        {!paid && (
          <label
            onClick={() => setDeletingOrder(order)}
            htmlFor="delete-confirm-modal"
            className="cursor-pointer rounded-md bg-red-500 text-white px-1.5 py-0.5 text-center text-sm font-bold uppercase transition duration-200 ease-in-out hover:bg-primary"
          >
            Remove
          </label>
        )}
      </td>
    </tr>
  );
};

export default AllOrders;