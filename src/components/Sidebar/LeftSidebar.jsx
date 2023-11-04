import React from "react";
import Categorys from "../Shared/Categorys";

const LeftSidebar = () => {
  return (
    <div className="w-full md:w-1/4 mx-auto order-3 md:order-1">
      <Categorys></Categorys>
    </div>
  );
};

export default LeftSidebar;
