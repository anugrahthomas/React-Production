import ThreeD from "./components/3D";
import Avatar from "./components/Avatar";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import Diff from "./components/Diff";
import DropBox from "./components/DropBox";
import Fab from "./components/Fab";
import Kbd from "./components/kbd";
import Theme from "./components/Theme";

const App = () => {
  return (
    <div className="p-2">
      <h1 className="text-4xl font-bold">Daisy UI</h1>
      <Buttons />
      <DropBox />
      <Fab />
      <Theme />
      <Avatar />
      <Card />
      <Diff />
      <ThreeD />
      <Kbd />
    </div>
  );
};

export default App;
