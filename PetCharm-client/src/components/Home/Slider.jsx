import React from 'react';

import img1 from '../../assets/icons/banner-dog.png'
import img2 from '../../assets/banner/banner2.png'

const Slider = () => {
    return (
        <div className='mx-20'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <div id="item1" className="carousel-item w-full bg-[#feffed] " >
                        <div className='flex flex-row justify-between mx-auto items-center'>
                            <div className='ml-20 w-[50%]'>
                                <p className='text-orange-300 font-bold text-3xl mb-2'>We Cherish Your Pet's</p>
                                <h3 className='text-5xl font-bold text-pink-900 mb-2'>Health and Happiness</h3>
                                <p className='text-orange-300 font-bold text-3xl'>Your Pet's well being is our passion</p>
                            </div>
                            <div>
                                <img src={img2} className='rounded-l-full' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full bg-[#feffed] " >
                    <div className='flex flex-row justify-between gap-20 ml-40 items-center'>
                        <div className='bg-orange-100 rounded-full '>
                            <img src={img1} className='h-80' alt="" />
                        </div>
                        <div>
                            <p className='text-orange-300 font-bold'>SAVE 10-20% OFF</p>
                            <h3 className='text-6xl'>Best Destination <br />For <span className='text-orange-300'>Your Pets</span></h3>
                            <div>
                                <button className='btn btn-primary bg-orange-300 text-black border-none hover:text-white'>Shop Now</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
            </div>
        </div>
    );
};

export default Slider;