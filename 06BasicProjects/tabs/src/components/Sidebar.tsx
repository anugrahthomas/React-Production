import { FaHome, FaUser } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdSettings } from "react-icons/io";
import { IoAmericanFootball, IoMagnet } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="sidbar fixed left-0 right-0 h-screen w-20 bg-red-800 text-white">
      <ul className="p-4 flex flex-col justify-between items-center h-full">
        {/* top */}
        <div className="top">
          <GiHamburgerMenu className="mb-4 mr-1" size={28} />
          <li className="mb-2">
            <div className="flex items-center justify-center">
              <FaHome className="mr-1 mb-2" size={28} />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center justify-center">
              <FaUser className="mr-1 mb-2" size={28} />
            </div>
          </li>
          <li className="mb-2">
            <div className="flex items-center justify-center">
              <FaAddressBook className="mr-1 mb-2" size={28} />
            </div>
          </li>
        </div>

        {/* bottom */}
        <div className="bottom">
          <li className="mb-2">
            <IoAmericanFootball className="mr-1 mb-2" size={28} />
          </li>
          <li className="mb-2">
            <IoMagnet className="mr-1 mb-2" size={28} />
          </li>
          <li className="mb-2">
            <IoMdSettings className="mr-1 mb-2" size={28} />
          </li>
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
