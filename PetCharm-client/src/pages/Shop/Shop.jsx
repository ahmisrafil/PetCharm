import { Helmet } from "react-helmet-async";
import useMenu from "../../components/hooks/useMenu";
import Cover from "../../components/Shared/Cover";
import shopCover from '../../assets/banner/shop.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import ItemCard from "../../components/ItemCard/ItemCard";

const Shop = () => {
    const [menu] = useMenu();
    const cats = menu.filter(item => item.category === 'Cats');
    const dogs = menu.filter(item => item.category === 'Dogs');
    const birds = menu.filter(item => item.category === 'Birds');
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className='mx-32 mb-28'>
            <Helmet>
                <title>PetCharm | Shop</title>
            </Helmet>
            <div className='mt-20 my-20'>
                <Cover img={shopCover} title={'Shop Pet Accessories'}></Cover>
            </div>
            <Tabs defaultIndex={1} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Cats</Tab>
                    <Tab>Dogs</Tab>
                    <Tab>Birds</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid grid-cols-4 gap-6">
                    {
                        cats.map(item=> <ItemCard key={item.id} item={item}></ItemCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-4 gap-6">
                    {
                        dogs.map(item=> <ItemCard key={item.id} item={item}></ItemCard>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-4 gap-6">
                    {
                        birds.map(item=> <ItemCard key={item.id} item={item}></ItemCard>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;