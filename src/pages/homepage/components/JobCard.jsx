import React from 'react'
import clsx from 'clsx'
import { LocationOn, Link as LinkIcon } from '@mui/icons-material'
import { Link  } from 'react-router-dom'
import { paths } from '@/routes/routes'

const JobCard = ({ job, type }) => {
    const cardStyling = clsx(
        'rounded-3xl shadow-sm relative font-poppins px-6 py-4 overflow-hidden cursor-pointer hover:-translate-y-2 transition-smooth hover:shadow-md',
        {
            'w-[280px] h-[380px]': type == "vertical",
            'h-[190px] w-[280px]': type == "horizontal",
        },
    )
    return (
        <div className={cardStyling}>
            <img src={job?.image} alt={job.name} className='absolute inset-0 object-cover w-full h-full' />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 to-80%"></div>
            <div className="relative flex flex-col justify-end h-full">
                <div className="">
                    <h2 className="w-5/6 my-2 text-xl text-white font-poppins">
                        {job?.name}
                    </h2>
                    <p className='text-slate-200'> {job?.description} </p>

                    <p className='mt-2 text-sm text-emerald-200/80 '>
                        posted by {job?.clientName}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                        <p className="px-4 py-1 text-xs bg-slate-200 text-emerald-950 w-fit font-poppins">
                            {job?.mode}
                        </p>
                        <Link to={paths.scheduleJob.replace(":jobId", job.id)} className='px-4 py-1 text-sm text-white rounded-md shadow-md bg-emerald-600 hover:bg-emerald-800 transition-smooth active:opacity-10'>Schedule <LinkIcon sx={{ fontSize: 16 }} /> </Link>
                    </div>

                </div>
            </div>



            <p className='flex items-center'> <LocationOn xs={{ fontSize: 16 }} className='mr-1 text-amber-400' /> Kumasi Ghana</p>

        </div>
    )
}



export default JobCard