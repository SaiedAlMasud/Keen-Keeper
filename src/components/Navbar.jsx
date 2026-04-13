import React from 'react';
import { ImStatsDots } from 'react-icons/im';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">                    
                    <h1 className="text-[24px] font-bold">Keen<span className='text-[#2b614f] font-semibold'>Keeper</span></h1>
                </div>
                
                <div className="flex navbar-end gap-2">
                    <a className="btn bg-[#244D3F] text-white"><RiHome2Line />Home</a>
                    <a className="btn"><RiTimeLine />Timelines</a>
                    <a className="btn"><ImStatsDots />Stats</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;