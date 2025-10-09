import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../../utilities/localStorage';
import SingleApp from './SingleApp';

const Installations = () => {
    const [apps, setApps] = useState([])
    useEffect(() => {
        const fromLocalStorage = getFromLocalStorage()
        setApps(fromLocalStorage);
    }, [])
    return (
        <div>
            <div className='flex flex-col justify-center items-center'>
                <h3 className='text-3xl font-semibold py-3'>Your Installed Apps</h3>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

             <div className='flex justify-between max-w-[1440px] mx-auto my-10'>
                <p className='text-xl font-semibold'>({apps.length}) Apps found</p>
                <details className="dropdown">
                    <summary className="btn m-1">Sort Downloads</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>High-Low</a></li>
                        <li><a>Low-High</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    apps.map(app => <SingleApp app={app} key={app.id}></SingleApp>)
                }
            </div>
        </div>
    );
};

export default Installations;