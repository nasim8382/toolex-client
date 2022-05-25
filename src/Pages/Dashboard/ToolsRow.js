import React from "react";

const ToolsRow = ({ index, tool, setDeletingTools }) => {
  const { _id, name, image, minimum_order, available_quantity, price } =
    tool;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-20 rounded">
            <img src={image} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{minimum_order}</td>
      <td>{available_quantity}</td>
      <td>${price}</td>
      <td>
        <label
          onClick={() => setDeletingTools(tool)}
          htmlFor="delete-product-modal"
          className="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ToolsRow;
