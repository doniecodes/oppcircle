import { View, Text } from 'react-native';
import { createContext } from 'react';
import { useReducer } from 'react';
import { useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const userReducer = (state, action)=> {
  switch (action.type) {
    case "SET_USER": 
      return { user: action.payload }
      
    case "LOGIN": 
      return { user: action.payload }
      
    case "LOGOUT": 
      return { user: null }
      
  default: return state
}
};

export const UserContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(userReducer, {user: null});
  
  useEffect(()=> {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          dispatch({
            type: "LOGIN",
            payload: user,
          });
        }
      } catch (error) {
        console.log("Failed to load user:", error);
      }
    };
    loadUser();
  }, [])
  
  console.log("initial user:", state);
  
  return (
    <UserContext.Provider value={{...state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};