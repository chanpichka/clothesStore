import { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [data, setData] = useState("");


  // const setToken = (paramToken) => {
  //   setData(paramToken);
  // };

  return (
    <TokenContext.Provider value={{ data, setData }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenContext, TokenProvider };
