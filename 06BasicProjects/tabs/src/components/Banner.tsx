import { useState } from "react";
import { FaCamera } from "react-icons/fa";

const Banner = () => {
  const [banner, setBanner] = useState<string>("https://placehold.co/1500x400");
  const bannerChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setBanner(URL.createObjectURL(file)); // make file object convert to string
    }
  };
  return (
    <div className="p-2 text-black relative">
      <img
        className="w-full md:h-50 h-40 rounded-3xl object-cover"
        src={banner}
        alt="banner"
      />
      <button className="p-2 absolute top-4 right-4 text-white rounded-full hover:bg-red-500 transition-all cursor-pointer">
        <label className="cursor-pointer" htmlFor="banner">
          <FaCamera size={20} />
        </label>
        <input
          type="file"
          accept="image/*"
          id="banner"
          name="banner"
          className="hidden"
          onChange={bannerChangeHandler}
        />
      </button>
    </div>
  );
};

export default Banner;
