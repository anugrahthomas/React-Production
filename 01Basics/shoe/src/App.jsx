import {
  ShoppingBasket,
  Heart,
  ShoppingCart,
  UserRoundCog,
} from "lucide-react";
import Colors from "../components/Colors";
import Category from "../components/Category";
import Price from "../components/Price";
import Recommend from "../components/Recommend";
import Card from "../components/Card";
import { useState } from "react";
import { useFilter } from "../hooks/useFilter";

const App = () => {
  const [filter, setFilter] = useState({
    color: "all",
    category: "all",
    price: "all",
    search: "",
  });

  const handleFilter = (type, item) => {
    setFilter({ ...filter, [type]: item });
  };
  const filteredShoes = useFilter(filter);
  return (
    <div>
      {/* topbar */}
      <div className="md:px-20 p-2 flex items-center justify-between border-b-2 border-gray-300">
        <div className="flex items-center gap-10 md:gap-20">
          <ShoppingBasket size={50} />
          <input
            onChange={(e) => {
              setFilter({ ...filter, search: e.target.value });
            }}
            className="px-2 h-8 md:h-10 w-60 md:w-80 outline-none bg-gray-100 rounded-md"
            type="text"
            placeholder="Search shoes..."
          />
        </div>
        <div className="flex gap-2 md:gap-4">
          <Heart className="cursor-pointer" />
          <ShoppingCart className="cursor-pointer" />
          <UserRoundCog className="cursor-pointer" />
        </div>
      </div>

      <div className="flex h-full mt-4">
        <div className="w-50 px-4 pr-6 space-y-2 border-r-2 border-[#d9d9d9] max-h-[88vh] overflow-y-auto">
          <Category handleFilter={handleFilter} />
          <Price handleFilter={handleFilter} />
          <Colors handleFilter={handleFilter} />
        </div>

        <div className="w-full px-4 pl-6 max-h-[88vh] overflow-y-auto">
          <Recommend />
          <div className="py-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
            {filteredShoes.map(
              ({ name, rating, review, img, discount, price }) => (
                <Card
                  key={name}
                  name={name}
                  rating={rating}
                  review={review}
                  img={img}
                  discount={discount}
                  price={price}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
