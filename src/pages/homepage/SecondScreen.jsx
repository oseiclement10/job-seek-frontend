import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FeaturedJobs from './FeaturedJobs';
import FeaturedTalents from './FeaturedTalents';
import TransitionWrapper from './components/TransitionWrapper';

const SecondScreen = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <section className="py-10 bg-emerald-50 font-poppins sm:py-16 lg:py-24">
            <span className='flex w-fit items-center  mx-auto shadow-md rounded-md px-4 py-[3px] text-sm mb-4 bg-emerald-900 text-white'>
                <span className='w-[6px] h-[6px] bg-white rounded-full mr-1' />  Explore <span className='w-[6px] ml-1 h-[6px] bg-white rounded-full' />
            </span>

            <h2 className='mb-4 text-4xl font-semibold text-center lg:text-5xl font-dmsans'>Browse Our Featured {value == 1 ? "Jobs" : "Talents"}</h2>

            <Tabs value={value} onChange={handleChange} centered className='font-poppins'>
                <Tab label="Talents" value={0} />
                <Tab label="Jobs" value={1} />
            </Tabs>

            <section className='pt-8 mx-auto min-h-[300px] lg:w-5/6'>
                {value == 0 && ( <TransitionWrapper> <FeaturedTalents /></TransitionWrapper>)}
                {value == 1 && ( <TransitionWrapper> <FeaturedJobs /> </TransitionWrapper> )}
            </section>

        </section>

    )
}



export default SecondScreen