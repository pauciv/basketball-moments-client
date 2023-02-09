const fetchGetAll = async (key) => {
  try {
    const res = await fetch(`http://localhost:4000/api/v1/${key}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(`Fail fetching ${key}`);
  }
};

export default fetchGetAll;
