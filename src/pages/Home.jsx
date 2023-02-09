import { useQuery } from '@tanstack/react-query';
import { Col, Row } from 'react-bootstrap';
import { fetchGetAll } from '../api';
import MomentCard from '../components/MomentCard';

const Home = ({ categoryFilter }) => {
  const { data: moments, status: momentsStatus } = useQuery(
    ['moments', 'moments'],
    async () => fetchGetAll('moments')
  );

  const filteredMoments = moments?.filter(
    (moment) => moment.category === categoryFilter
  );
  console.log("filteredMoments", filteredMoments)

  return !categoryFilter ? (
    <Row md={3} xs={1} lg={5} className="g-3 mb-5">
      {moments?.map((moment) => (
        <Col key={moment._id}>
          <MomentCard {...moment} />
        </Col>
      ))}
    </Row>
  ) : (
    <Row md={3} xs={1} lg={5} className="g-3 mb-5">
      {filteredMoments?.map((moment) => (
        <Col key={moment._id}>
          <MomentCard {...moment} />
        </Col>
      ))}
    </Row>
  );
};

export default Home;
