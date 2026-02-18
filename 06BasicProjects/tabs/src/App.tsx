import { useState } from "react";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Tabs from "./components/Tabs";

const App = () => {
  const [subscribe, setSubscribe] = useState<boolean>(false);
  return (
    <div>
      <Sidebar />
      <div className="ml-20">
        <Banner />
        <div className="flex items-center">
          <Profile />
          <div className="ml-2">
            <h2 className="font-bold text-2xl md:text-4xl">Anugrah Thomas</h2>
            <p className="tracking-tight">Full Stack Web Developer</p>
            <button
              onClick={() => setSubscribe(!subscribe)}
              className={`${subscribe ? "bg-red-600" : "bg-gray-500"} mt-2 px-4 py-1 rounded-full text-white cursor-pointer`}
            >
              {subscribe ? "Subscribed" : "Subscribe"}
            </button>
          </div>
        </div>
      </div>

      <div className="ml-20">
        <Tabs />
      </div>
    </div>
  );
};

export default App;
