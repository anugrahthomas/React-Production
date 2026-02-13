import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2>react-form-hook</h2>
      <form
        style={{ width:"100%", display: "flex", flexDirection: "column", alignItems:"center" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="name">Name: </label>
        <input
        style={{padding:"5px 5px", width:"50%"}}
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />

        <label htmlFor="name">Email: </label>
        <input
        style={{padding:"5px 5px", width:"50%"}}
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />

        <label htmlFor="password">Password: </label>
        <input
        style={{padding:"5px 5px", width:"50%"}}
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
                value: 8,
                message:"Password must contain 8 characters"
            },
            maxLength: {
                value: 15,
                message:"Password must not more than 15 characters"
            },
          })}
        />

        {(errors.name || errors.email || errors.password) && (
          <p style={{ color: "red" }}>
            {errors.name?.message
              ? errors.name?.message
              : errors.email?.message
                ? errors.email.message
                : errors.password?.message}
          </p>
        )}

        <button style={{width: "30%", padding:"10px"}} type="submit" disabled={isSubmitting}>{isSubmitting ? "Loading..." :"Register"}</button>
      </form>
    </div>
  );
};

export default Form;
