import React from 'react';
import { Container, Row } from 'reactstrap';
import About from '../components/About';
import me from '../assets/images/me.jpg';

const AboutPage = () => {
  return (
    <Container>
      <Row>
        <About image={me} />
      </Row>
    </Container>
  );
};

export default AboutPage;
