import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";
import useToken from "../../hooks/useToken";
import bg from '../../images/parallax.jpg';

const Login = () => {
  const [ signInWithGoogle, gUser, gLoading, gError ] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const [
      signInWithEmailAndPassword, 
      user, 
      loading, 
      error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500 mb-2">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div style={{background: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="flex justify-end items-center h-screen max-w-7xl mx-auto px-5 md:pr-28 lg:pr-40">
        <div className="card w-96 bg-secondary shadow-xl">
          <div className="card-body text-secondary">
            <h2 className="text-center text-primary uppercase text-2xl font-bold">
              Login
            </h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs text-xl"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-primary text-xl font-semibold">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs text-xl"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              {signInError}
              <input
                className="w-full max-w-xs cursor-pointer rounded-md bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-lime-700"
                type="submit"
                value="Login"
              />
            </form>

            <p className="text-primary font-semibold">
                New to Toolex ? {" "}
                <Link className="text-red-600" to="/signup">
                   Create New Account
                </Link>
            </p>

            <div className="divider text-red-600">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="cursor-pointer rounded-md bg-primary px-4 py-3 text-center text-sm font-bold uppercase text-white transition duration-200 ease-in-out hover:bg-accent"
            >
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
