import { useEffect, useState } from "react";

interface Todo {
  useId: number;
  id: number;
  title: string;
  completed: boolean;
}
const FetchOld = () => {
  const [todos, setTodos] = useState<Todo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTodos(data);
      })
      .catch((err) => {
        console.log(err);
        throw new Error("network error");
      });
  }, []);
  if (loading) return <p>Loading...</p>;
  return <div>{todos?.title}</div>;
};

export default FetchOld;
