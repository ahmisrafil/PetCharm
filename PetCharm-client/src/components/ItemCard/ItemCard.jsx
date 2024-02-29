

const ItemCard = ({item}) => {
    const {name, details, image, price} = item;
    console.log(item);
    return (
        <div className="card card-compact w-72 bg-base-100 shadow-xl">
            <figure><img className="h-40" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-orange-600">{name}</h2>
                <p className="text-slate-800">{details}</p>
                <div className="card-actions justify-between items-center">
                    <p className="font-bold text-orange-600">tk: {price}/-</p>
                    <button className="btn btn-accent bg-orange-400 border-none">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;