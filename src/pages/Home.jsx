import { useQuery } from '@tanstack/react-query';
import { Col, Row } from 'react-bootstrap';
import { fetchGetAll } from '../api';
import MomentCard from '../components/MomentCard';
import categories from '../utils/categories';

const Home = ({ categoryFilter }) => {
  const { data: moments, status: momentsStatus } = useQuery(
    ['moments', 'moments'],
    async () => fetchGetAll('moments')
  );

  const filteredMoments = () => {
    categories.map((category) => {
      if (categoryFilter === category) {
        const mo = moments.filter((m) => m.category === categoryFilter);
        console.log('moments', mo);
        return mo;
      }
    });
  };

  return (
    !categoryFilter && (
      <Row md={3} xs={1} lg={5} className="g-3">
        {moments?.map((moment) => (
          <Col key={moment._id}>
            <MomentCard {...moment} />
          </Col>
        ))}
      </Row>
    )
  );
};

export default Home;
