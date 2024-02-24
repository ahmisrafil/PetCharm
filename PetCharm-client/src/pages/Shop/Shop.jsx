import { Helmet } from "react-helmet-async";
import useMenu from "../../components/hooks/useMenu";
import SharedTitle from "../../components/SharedTitle";
import OfferCategory from "../Offers/OfferCategory/OfferCategory";


import catsImg from '../../assets/category/cat_care.webp'
import dogImg from '../../assets/category/dog_food.webp'
import birdImg from '../../assets/category/parrot.webp'


const Shop = () => {
    const [menu] = useMenu();
    const cats = menu.filter(item => item.category === 'Cats');
    const dogs = menu.filter(item => item.category === 'Dogs');
    const birds = menu.filter(item => item.category === 'Birds');
    return (
        <div className='mx-32'>
            <Helmet>
                <title>PetCharm | Shop</title>
            </Helmet>
            <div className='mt-20'>
                <SharedTitle subHeading="Don't Miss" heading="Cat Items"></SharedTitle>
                <OfferCategory items={cats} title="Cats" img={catsImg}></OfferCategory>
                <SharedTitle subHeading="Don't Miss" heading="Dog Items"></SharedTitle>
                <OfferCategory items={dogs} title="Dogs" img={dogImg}></OfferCategory>
                <SharedTitle subHeading="Don't Miss" heading="Bird Items"></SharedTitle>
                <OfferCategory items={birds} title="Birds" img={birdImg}></OfferCategory>
            </div>
        </div>
    );
};

export default Shop;