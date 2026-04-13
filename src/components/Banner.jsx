import React from 'react';
import BannerHeading from './BannerHeading';

const Banner = () => {
    return (
        <div>
            <BannerHeading />
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 text-center'>
                <div className='bg-white rounded-xl py-2 px-4 sm:w-[50%] sm:mx-auto'>
                    <h1 className='text-[28px] font-semibold text-[#244D3F]'>10</h1>
                    <p className='text-[16px] opacity-80 text-[#64748B]'>Total Friends</p>
                </div>
                <div className='bg-white rounded-xl py-2 px-4 sm:w-[50%] sm:mx-auto'>
                    <h1 className='text-[28px] font-semibold text-[#244D3F]'>3</h1>
                    <p className='text-[16px] opacity-80 text-[#64748B]'>On Track</p>
                </div>
                <div className='bg-white rounded-xl py-2 px-4 sm:w-[50%] sm:mx-auto'>
                    <h1 className='text-[28px] font-semibold text-[#244D3F]'>6</h1>
                    <p className='text-[16px] opacity-80 text-[#64748B]'>Need Attention</p>
                </div>
                <div className='bg-white rounded-xl py-2 px-4 sm:w-[50%] sm:mx-auto'>
                    <h1 className='text-[28px] font-semibold text-[#244D3F]'>12</h1>
                    <p className='text-[16px] opacity-80 text-[#64748B]'>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;