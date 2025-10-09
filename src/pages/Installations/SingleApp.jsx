import React from 'react';

const SingleApp = ({app}) => {
    return (
        <div className=' max-w-[1440px] mx-auto'>
           
             

        <div className="my-10">
           <div>
                    <div className="flex justify-between items-center border my-3 rounded-xl px-4">
                        <div className="flex items-center gap-3 py-2">
                            <img className="h-[100px]" src={app.image} alt="" />
                            <h3>{app.title}</h3>
                            
                        </div>
                        <div><button className="btn btn-danger">Delete</button></div>
                    </div>
                </div>
            
        </div>

        </div>
    );
};

export default SingleApp;