import React from 'react';
import useTrendingApps from '../../hooks/useTrendingApps';
import { useParams } from 'react-router';
import downloads from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'
import reviews from '../../assets/icon-review.png'

import Loading from '../../components/Loading/Loading';

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


const data = [
    {
    name: 'Star 5',
    pv: 1700,
    
  },
  {
    name: 'Star 4',
    pv: 1400,
  },
  {
    name: 'Star 3',
    pv: 1100,
  },
   {
    name: 'Star 2',
    pv: 800,
  },
   {
    name: 'Star 1',
    pv: 500,
  },
 
 
  
  
  
];



 
 

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


            {/* chart */}

            <div className='w-[1240px] h-[500px] mx-auto'>

                <h3 className='text-3xl font-semibold'>Ratings</h3>

                <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
         
          <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
 
            </div>
        
 


        </div>
    );
};

export default AppDetails;