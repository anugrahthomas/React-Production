import { useState } from "react";
import { FaPlus } from "react-icons/fa";

// accept="image/*" will decide filetype

const Profile = () => {
  const [profile, setProfile] = useState<string>(
    "https://placehold.co/100x100",
  );

  const profileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfile(URL.createObjectURL(file)); // make file object convert to string
    }
  };
  return (
    <div className="p-2 relative flex items-center justify-center w-fit group">
      <img
        className="rounded-full h-20 w-20 md:h-30 md:w-30 object-cover"
        src={profile}
        alt="profile"
      />
      <button className="absolute flex items-center justify-center">
        <label
          className="hidden h-20 w-20 md:h-30 md:w-30 bg-gray-500/40 transition rounded-full cursor-pointer group-hover:flex items-center justify-center text-white"
          htmlFor="profile"
        >
          <FaPlus size={20} />
        </label>
        <input
          type="file"
          accept="image/*"
          name="profile"
          id="profile"
          className="hidden"
          onChange={profileChangeHandler}
        />
      </button>
    </div>
  );
};

export default Profile;
