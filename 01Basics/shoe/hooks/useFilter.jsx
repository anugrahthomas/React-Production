import { useMemo } from "react";
import { shoes } from "../utils/data";

export const useFilter = (filters) => {
  const filteredShoes = useMemo(() => {
    return shoes.filter((shoe) => {
      // COLOR
      const colorMatch =
        filters.color === "all" || shoe.color === filters.color;

      // CATEGORY
      const categoryMatch =
        filters.category === "all" || shoe.category === filters.category;

      // PRICE
      const priceMatch =
        filters.price === "all" ||
        (() => {
          const price = Number(shoe.price);
          const [min, max] = filters.price.split("-").map(Number);
          return max ? price >= min && price <= max : price >= min;
        })();

      const searchMatch =
        filters.search.trim() === "" ||
        (() => {
          return shoe.name
            .toLowerCase()
            .includes(filters.search.trim().toLowerCase());
        })();
      return colorMatch && categoryMatch && priceMatch && searchMatch;
    });
  }, [filters]);

  return filteredShoes;
};
