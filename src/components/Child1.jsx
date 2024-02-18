import React from "react";

function Child1(props) {
  return (
    <div>
      {/* display data received from parent */}
      <p>{props.data}</p>
    </div>
  );
}

export default Child1;
