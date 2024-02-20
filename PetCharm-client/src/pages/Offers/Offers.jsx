
import { Helmet } from 'react-helmet-async';
import Cover from '../../components/Shared/Cover';
import coverImg from '../../assets/category/cat-clotthing.webp'
import FeaturedItems from '../../components/Home/FeaturedItems';
import SharedTitle from '../../components/SharedTitle';
import useMenu from '../../components/hooks/useMenu';
import OfferCategory from './OfferCategory/OfferCategory';

import catsImg from '../../assets/category/cat_care.webp'
import dogImg from '../../assets/category/dog_food.webp'
import birdImg from '../../assets/category/parrot.webp'

const Offers = () => {
    const [menu] = useMenu();
    const cats = menu.filter(item => item.category === 'Cats');
    const dogs = menu.filter(item => item.category === 'Dogs');
    const birds = menu.filter(item => item.category === 'Birds');
    return (
        <div className='mx-32'>
            <Helmet>
                <title>PetCharm | Offers</title>
            </Helmet>
            <Cover img={coverImg} title={"Our Offers"}></Cover>
            <div className='my-20'>
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

export default Offers;