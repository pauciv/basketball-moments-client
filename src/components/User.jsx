import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { fetchCreateNewUser, fetchGetAll } from '../api';

const User = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user);

  const { data: users, status: usersStatus } = useQuery(
    ['users', 'users'],
    async () => fetchGetAll('users')
  );
  console.log('users', users);

  if (isAuthenticated) {
    const isUserRegistered = users?.find((u) => u.email === user.email);
    console.log(isUserRegistered);

    if (isUserRegistered === undefined) {
      console.log('isUserRegistered', isUserRegistered);

      const newUser = {
        username: user?.nickname,
        email: user?.email,
        firstName: user?.given_name || name,
        lastName: user?.family_name || '',
        avatar: user?.picture,
      };

      fetchCreateNewUser(newUser);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="d-flex align-items-center">
        <img
          src={user.picture}
          alt={user.name}
          className="img-fluid rounded-circle border border-dark me-2"
          style={{ width: '40px' }}
        />
        <p className="m-0 me-2" style={{ fontSize: '18px' }}>
          {user.nickname}
        </p>
      </div>
    )
  );
};

export default User;
