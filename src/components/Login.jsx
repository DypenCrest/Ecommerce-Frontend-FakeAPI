import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { ErrorMessage, Field } from "formik";
import React from "react";
import { useForm } from "react-hook-form";
import image1 from "../assets/images/signin-image.jpg";
import { fetchUserLogin } from "../apiLayer";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetchUserLogin(data)
      .then((res) => {
        localStorage.setItem("token", res.token);
        navigate("/products");
      })
      .catch((err) => toast(err.response.data));
  };
  return (
    <form
      className=" shadow-2xl rounded-3xl py-10 ps-20 pe-10 mx-auto w-[60%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl font-bold ">Welcome to Ecommerce Demo Project</h1>
      <div className="flex justify-between items-center py-4 bg-red">
        <div className="flex flex-col items-start gap-3 w-full">
          <h1 className="text-5xl font-bold mx-auto mb-4">Sign In</h1>
          <div className="w-full h-[60px]">
            <div className="flex border-b-2">
              <PersonIcon />
              <input
                name="username"
                type="text"
                className="form-input"
                placeholder="Username"
                {...register("username")}
              />
            </div>
          </div>

          <div className="w-full h-[60px]">
            <div className="flex border-b-2">
              <LockIcon />
              <input
                name="password"
                type="text"
                className="form-input"
                placeholder="Password"
                {...register("password")}
              />
            </div>
          </div>

          <button
            type="submit"
            className="submit-btn border rounded-md py-2 px-6 bg-sky-400 hover:bg-sky-500 w-full"
          >
            Login
          </button>
        </div>
        <div className="bg-red p-8 w-full">
          <img src={image1} alt="login/register" className="w-[350px]" />
        </div>
      </div>
    </form>
  );
};

export default Login;
