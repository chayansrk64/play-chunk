import React from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';

const SingleApp = ({app, handleUninstall}) => {
    // console.log(app);

    return (
        <div className=' max-w-[1440px] mx-auto'>
           
        <div className="my-5 bg-white rounded-lg">
                <div>
                    <div className="flex justify-between items-center px-4">
                        <div className="flex items-center gap-3 py-2">
                            <div>
                                <img className="w-[80px] h-[80px] rounded-lg" src={app.image} alt="" />
                            </div>
                            <div className='flex flex-col justify-between'>
                                <h3 className='text-xl font-semibold ms-4'>{app.title}</h3>
                                <div className='flex '>
                                    <p className='flex gap-2  px-3 py-1 rounded text-[#00D390]'> <Download /> {app.downloads}</p>
                                    <p className='flex gap-2   px-3 py-1 rounded text-[#ff8811]'>  <Star /> {app.ratings.length}</p>
                                    <p className='flex gap-2   px-3 py-1 rounded '>  {app.size} MB</p>
                                </div>
                            </div>
                            
                        </div>
                        <div><button onClick={() => handleUninstall(app.id)} className="btn bg-[#00d390] text-white">Uninstall</button></div>
                    </div>
                </div>
            
        </div>

        </div>
    );
};

export default SingleApp;