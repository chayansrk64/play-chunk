import React from 'react';
import error from '../../assets/error-404.png'
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex flex-col justify-center items-center my-10'>
                <h3 className='text-red-500 text-4xl font-semibold py-4'>Page Not Found!</h3>
                <img className='' src={error} alt="" />
            </div>
            <div className='text-center mb-10'> <Link to="/" className='btn btn-primary'>Home Page</Link></div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;