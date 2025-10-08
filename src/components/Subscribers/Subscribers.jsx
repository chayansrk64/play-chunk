import React from 'react';

const Subscribers = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>
            <div className='text-center p-6'>
                <h3 className='text-4xl font-bold py-4'>Trusted by Millions, Built for You</h3>
                <div className='flex flex-col md:flex-row items-center justify-center py-4 gap-5 lg:gap-20'>
                    <div>
                    <p>Total Downloads</p>
                    <h2 className='text-6xl py-4 font-bold'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h2 className='text-6xl py-4 font-bold'>906k</h2>
                    <p>46% more than last month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h2 className='text-6xl py-4 font-bold'>132+</h2>
                    <p>31 more will launch</p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribers;