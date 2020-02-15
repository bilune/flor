import React from 'react';

const Hero = ({ title, cta, getCtaElem }) => {
  const handleClick = e => {
    e.preventDefault();
    const ctaElem = getCtaElem();
    if (!ctaElem) return;
    ctaElem.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <div className="presentation">
      <h1 className="presentation__title display-4">{title}</h1>
      {cta && (
        <a
          href="#works"
          onClick={handleClick}
          className="presentation__cta d-block mt-4 pt-4"
        >
          {cta}
        </a>
      )}
    </div>
  );
};

export default Hero;
