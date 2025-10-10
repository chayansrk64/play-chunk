import React from 'react';

const Subscribers = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
            <div className='text-center p-6'>
                <h3 className='text-4xl font-bold py-4'>Trusted by Millions, Built for You</h3>
                <div className='flex flex-col md:flex-row items-center justify-center py-4 gap-5 lg:gap-20'>
                    <div>
                    <p>Total Downloads</p>
                    <h2 className='text-6xl py-4 font-bold'>25.3M</h2>
                    <p>35% more than last month</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h2 className='text-6xl py-4 font-bold'>500k</h2>
                    <p>27% more than last month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h2 className='text-6xl py-4 font-bold'>312+</h2>
                    <p>18 more will launch</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;