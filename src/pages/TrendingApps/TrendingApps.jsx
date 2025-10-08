import React from 'react';
import { Link } from 'react-router';
import useTrendingApps from '../../hooks/useTrendingApps';
import Loading from '../../components/Loading/Loading';
import TrendingAppsCard from '../TrendingAppsCard/TrendingAppsCard';


const TrendingApps = () => {

    const { trendingApps, loader } = useTrendingApps()
    // console.log(trendingApps);

    if(loader){
        return <Loading></Loading>
    }

    return (
        <div className='my-8 max-w-[1440px] mx-auto'>
            <div className='text-center py-5'>
                <h3 className='text-4xl font-semibold'>Trending Apps</h3>
                <p className='text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                {
                    trendingApps.slice(0,8).map(app => <TrendingAppsCard app={app} key={app.id}></TrendingAppsCard>)
                }
            </div>

            <div className='text-center mt-8'><Link className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2 rounded'>Show All</Link></div>

        </div>
    );
};

export default TrendingApps;