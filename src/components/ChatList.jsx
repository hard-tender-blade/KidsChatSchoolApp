import React from "react";
import Message from "./Message";

const arr = [
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
];

export default function ChatList() {
  return (
    <div className="w-full h-full flex flex-col bg-green-100">
      {arr.map((item, index) => (
        <Message name={item.name} message={item.message} />
      ))}
    </div>
  );
}
