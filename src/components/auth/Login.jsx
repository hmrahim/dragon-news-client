import React from "react";
import logo from "../../assets/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";

const Login = () => {
    const {signInUser} = useContext(authContext)
    const Navigate = useNavigate()
    const [error,setError] = useState("")

    const HandleSignin = (e)=> {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email,password)
        .then(res=>{
           Navigate("/")
           setError("")
            
        })
        .catch(error=> setError(error.message))
    }
  return (
    <div
      className="h-screen bg-info flex justify-center
     items-center px-5 "
    >
      <div className=" shadow-xl  w-full md:w-1/4 mx-auto p-5 rounded-lg shadow bg-base-100 f">
        <img src={logo} alt="" />
        <h1 className="text-center font-bold leading-5 my-5 text-2xl ">
          Login Now </h1>
        <form onSubmit={HandleSignin}>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="email"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Passowrd</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="password"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="btn btn-primary mt-5">Login</button>
          </div>
          <p className="text-sm mt-3">
            You dont have any account please
            <Link to="/register" className="text-blue-500"> register</Link>
          </p>
          <p className="text-sm mt-2">
           
            <Link to="/forgot" className="text-blue-500"> Forgot pasword</Link>
          </p>
          <p className="text-sm mt-3 text-red-600">
            {error}
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
