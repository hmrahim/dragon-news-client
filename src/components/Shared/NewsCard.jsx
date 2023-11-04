import React from "react";
import user from "../../assets/user.png";
import { FaShare, FaBookmark } from "react-icons/fa";
import thumb from "../../assets/editorsInsight1.png"
import { Link } from "react-router-dom";

const NewsCard = ({news}) => {
  return (
    <div className="border  border-info border-solid p-2 mt-4">
      <div className="bg-info flex justify-between items-center ">
        <div className="flex gap-3 ">
          <img src={news.author.img} className="h-10 w-10 rounded-full m-1" alt="" />
          <div>
            <h4 className="text-[16px] font-bold">{news.author.name}</h4>
            <p className="text-xs text-accent">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-5 mx-5">
          <FaShare className="text-accent text-xl cursor-pointer"></FaShare>
          <FaBookmark className="text-accent text-xl cursor-pointer"></FaBookmark>
        </div>
      </div>
      <h1 className="text-xl leading-9 font-bold mt-3">{news.title}</h1>
      <img src={news.image_url} className="mt-5 " alt="" />
      <div >
        <p className="text-justify">{news.details.slice(0,250)}</p>
        <Link className="text-blue-500" to={`/singlenews/${news._id}`}>Read More</Link>
      </div> 
      <hr className="bg-info my-5" />

      <div>
        <div className="my-3 flex gap-5 items-center">
        <div className="rating rating-md">
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
</div>
        <h4 className="font-bold text-xl text-accent">4.9</h4>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
