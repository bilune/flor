import React, { useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import works from '../works.json';
import WorkDetail from '../components/WorkDetail';

const WorkPage = ({ match }) => {
  const page = useMemo(() => works.find(work => work.id === match.params.id), [
    match.params.id
  ]);

  if (!page) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <WorkDetail {...page} />
    </Container>
  );
};

export default WorkPage;
