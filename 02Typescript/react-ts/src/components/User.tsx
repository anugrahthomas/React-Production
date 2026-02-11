// import { type FC } from "react";

type UserProps = {
  name: string;
  email: string;
  password: string;
};
// const User:FC<UserProps> = ({ name, email, password }: UserProps) => { //older way
const User = ({ name, email, password }: UserProps) => {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default User;
