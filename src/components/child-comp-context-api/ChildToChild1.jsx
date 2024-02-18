import React from "react";
import { useData } from "./DataContext";

// Child Component that updates shared data

function ChildToChild1() {
  //Access shared data update function from the context
  const { updateSharedData } = useData();

  //function to send data to child2 component
  const sendData = () => {
    const data = "Data from ChildComponent1";
    updateSharedData(data);
  };
  return (
    <div>
      <button onClick={sendData}>Send data to child2 component</button>
    </div>
  );
}

export default ChildToChild1;
