import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Card } from 'react-bootstrap';
import { fetchGetAll } from '../api';

const MomentCard = ({ _id, file, ownership, category }) => {

  const { data: users, status: usersStatus } = useQuery(
    ['users', 'users'],
    async () => fetchGetAll('users')
  );

  const owner = users?.find(u => u._id === ownership)

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={file}
        height="200px"
        style={{ objectFit: "cover" }}
        className="mb-2 text-muted"
      />
      <Card.Body className="d-flex justify-content-between p-1">
        <Card.Title>{owner?.username}</Card.Title>
        <div>
          <Card.Link href={file} target="_blank">Link</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MomentCard;
