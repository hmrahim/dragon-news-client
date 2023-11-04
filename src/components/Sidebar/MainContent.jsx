import React, { useEffect, useState } from "react";
import Category from "../pages/Category";
import { Outlet } from "react-router-dom";
import NewsCard from "../Shared/NewsCard";

const MainContent = ({ news }) => {
  // const [news, setNews] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/news")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setNews(res);
  //     })
  //     .then((error) => console.log(error));
  // }, []);
  return (
    <div className="w-full md:w-1/2 mx-auto order-1 md:order-2 m-2 p-2  ">
      <h1 className="text-xl leading font-semibold">Dragon News Home</h1>
      {news ? (
        news.map((news, index) => <NewsCard key={index} news={news} />)
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default MainContent;
