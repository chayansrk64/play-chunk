import React from 'react';
import { Download } from 'lucide-react';
import { Star } from 'lucide-react';

const TrendingAppsCard = ({app}) => {
    // console.log(app);
    return (
        <div className='shadow bg-white rounded-lg p-4'>
            <div className='min-w-[316px] h-[316px] mx-auto'>
                <img className='w-full h-full' src={app.image} alt="" />
            </div>
            <h3 className='text-xl font-semibold py-3'>{app.title}</h3>
            <div className='flex items-center justify-between'>
                <p className='flex gap-2 bg-[#f1f5e8] px-3 py-1 rounded text-[#00D390]'> <Download /> {app.downloads}</p>
                <p className='flex gap-2 bg-[#fff0e1] px-3 py-1 rounded text-[#ff8811]'>  <Star /> {app.ratings.length}</p>
            </div>
        </div>
    );
};

export default TrendingAppsCard;