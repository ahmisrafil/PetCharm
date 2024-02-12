import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Shared/Cover';
import coverImg from '../../assets/icons/cat-dog.png'
import FeaturedItems from '../../components/Home/FeaturedItems';


const Offers = () => {
    return (
        <div className='mx-16'>
            <Helmet>
                <title>PetCharm | Offers</title>
            </Helmet>
            <Cover img={coverImg} title={"Our Offers"}></Cover>
            <FeaturedItems></FeaturedItems>
        </div>
    );
};

export default Offers;