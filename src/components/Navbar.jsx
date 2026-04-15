import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? "btn bg-[#244D3F] text-white" : "btn"}><RiHome2Line />Home</NavLink></li>
        <li><NavLink to="/timelines" className={({ isActive }) =>
            isActive ? "btn bg-[#244D3F] text-white" : "btn"}><RiTimeLine />Timelines</NavLink></li>
        <li><NavLink to="/stats" className={({ isActive }) =>
            isActive ? "btn bg-[#244D3F] text-white" : "btn"}><ImStatsDots />Stats</NavLink></li>
    </>;
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <h1 className="text-[36px] font-bold">Keen<span className='text-[#2b614f] font-semibold'>Keeper</span></h1>
                </div>

                <ul className="flex navbar-end gap-4">
                    
                        {/* <a className="btn bg-[#244D3F] text-white"></a>
                    <a className="btn"></a>
                    <a className="btn"></a> */}
                        {links}
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;