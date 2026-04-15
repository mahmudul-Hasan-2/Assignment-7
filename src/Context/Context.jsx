import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const HandlingContext = createContext();

const Context = ({ children }) => {
  const [timeLine, setTimeLine] = useState([]);

  const data = {
    timeLine,
    setTimeLine,
  };
  return (
    <HandlingContext.Provider value={data}>{children}</HandlingContext.Provider>
  );
};

export default Context;
