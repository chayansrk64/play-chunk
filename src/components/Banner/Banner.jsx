import React from 'react';
import play from '../../assets/play-store.png'
import app from '../../assets/app-store.png'
import bannerImg from '../../assets/hero.png'
const Banner = () => {
    return (
        <div className='flex flex-col justify-center items-center p-3 lg:p-0'>
            <div className='text-center mt-3 lg:mt-10'>
                <h1 className='text-4xl  lg:text-7xl leading-[1.1] font-bold pb-3'>We Build <br /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                <p className='text-[#627382] my-4'>At Apps Chunk we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center items-center gap-6 mb-3 lg:mb-10'>
                    <button className='flex items-center gap-3 btn font-bold '> <img src={play} alt="" /> Google Play</button>
                    <button className='flex items-center gap-3 btn font-bold'> <img src={app} alt="" /> App Store</button>
                </div>
            </div>
            <div>
                <img className='' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;