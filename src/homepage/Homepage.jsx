import React from 'react';
import Banner from '../components/Banner';
import AllFriends from '../components/AllFriends';

const Homepage = () => {
    return (
        <div className='bg-base-200 py-10'>
            <Banner />
            <AllFriends />
        </div>
    );
};

export default Homepage;