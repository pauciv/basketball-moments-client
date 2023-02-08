import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoutes = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    loginWithRedirect();
  }

  return isAuthenticated && children;
};

export default PrivateRoutes;
