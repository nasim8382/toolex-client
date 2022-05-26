import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [user] = useAuthState(auth);

  const onSubmit = (data, event) => {
    axios.post("http://localhost:5000/review", data).then((res) => {
      const { data } = res;
      if (data.insertedId) {
        toast.success("New Products added successfully");
        event.target.reset();
      }
    });
  };

  return (
    <div className="flex justify-center mt-16 max-w-7xl px-5 md:px-12">
      <div className="card  flex-shrink-0 w-full max-w-sm bg-secondary shadow-xl">
        <div className="card-body text-primary">
          <h2 className="text-center text-primary text-2xl font-bold mb-5">
            Review Information
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs mb-4">
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full max-w-xs text-xl"
                {...register("rating", {
                  required: {
                    value: true,
                    message: "Rating is Required",
                  },
                })}
              />
              <label className="label">
                {errors.rating?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.rating.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs mb-4">
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full max-w-xs text-xl"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs mb-7">
              <input
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs text-xl"
                type="text"
                {...register("name", { value: user?.displayName })}
                readOnly
                disabled
              />
            </div>

            <div className="form-control w-full max-w-xs mb-8">
              <input
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs text-xl"
                type="email"
                {...register("email", { value: user?.email })}
                readOnly
                disabled
              />
            </div>

            <input
              className="w-full max-w-xs cursor-pointer rounded-md bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-accent"
              type="submit"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
