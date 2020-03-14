import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import works from '../works.json';
import WorkDetail from '../components/WorkDetail';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

const WorkPage = ({ match }) => {
  const page = useMemo(() => works.find(work => work.id === match.params.id), [
    match.params.id
  ]);

  if (!page) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Container>
        <Helmet title={page.title} />
        <WorkDetail {...page} />
      </Container>
      <Footer />
    </>
  );
};

export default WorkPage;
