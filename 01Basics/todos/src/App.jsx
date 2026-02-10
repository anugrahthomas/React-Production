import { ListChecks, Trash } from "lucide-react";
import { useState } from "react";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  return (
    <div className="p-4 bg-blue-950 min-h-screen text-white flex flex-col items-center min-w-screen">
      <div className="p-4 border-2 h-full md:w-1/2 flex gap-1">
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Todo..."
          className="w-full outline-none"
          type="text"
          value={title}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const todo = {
                title: title,
                isDone: false,
              };
              setTodos([...todos, todo]);
              setTitle("");
            }
          }}
        />
        <button
          onClick={() => {
            const todo = {
              title: title,
              isDone: false,
            };
            setTodos([...todos, todo]);
            setTitle("");
          }}
        >
          <ListChecks />
        </button>
      </div>
      <ul className="mt-6 flex flex-col gap-2 items-center w-full">
        {todos.length > 0 &&
          todos.map((e, i) => {
            return (
              <li
                key={i}
                className="p-4 flex items-center justify-between rounded-full border-2 md:w-1/2 gap-10"
              >
                <p className="text-2xl">{e.title}</p>
                <div className="flex gap-2">
                  <input
                    onClick={() => {
                      e.isDone = !e.isDone;
                    }}
                    type="checkbox"
                  />
                  <Trash
                    onClick={() => {
                      const temp = todos.filter((_, t) => t != i);
                      setTodos(temp);
                    }}
                    className="cursor-pointer"
                  />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
