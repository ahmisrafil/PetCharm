import { Helmet } from "react-helmet-async";
import useMenu from "../../components/hooks/useMenu";
import Cover from "../../components/Shared/Cover";
import shopCover from '../../assets/banner/shop.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';

import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const Shop = () => {
    const categories = ['Cats', 'Dogs', 'Birds' ];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const cats = menu.filter(item => item.category === 'Cats');
    const dogs = menu.filter(item => item.category === 'Dogs');
    const birds = menu.filter(item => item.category === 'Birds');
    
    return (
        <div className='mx-32 mb-28'>
            <Helmet>
                <title>PetCharm | Shop</title>
            </Helmet>
            <div className='mt-20 my-10'>
                <Cover img={shopCover} title={'Shop Your Pet Accessories'}></Cover>
            </div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Cats</Tab>
                    <Tab>Dogs</Tab>
                    <Tab>Birds</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab items={cats}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={dogs}></ShopTab>
                </TabPanel>
                <TabPanel>
                <ShopTab items={birds}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;