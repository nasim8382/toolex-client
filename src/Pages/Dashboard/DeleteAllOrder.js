import React from "react";

const DeleteAllOrder = ({ deletingOrder, setDeletingOrder, refetch }) => {
  const { _id } = deletingOrder;

  const handleDelete = () => {
    fetch(`http://localhost:5000/allorders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setDeletingOrder(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete this order?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDelete()} className="btn btn-xs btn-error">
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAllOrder;