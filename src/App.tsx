import { Content } from "./components/Content";
import { Header } from "./components/Header";

function App() {
  return (
      <main className="w-full h-full flex justify-center items-center">
        <div className="grid grid-cols-1 border-[1px] border-gray-300 min-w-[300px] max-w-[800px]">
          <Header/>
          <Content/>
        </div>
      </main>
  )
}

export default App;