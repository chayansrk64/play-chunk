import React from 'react';
import Navbar from '../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen max-w-[1600px] mx-auto flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-1'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;