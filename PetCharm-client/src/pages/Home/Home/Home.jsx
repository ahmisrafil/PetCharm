import React from 'react';
import Slider from '../../../components/Home/Slider';
import Featured_Catgory from '../../../components/Home/Featured_Catgory';
import FeaturedItems from '../../../components/Home/FeaturedItems';

const Home = () => {
    return (
        <div className='min-h-screen'>
         <Slider></Slider>
         <Featured_Catgory></Featured_Catgory>
         <FeaturedItems></FeaturedItems>
        </div>
    );
};

export default Home;