import { ShoppingBag } from "lucide-react";
import StarRating from "./StarRating";

const Card = ({ name, rating, review, img, discount, price }) => {
  return (
    <div className="p-2 border w-fit hover:scale-95 hover:rounded-2xl hover:shadow-lg shadow-black/60 transition-all duration-300 cursor-pointer">
      <div className="p-1">
        <img
          className="h-64 w-64 object-cover rounded-md"
          src={img}
          alt={name}
        />
      </div>
      <div className="p-2 space-y-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center text-sm">
          <StarRating rating={rating} />
          <p className="pl-1 text-sm">({review} reviews)</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h2 className="text-lg font-bold">${price}&nbsp;</h2>
            <h2 className="text-sm line-through italic">&nbsp;${discount}&nbsp;</h2>
          </div>
          <ShoppingBag className="cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Card;
