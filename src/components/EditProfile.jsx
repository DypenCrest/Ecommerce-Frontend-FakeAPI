import React from "react";
import { useForm } from "react-hook-form";
import image1 from "../assets/images/signup-image.jpg";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import useUserDetail from "../hooks/useUserDetail";
import { useQuery } from "@tanstack/react-query";

const EditProfile = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ['0']
  });
  const [userDetail] = useUserDetail();
  console.log(userDetail);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div>
      <form
        className=" shadow-2xl rounded-3xl py-10 ps-20 pe-10 mx-auto w-[60%]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-between items-center py-4 bg-red">
          <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="text-5xl font-bold mx-auto mb-4">Profile Details</h1>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <PersonIcon />
                <input
                  name="username"
                  type="text"
                  className="form-input"
                  placeholder="Username"
                  value={userDetail?.username}
                  {...register("username")}
                />
              </div>
            </div>

            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <AlternateEmailIcon />
                <input
                  name="firstname"
                  type="text"
                  className="form-input"
                  placeholder="Firstname"
                  value={userDetail?.name?.firstname}
                  {...register("firstname")}
                />
              </div>
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <AlternateEmailIcon />
                <input
                  name="lastname"
                  type="text"
                  className="form-input"
                  placeholder="Lastname"
                  value={userDetail?.name?.lastname}
                  {...register("lastname")}
                />
              </div>
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <EmailIcon />
                <input
                  name="email"
                  type="text"
                  className="form-input"
                  placeholder="Email Address"
                  value={userDetail?.email}
                  {...register("email")}
                />
              </div>
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <PhoneIcon />
                <input
                  name="phone"
                  type="text"
                  className="form-input"
                  placeholder="Contact Number"
                  value={userDetail?.phone}
                  {...register("phone")}
                />
              </div>
            </div>
            <div className="w-full h-[60px]">
              <div className="flex border-b-2">
                <KeyIcon />
                <input
                  name="password"
                  type="text"
                  className="form-input"
                  placeholder="New Password"
                  value={userDetail?.password}
                  {...register("password")}
                />
              </div>
            </div>
            <div className="flex gap-4 w-full">
              <button
                type="submit"
                className="submit-btn border rounded-md py-2 px-6 bg-green-500 text-white hover:bg-green-600 w-full"
              >
                Save
              </button>
              <button
                type="button"
                className="submit-btn border rounded-md py-2 px-6 bg-red-500 text-white hover:bg-red-600 w-full"
              >
                Cancel
              </button>
            </div>
          </div>
          <div className="bg-red p-8 w-full">
            <img src={image1} alt="login/register" className="w-[350px]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
