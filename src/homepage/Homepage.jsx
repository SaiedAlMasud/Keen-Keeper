import React, { Suspense } from 'react';
import Banner from '../components/Banner';
import AllFriends from '../components/AllFriends';

const Homepage = () => {
    return (
        <div className='bg-base-200 py-10'>
            <Banner />
            <Suspense fallback = {<div className='flex justify-center'><span className="loading loading-bars loading-xl"></span></div>}>
                <AllFriends />
            </Suspense>
        </div>
    );
};

export default Homepage;