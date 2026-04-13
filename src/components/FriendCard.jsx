import React from 'react';

const FriendCard = ({ friend }) => {
    return (
        <div className='rounded-xl bg-white shadow-md p-6 text-center space-y-2'>

            <figure className='rounded-full'>
                <img
                    className='-w-full'
                    src={friend.picture} alt="Img" />
            </figure>
            <div className=''>
                <h1 className='text-xl font-bold'>{friend.name}</h1>
                <p className='text-[#64748B] text-[14px]'>{friend.days_since_contact}d ago</p>
            </div>
            <div className='space-y-3'>
                {
                    friend.tags.map((tag, index) => (
                        <span key={index} className="badge bg-[#CBFADB] text-[12px] text-[#244D3F] font-semibold mr-2 rounded-2xl">{tag}</span>
                    ))
                }
            </div>
            <span className={friend.status === "overdue" ? "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-red-500" :
                friend.status === "almost due" ? "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-[#EFAD44]" :
                    friend.status === "on-track" ? "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-[#244D3F]" :
                        "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-gray-500"
            }>{friend.status}</span>
        </div>
    );
};

export default FriendCard;