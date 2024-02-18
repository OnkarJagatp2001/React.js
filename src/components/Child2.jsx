import React, { useState } from "react";

function Child2({ onSendData }) {
  // State to hold child input
  const [childInput, setChildInput] = useState("");

  const sendDataToParent = () => {
    onSendData(childInput);
  };
  return (
    <div>
      {/* Input for child to enter data */}
      <input
        type="text"
        value={childInput}
        onChange={(e) => setChildInput(e.target.value)}
      />
      {/* Button to send data to parent */}
      <button onClick={sendDataToParent}>Send data to Parent</button>
    </div>
  );
}

export default Child2;
