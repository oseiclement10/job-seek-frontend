import Header from "@/components/Header"
import JobCard from "./components/JobCard"
import { mockJobs } from "./data"


const Hero = () => {
    return (
        <section className="min-h-dvh bg-gradient-to-b from-50% from-[#0C1D17] via-emerald-800 to-emerald-600">
            <Header />
            <section>
                <div className="flex flex-col items-center mt-12 mb-20 text-lg font-poppins text-gray-300 text-center justify-center">
                    <h1 className="text-7xl font-dmsans mb-4  w-1/2 text-white ">Connecting talents with the right Jobs</h1>
                    <p>Find the right  person for the job seemlessly by browsing through  talents</p>

                    <p className="  font-poppins text-lg mb-5">
                        Connect with top freelancers and clients, and manage your meetings seamlessly
                    </p>

                    <div className="flex items-center space-x-5">
                        <button className="px-6 py-2 rounded-lg bg-white text-emerald-800 border-2 transition-smooth border-white hover:bg-transparent hover:text-white hover:scale-105">Find a Job</button>
                        <button className="px-6 py-2 rounded-lg border-2 border-gray-400 transition-smooth hover:bg-white hover:text-emerald-800 hover:border-transparent hover:scale-105">Find a Talent</button>

                    </div>

                </div>
                <div className="px-4 flex items-center gap-4 justify-between pb-8">
                    <JobCard job={mockJobs[0]} type="vertical" />
                    <div className="flex flex-col gap-4">
                        <JobCard job={mockJobs[1]} type="vertical" />
                        <JobCard job={mockJobs[3]} type="horizontal" />
                    </div>
                    <div className="flex gap-4 flex-col">
                        <JobCard job={mockJobs[2]} type="horizontal" />
                        <JobCard job={mockJobs[1]} type="horizontal" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <JobCard job={mockJobs[1]} type="vertical" />
                        <JobCard job={mockJobs[0]} type="horizontal" />
                    </div>
                    <JobCard job={mockJobs[2]} type="vertical" />
                </div>

            </section>
        </section>
    )
}




export default Hero