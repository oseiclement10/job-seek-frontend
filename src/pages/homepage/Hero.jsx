import Header from "@/components/Header"
import JobCard from "./components/JobCard"
import { mockJobs, mockTalents } from "./data"
import TalentCard from "./components/TalentCard"


const Hero = () => {
    return (
        <section className="min-h-dvh bg-gradient-to-b from-30% from-[#0C1D17] via-emerald-800 to-emerald-400">
            <Header />
            <section>
                <div className="flex flex-col items-center justify-center mt-12 mb-20 text-lg text-center text-gray-300 font-poppins">
                    <h1 className="mb-4 w-[92%] text-5xl text-white lg:w-1/2 lg:text-7xl font-dmsans ">Connecting talents with the right Jobs</h1>
                    <p>Find the right  person for the job seemlessly by browsing through  talents</p>

                    <p className="mb-5 text-sm lg:text-lg font-poppins">
                        Connect with top freelancers and clients, and manage your meetings seamlessly
                    </p>

                    <div className="flex items-center space-x-5">
                        <button className="px-3 py-[2px] bg-white border-2 border-white rounded-lg lg:py-2 lg:px-6 text-emerald-800 transition-smooth hover:bg-transparent hover:text-white hover:scale-105">Find a Job</button>
                        <button className="px-3 py-[2px] border-2 border-gray-400 rounded-lg lg:py-2 lg:px-6 transition-smooth hover:bg-white hover:text-emerald-800 hover:border-transparent hover:scale-105">Find a Talent</button>
                    </div>

                </div>
                <div className="flex items-center justify-between gap-4 px-4 pb-8 overflow-x-scroll">
                    <JobCard job={mockJobs[0]} type="vertical" />
                    <div className="flex flex-col gap-4">
                        <JobCard job={mockJobs[1]} type="vertical" />
                        <TalentCard talent={mockTalents[0]} />
                    </div>
                    <div className="flex flex-col gap-4">
                        <TalentCard talent={mockTalents[1]} />
                        <TalentCard talent={mockTalents[2]} />

                    </div>
                    <div className="flex flex-col gap-4">
                        <JobCard job={mockJobs[2]} type="vertical" />
                        <TalentCard talent={mockTalents[3]} />
                    </div>
                    <JobCard job={mockJobs[3]} type="vertical" />
                </div>

            </section>
        </section>
    )
}




export default Hero