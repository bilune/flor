import React, { useRef } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Presentation from '../components/Presentation';
import Article from '../components/Article';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import works from '../works.json';

const Home = () => {
  const worksContainer = useRef();
  const getRef = () => worksContainer.current;
  return (
    <>
      <Hero />
      <Container>
        <Row className="my-5 py-5">
          <Col>
            <Presentation
              title={
                <>
                  Hola, soy Flor Herrera – <br /> diseñadora gráfica de Bahía
                  Blanca, Argentina.
                </>
              }
              cta="¿Querés saber qué hago?"
              getCtaElem={getRef}
            />
          </Col>
        </Row>
      </Container>
      <div
        className="container-fluid"
        ref={worksContainer}
        id="works"
        style={{ background: '#f8f8f8' }}
      >
        <Container className="py-5">
          {works.map((work, i) => (
            <Article
              invert={i % 2}
              key={work.id}
              id={work.id}
              title={work.title}
              description={work.description}
              image={work.cover}
            />
          ))}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
