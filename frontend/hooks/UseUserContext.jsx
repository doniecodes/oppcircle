import React, { useContext } from 'react';
import UserContext from "../contexts/UserContext";

const UseUserContext = () => {
  const context = useContext(UserContext);
  return context;
}

export default UseUserContext