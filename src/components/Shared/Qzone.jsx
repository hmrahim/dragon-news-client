import React from 'react';
import qzone1 from "../../assets/qZone1.png"
import qzone2 from "../../assets/qZone2.png"
import qzone3 from "../../assets/qZone3.png"

const Qzone = () => {
    return (
        <div className='bg-secondary p-2 m-2 mt-10'>
        <h1 className='text-xl font-bold p-2 m-2'>Q-Zone</h1>
        <div className='p-7 flex justify-center items-center flex-col'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
        </div>
            
        </div>
    );
};

export default Qzone;