import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteTool from "./DeleteTool";
import ToolsRow from "./ToolsRow";

const ManageProducts = () => {
  const [deletingTools, setDeletingTools] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    fetch("http://localhost:5000/tool", {
      method: "GET",
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
      <h2 className="text-2xl font-bold text-center my-8 text-accent">
        All The Tools
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Minimum Quantity</th>
              <th>Available Quantity</th>
              <th>Price</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <ToolsRow
                index={index}
                key={tool._id}
                tool={tool}
                refetch={refetch}
                setDeletingTools={setDeletingTools}
              ></ToolsRow>
            ))}
          </tbody>
        </table>
        {deletingTools && (
          <DeleteTool
            deletingTools={deletingTools}
            refetch={refetch}
            setDeletingTools={setDeletingTools}
          ></DeleteTool>
        )}
      </div>
    </div>
  );
};

export default ManageProducts;
