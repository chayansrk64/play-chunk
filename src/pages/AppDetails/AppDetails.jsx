import React from 'react';
import useTrendingApps from '../../hooks/useTrendingApps';
import { useParams } from 'react-router';
import downloads from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'
import reviews from '../../assets/icon-review.png'

import Loading from '../../components/Loading/Loading';

const AppDetails = () => {
    const {trendingApps, loader} = useTrendingApps()
    // console.log(trendingApps);
    const {id} = useParams()

    const appData = trendingApps.find(app => app.id === parseInt(id))
    console.log(appData);


    if(loader){
        return <Loading></Loading>
    }
    
    return (
        <div className=''>
             <div className='max-w-[1440px] mx-auto flex items-center gap-5 lg:gap-10 py-10'>
                {/* image */}
                <div>
                    <img className='w-[350px] h-[350px]' src={appData.image} alt="" />
                   
                </div>
                {/* content */}
                <div>
                   <div>
                     <h3 className='text-3xl font-semibold'>{appData.title}</h3>
                    <p >Developed By: <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold'>{appData.companyName}</span></p>
                     <div className="divider"></div>
                   </div>

                   <div className='flex justify-between gap-5 my-6'>
                    <div className='flex flex-col  items-center me-8'>
                        <p className=''><img src={downloads} alt="" /></p>
                        <p>Downloads</p>
                        <p className='text-4xl font-bold'>{appData.downloads}</p>
                    </div>
                    <div className='flex flex-col  items-center me-8'>
                         <img src={ratings} alt="" />
                        <p>Ratings</p>
                        <p className='text-4xl font-bold'>{appData.ratings.length}</p>
                    </div>
                    <div className='flex flex-col  items-center'>
                        <img src={reviews} alt="" />
                        <p>Reviews</p>
                        <p className='text-4xl font-bold'>{appData.reviews}</p>
                    </div>
                   </div>

                   <button className='btn bg-green-500 text-white text-lg'>Install Now ({appData.size}) MB</button>

                </div>
            </div>
            <div className="divider max-w-[1440px] mx-auto"></div>
        </div>
    );
};

export default AppDetails;