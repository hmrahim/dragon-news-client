import React from 'react';
import logo from "../../assets/logo.png"
import moment from 'moment';
import NavbarTop from './NavbarTop';
import NavbarBottom from './NavbarBottom';

const Header = () => {
    return (
        <div>
            <div className='text-center flex justify-center flex-col gap-1'>
                <img className='min-w-1/3 mx-auto mt-5' src={logo} alt="Main Logo" />
                <p className='text-accent text-xl font-normal'>Journalism Without Fear or Favour</p>
                <p className='text-accent text-xl font-normal'>{moment().format("dddd, MMMM D, YYYY")}</p>

                
            </div>
            <NavbarTop/>
            <NavbarBottom/>
            
        </div>
    );
};

export default Header;