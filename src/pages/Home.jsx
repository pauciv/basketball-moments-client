import React from 'react';
import { Card } from 'react-bootstrap';
import MomentCard from '../components/MomentCard';

const Home = () => {
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
