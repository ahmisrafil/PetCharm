import ItemCard from "../../components/ItemCard/ItemCard";


const ShopTab = ({items}) => {
    return (
        <div className="grid grid-cols-4 gap-6">
                    {
                        items.map(item=> <ItemCard key={item.id} item={item}></ItemCard>)
                    }
                    </div>
    );
};

export default ShopTab;