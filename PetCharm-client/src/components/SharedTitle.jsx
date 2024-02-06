import React from 'react';

const SharedTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center w-4/12 mb-8'>
            <p className='text-yellow-700 my-2'>---{subHeading}---</p>
            <p className='text-3xl uppercase font-semibold  border-y-4 py-4'>{heading}</p>
        </div>
    );
};

export default SharedTitle;