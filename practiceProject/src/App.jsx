import { useState } from "react";
import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  const person = {
    name: "Rob",
    message: "Hi there",
    emoji: "👍",
    seatnumbers: [1, 4, 7],
  };
  return (
    <>
      <div>
        {/*<Hello person={person}></Hello> */}
        <Fruits></Fruits>
      </div>
    </>
  );
}

export default App;
