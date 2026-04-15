import React from 'react';
import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
    return (
        <Link to={`/friendDetails/${friend.id}`}>
            <div className='rounded-xl bg-white shadow-md p-8 text-center space-y-2 mx-5 md:mx-0'>

                <figure className='rounded-full w-25 h-25 mx-auto overflow-hidden'>
                    <img
                        className='w-full h-full'
                        src={friend.picture} alt="Img" />
                </figure>
                <div className=''>
                    <h1 className='text-xl font-bold'>{friend.name}</h1>
                    <p className='text-[#64748B] text-[14px]'>{friend.days_since_contact}d ago</p>
                </div>
                <div className='mt-3'>
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
        </Link>
    );
};

export default FriendCard;