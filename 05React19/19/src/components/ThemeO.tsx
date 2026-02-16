import { useContext } from "react";
import { ThemeContext } from "./ThemeOld";

const ThemeO = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("error while context handling");
  }
  const { theme, toggleTheme } = context;
  const style =
    theme == "light"
      ? { background: "white", color: "black" }
      : { background: "black", color: "white" };
  return (
    <div style={style}>
      <h2>Hello THEME</h2>
      <button onClick={toggleTheme}>
        {theme == "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default ThemeO;
