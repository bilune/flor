import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

import works from '../works.json';

const Home = ({ match }) => {
  const filteredWorks = useMemo(
    () => works.filter(work => work.category === match.params.id),
    [match.params.id]
  );

  const title = useMemo(() => {
    const s = String(match.params.id)
      .split('-')
      .join(' ');

    return `${s.charAt(0).toUpperCase()}${s.substring(1)}`;
  }, [match.params.id]);

  if (filteredWorks.length === 0) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Helmet title={title} />
      <div
        className="container-fluid"
        id="works"
        style={{ background: '#f8f8f8' }}
      >
        <Container className="py-5">
          <h2 className="work__title">{title}</h2>
          {filteredWorks.map((work, i) => (
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
