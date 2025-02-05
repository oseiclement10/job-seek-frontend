import { Link } from "react-router-dom";
import {
    LocationOn,
    Mail,
} from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="bg-[#0C1D17] font-dmsans text-slate-100">
            <div className="w-5/6 px-6 py-16 mx-auto">
                <div className="flex items-center justify-between pb-8 mb-6 border-b border-b-gray-700">
                    <h2 className="w-1/2 text-4xl font-semibold text-white font-dmsans">Hire talents effortlessly with us  & discover job opportunities with ease! </h2>

                    <div className="">
                        <p className="flex items-center"> <LocationOn className="inline mr-1" sx={{ fontSize: 16 }} /> Adum Kumasi, Ashanti Region Ghana W/A</p>
                        <a href="mailto:clementoseiasante@gmail.com" className="flex items-center hover:text-white transition-smooth"> <Mail className="inline mr-1" sx={{ fontSize: 16 }} /> support@jobseek.com </a>

                    </div>
                </div>

                <div className="flex items-center justify-between text-slate-200">
                    <div className="flex items-center space-x-3 text-slate-300/80">
                        <Link className="transition-smooth hover:text-white">Find Job </Link>
                        <Link className="transition-smooth hover:text-white">Find Talents</Link>
                        <Link className="transition-smooth hover:text-white">About</Link>
                    </div>

                    <div className="">
                        <p>Copyright © 2025 Jobseek</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer