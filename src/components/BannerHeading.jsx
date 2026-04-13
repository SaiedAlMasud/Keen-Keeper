import React from 'react';
import { FaPlus } from 'react-icons/fa';

const BannerHeading = () => {
    return (
        <div className='flex flex-col justify-center space-y-4 mb-10'>
            <h1 className='text-4xl font-bold text-center'>Friends to keep close in your life</h1>
            <p className='text-[18px] text-gray-500 opacity-80 text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='btn mx-auto text-white bg-[#244D3F]'><FaPlus />Add a Friend</button>
        </div>
    );
};

export default BannerHeading;