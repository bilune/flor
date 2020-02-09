import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Col } from 'reactstrap';
const getImg = require.context('../../assets/images', true);

const Article = ({ id, image, title, description, invert }) => {
  return (
    <Link className="article row py-5" to={`/works/${id}`}>
      <Col md="6" className={clsx(invert && 'offset-md-1')}>
        {image && (
          <div className="article__image-container">
            <img className="article__image" src={getImg('./' + image)} alt="" />
          </div>
        )}
      </Col>
      <Col
        md="5"
        className={clsx(
          'd-flex',
          'flex-column',
          'justify-content-center',
          !invert && 'offset-md-1',
          invert && 'order-first'
        )}
      >
        <h2 className="article__title">{title}</h2>
        <p className="article__description">{description}</p>
      </Col>
    </Link>
  );
};

export default Article;
