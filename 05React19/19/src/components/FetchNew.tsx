import { use } from 'react'

interface Todo {
//   useId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todoPromise = fetch(
  "https://jsonplaceholder.typicode.com/todos/1"
).then(res => res.json());

// not working but working earlier
// const fetchHandler = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return res.json(); 
// }

const FetchNew = () => {
    const data = use<Todo>(todoPromise); // for working of use we have put the component in Suspense
  return (
    <div>{data.title}</div>
  )
}

export default FetchNew