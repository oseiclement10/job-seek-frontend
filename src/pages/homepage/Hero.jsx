import Header from "@/components/Header"
import JobCard from "./components/JobCard"
import { mockJobs, mockTalents } from "./data"
import TalentCard from "./components/TalentCard"


const Hero = () => {
    return (
        <section className="min-h-dvh bg-gradient-to-b from-50% from-[#0C1D17] via-emerald-800 to-emerald-600">
            <Header />
            <section>
                <div className="flex flex-col items-center justify-center mt-12 mb-20 text-lg text-center text-gray-300 font-poppins">
                    <h1 className="w-1/2 mb-4 text-white text-7xl font-dmsans ">Connecting talents with the right Jobs</h1>
                    <p>Find the right  person for the job seemlessly by browsing through  talents</p>

                    <p className="mb-5 text-lg font-poppins">
                        Connect with top freelancers and clients, and manage your meetings seamlessly
                    </p>

                    <div className="flex items-center space-x-5">
                        <button className="px-6 py-2 bg-white border-2 border-white rounded-lg text-emerald-800 transition-smooth hover:bg-transparent hover:text-white hover:scale-105">Find a Job</button>
                        <button className="px-6 py-2 border-2 border-gray-400 rounded-lg transition-smooth hover:bg-white hover:text-emerald-800 hover:border-transparent hover:scale-105">Find a Talent</button>
                    </div>

                </div>
                <div className="flex items-center justify-between gap-4 px-4 pb-8">
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