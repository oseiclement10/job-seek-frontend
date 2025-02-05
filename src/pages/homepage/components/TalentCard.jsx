import React from 'react'
import { LocationOn,  StarRounded } from '@mui/icons-material'


const TalentCard = ({ talent }) => {
    
    const isAvailable = talent?.availability == "available";
    
    return (
        <div className="px-4 w-[280px] cursor-pointer transition-smooth hover:-translate-y-1 hover:shadow-md  font-poppins flex flex-col justify-between min-h-[150px] py-3 bg-white shadow-sm rounded-xl">
            <div className="grid grid-cols-4">
                <div className="col-span-1">
                    <img src={talent.image} alt={talent.name} className='w-12 h-12 rounded-full' />
                </div>
                <div className="col-span-3">
                    <h2 className='text-slate-700'>{talent?.name}</h2>
                    <p className='mb-2'>{talent?.jobRole}</p>
                    <span className={`text-xs px-2 flex shadow-md mb-4 w-fit py-[2px] text-white rounded-md ${isAvailable ? "bg-emerald-600 ":"bg-rose-600 "}`}>{talent?.availability}</span>
                </div>
            </div>
            <div className="flex items-center justify-between text-sm">
                <h2 className='flex items-center text-slate-700'> <LocationOn xs={{ fontSize: 16 }} className='mr-1' /> {talent?.location}</h2>
                <p className='flex items-center'> <StarRounded xs={{ fontSize: 16 }} className='mr-1 text-amber-400' /> {talent?.rating}</p>
            </div>
        </div>
    )
}

export default TalentCard