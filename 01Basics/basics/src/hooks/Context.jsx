import { createContext } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const data = "mydata";
  return (
    <div>
      <MyContext.Provider value={data}> {children} </MyContext.Provider>
    </div>
  );
};

export default Context;
