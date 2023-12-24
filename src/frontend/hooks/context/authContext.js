import { createContext, useReducer } from "react";
import { authReducer } from "../reducer/authReducer";

export const authContext = createContext(null);

export const AuthContextProveder = ({ children }) => {
  const [{ token, user }, setAuthDispatch] = useReducer(authReducer, {
    user: {},
    token: localStorage.getItem("token") || "",
  });

  return (
    <authContext.Provider value={{ setAuthDispatch, token, user }}>
      {children}
    </authContext.Provider>
  );
};
