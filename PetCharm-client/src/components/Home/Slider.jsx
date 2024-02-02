import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/icons/banner-dog.png'

const Slider  = () => {
    return (
        <Carousel >
            <div className='bg-[#F9F3EC]'>
                <img src={img1}  />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src={img1} />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src={img1} />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Slider;