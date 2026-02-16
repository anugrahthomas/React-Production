import { Suspense } from "react";
// import FetchOld from "./components/FetchOld"
import FetchNew from "./components/FetchNew";
import ThemeO from "./components/ThemeO";
import ThemeOld from "./components/ThemeOld";
import ThemeN from "./components/ThemeN";
import FormO from "./components/FormO";
import FormN from "./components/FormN";
import ActionState from "./components/ActionState";
const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      {/* <FetchOld /> */}
      <FetchNew />

    <ThemeOld>
      <ThemeO />
      <ThemeN />
    </ThemeOld>

    <FormO />
    <FormN />
    <b/>
    <ActionState />
    </Suspense>
  );
};

export default App;
