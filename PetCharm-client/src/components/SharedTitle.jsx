import React from 'react';

const SharedTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center w-3/12 mb-10'>
            <p className='text-yellow-700 my-1'>---{subHeading}---</p>
            <p className='text-2xl uppercase font-semibold  border-y-4 py-2'>{heading}</p>
        </div>
    );
};

export default SharedTitle;