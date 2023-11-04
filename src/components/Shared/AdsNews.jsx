import React from 'react';
import bg1 from "../../assets/bg1.png"
const AdsNews = () => {
    return (
        <div className=" text-center bg-cover p-2 m-2 bg-no-repeat mt-5" style={{ backgroundImage: `url(${bg1})`}}>
            <h1 className='mt-16 text-4xl font-semibold text-center text-base-100'>Create an Amazing Newspaper</h1>
            <p className='text-xl font-normal text-base-100 mt-5 text-center p-1'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <button className='btn btn-primary my-5'>Learn More</button>
        </div>
    );
};

export default AdsNews;