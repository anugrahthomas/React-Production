const products = ["All Products", "nike", "adidas", "bacca bucci"];
const Recommend = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold">Recommended</h2>
      <div className="grid grid-cols-2 sm:flex gap-2 mt-3">
        {products.map((e, i) => {
          return (
            <button
              key={i}
              className="py-1 px-4 border border-[#999999] text-[#636363] text-sm font-medium cursor-pointer hover:text-xs transition-all duration-100 capitalize"
            >
              {e}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Recommend;
