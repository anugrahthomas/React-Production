interface CardProps {
  title: string;
  description: string;
  image: string;
}
const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="max-w-sm mx-auto m-4 rounded-lg shadow-xl overflow-hidden">
      <div className="h-fit w-full overflow-hidden">
        <img
          className="w-full h-60 object-cover hover:scale-110 transition-all delay-100 duration-300"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-4 pb-6 mt-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="tracking-tight">{description}</p>

        <button className="mt-2 inline-block px-3 py-1 border border-gray-200 shadow-md rounded hover:bg-gray-500 hover:text-white font-semibold transition-all cursor-pointer">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
