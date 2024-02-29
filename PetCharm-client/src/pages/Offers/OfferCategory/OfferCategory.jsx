import { Link } from "react-router-dom";
import Cover from "../../../components/Shared/Cover";
import MenuItem from "../../../components/Shared/MenuItem";


const OfferCategory = ({items, title, img}) => {
    return (
        <div className='pt-8 my-32'>
            { title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="flex justify-center">
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
            </div>
        </div>
    );
};

export default OfferCategory;