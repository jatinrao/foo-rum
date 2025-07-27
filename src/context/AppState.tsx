'use client';

import { createContext, useReducer, useContext, ReactNode } from 'react';

const initialState = {
  isAuthenticated: false,
  openAuth: false,
  user: null,
};

function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, user: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null };
    case 'OPEN_AUTH_MODAL':
      return { ...state, openAuth: true };
    case 'CLOSE_AUTH_MODAL':
      return { ...state, openAuth: false };
    default:
      return state;
  }
}

const AppStateContext = createContext<any>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppStateContext() {
  return useContext(AppStateContext);
}
