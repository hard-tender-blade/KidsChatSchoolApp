import ChatList from "./components/ChatList";
import Panel from "./components/Panel";
import "./style.css";
import { useState } from "react";

function App() {
  const [arr, setArr] = useState([
    {
      name: "Denis",
      message: "Hello2",
    },
    {
      name: "Denis",
      message: "Hello",
    },
    {
      name: "Denis",
      message: "Hello",
    },
  ]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[80%] bg-slate-200">
        <ChatList arr={arr} />
      </div>

      <div className="h-[20%] bg-slate-300">
        <Panel arr={arr} setArr={setArr} />
      </div>
    </div>
  );
}

export default App;
