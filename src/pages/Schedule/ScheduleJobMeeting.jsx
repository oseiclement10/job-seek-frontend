import React from 'react'
import Header from '@/components/Header'
import { CalendarMonth, Forward } from "@mui/icons-material"

import { mockJobs } from '../homepage/data';
import { useParams } from 'react-router-dom';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { TimeField } from '@mui/x-date-pickers/TimeField'
import { Button } from '@mui/material';


const ScheduleJobMeeting = () => {

    const { jobId } = useParams();
    const job = mockJobs.find(elem => elem.id == jobId);

    return (
        <>
            <div className="bg-darkGreen">
                <Header />
            </div>
            <section className='min-h-dvh font-poppins '>
                <div className="h-full p-10 bg-white ">
                    <div className="w-5/6 mx-auto ">
                        <h2 className='mb-6 text-4xl font-semibold text-center text-slate-800 font-poppins'>Schedule a Meeting <CalendarMonth className='ml-1' sx={{ fontSize: 36 }} /></h2>
                        <div className="grid grid-cols-4 gap-6">
                            <div className="border-r">
                                <h2 className='mb-3 text-lg font-semibold text-slate-800'>Job Details</h2>
                                <div className="space-y-4">
                                    <DetailTile label="" value={<img src={job?.image} alt='job' className='max-h-[200px] rounded-md' />} />
                                    <DetailTile label="Job Title" value={job?.name} />
                                    <DetailTile label="Description" value={job?.name} />
                                    <DetailTile label="Delivery Mode" value={job?.mode} />
                                    <DetailTile label="Client" value={job?.clientName} />

                                </div>
                            </div>
                            <div className="grid grid-cols-2 col-span-3 ">
                                <DateCalendar />
                                <div className="mt-2">
                                    <TimeField />
                                    <div className="mt-4">
                                        <Button variant='danger'>Cancel</Button>
                                        <Button endIcon={<Forward />} className='text-white bg-emerald-800'>Schedule</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}

const DatetimeSelector = () => {
    return (
        <div className="border">
            <DateCalendar />
            <TimeField />
        </div>
    )
}

const DetailTile = ({ label, value }) => {
    return (
        <div className="">
            <h2 className='text-sm text-slate-800'>{label}</h2>
            <div className='font-medium'>{value}</div>
        </div>
    )
}

export default ScheduleJobMeeting