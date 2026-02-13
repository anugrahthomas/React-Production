import { useForm, type SubmitHandler } from "react-hook-form";

interface FormData {
  firstname: string;
  lastname: string;
  age: number;
  dob: Date;
  email: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const submitHandler: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <div className="border-2 rounded p-4 lg:w-1/3 md:w-4/6 w-4/5">
      <h2 className="text-center font-semibold text-4xl">Register</h2>
      <form className="p-2 mt-4" onSubmit={handleSubmit(submitHandler)}>
        <div className="relative flex flex-col w-full py-1">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="firstname"
          >
            Firstname
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="text"
            id="firstname"
            {...register("firstname", { required: "Firstname is required" })}
          />
          {errors.firstname && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.firstname?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="lastname"
          >
            Lastname
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="text"
            id="lastname"
            {...register("lastname", { required: "Lastname is required" })}
          />
          {errors.lastname && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.lastname?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required",
              max: { value: 200, message: "Age not more than 200" },
            })}
          />
          {errors.age && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.age?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="dob"
          >
            DOB
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="date"
            id="dob"
            {...register("dob", { required: "DOB is required" })}
          />
          {errors.dob && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.dob?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.email?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.city?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="state"
          >
            State
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="text"
            id="state"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.state?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="country"
          >
            Country
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="text"
            id="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.country?.message}
            </p>
          )}
        </div>

        <div className="relative flex flex-col w-full py-1 mt-3">
          <label
            className="absolute -top-2 left-4 text-sm bg-white rounded-full px-2"
            htmlFor="zipcode"
          >
            Zipcode
          </label>
          <input
            className="px-4 py-2 border w-full rounded-full outline-none"
            type="text"
            id="zipcode"
            {...register("zipcode", {
              required: "Zipcode is required",
              minLength: { value: 3, message: "Must contain 3 digits" },
              maxLength: { value: 6, message: "must not more than 6 digits" },
            })}
          />
          {errors.zipcode && (
            <p className="mt-1 text-red-600 font-semibold bg-red-200 w-fit px-2 rounded-full">
              {errors.zipcode?.message}
            </p>
          )}
        </div>
        
        <button
          disabled={isSubmitting}
          className="w-full mt-5 py-2 text-xl bg-blue-500 text-white font-semibold rounded cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form2;
