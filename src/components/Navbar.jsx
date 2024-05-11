
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../CustomHook/useAuth";
import logo from "../assets/images/logo1.png"
import { useEffect, useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [theme, setThem] = useState('light');

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme') || 'light';
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    const handleThemeChange = e => {
        if (e.target.checked) {
            setThem('dark')
        } else {
            setThem('light')
        }
    }
    const Links = <>
        <li ><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/sevices"}>Services</NavLink></li>

        <li>

            <details>
                <summary>Dashboard</summary>
                <ul className="p-1 w-[160px] z-30">
                    <li><Link to={"/addSevice"}>Add Service</Link></li>
                    <li><Link to={"/manage_service"}>Manage Service</Link></li>
                    <li><Link to={"/booked_services"}>Booked Services</Link></li>
                    <li><Link to={"/service_2_do"}>Service-To-Do</Link></li>

                </ul>
            </details>
        </li>

    </>




    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 hover:bg-violet-600 active:bg-violet-700 shadow rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <div className='flex gap-1 items-center'>
                    <img className='w-auto h-7' src={logo} alt='' />
                    <Link to="/" className="btn btn-ghost text-xl">Radiant Reverie</Link>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <label className="flex cursor-pointer gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                <input onChange={handleThemeChange} type="checkbox" value="synthwave" className="toggle theme-controller" />
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            </label>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end z-20">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full " title={`${user?.displayName}\n${user?.email}`}>
                                <img referrerPolicy="no-referrer" src={user?.photoURL || "https://i.ibb.co/CWJcyPj/omar-faruk.jpg"} alt="User Avatar" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">

                            <li>
                                <button onClick={logOut} className="btn btn-sm  btn-ghost">Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to='/login'>
                        <button className="btn btn-sm  btn-ghost">Login</button>
                    </Link>
                )}

            </div>
        </div>

    );
}

export default Navbar;