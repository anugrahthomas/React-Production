import { useState } from "react";

const price = ["all", "100-150", "150-200", "200-300", "300"];

const Price = ({ handleFilter }) => {
  const [item, setItem] = useState("all");
  return (
    <div>
      <h3 className="text-xl font-semibold">Price</h3>
      {price.map((e) => {
        return (
          <div key={e} className="py-1 flex items-center gap-2">
            <button
              onClick={() => {
                setItem(e);
                handleFilter("price", e);
              }}
              className={`flex items-center justify-center relative h-5 w-5 ${
                e === item ? "bg-blue-300" : "bg-gray-200"
              } rounded-full cursor-pointer`}
            >
              <div
                className={`cursor-pointer absolute h-3 w-3 ${
                  e == item ? "bg-blue-600/70" : ""
                } rounded-full`}
              ></div>
            </button>
            <p className="">
              {e == "all" ? "All" : e == "300" ? "Over $300" : `\$${e}`}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Price;
