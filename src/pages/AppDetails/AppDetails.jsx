import React, { useState } from 'react';
import useTrendingApps from '../../hooks/useTrendingApps';
import { useParams } from 'react-router';
import downloads from '../../assets/icon-downloads.png'
import ratings from '../../assets/icon-ratings.png'
import reviews from '../../assets/icon-review.png'
import Loading from '../../components/Loading/Loading';
import {setToLocalStorage} from '../../utilities/localStorage'

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
import Swal from 'sweetalert2';



const AppDetails = () => {
    const [install, setInstall] = useState(false)
    const {trendingApps, loader} = useTrendingApps()
    // console.log(trendingApps);
    const {id} = useParams()

    const appData = trendingApps.find(app => app.id === parseInt(id))
    console.log(appData);

    const chartDataReverse = appData?.ratings;

    const chartData = chartDataReverse?.slice().reverse()
    
    const handleInstallBtn = (app) => {
        setInstall(true)
        Swal.fire({
        title: "App Installed!",
        icon: "success",
        draggable: true
      });

        setToLocalStorage(app)
        


    }
     

    if(loader){
        return <Loading></Loading>
    }
    
    return (
        <div className=''>

             <div className='max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 py-10'>
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

                   {/* <button onClick={() => handleInstallBtn(appData)} className='btn bg-green-500 text-white text-lg'>{install ? "Installed" : `Install Now (${appData.size}) MB`} </button> */}

                <button
                    onClick={() => handleInstallBtn(appData)}
                    className={`btn text-white text-lg ${install ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-500'}`}
                    disabled={install}
                    >
                    {install ? "Installed" : `Install Now (${appData.size}) MB`}
                </button>



              

                </div>
            </div>
            <div className="divider max-w-[1440px] mx-auto"></div>


            {/* chart */}
          <div className='max-w-[1240px]'>
            <div className=' h-[400px] lg:ms-[80px]'>

        <h3 className='text-3xl font-semibold mb-4'>Ratings</h3>

        <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={chartData}
          
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" axisLine={false} tickLine={false} />
          <YAxis dataKey="name" type="category" scale="band" axisLine={false} tickLine={false} />
          <Tooltip />
         
          <Bar dataKey="count" barSize={20} fill="#ff8811" />
           
        </ComposedChart>
        </ResponsiveContainer>
 
            </div>
          </div>


      {/* Description */}
            <div className='max-w-[1440px] mx-auto lg:gap-10 py-10 mt-12 '>
                <h3 className='text-xl font-semibold mb-4 px-4 lg:px-0'>Description</h3>
                {
                    appData.description.map((p, index) => <p className='mb-[20px] px-4' key={index}>{p}</p>)
                }
                {/* <p>{appData.description}</p> */}
            </div>
        
 


        </div>
    );
};

export default AppDetails;