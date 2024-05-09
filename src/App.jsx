import ChatList from "./components/ChatList";
import Panel from "./components/Panel";
import "./style.css";
import { useEffect, useState } from "react";
import { messagesCollection } from "./api/firebase";
import { getDocs, query, orderBy } from "firebase/firestore";
import LoginScreen from "./components/LoginScreen";
import { auth } from "./api/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const snap = await getDocs(
          query(messagesCollection, orderBy("time", "asc"))
        );
        const data = snap.docs.map((doc) => doc.data());

        setArr(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    setInterval(fetchData, 1000);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;
        setUsername(email);
        setLoggedIn(true);
        // ...
      } else {
        // User is signed out
        setLoggedIn(false);
        // ...
      }
    });
  }, []);

  if (!loggedIn) {
    return <LoginScreen />;
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="h-[80%] bg-slate-200">
        <ChatList arr={arr} />
      </div>

      <div className="h-[20%] bg-slate-300">
        <Panel arr={arr} setArr={setArr} username={username} />
      </div>
    </div>
  );
}

export default App;
