import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ title, rating });
  };

  return (
    <Form className="mb-4">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            placeholder="Search by rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </Col>
        <Col>
          <Button variant="primary" onClick={handleFilter}>
            Filter
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
