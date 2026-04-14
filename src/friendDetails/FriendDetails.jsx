import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { id } = useParams();
    const friend = useLoaderData();
    return (
        <div className='bg-base-200'>
            <div className='container mx-auto grid grid-cols-4 gap-5 pt-10'>
                <div>
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
                <div className='md:col-span-3'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                        <div className='bg-white rounded-xl py-5 text-center'>
                            <h1 className='text-[28px] font-semibold text-[#244D3F]'>{friend.days_since_contact}</h1>
                            <p className='text-[16px] opacity-80 text-[#64748B]'>Days Science Contact</p>
                        </div>
                        <div className='bg-white rounded-xl py-5 text-center'>
                            <h1 className='text-[28px] font-semibold text-[#244D3F]'>{friend.goal}</h1>
                            <p className='text-[16px] opacity-80 text-[#64748B]'>Goals (Days)</p>
                        </div>
                        <div className='bg-white rounded-xl py-5 text-center'>
                            <h1 className='text-[28px] font-semibold text-[#244D3F]'>{friend.next_due_date}</h1>
                            <p className='text-[16px] opacity-80 text-[#64748B]'>Next Due</p>
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className='flex justify-between'>
                            <h1 className='text-[#244D3F] font-semibold'>Relationship Goals</h1>
                            <button className='px-3 rounded-md border border-gray-200'>Edit</button>
                        </div>
                        <p className='text-gray-400'>Connected every <span className='font-bold text-black'>30 days</span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FriendDetails;