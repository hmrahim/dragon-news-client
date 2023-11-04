import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import user from "../../assets/user.png";
import { FaShare, FaBookmark} from "react-icons/fa";
import NewsCard from "../Shared/NewsCard";
import { useEffect } from "react";
import { useState } from "react";

const Category = () => {
  const news = useLoaderData()

  // const { id } = useParams();
  // const [newses,setNewses] = useState([])
  // useEffect(()=> {
  //   fetch(`http://localhost:5000/category/${id}`)
  //   .then(res=> res.json())
  //   .then(res=> {
  //     setNewses(res)
  //   })
  //   .catch(error=> console.log(error))

  // },[])
  return (
    <div className="p-2 ">
      
      {
        news.map((news,index)=> <NewsCard key={index} news={news} ></NewsCard>)
        
      }
    </div>
  );
};

export default Category;
