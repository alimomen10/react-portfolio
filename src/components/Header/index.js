import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero() {
  return (
    <Container className='d-flex justify-content-center mt-4'>
      <Row>
        <Col>
        <div className=''>
            <h1>The Creative Code</h1>
        </div>
        <div className='ms-1'>
            <p >Ali Momen is an accomplished actor and artist who has graced the largest stages and most prolific screens across North America.  He's also a techie who believes that the best products are at the intersection of art and technology.</p>
            <p>Ali brings with him a wealth of knowledge from the creative world so that he will be the source of your next best idea and how to implement it.</p>
        </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;