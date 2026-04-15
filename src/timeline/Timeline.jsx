import React, { useContext, useState } from 'react';
import { FriendContext } from '../context/FriendContext';

const Timeline = () => {
    const { interaction } = useContext(FriendContext);
    const [filterType, setFilterType] = useState(null);

    const filteredInteractions = filterType
        ? interaction.filter(item => item.type === filterType)
        : interaction;

    return (
        <div className="bg-base-200 h-screen">
            <div className='container mx-auto p-10 space-y-5'>
                <h1 className='text-4xl font-bold'>Timeline</h1>
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn m-1 text-[16px] bg-base-100">Filter By: {filterType || 'All'}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setFilterType(null)} className='text-[17px]'>All</a></li>
                        <li><a onClick={() => setFilterType('Call')} className='text-[17px]'>Call</a></li>
                        <li><a onClick={() => setFilterType('Text')} className='text-[17px]'>Text</a></li>
                        <li><a onClick={() => setFilterType('Video')} className='text-[17px]'>Video</a></li>
                    </ul>
                </div>
                <div>
                    <div className='space-y-4'>
                        {filteredInteractions.length > 0 ? (
                            filteredInteractions.map((item) => (
                                <div key={item.id} className='bg-white flex gap-5 rounded-xl p-5 shadow-sm'>
                                    <img
                                        className='p-3'
                                        src={item.type == "Call" ? "/src/assets/call.png" :
                                            item.type == "Video" ? "/src/assets/video.png" :
                                                "/src/assets/text.png"} alt="" />
                                    <div>
                                        <p className='text-md text-gray-500'><span className='text-lg text-gray-700 font-semibold'>{item.type} </span>with {item.friendName}</p>
                                        <p className='text-md text-gray-500'>Date: {new Date(item.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500'>No interactions yet. Add one from a friend detail page.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;