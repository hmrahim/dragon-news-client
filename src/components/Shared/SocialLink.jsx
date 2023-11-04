import React from 'react';
import { FaFacebook ,FaTwitter,FaInstagram} from "react-icons/fa";

const SocialLink = () => {
    return (
        <div className='mt-8 m-2'>
            <h1 className='text-2xl font-bold mb-2'>Find on us</h1>
            <ul className='p-1 border  border-accent border-dotted'>
                <li className='text-xl my-5  p-2 mx-2  border-b border-accent border-dotted  '>
                    <a href="" className='flex gap-1 items-center gap-1'>
                    <FaFacebook className='text-2xl '/>
                    Facebook
                    </a>
                    </li>
                <li className='text-xl my-5  p-2 mx-2  border-b border-accent border-dotted  '>
                    <a href="" className='flex gap-1 items-center gap-1'>
                    <FaTwitter className='text-2xl '/>
                    Twitter
                    </a>
                    </li>
                <li className='text-xl my-5  p-2 mx-2  border-b border-accent border-dotted  '>
                    <a href="" className='flex gap-1 items-center gap-1'>
                    <FaInstagram className='text-2xl '/>
                    Instagram
                    </a>
                    </li>
            </ul>
            
        </div>
    );
};

export default SocialLink;