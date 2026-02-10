import { useId } from "react";

const Id = () => {
  const id = useId();
  return (
    <div>
      <p>Random Id: {id}</p>
    </div>
  );
};

export default Id;
