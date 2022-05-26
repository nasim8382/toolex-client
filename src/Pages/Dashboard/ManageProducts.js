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
    fetch("https://young-waters-24686.herokuapp.com/tool", {
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
      <h2 className="text-4xl text-center pt-8 pb-5 font-bold text-secondary">All Tools: {tools.length}</h2>
      <div className="overflow-x-auto lg:px-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th className='text-base'>No</th>
              <th className='text-base'>Image</th>
              <th className='text-base'>Name</th>
              <th className='text-base'>Min Order</th>
              <th className='text-base'>Stock</th>
              <th className='text-base'>Price</th>
              <th className='text-base'>Delete</th>
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
