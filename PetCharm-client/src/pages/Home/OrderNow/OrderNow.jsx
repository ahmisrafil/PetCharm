import { Helmet } from "react-helmet-async";
import SharedTitle from "../../../components/SharedTitle";
import useMenu from "../../../components/hooks/useMenu";
import ItemCard from "../../../components/ItemCard/ItemCard";


const OrderNow = () => {
    const [menu] = useMenu();
    const items = menu.filter(item=> item.tag === 'popular')
    return (
        <div>
            <SharedTitle 
            heading={"Order Now"}
            subHeading={"Don't Delay"}
            ></SharedTitle>
            <div className="mx-32 grid grid-cols-4">
                {
                items.map(item => <ItemCard key={item.id} item={item}></ItemCard>)
                }
            </div>
        </div>
    );
};

export default OrderNow;