import React, { useContext } from 'react';
import { FaArchive } from 'react-icons/fa';
import { RiDeleteBinLine, RiNotificationSnoozeLine } from 'react-icons/ri';
import { useLoaderData } from 'react-router-dom';
import {FriendContext} from '../context/FriendContext'

const FriendDetails = () => {
    //const { id } = useParams();
    const friend = useLoaderData();
    const {addInteraction} = useContext(FriendContext);
    return (
        <div className='bg-base-300 py-10 min-h-screen'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 pt-10'>
                <div className='space-y-3 mx-8 md:mx-0'>
                    <div className='space-y-2 shadow-md rounded-lg bg-white p-5 mx-auto w-full'>
                        <figure className='rounded-full w-25 h-25 mx-auto overflow-hidden'>
                            <img
                                className='w-full h-full'
                                src={friend.picture} alt="Img" />
                        </figure>
                        <div className='text-center'>
                            <h1 className='text-xl font-bold'>{friend.name}</h1>
                        </div>
                        <div className='flex justify-center'>
                            <span className={friend.status === "overdue" ? "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-red-500" :
                                friend.status === "almost due" ? "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-[#EFAD44]" :
                                    friend.status === "on-track" ? "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-[#244D3F]" :
                                        "badge text-[12px] text-white font-semibold mr-2 rounded-2xl bg-gray-500"
                            }>{friend.status}</span>
                        </div>
                        <div className='mt-3 flex justify-center'>
                            {
                                friend.tags.map((tag, index) => (
                                    <span key={index} className="badge bg-[#CBFADB] text-[12px] text-[#244D3F] font-semibold mr-2 rounded-2xl">{tag}</span>
                                ))
                            }
                        </div>
                        <div className='text-center space-y-3'>
                            <h3 className='text-lg italic font-semibold text-gray-500'>
                                {friend.bio}
                            </h3>
                            <p className='text-[18px] text-gray-500'>Preffered: {friend.email}</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg border border-gray-200 p-2'>
                        <h4 className='flex justify-center items-center text-xl font-semibold'><RiNotificationSnoozeLine className='mr-2' />Snooze 2 Weeks</h4>
                    </div>
                    <div className='bg-white rounded-lg border border-gray-200 p-2'>
                        <h4 className='flex justify-center items-center text-xl font-semibold'><FaArchive className='mr-2' />Archive</h4>
                    </div>
                    <div className='bg-white rounded-lg border border-gray-200 p-2'>
                        <h4 className='flex justify-center items-center text-xl font-semibold'><RiDeleteBinLine className='mr-2' />Delete</h4>
                    </div>
                </div>
                <div className='col-span-2 md:col-span-3 space-y-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mx-10 md:mx-0'>
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
                    <div className='p-5 my-7 mx-10 md:mx-0 rounded-xl bg-white'>
                        <div className='flex justify-between'>
                            <h1 className='text-[#244D3F] font-semibold text-[18px]'>Relationship Goals</h1>
                            <button className='px-3 rounded-md border border-gray-200 bg-base-400'>Edit</button>
                        </div>
                        <p className='text-gray-400'>Connected every <span className='font-bold text-black'>30 days</span></p>
                    </div>
                    <div className='p-5 my-5 rounded-xl text-2xl bg-white space-y-7'>
                        <h1 className='text-[#244D3F] font-semibold'>Quick Check-In</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            <button onClick={() =>addInteraction(friend.id, friend.name, "Call")} className='flex flex-col justify-center items-center p-5 space-y-3 bg-base-200 rounded-xl border border-gray-200 cursor-pointer'>
                                <img
                                    className='w-10'
                                    src="/assets/call.png" alt="" />
                                <h3 className='text-[20px] font-semibold'>Call</h3>
                            </button>
                            <button onClick={() =>addInteraction(friend.id, friend.name, "Text")} className='flex flex-col justify-center items-center p-5 space-y-3 bg-base-200 rounded-xl border border-gray-200 cursor-pointer'>
                                <img
                                    className='w-10'
                                    src="/assets/text.png" alt="" />
                                <h3 className='text-[20px] font-semibold'>Text</h3>
                            </button>
                            <button onClick={() =>addInteraction(friend.id, friend.name, "Video")} className='flex flex-col justify-center items-center p-5 space-y-3 bg-base-200 rounded-xl border border-gray-200 cursor-pointer'>
                                <img
                                    className='w-10'
                                    src="/assets/video.png" alt="" />
                                <h3 className='text-[20px] font-semibold'>Video</h3>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default FriendDetails;