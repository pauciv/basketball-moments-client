import { useAuth0 } from '@auth0/auth0-react';

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className='d-flex align-items-center'>
        <img src={user.picture} alt={user.name} className="img-fluid rounded-circle border border-dark me-2" style={{ width: '40px' }} />
        <p className='m-0 me-2' style={{ fontSize: '18px' }}>{user.name}</p>
      </div>
    )
  );
};

export default User;
