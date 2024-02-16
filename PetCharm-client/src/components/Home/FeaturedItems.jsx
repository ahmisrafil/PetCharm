import React, { useEffect, useState } from 'react';
import SharedTitle from '../SharedTitle';
import MenuItem from '../Shared/menuItem';

const FeaturedItems = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("menu.json")
            .then(res => res.json())
            .then(data=>{
                const popular = data.filter(product=> product.tag === "popular")
                    setItems(popular)
                })
    }, [])
    console.log(items);
    return (
        <div className='mx-32 my-20'>
            <SharedTitle
                heading={"Featured Items"}
                subHeading={"Explore"}
            ></SharedTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem key={item.id} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default FeaturedItems;