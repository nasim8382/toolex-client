import React from "react";

const DeleteTool = ({ deletingTools, refetch, setDeletingTools }) => {
  const { _id } = deletingTools;

  const handleDelete = () => {
    fetch(`https://young-waters-24686.herokuapp.com/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDeletingTools(null);
        refetch();
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold font-roboto text-lg text-red-500">
            Are you sure you want to delete this product?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDelete()} className="cursor-pointer rounded-md bg-red-500 px-4 py-1 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-primary">
              Delete
            </button>
            <label htmlFor="delete-product-modal" className="cursor-pointer rounded-md bg-secondary px-4 py-1 text-center text-sm font-bold uppercase text-primary transition duration-200 ease-in-out hover:bg-accent hover:text-white">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTool;
