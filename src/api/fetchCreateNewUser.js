const fetchCreateNewUser = async (user = {}) => {
  try {
    const res = await fetch(`http://localhost:4000/api/v1/users`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('An error occurred when creating the user');
  }
};

export default fetchCreateNewUser;
