import React from 'react'
import { mockTalents } from './data'
import TalentCard from './components/TalentCard'

const FeaturedTalents = () => {
    return (
        <section className='grid gap-4 px-4 lg:px-0 md:grid-cols-2 lg:grid-cols-4'>
            {mockTalents?.map(elem => <TalentCard talent={elem} key={elem.name} />)}
        </section>
    )
}

export default FeaturedTalents