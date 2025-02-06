import React from 'react'
import { mockTalents } from './data'
import TalentCard from './components/TalentCard'

const FeaturedTalents = () => {
    return (
        <section className='grid grid-cols-4 gap-4'>
            {mockTalents?.map(elem => <TalentCard talent={elem} key={elem.name} />)}
        </section>
    )
}

export default FeaturedTalents