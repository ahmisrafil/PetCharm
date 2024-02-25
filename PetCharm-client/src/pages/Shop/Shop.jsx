import { Helmet } from "react-helmet-async";
import useMenu from "../../components/hooks/useMenu";
import SharedTitle from "../../components/SharedTitle";
import OfferCategory from "../Offers/OfferCategory/OfferCategory";


import catsImg from '../../assets/category/cat_care.webp'
import dogImg from '../../assets/category/dog_food.webp'
import birdImg from '../../assets/category/parrot.webp'
import MenuItem from "../../components/Shared/menuItem";


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
               
            </div>
        </div>
    );
};

export default Shop;