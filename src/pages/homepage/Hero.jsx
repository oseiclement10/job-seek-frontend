import Header from "../../components/Header"

const Hero = () => {
    return (
        <section className="min-h-dvh bg-emerald-950">
            <Header />
            <section>
                <div className="flex flex-col items-center mt-16 text-lg font-poppins text-gray-300 text-center justify-center">
                    <h1 className="text-7xl font-dmsans mb-4  w-1/2 text-white ">Connecting talents with the right Jobs</h1>
                    <p>Find the person for the job seemlessly by browsing through  talents</p>

                    <p className="  font-poppins text-lg mb-5">
                        Connect with top freelancers and clients, and manage your meetings seamlessly
                    </p>

                    <div className="flex items-center space-x-5">
                        <button className="px-6 py-2 rounded-lg bg-white text-emerald-800 border-2 transition-smooth border-white hover:bg-transparent hover:text-white hover:scale-105">Find a Job</button>
                        <button className="px-6 py-2 rounded-lg border-2 border-gray-400 transition-smooth hover:bg-white hover:text-emerald-800 hover:border-transparent hover:scale-105">Find a Talent</button>

                    </div>

                </div>

            </section>
        </section>
    )
}

export default Hero