import React from 'react';
import video from '../../assets/videos/hero-video.mp4';
import logo from '../../assets/vectors/logo.svg';
import { Container } from 'reactstrap';

const Hero = () => {
  return (
    <Container fluid className="hero">
      <video autoPlay muted loop className="hero__bg">
        <source src={video} type="video/mp4" />
      </video>
      <Container className="hero__container">
        <img className="hero__logo" src={logo} alt="" />
      </Container>
    </Container>
  );
};

export default Hero;
