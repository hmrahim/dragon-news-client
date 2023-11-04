import React from 'react';
import RightSidebar from '../Sidebar/rightSidebar';
import { Link, useLoaderData } from 'react-router-dom';
import {FaArrowAltCircleLeft} from "react-icons/fa"

const SingleNews = () => {
    const news = useLoaderData()
    console.log(news);
    return (
        <div className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row gap-2 px-5 md:px-0'>
            <div className='w-3/4 my-5'>
                <h1 className='text-xl font-semibold text-accent'>Dragon News</h1>
                <div className='mt-5 flex flex-col justify-center'>
                    <img src={news.image_url} alt="" />
                    <h1 className='text-2xl font-bold my-5'>{news.title}</h1>
                    <p>{news.details}</p>
                   
                <Link to={`/category/${news.category_id}`} className='bg-primary px-4 py-1 text-base-100 my-5 w-2/5 flex items-center gap-3'><FaArrowAltCircleLeft/> All news in this category</Link>
                </div>

            </div>
            <RightSidebar/>
            
        </div>
    );
};

export default SingleNews;