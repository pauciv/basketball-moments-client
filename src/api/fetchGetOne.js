const fetchGetOne = async (key, id) => {
    try {
      const res = await fetch(`http://localhost:4000/api/v1/${key}/${id}`);
      const data = await res.json();
      console.log(data);
      return data;
    } catch (err) {
      console.log(`Fail fetching ${key}/${id}`);
    }
  };
  
  export default fetchGetOne;