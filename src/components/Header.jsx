import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='flex items-center justify-between w-5/6 py-4 mx-auto text-white font-poppins'>
            <h2 className='text-2xl font-bold text-transparent bg-gradient-to-r from-white via-gray-300 drop-shadow-xl to-gray-300 w-fit bg-clip-text '>Jobseek</h2>
            <div className="lg:flex text-gray-300 hidden  w-[400px] justify-center items-center space-x-3">
                <Link className='hover:text-white transition-smooth hover:scale-105'>Find Job </Link>
                <Link className='hover:text-white transition-smooth hover:scale-105'>Find Talents</Link>
                <Link className='hover:text-white transition-smooth hover:scale-105'>About</Link>
            </div>
            <div className="flex items-center space-x-4">
                <button className='px-4 py-1 '>Log In</button>
                <button className='px-4 py-1 border rounded-lg'>Register</button>
            </div>
        </header>
    )
}

export default Header