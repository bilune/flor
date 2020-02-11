import React from 'react';
import video from '../../assets/videos/hero-video.mp4';
import video1 from '../../assets/videos/hero-video1.mp4';
import video2 from '../../assets/videos/hero-video2.mp4';
import logo from '../../assets/vectors/logo.svg';
import { Container } from 'reactstrap';

const videos = [video, video1, video2];

const Hero = () => {
  const randomVideo = videos[Math.floor(Math.random() * videos.length)];
  return (
    <Container fluid className="hero">
      <video autoPlay muted loop className="hero__bg">
        <source src={randomVideo} type="video/mp4" />
      </video>
      <Container className="hero__container">
        <img className="hero__logo" src={logo} alt="" />
      </Container>
    </Container>
  );
};

export default Hero;
