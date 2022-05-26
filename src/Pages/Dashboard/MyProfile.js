import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const [isReload, setIsReload] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const email = user.email;

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch(`http://localhost:5000/users?email=${email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const onSubmit = (data) => {
    console.log(data);
    const email = user.email;

    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        reset();
        setIsReload(!isReload);
        toast.success('User Information Updated');
      });
  };
  
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-12 lg:pl-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto">
        <div className="card w:72 md:w-96 bg-primary shadow-xl p-6">
          <div className="">
          <h2 className="text-secondary text-3xl font-bold my-7">
            Updated
          </h2>
            <p className="text-secondary  text-lg font-roboto mt-4">
              <span className="font-bold">Name:</span>{" "}
              {user.displayName}
            </p>
            <p className="text-secondary text-lg mt-4">
              <span className="font-bold">Email:</span> {user.email}
            </p>
            {users.map((user) => (
              <div key={user._id}>
                <p className="text-secondary  text-lg mt-4">
                  <span className="font-bold">
                    Educational Institute:
                  </span>{" "}
                  {user.education}
                </p>
                <p className="text-secondary  text-lg mt-4">
                  <span className="font-bold">Address:</span>{" "}
                  {user.address}
                </p>
                <p className="text-secondary  text-lg mt-4">
                  <span className="font-bold">Phone Number:</span>{" "}
                  {user.number}
                </p>
                <p className="text-secondary  text-lg  mt-4">
                  <span className="font-bold">
                    LinkedIn Link:
                  </span>
                  {user.linkedin}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-secondary">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)} className="font-roboto">
            <h2 className="text-center text-primary text-2xl font-bold">
            Update Info
          </h2>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full max-w-xs text-xl mt-5 mb-4"
                  readOnly
                  disabled
                  value={user.displayName}
                  {...register("name", {
                    required: true,
                    value: user.displayName,
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs text-xl my-4"
                  readOnly
                  disabled
                  value={user.email}
                  {...register("email", {
                    required: true,
                    value: user.email,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Educational Institute"
                  className="input input-bordered w-full max-w-xs text-xl mt-4"
                  {...register("education", {
                    required: {
                      value: true,
                      message: "Education  is Required",
                    },
                  })}
                />
                <label className="label">
                {errors.education?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.education.message}
                  </span>
                )}
              </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full max-w-xs text-xl mt-4"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is Required",
                    },
                  })}
                />
                <label className="label">
                {errors.address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.address.message}
                  </span>
                )}
              </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs text-xl mt-4"
                  {...register("number", {
                    required: {
                      value: true,
                      message: "Number is Required",
                    },
                  })}
                />
                <label className="label">
                {errors.number?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.number.message}
                  </span>
                )}
              </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="LinkedIn Profile Link"
                  className="input input-bordered w-full max-w-xs text-xl mt-4"
                  {...register("linkedin", {
                    required: {
                      value: true,
                      message: "Link is Required",
                    },
                  })}
                />
                <label className="label">
                {errors.linkedin?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.linkedin.message}
                  </span>
                )}
              </label>
              </div>

              <input
                className="w-full max-w-xs cursor-pointer rounded-md bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-accent mt-5"
                type="submit"
                value="Add"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
