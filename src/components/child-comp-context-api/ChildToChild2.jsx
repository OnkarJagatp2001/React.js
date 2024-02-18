import React from "react";
import { useData } from "./DataContext";

function ChildToChild2() {
  const { sharedData } = useData();
  return (
    <div>
      <p>Data received in child component2 : {sharedData}</p>
    </div>
  );
}

export default ChildToChild2;
