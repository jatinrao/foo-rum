'use client';

import {
  createContext,
  useReducer,
  useContext,
  ReactNode,
  Dispatch,
} from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  profile: string;
}

interface AppState {
  isAuthenticated: boolean;
  openAuth: boolean;
  user: User | null;
}

type Action =
  | { type: 'LOGIN'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'OPEN_AUTH_MODAL' }
  | { type: 'CLOSE_AUTH_MODAL' };

const initialState: AppState = {
  isAuthenticated: false,
  openAuth: false,
  user: null,
};

function reducer(state: AppState, action: Action): AppState {
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

interface AppStateContextType {
  state: AppState;
  dispatch: Dispatch<Action>;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppStateContext(): AppStateContextType {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppStateContext must be used within AppStateProvider');
  }
  return context;
}
