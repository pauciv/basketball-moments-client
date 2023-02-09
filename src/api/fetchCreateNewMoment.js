const fetchCreateNewMoment = async (moment = {}) => {
  try {
    const res = await fetch(`http://localhost:4000/api/v1/moments`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(moment),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('An error occurred when creating the moment');
  }
};

export default fetchCreateNewMoment;
