import { useState } from "react";

import { Content } from "./components/Content";
import { Header } from "./components/Header";

import type { Todo } from "./typesData";

function App() {
  return (
      <main className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 border-[1px] border-gray-300">
          <Header count={3}/>
          <Content/>
        </div>
      </main>
  )
}

export default App;