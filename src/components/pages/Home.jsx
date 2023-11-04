import React from "react";
import LeftSidebar from "../Sidebar/leftSidebar";
import RightSidebar from "../Sidebar/rightSidebar";
import MainContent from "../Sidebar/MainContent";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
  const news = useLoaderData()
  return (
    <div className="w-full md:w-4/5 mx-auto flex flex-col md:flex-row gap-2 px-5 md:px-0">
      <LeftSidebar></LeftSidebar>

      <MainContent news={news}></MainContent>
  
      <RightSidebar></RightSidebar>
    </div>
  );
};

export default Home;
