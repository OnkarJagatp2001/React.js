// DataContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create context for shared data
const DataContext = createContext();

// Data Provider component to manage shared state
export const DataProvider = ({ children }) => {
  // State to hold shared data
  const [sharedData, setSharedData] = useState(null);
  
  // Function to update shared data
  const updateSharedData = (data) => {
    setSharedData(data);
  };

  // Provide shared data and update function to the context
  return (
    <DataContext.Provider value={{ sharedData, updateSharedData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to consume shared data
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
