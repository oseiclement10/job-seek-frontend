import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='w-5/6 mx-auto  text-white font-poppins py-4 flex items-center justify-between'>
            <h2 className='font-bold text-2xl bg-gradient-to-r from-white via-gray-300 drop-shadow-xl  to-gray-300 w-fit bg-clip-text text-transparent '>Jobseek</h2>
            <div className="flex text-gray-300  w-[400px] justify-center items-center space-x-3">
                <Link>Find Job </Link>
                <Link>Find Talents</Link>
                <Link>About</Link>
            </div>
            <div className="flex items-center space-x-4">
                <button className='px-4 py-1 '>Log In</button>
                <button className='px-4 py-1 border rounded-lg'>Register</button>
            </div>
        </header>
    )
}

export default Header