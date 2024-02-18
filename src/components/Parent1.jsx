// Parent to Child | Props
import React from "react";
import Child1 from "./Child1";
function Parent1() {
  const dataFromParentComponent = "Hello from Parent!";
  return (
    <div>
      <Child1 data={dataFromParentComponent} />
    </div>
  );
}

export default Parent1;
