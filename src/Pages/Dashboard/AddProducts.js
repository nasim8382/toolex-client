import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imageStorageKey = "6cd2270b97e4c97d45d2232260b54758";

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const parts = {
            name: data.name,
            description: data.description,
            quantity: "",
            minimum_order: data.minimum_order,
            available_quantity: data.available_quantity,
            price: data.price,
            image: img,
          };
          // send to your database
          fetch("http://localhost:5000/tool", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(parts),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                toast.success("New Tool added successfully");
                reset();
              } else {
                toast.error("Failed to add a tool");
              }
            });
        }
      });
  };

  return (
    <div className="container mx-auto">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-12">
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-accent text-lg font-bold">
                  Product Name:
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: true,
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-accent text-lg font-bold">
                  Description:
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("description", {
                  required: true,
                })}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-accent text-lg font-bold">
                  Minimum Quantity Order:
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("minimum_order", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-accent text-lg font-bold">
                  Available Quantity:
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("available_quantity", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-accent text-lg font-bold">
                  Price:
                </span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: {
                    value: true,
                  },
                })}
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs pt-[5px]"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn btn-primary w-full max-w-xs text-base-100 hover:bg-base-100 hover:border-accent hover:text-accent hover:ease-in-out hover:duration-300 mt-4"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
