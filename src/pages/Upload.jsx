import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { fetchCreateNewMoment, fetchGetAll } from '../api';
import categories from '../utils/categories';

const Upload = () => {
  const { user } = useAuth0();

  const { data: users, status: usersStatus } = useQuery(
    ['users', 'users'],
    async () => fetchGetAll('users')
  );

  const owner = users.find(u => u.email === user.email)
  console.log(owner?._id)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const createMoment = async ({ url, category }) => {
    const newMoment = {
      file: url,
      category: category,
      ownership: owner?._id,  
    };

    const data = await fetchCreateNewMoment(newMoment)
    console.log(data)
  };

  return (
    <>
      <Form
        className="mb-5 mt-4"
        onSubmit={handleSubmit((data) => createMoment(data))}
      >
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <Form.Label>Enter any media or GIF URL</Form.Label>
          <Form.Control
            type="text"
            {...register('url', {
              // required: true,
            })}
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Form.Select
            aria-label="Default select example"
            className="me-3"
            {...register('category', {
              // required: true,
            })}
          >
            <option>Choose one category</option>
            {categories.map((category) => (
              <option
                value={category}
                key={Math.floor(Math.random() * 1000000) + 1}
              >
                {category}
              </option>
            ))}
          </Form.Select>
          <Button variant="outline-success" type="submit">
            Upload
          </Button>
        </div>
      </Form>

      {/* <hr /> */}

      {/* <Form
        className="mt-4"
        onSubmit={handleSubmit((data) => createMoment(data))}
      >
        <Form.Group controlId="formFile" className="mb-3 me-2 w-100">
          <Form.Label>Upload a file</Form.Label>
          <Form.Control
            type="file"
            {...register('file', {
              // required: true,
            })}
          />
        </Form.Group>
        <div className="d-flex justify-content-between">
          <Form.Select
            aria-label="Default select example"
            className="me-3"
            {...register('category', {
              // required: true,
            })}
          >
            <option>Choose one category</option>
            {categories.map((category) => (
              <option
                value={category}
                key={Math.floor(Math.random() * 1000000) + 1}
              >
                {category}
              </option>
            ))}
          </Form.Select>
          <Button variant="outline-success" type="submit">
            Upload
          </Button>
        </div>
      </Form> */}
    </>
  );
};

export default Upload;
