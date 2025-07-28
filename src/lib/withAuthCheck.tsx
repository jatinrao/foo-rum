type AuthCheckOptions = {
  isAuthenticated: boolean;
  openAuthModal: () => void;
};


export function withAuthCheck(
  action: () => void,
  { isAuthenticated, openAuthModal }: AuthCheckOptions
) {
  return () => {
    if (isAuthenticated) {
      action();
    } else {
      openAuthModal();
    }
  };
}
