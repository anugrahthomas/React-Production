import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={i <= rating ? "fill-amber-300" : "fill-slate-200"}
        size={18}
      />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
