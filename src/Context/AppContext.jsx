import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = (props) => {
  const [isExistingUser, setIsExistingUser] = useState(null);
  const [isUserCheckd, setIsUserCheckd] = useState(false);

  return (
    <Context.Provider
      value={{
        isExistingUser,
        setIsExistingUser,
        isUserCheckd,
        setIsUserCheckd,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
