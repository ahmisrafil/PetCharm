

const MenuItem = ({item}) => {
    const {name, details, image, price} = item;

    return (
        <div className='flex space-x-4' >
            <img src={image} alt="" style={{borderRadius:'0 200px 200px 200px'}} className='w-[90px]'/>
            <div>
                <h3 className='uppercase font-bold'>{name} ---</h3>
                <p>{details}</p>
            </div>
            <p className='text-orange-600 font-semibold'>tk:{price}/-</p>
        </div>
    );
};

export default MenuItem;