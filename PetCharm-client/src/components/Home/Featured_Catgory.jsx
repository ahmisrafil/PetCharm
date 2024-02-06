import React from 'react';
import img1 from '../../assets/category/parrot.webp'
import img2 from '../../assets/category/cat_care.webp'
import img3 from '../../assets/category/cat_food.webp'
import img4 from '../../assets/category/cat_litter.webp'
import img5 from '../../assets/category/cat-clotthing.webp'
import img6 from '../../assets/category/dog_food.webp'
import SharedTitle from '../SharedTitle';
const Featured_Catgory = () => {
    return (
        <div className='mx-20 my-10'>
            {/* <h3 className='text-3xl font-bold mb-10'>Featured Categories</h3> */}
            <SharedTitle 
            heading={"Featured Categories"}
            subHeading={"Let's See"}
            ></SharedTitle>
            <div className='flex flex-row gap-6 justify-between '>
                <div>
                    <img src={img1} className='rounded-full h-40 mb-4' alt="" />
                    <h3 className='font-bold text-center '>Birds Food</h3>
                </div>
                <div>
                    <img src={img2} className='rounded-full h-40 mb-4' alt="" />
                    <h3 className='font-bold text-center '>Cats Health Suppliments</h3>
                </div>
                <div>
                    <img src={img3} className='rounded-full h-40 mb-4' alt="" />
                    <h3 className='font-bold text-center '>Cats Dry Food</h3>
                </div>
                <div>
                    <img src={img4} className='rounded-full h-40 mb-4' alt="" />
                    <h3 className='font-bold text-center '>Cats Treats</h3>
                </div>
                <div>
                    <img src={img5} className='rounded-full h-40 mb-4' alt="" />
                    <h3 className='font-bold text-center '>Cats Fashion</h3>
                </div>
                <div>
                    <img src={img6} className='rounded-full h-40 mb-4' alt="" />
                    <h3 className='font-bold text-center '>Dog Food</h3>
                </div>
            </div>
        </div>
    );
};

export default Featured_Catgory;