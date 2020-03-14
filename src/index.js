import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import Router from './router';
import Helmet from 'react-helmet';

ReactDOM.render(
  <>
    <Helmet defaultTitle="Flor Herrera" titleTemplate="%s · Flor Herrera" />
    <Router />
  </>,
  document.getElementById('root')
);
