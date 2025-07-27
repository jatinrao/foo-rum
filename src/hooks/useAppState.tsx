import { useAppStateContext } from '../context/AppState';

export default function useAppState() {
  const { state, dispatch } = useAppStateContext();

  const login = (user: { name: string; email: string }) =>
    dispatch({ type: 'LOGIN', payload: user });

  const logout = () => dispatch({ type: 'LOGOUT' });

  const setOpenAuth = (open: boolean) =>
    dispatch({ type: open ? 'OPEN_AUTH_MODAL' : 'CLOSE_AUTH_MODAL' });

  return {
    ...state,
    login,
    logout,
    setOpenAuth,
  };
}