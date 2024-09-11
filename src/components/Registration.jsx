import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import validations from "./validation";
import image2 from "../assets/images/signup-image.jpg";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import { fetchUserRegister } from "../apiLayer";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Registration = () => {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        username: "",
        name: { firstname: "", lastname: "" },
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validations}
      onSubmit={(values) => {
        fetchUserRegister(values)
          .then((res) => {
            console.log(res, "register wala data");
            navigate("/login");
            toast('Registration Sucessful!');
          })
          .catch((err) => toast(err.response.data));
        console.log(values);
      }}
    >
      <Form className=" shadow-2xl rounded-3xl py-10 ps-20 pe-10 mx-auto w-[80%]">
        <div className="flex justify-between items-center py-4 bg-red">
          <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="text-5xl font-bold mx-auto">Sign up</h1>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <PersonIcon />
                <Field
                  name="username"
                  type="text"
                  className="form-input"
                  placeholder="Username"
                />
              </div>
              <ErrorMessage
                name="userName"
                component="div"
                className="err-msg"
              />
            </div>
            <div className="flex gap-4 w-full h-[60px]">
              <div className="w-1/2">
                <div className="flex border-b-2">
                  <AlternateEmailIcon />
                  <Field
                    name="name.firstname"
                    type="text"
                    className="form-input"
                    placeholder="Firstname"
                  />
                </div>
                <ErrorMessage
                  name="name.firstname"
                  component="div"
                  className="err-msg"
                />
              </div>
              <div className="w-1/2">
                <div className="flex border-b-2">
                  <AlternateEmailIcon />
                  <Field
                    name="name.lastname"
                    type="text"
                    className="form-input w-full"
                    placeholder="Lastname"
                  />
                </div>
                <ErrorMessage
                  name="name.lastname"
                  component="div"
                  className="err-msg"
                />
              </div>
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <EmailIcon />
                <Field
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Email Address"
                />
              </div>
              <ErrorMessage name="email" component="div" className="err-msg" />
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <PhoneIcon />
                <Field
                  name="phone"
                  type="text"
                  className="form-input"
                  placeholder="Contact Number"
                />
              </div>
              <ErrorMessage name="phone" component="div" className="err-msg" />
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <LockIcon />
                <Field
                  name="password"
                  type="text"
                  className="form-input"
                  placeholder="Password"
                />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="err-msg"
              />
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <KeyIcon />
                <Field
                  name="confirmPassword"
                  type="text"
                  className="form-input"
                  placeholder="Repeat password"
                />
              </div>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="err-msg"
              />
            </div>
            <button
              type="submit"
              className="submit-btn border rounded-md py-2 px-6 bg-sky-400 hover:bg-sky-500 w-full"
            >
              Register
            </button>
          </div>
          <div className="bg-red p-8 w-full">
            <img src={image2} alt="login/register" className="w-[350px]" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Registration;
