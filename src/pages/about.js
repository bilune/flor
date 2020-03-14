import React from 'react';
import { Container, Row } from 'reactstrap';
import About from '../components/About';
import me from '../assets/images/me.jpg';
import Helmet from 'react-helmet';

const AboutPage = () => {
  return (
    <Container>
      <Helmet title="Sobre mí" />
      <Row>
        <About image={me} />
      </Row>
    </Container>
  );
};

export default AboutPage;
