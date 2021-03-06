/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const About = ({ image }) => {
  const sendEmail = e => {
    e.preventDefault();
    const { dataset } = e.target;
    window.location.href = `mailto:${dataset.name}@${dataset.domain}.${dataset.tld}`;
    return false;
  };
  return (
    <div className="about">
      <div className="about__text">
        <h2 className="about__title">Sobre mí</h2>
        <div className="about__image-container">
          {image && <img className="about__image" src={image} alt="" />}
        </div>
        <div className="about__paragraphs">
          <p>
            Hola, mi nombre es Florencia Herrera y soy Diseñadora Gráfica
            (ESAV). Actualmente vivo en la ciudad de Bahía Blanca, Argentina.
          </p>
          <p>
            Me gusta el orden y la claridad en mis actividades, soy responsable,
            minuciosa y comprometida con aquello que se me propone.{' '}
          </p>
          <p>
            Soy una diseñadora con múltiples intereses y capacidades, que da su
            100% en cada desafío y trabajo que se me presente.
          </p>
          <p>
            Siempre abierta a nuevos desafíos y en constante proceso de
            aprendizaje. Si querés saber más sobre mí,{' '}
            <a
              data-name="f.herrera"
              data-domain="hotmail"
              data-tld="com.ar"
              href="/#"
              onClick={sendEmail}
            >
              contactame
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
