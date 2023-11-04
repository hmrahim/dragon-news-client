import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import { useState } from "react";

const Register = () => {
    const {createUser} = useContext(authContext)
    const [error,setError] = useState("")
    const [success,setSuccess] = useState("")
   
    const HandleSubmit = (e)=> {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUser(email,password)
        .then(res=> {
            setError("")
            setSuccess("Äccount created succesfully")
            e.target.reset()
        })
        .catch(error=> {
            setSuccess("")
            setError(error.message)
        })

    }
  return (
    <div
      className="h-screen bg-info flex justify-center
       items-center px-5 "
    >
      <div className=" shadow-xl  w-full md:w-1/4 mx-auto p-5 rounded-lg shadow bg-base-100 f">
        <img src={logo} alt="" />
        <h1 className="text-center font-bold leading-5 my-5 text-2xl ">
          Register Now 
        </h1>
        <form onSubmit={HandleSubmit}>
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="name"
            />
          </div>
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
            <button className="btn btn-primary mt-5">Register</button>
          </div>
          <p className="text-sm mt-3">
            Already you have an account?  please
            <Link to="/login" className="text-blue-500"> login</Link>
          </p>
          <p className="text-sm mt-3 text-red-600">
            {error}
           
          </p>
          <p className="text-sm mt-3 text-green-500">
            {success}
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
