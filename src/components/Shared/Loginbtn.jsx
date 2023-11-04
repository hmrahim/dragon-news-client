import React from 'react';
import { useContext } from 'react';
import { FaGoogle ,FaGithub} from "react-icons/fa";
import { authContext } from '../../providers/AuthProvider';

const Loginbtn = () => {
    const {googleSignIn} = useContext(authContext)

    const handleGoogleSignIn = ()=> {
        googleSignIn()
        .then(res=> console.log(res))
        .then(error=> console.log(error))

    }
    return (
        <div>
            <h1 className='text-2xl font-bold p-2 m-2'>Login With</h1>
            <div className='flex items-center justify-center rounded-lg hover:bg-blue-500 hover:text-base-100 text-blue-500 gap-1 p-2 m-2 border border-blue-600 '>
            <FaGoogle className='text-xl'/> <button onClick={handleGoogleSignIn} className=' text-xl font-semibold'> Login With Google</button>
            </div>
            <div className='flex items-center justify-center rounded-lg hover:bg-accent  hover:text-base-100 text-accent gap-1 p-2 m-2 border border-accent '>
            <FaGithub className='text-xl'/> <button className=' text-xl font-semibold '> Login With Github</button>
            </div>
            
            
        </div>
    );
};

export default Loginbtn;