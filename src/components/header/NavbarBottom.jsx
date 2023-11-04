import React from "react";
import userImage from "../../assets/user.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const NavbarBottom = () => {
  const Navigate = useNavigate()
  const {user,logout} = useContext(authContext)
  const signOut = ()=> {
    logout()
    .then(res=> {
      console.log(res);
      // <Navigate to="/login" replace={true}/>
      Navigate("/")
    })
    .then(error => console.log(error))

  }
  const menu = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/career">Career</Link>
      </li>
    </>
  );
  return (
    <div className="w-full md:w-4/5 mx-auto mt-9 mb-20">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            {menu}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-11 rounded-full">
              <img src={userImage} />
            </div>
          </div>
          {
            user ?
            <button onClick={signOut} className="btn btn-accent rounded-none m-0 h-11 w-36 ml-5">Logout</button>
            : <Link to="/login" className="btn btn-accent rounded-none m-0 h-11 w-36 ml-5">
            Login
          </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
