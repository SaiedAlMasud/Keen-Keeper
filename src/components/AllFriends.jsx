import React, { Suspense, use } from 'react';
import FriendCard from './FriendCard';

const friendPromise = fetch("/data.json").then(res => res.json());
const AllFriends = () => {
    const friends = use(friendPromise);
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 container mx-auto'>
            {
                friends.map(friend =>(
                    <Suspense fallback = {<h1>Loading....</h1>}>
                        <FriendCard friend={friend} />
                    </Suspense>
                ))
            }
        </div>
    );
};

export default AllFriends;