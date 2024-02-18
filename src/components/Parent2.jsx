// Child to parent props
import React from "react";
import Child2 from "./Child2";
import { useState } from "react";
function Parent2() {
  // state to hold data from child
  const [childData, setChildData] = useState(null);

  //   Callback to update parent state with data from ChildComponent
  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };
  return (
    <div>
      <p>Data from Child : {childData}</p>
      {/* Child componet with callback to send data to parent  */}
      <Child2 onSendData={handleChildData} />
    </div>
  );
}

export default Parent2;
