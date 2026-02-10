import { useState } from "react";

const category = ["all", "sneakers", "loafers", "chelsea", "sports"];

const Category = ({ handleFilter }) => {
  const [item, setItem] = useState("all");
  return (
    <div>
      <h3 className="text-xl font-semibold">Category</h3>
      {category.map((e) => {
        return (
          <div key={e} className="py-1 flex items-center gap-2">
            <button
              onClick={() => {
                setItem(e);
                handleFilter("category", e);
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
            <p className="capitalize">{e}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
