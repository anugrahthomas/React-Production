interface UserData {
  name: string;
  email: string;
}

const FormO = () => {
  const formAction = (formData: any) => {
    const user: UserData = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    console.log(user);
  };
  return (
    <form action={formAction}>
      <label htmlFor="">Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />

      <button>Submit</button>
    </form>
  );
};

export default FormO;
