import React from "react";
import Message from "./Message";

export default function ChatList() {
  return (
    <div className="w-full h-full flex flex-col bg-green-100">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
}
