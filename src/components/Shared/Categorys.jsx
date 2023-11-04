import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Categorys = () => {
    const [categorys,setCategorys] = useState([])
    useEffect(()=> {
        fetch("http://localhost:5000/categorys")
        .then(res=> res.json())
        .then(res=> setCategorys(res))
        .catch(error=> console.log(error))
    },[])
    return (
        <div className='m-2 p-2 '>
            <h1 className='text-xl leading-9 font-normal font-semibold'> All Categorys</h1>
            <h1 className='text-xl leading-9 font-normal font-semibold bg-info text-center p-3 mt-5'>National News</h1>

            <div className='mt-2 border border-dotted border-accent px-3'>
                <ul>
                    {
                        categorys.map(category =>  <li className='text-xl py-2  text-accent hover:bg-info hover:text-acent px-2 my-2'><Link to={`/category/${category.id}`}> {category.name}</Link></li>)
                    }
                   
                </ul>
            </div>
            
        </div>
    );
};

export default Categorys;