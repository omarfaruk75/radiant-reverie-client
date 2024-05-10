
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../CustomHook/useAuth";
import logo from "../assets/images/logo1.png"

const Navbar = () => {
    const { user, logOut } = useAuth();
    const Links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/sevices"}>Services</NavLink></li>

        <li>
            <details>
                <summary>Dashboard</summary>
                <ul className="p-1 w-[160px]">
                    <li><Link to={"/add_service"}>Add Service</Link></li>
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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