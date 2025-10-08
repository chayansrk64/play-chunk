import React from 'react';
import Banner from '../../components/Banner/Banner';
import Subscribers from '../../components/Subscribers/Subscribers';
import TrendingApps from '../TrendingApps/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Subscribers></Subscribers>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;