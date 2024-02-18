import { useState } from "react";
import "./App.css";
import Parent1 from "./components/Parent1";
import ChildToChild1 from "./components/child-comp-context-api/ChildToChild1";
import ChildToChild2 from "./components/child-comp-context-api/ChildToChild2";
import { DataProvider } from "./components/child-comp-context-api/DataContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Parent1 /> */}
      <DataProvider>
        <ChildToChild1 />
        <ChildToChild2 />
      </DataProvider>
    </>
  );
}

export default App;
