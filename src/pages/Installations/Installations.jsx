import React, { useEffect, useState } from 'react';
import { getFromLocalStorage, removeFromLocalStorage } from '../../utilities/localStorage';
import SingleApp from './SingleApp';
import Loading from '../../components/Loading/Loading';
import Swal from 'sweetalert2';
import searchError from '../../assets/App-Error.png'

const Installations = () => {
    const [apps, setApps] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fromLocalStorage = getFromLocalStorage()
        setApps(fromLocalStorage);
        setLoading(false)
    }, [])


    const handleUninstall = id => {
        const updatedApps = apps.filter(app => app.id !== id)
        setApps(updatedApps)

        removeFromLocalStorage(id)
        Swal.fire({
            title: "Uninstall Successful!",
            icon: "success",
            draggable: true
            });
    }

    const handleSortHighToLow = apps => {
        const sorted = [...apps].sort((a, b) => b.downloads - a.downloads)
        setApps(sorted)
    }

    const handleSortLowToHigh = apps => {
        const sorted = [...apps].sort((a, b) => a.downloads - b.downloads)
        setApps(sorted)
    }



     if(loading){
        return <Loading></Loading>
     }

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
                        <li><a onClick={() => handleSortHighToLow(apps)}>High-Low</a></li>
                        <li><a onClick={() => handleSortLowToHigh(apps)}>Low-High</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    apps.length === 0 ?  (
                                            <div className='col-span-full text-center py-8 flex flex-col items-center gap-8'>
                                                <p className='text-3xl text-[#627382] font-semibold '>No apps found!</p>
                                                <img src={searchError} alt="" />
                                            </div>
                                        ) :  (
                                                apps.map(app => <SingleApp app={app} key={app.id} handleUninstall={handleUninstall}></SingleApp>)
                                        )
                }
               
                {/* {
                    apps.map(app => <SingleApp app={app} key={app.id} handleUninstall={handleUninstall}></SingleApp>)
                } */}
            </div>
        </div>
    );
};  

export default Installations;