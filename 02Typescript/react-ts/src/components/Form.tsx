import { useState } from "react";

interface FormData {
    name: string;
    email: string;
    password: string;
}
const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("DONE");
  };
  return <div>
    <h2>Form</h2>
    <form onSubmit={handleSubmit}>
        <input className="border px-1 mx-1"  type="text" name="name" placeholder="Enter name..." onChange={handleInputChange}/>
        <input className="border px-1 mx-1"  type="email" name="email" placeholder="Enter email..." onChange={handleInputChange}/>
        <input className="border px-1 mx-1"  type="password" name="password" placeholder="Enter password..." onChange={handleInputChange}/>
        <button className="px-2 border rounded cursor-pointer" type="submit">Submit</button>
    </form>
  </div>;
};

export default Form;
