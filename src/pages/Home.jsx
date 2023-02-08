import MomentCard from '../components/MomentCard';

const Home = () => {
  const fetchKey = async (key) => {
    try {
      const res = await fetch(`http://localhost:4000/api/v1/${key}`);
      const data = await res.json();
      console.log(data)
      return data;
    } catch (err) {
      console.log(`Fail fetching ${key}`);
    }
  };

  fetchKey('moments')

  return (
    <MomentCard />
    // <Row md={2} xs={1} lg={3} className="g-3">
    //   {storeItems.map((item) => (
    //     <Col key={item.id}>
    //       <StoreItem {...item} />
    //     </Col>
    //   ))}
    // </Row>
  );
};

export default Home;
