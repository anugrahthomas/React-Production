import { useActionState } from "react";

const initialState = 0;
const action = (prevState: number, formData: any): number => {
  const value: number = Number(formData.get("num"));
  return prevState + value;
};

const ActionState = () => {
  const [state, formAction] = useActionState(action, initialState);
  return (
    <div>
      <form action={formAction}>
        <h2>Counter: {state}</h2>
        <label htmlFor="num">Increment Val: </label>
        <input type="number" name="num" id="num" />
        <button type="submit">Incerment</button>
      </form>
    </div>
  );
};

export default ActionState;
