import React, { createContext, useContext, useReducer } from 'react';
import Reducer from './reducers';
export const initialState = {
  modal: { isOpen: false },
  settings: { name: null, speed: 1 },
  game: { isEnd: false, isCrash: false },
};
const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppState = () => useContext(AppContext);
export { AppProvider, useAppState, AppContext };
