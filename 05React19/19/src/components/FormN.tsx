import { useFormStatus } from "react-dom";

interface UserData {
  name: string;
  email: string;
}

const FormN = () => {
  const formAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const user: UserData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    console.log(user);
  };
  return (
    <div>
      <form action={formAction}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <FormButton />
      </form>
    </div>
  );
};

export default FormN;

function FormButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Loading..." : "Submit"}
    </button>
  );
}
