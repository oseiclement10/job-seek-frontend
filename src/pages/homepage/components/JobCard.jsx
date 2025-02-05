import React from 'react'
import clsx from 'clsx'

const JobCard = ({ job, type }) => {
    const cardStyling = clsx(
        'rounded-3xl shadow-sm relative font-poppins px-6 py-4 overflow-hidden',
        {
            'w-[280px] h-[380px]': type == "vertical",
            'h-[190px] w-[280px]': type == "horizontal",
        },
    )
    return (
        <div className={cardStyling}>
            <img src={job.image} alt={job.name} className='absolute inset-0 w-full h-full object-cover' />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent"></div>
            <h2 className="relative font-poppins mt-2  w-5/6 text-xl text-white">
                {job.name}
            </h2>
        </div>  
    )
}

export default JobCard