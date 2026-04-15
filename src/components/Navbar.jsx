import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    //const [isOpen, setIsOpen] = useState(false);

    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "btn bg-[#244D3F] text-white" : "btn"}><RiHome2Line />Home</NavLink></li>
        <li><NavLink to="/timelines" className={({ isActive }) =>
            isActive ? "btn bg-[#244D3F] text-white" : "btn"}><RiTimeLine />Timelines</NavLink></li>
        <li><NavLink to="/stats" className={({ isActive }) =>
            isActive ? "btn bg-[#244D3F] text-white" : "btn"}><ImStatsDots />Stats</NavLink></li>
    </>;

    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <h1 className="text-[36px] font-bold">Keen<span className='text-[#2b614f] font-semibold'>Keeper</span></h1>
                </div>
                {/* //for desktop */}
                <ul className="hidden md:flex navbar-end gap-4">
                    {links}
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden navbar-end">
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;