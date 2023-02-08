import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <p
      onClick={() => logout({ returnTo: window.location.origin })}
      className="m-0"
    >
      Log out
    </p>
  );
};

export default LogoutButton;
