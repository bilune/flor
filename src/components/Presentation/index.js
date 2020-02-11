import React from 'react';

const Hero = ({ title }) => {
  return (
    <div className="presentation">
      <h1 className="presentation__title display-4">{title}</h1>
    </div>
  );
};

export default Hero;
