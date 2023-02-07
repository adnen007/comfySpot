import React, { useContext } from "react";

const context = React.createContext();

const MainContext = ({ value, children }) => {
  return <context.Provider value={value}>{children}</context.Provider>;
};
const useMainContext = () => {
  return useContext(context);
};
export { MainContext, useMainContext };

// context api allow you to create special component that can share the value in its value prop
// with all its children and nested children and you can get the value easily inside the
// children by useContext.
