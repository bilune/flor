import React from 'react';

const Hero = ({ title }) => {
  return (
    <div className="hero">
      <h1 className="hero-title display-4">{title}</h1>
    </div>
  );
};

export default Hero;
