import { Link } from "react-router-dom";
import logo from "../assets/images/logo1.png"
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (


        <footer className="bg-white dark:bg-gray-900 px-12">
            <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-4 sm:space-y-0 sm:flex-row">
                <div className='flex gap-1 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <Link to="/" className="btn btn-ghost text-xl">Radiant Reverie</Link>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300">© Copyright 2021. All Rights Reserved <span className="font-semibold">Radiant Reverie Parlour</span>.</p>

                <div className="flex -mx-2">


                    <a href="https://www.facebook.com" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                        <FaFacebook className="w-5 h-5" />
                    </a>


                    <a href="https://www.linkedin.com" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                        <FaLinkedin className="w-5 h-5" />
                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;