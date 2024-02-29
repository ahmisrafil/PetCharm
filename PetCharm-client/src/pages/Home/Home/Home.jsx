import React from 'react';
import Slider from '../../../components/Home/Slider';
import Featured_Catgory from '../../../components/Home/Featured_Catgory';
import FeaturedItems from '../../../components/Home/FeaturedItems';
import { Helmet} from 'react-helmet-async';
import Testimonials from '../Testimonials/Testimonials';
import OrderNow from '../OrderNow/OrderNow';
const Home = () => {
    return (
        <div className='min-h-screen'>
            <Helmet>
                <title>PetCharm | Home</title>
            </Helmet>
         <Slider></Slider>
         <Featured_Catgory></Featured_Catgory>
         <FeaturedItems></FeaturedItems>
         <OrderNow></OrderNow>
         <Testimonials></Testimonials>
        </div>
    );
};

export default Home;