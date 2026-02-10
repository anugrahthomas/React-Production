import { DiAndroid, DiApple } from "react-icons/di";
import { FaReact, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import State from "./hooks/useState";
import CopyText from "./components/CopyText";
import Effect from "./hooks/useEffect";
import Context, { MyContext } from "./hooks/Context";
import { useContext } from "react";
import Reducer from "./hooks/reducer";
import Counter from "./components/Counter";
import Reference from "./hooks/useRef";
import Id from "./hooks/useId";
import Accordion from "./components/Accordion";

const App = () => {
  const style = {
    cursor: "pointer",
    margin: "10px",
    border: "5px solid #7a0000",
    borderRadius: "100%",
  };
  return (
    <div>
      <DiAndroid size={40} />
      <DiApple size={40} />
      <FaReact size={40} />
      <FaInstagram size={40} />
      <FaTwitter size={40} />
      <FaGithub size={40} />

      <Accordion />
      <CopyText />
      <Counter />
      <Id />
      <div>
        <State />
        <Effect />
        {/* contextapi */}
        <Context>
          {/* useContext */}
          <MyComponent />

          {/* consumerComponent */}
          <ConsumerComponent />
        </Context>

        <Reducer />
        <Reference />
      </div>
    </div>
  );
};
export default App;

function ConsumerComponent() {
  return (
    // not idle for multiple providers
    <MyContext.Consumer>
      {(data) => {
        return <h1>{data}</h1>;
      }}
    </MyContext.Consumer>
  );
}

function MyComponent() {
  const data = useContext(MyContext);
  return <h1>{data}</h1>;
}
