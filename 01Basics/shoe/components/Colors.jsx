import { useState } from "react";

const colors = ["all", "black", "blue", "red", "green", "white"];

const colorClasses = {
  all: "bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500",
  black: "bg-black",
  white: "bg-white border-2",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
};

const Colors = ({ handleFilter }) => {
  const [item, setItem] = useState("all");
  return (
    <div>
      <h3 className="text-xl font-semibold">Colors</h3>
      {colors.map((e) => {
        return (
          <div key={e} className="py-1 flex items-center gap-2">
            <button
              onClick={() => {
                setItem(e);
                handleFilter("color", e);
              }}
              className={`flex items-center justify-center relative h-5 w-5 ${colorClasses[e]} rounded-full cursor-pointer`}
            >
              <div
                className={`cursor-pointer absolute h-3 w-3 ${
                  e == item ? "bg-blue-300" : ""
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

export default Colors;
