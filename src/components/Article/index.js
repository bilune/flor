import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Col, Button } from 'reactstrap';
const getImg = require.context('../../assets/images', true);

const Article = ({ id, image, title, description, invert }) => {
  return (
    <article className="article row my-5 my-md-0">
      <Col md="6" className={clsx(invert && 'offset-md-1')}>
        <Link to={`/works/${id}`}>
          {image && (
            <div className="article__image-container">
              <img
                className="article__image"
                src={getImg('./' + image)}
                alt={title}
              />
            </div>
          )}
        </Link>
      </Col>
      <Col
        md="5"
        className={clsx(
          'd-flex',
          'flex-column',
          'justify-content-center',
          !invert && 'offset-md-1',
          invert && 'order-md-first',
          'my-3 my-md-0'
        )}
      >
        <Link to={`/works/${id}`}>
          <h2 className="article__title">{title}</h2>
          <p className="article__description">{description}</p>
        </Link>
        <Button
          outline={!invert}
          className={clsx(
            'article__button',
            invert ? 'align-self-start' : 'align-self-end'
          )}
          color="warning"
          size="sm"
        >
          Más proyectos como este
        </Button>
      </Col>
    </article>
  );
};

export default Article;
