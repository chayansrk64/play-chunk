import React, { useEffect, useState } from 'react';
import TrendingAppsCard from '../TrendingAppsCard/TrendingAppsCard';
import useTrendingApps from '../../hooks/useTrendingApps';
import Loading from '../../components/Loading/Loading';
import searchError from '../../assets/App-Error.png'

const AllApplication = () => {
    const [search, setSearch] = useState('')
    const [filteredApps, setFilteredApps] = useState([])
    const {trendingApps, loader} = useTrendingApps()
    const [searchLoading, setSearchLoading] = useState(false)
//    console.log(trendingApps);

  
   useEffect(() => {
    setSearchLoading(true)
    const timeOut = setTimeout(() => {
        
        if (search.trim() === '') {
          setFilteredApps(trendingApps);
        } else {
          const results = trendingApps.filter(app =>
            app.title.toLowerCase().includes(search.toLowerCase())
          );
          setFilteredApps(results);
        }
        setSearchLoading(false)
    }, 300)

    return () => clearTimeout(timeOut)
    
  }, [search, trendingApps]);


   if(loader){
      return <Loading></Loading>
   }

    

    return (
        <div>
            <div className='text-center'>
                <h3 className='text-3xl font-bold py-3 mt-6'>Our All Application</h3>
                <p className='pb-4 mb-4 text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>


            <div className='flex justify-between items-center max-w-[1440px] mx-auto mb-5'>
                <p className='text-2xl'>({filteredApps.length}) Apps found</p>
               <label className="input">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input onChange={(e) => setSearch(e.target.value)} value={search} type="search" required placeholder="Search" />
                </label>
            </div>
            {/* all cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-[1440px] mx-auto'>
                {
                    searchLoading ? (
                        <Loading></Loading>
                    ) : filteredApps.length > 0 ? ( 
                    filteredApps.map(app => <TrendingAppsCard app={app} key={app.id}></TrendingAppsCard>)
                ) : (
                        <div className='col-span-full text-center py-8 flex flex-col items-center gap-8'>
                            <p className='text-3xl text-[#627382] font-semibold '>No apps found!</p>
                            <img src={searchError} alt="" />
                        </div>
                    )
                }
               {/* { 
                filteredApps.length > 0 ? ( 
                    filteredApps.map(app => <TrendingAppsCard app={app} key={app.id}></TrendingAppsCard>)
                ) : (
                        <div className='col-span-full text-center py-8 flex flex-col items-center gap-8'>
                            <p className='text-3xl text-[#627382] font-semibold '>No apps found!</p>
                            <img src={searchError} alt="" />
                        </div>
                    )
               } */}
            </div>

            </div>
        </div>
    );
};

export default AllApplication;