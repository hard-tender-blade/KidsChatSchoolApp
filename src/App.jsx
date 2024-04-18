import ChatList from "./components/ChatList";
import Panel from "./components/Panel";
import "./style.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[80%] bg-slate-200">
        <ChatList />
      </div>

      <div className="h-[20%] bg-slate-300">
        <Panel />
      </div>
    </div>
  );
}

export default App;
