import React from 'react';
const getImg = require.context('../../assets/images', true);

const WorkDetail = ({ title, description, images }) => {
  return (
    <div className="work">
      <h2 className="work__title">{title}</h2>
      <p className="work__description">{description}</p>
      {images.map(image => (
        <img key={image} className="work__image" src={getImg('./' + image)} alt="" />
      ))}
    </div>
  );
};

export default WorkDetail;
