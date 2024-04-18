import React from "react";

export default function Panel() {
  return (
    <div className="w-full h-full flex ">
      <div className="w-10/12 bg-red-300 flex flex-col">
        <input type="text" placeholder="name" className="p-4 text-2xl" />
        <input type="text" placeholder="message" className="p-4 text-2xl" />
      </div>

      <button className="w-2/12 m-10 bg-blue-400">Send</button>
    </div>
  );
}
