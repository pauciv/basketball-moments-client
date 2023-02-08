import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';

const Login = () => {
  const { user } = useAuth0();
  return (
    <>
      <LoginButton />
      <p>
        Don't have an account?{' '}
        <Link to="/register">Register free</Link>
      </p>
    </>
  );
};

export default Login;
