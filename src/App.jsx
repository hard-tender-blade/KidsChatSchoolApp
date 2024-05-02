import ChatList from "./components/ChatList";
import Panel from "./components/Panel";
import "./style.css";
import { useEffect, useState } from "react";
import { messagesCollection } from "./api/firebase";
import { getDocs } from "firebase/firestore";

function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(messagesCollection);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setArr(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

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
