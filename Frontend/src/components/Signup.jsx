import React from 'react'
import { Link, useLocation, useNavigate  } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  
  const onSubmit = async (data) => {
    console.log(data);
    // Handle signup logic here
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
  }
  await axios
  .post("http://localhost:4001/user/signup", userInfo)
  .then((res) => {
    console.log(res.data);
    if (res.data) {
      toast.success("Signedup Successfully");
      navigate(from, { replace: true });
    }
    localStorage.setItem("Users", JSON.stringify(res.data.user));
  })
  .catch((err) => {
    if (err.response) {
      console.log(err);
      toast.error("Error: " + err.response.data.message);
    }
  });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Close button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>
          
          <h3 className="font-bold text-lg">Sign Up</h3> 

          {/* Name */}
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br/>
            <input 
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("fullname", { 
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters"
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/i,
                  message: "Name should contain only letters"
                }
              })}
            />
            <br/>
            {errors.fullname && (
              <span className="text-sm text-red-500">
                {errors.fullname.message}
              </span>
            )}
          </div>
          
          {/* Email */}
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br/>
            <input 
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format"
                }
              })}
            />
            <br/>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br/>
            <input 
              type="password" 
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            <br/>
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
          
          {/* Button */}
          <div className="flex justify-around mt-4">
            <button 
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Sign Up
            </button> 
            <p className="flex items-center gap-1">
              Already registered? 
              <Link to="/"
                className="underline text-blue-500 cursor-pointer ml-1">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup;