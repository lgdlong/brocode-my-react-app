import React, { useState } from 'react';
import CardComponent from './card/CardComponent';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Button from '../button/Button';

export default function CardList() {
  const allCats = [
    { id: 1, name: 'Black', imgPath: '/img/black.jpg', description: 'He is just black.' },
    { id: 2, name: 'Fly', imgPath: '/img/fly.jpg', description: 'Supercat can fly.' },
    { id: 3, name: 'Larry', imgPath: '/img/larry.jpg', description: 'Larry will find you at night.' },
    { id: 4, name: 'Shower', imgPath: '/img/shower.jpg', description: 'Sad cat take shower.' },
    { id: 5, name: 'Hitler', imgPath: '/img/hitler-cat.jpg', description: 'Hitler cat irl, pls do not adopt him.' },
    { id: 6, name: 'Habibi', imgPath: '/img/habibi-cat.jpg', description: 'Ling ga ling ga ling.' },
    { id: 7, name: 'Long Face', imgPath: '/img/long-face.jpg', description: 'If u has long face, hoomen will come.' },
    { id: 8, name: 'Sigma', imgPath: '/img/sigma-cat.jpg', description: 'Sigma sigma cat, sigma cat, sigma cat.' },
  ];

  const [cats, setCats] = useState(allCats); // ✅ manage state

  const showEvenCats = () => {
    setCats(allCats.filter((cat, index) => index % 2 === 0));
  };

  const showOddCats = () => {
    setCats(allCats.filter((cat, index) => index % 2 !== 0));
  };

  const showAllCats = () => {
    setCats(allCats);
  }

  const hideButton = (e) => e.target.style.display="none";


  return (
    <Container className="mt-5">
      <div className="mb-4 text-center d-flex justify-content-center gap-3">
        <Button onClick={showEvenCats} label={"Show Even Cats"} />
        <Button onClick={showOddCats} label={"Show Odd Cats"} />
        <Button onClick={showAllCats} label={"Show All Cats"} />
        <Button onClick={(e) => hideButton(e)} label={"Hide Button"} />
      </div>

      <Row className="justify-content-center text-center mt-3">
        {cats.map((cat) => (
          <Col className='mb-3' key={cat.id} xs={12} sm={6} md={4} lg={3}>
            <CardComponent cat={cat} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

CardList.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      imgPath: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

CardList.defaultProps = {
  category: 'Cats',
  items: [],
};
