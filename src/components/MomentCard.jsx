import React from 'react';
import { Card } from 'react-bootstrap';

const MomentCard = () => {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img
        variant="top"
        src="https://media.giphy.com/media/3oEjHIPW937PZ7zzLq/giphy.gif"
        className="mb-2 text-muted"
      />
      <Card.Body className="d-flex justify-content-between p-1">
        <Card.Title>username</Card.Title>
        <div>
          <Card.Link href="#">Link</Card.Link>
          <Card.Link href="#">Like</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MomentCard;
