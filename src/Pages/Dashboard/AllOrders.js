import React from "react";

const AllOrders = ({ order, index, setDeletingOrder, refetch }) => {
  const { _id, userName, email, number, name, quantity, price, paid, status } =
    order;

  const handleOrderStatus = () => {
    fetch(`http://localhost:5000/allorders/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>{number}</td>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>${price}</td>
      <td>
        {!paid && <button className="btn btn-success btn-xs">Unpaid</button>}
      </td>
      <td>
        {paid &&
          (status ? (
            <button className="btn btn-success btn-xs">Shipped</button>
          ) : (
            <button
              onClick={() => handleOrderStatus()}
              className="btn btn-accent btn-xs"
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
            className="btn btn-xs btn-error"
          >
            Delete
          </label>
        )}
      </td>
    </tr>
  );
};

export default AllOrders;