import React from 'react'
import { mockJobs } from './data'
import JobCard from './components/JobCard'

const FeaturedJobs = () => {
    return (
        <section className='grid gap-4 place-items-center lg:place-items-start md:grid-cols-2 lg:grid-cols-4'>
            {mockJobs.map(elem => <JobCard job={elem} type="vertical" />)}
        </section>
    )
}

export default FeaturedJobs