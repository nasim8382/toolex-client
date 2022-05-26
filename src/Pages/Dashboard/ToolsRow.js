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
          className="cursor-pointer rounded-md bg-red-500 text-white py-1 px-2 text-center text-sm font-bold uppercase transition duration-200 ease-in-out hover:bg-primary"
        >
          Remove
        </label>
      </td>
    </tr>
  );
};

export default ToolsRow;
