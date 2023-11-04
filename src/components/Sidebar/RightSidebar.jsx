import React from "react";
import Loginbtn from "../Shared/loginbtn";
import SocialLink from "../Shared/SocialLink";
import Qzone from "../Shared/Qzone";
import AdsNews from "../Shared/AdsNews";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const RightSidebar = () => {
  const {user} = useContext(authContext)
  return (
    <div className="w-full md:w-1/4 mx-auto order-2 md:order-3">
      {

     user ? "" : <Loginbtn></Loginbtn>
      }
      <SocialLink></SocialLink>
      <Qzone></Qzone>
      <AdsNews></AdsNews>
    </div>
  );
};

export default RightSidebar;
