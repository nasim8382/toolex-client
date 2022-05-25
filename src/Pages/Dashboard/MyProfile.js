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
    <div className="mt-12">
      <div className="flex gap-6 ">
        <div className="card w-96 bg-base-100 shadow-xl p-6 ml-6 mx-auto">
          <div className="">
            <h2 className="card-title font-saira text-accent text-2xl font-bold text-center">
              Your Information
            </h2>
            <p className="text-lg font-roboto mt-4">
              <span className="text-accent font-bold">Name:</span>{" "}
              {user.displayName}
            </p>
            <p className="text-lg font-roboto mt-4">
              <span className="text-accent font-bold">Email:</span> {user.email}
            </p>
            {users.map((user) => (
              <div key={user._id}>
                <p className="text-lg font-roboto mt-4">
                  <span className="text-accent font-bold">
                    University/College/School Name:
                  </span>{" "}
                  {user.education}
                </p>
                <p className="text-lg font-roboto mt-4">
                  <span className="text-accent font-bold">Address:</span>{" "}
                  {user.address}
                </p>
                <p className="text-lg font-roboto mt-4">
                  <span className="text-accent font-bold">Phone Number:</span>{" "}
                  {user.number}
                </p>
                <p className="text-lg font-roboto mt-4">
                  <span className="text-accent font-bold">
                    Linked Profile Link:
                  </span>
                  {user.linkedin}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title font-saira text-accent text-2xl font-bold text-center">
              Add Info
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="font-roboto">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-accent text-lg font-bold">
                    Name
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  disabled
                  value={user.displayName}
                  {...register("name", {
                    required: true,
                    value: user.displayName,
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-accent text-lg font-bold">
                    Email
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  disabled
                  value={user.email}
                  {...register("email", {
                    required: true,
                    value: user.email,
                  })}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-accent text-lg font-bold">
                    University/College/School Name
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("education", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-accent text-lg font-bold">
                    Address
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("address", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-accent text-lg font-bold">
                    Phone Number
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("number", {
                    required: {
                      value: true,
                    },
                  })}
                />
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-accent text-lg font-bold">
                    Linked Profile Link
                  </span>
                </label>
                <input
                  className="input input-bordered w-full max-w-xs"
                  {...register("linkedin", {
                    required: {
                      value: true,
                    },
                  })}
                />
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
    </div>
  );
};

export default MyProfile;
