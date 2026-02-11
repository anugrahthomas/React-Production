import User from "@/components/User";
import Form from "@/components/Form";
import Fetch from "@/components/Fetch";

const App = () => {
  
  return <div>
    <User name="name" email="email@email" password="1213"/>
    <Form />
    <Fetch />
  </div>;
};

export default App;
