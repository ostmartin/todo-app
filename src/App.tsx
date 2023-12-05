import { useState } from "react";

import { Content } from "./components/Content";
import { Header } from "./components/Header";

export type Todo = {
  id: number;
  content: string;
  checked: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      content: "Create the ToDo app using TypeScript, React, React Query, Tailwind CSS",
      checked: true
    },
    {
      id: 2,
      content: "Create the ToDo app using TypeScript, React, React Query, Tailwind CSS",
      checked: false
    },
    {
      id: 3,
      content: "Create the ToDo app using TypeScript, React, React Query, Tailwind CSS",
      checked: false
    },
  ])

  return (
    <main className="w-full h-full flex justify-center items-center">
      <div className="grid grid-cols-1 border-[1px] border-gray-300">
        <Header count={todos.length}/>
        <Content todos={todos}/>
      </div>
    </main>
  )
}

export default App;