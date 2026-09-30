import UserContext, { createContext, useReducer } from '';

export const UserContext = createContext();

export const userReducer = (state, action)=> {
  switch(action.type) {
    case "LOGIN" : return { user: action.payload }
    case "LOGOUT" : return { user: null }
    default: return state
  }
};

const UserContextProvider = ({children}) => {
  
  const [ state, dispatch ] = useReducer(userReducer, {user: null});
  
    useEffect(()=> {
    const loadUser = () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          const user = JSON.parse(storedUser);
          dispatch({ type: "LOGIN", payload: user });
        }
      }
    loadUser();
  }, [])
  
  console.log("initial user:", state);
  
  return (
    <UserContext.Provider value={{...state, dispatch}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;