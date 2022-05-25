import React from "react";

const DeleteTool = ({ deletingTools, refetch, setDeletingTools }) => {
  const { _id } = deletingTools;
  console.log(deletingTools);

  const handleDelete = () => {
    fetch(`http://localhost:5000/tool/${_id}`, {
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
      <input type="checkbox" id="delete-product-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold font-roboto text-lg text-red-500">
            Are you sure you want to delete this product?
          </h3>
          <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">
              Delete
            </button>
            <label for="delete-product-modal" class="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTool;
