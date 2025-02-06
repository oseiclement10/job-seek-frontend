import React from 'react'
import { mockJobs } from './data'
import JobCard from './components/JobCard'

const FeaturedJobs = () => {
    return (
        <section className='grid grid-cols-4 gap-4'>
            {mockJobs.map(elem => <JobCard job={elem} type="vertical" />)}
        </section>
    )
}

export default FeaturedJobs