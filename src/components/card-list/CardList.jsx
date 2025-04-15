import React from 'react';
import CardComponent from './card/CardComponent';
import { Container, Row, Col } from 'react-bootstrap';

export default function CardList() {
  const cats = [
    { id: 1, name: 'Black', imgPath: 'public/img/black.jpg', description: 'He is just black.' },
    { id: 2, name: 'Fly', imgPath: 'public/img/fly.jpg', description: 'Supercat can fly.' },
    { id: 3, name: 'Larry', imgPath: 'public/img/larry.jpg', description: 'Larry will find you at night.' },
    { id: 4, name: 'Shower', imgPath: 'public/img/shower.jpg', description: 'Sad cat take shower.' },
  ];

  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        {cats.map((cat) => (
          <Col key={cat.id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent cat={cat} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
