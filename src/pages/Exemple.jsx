import React from 'react';
import image1 from '../assets/image.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image1.jpeg';
import '../style/Exemple.css';

const Exemple = () => {
  return (
    <div className="carousel-banner">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100 banner-img" alt="image 1" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-white fw-bold">Bienvenue sur notre site</h1>
              <p className="lead">Découvrez notre univers unique</p>
              <a href="#decouvrir" className="btn btn-primary mt-3">Découvrir</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100 banner-img" alt="image 2" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-white fw-bold">Une Expérience Exceptionnelle</h1>
              <p className="lead">Qualité, professionnalisme et passion</p>
              <a href="#services" className="btn btn-success mt-3">Nos services</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100 banner-img" alt="image 3" />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center">
              <h1 className="text-white fw-bold">Rejoignez-nous</h1>
              <p className="lead">Construisons ensemble le futur</p>
              <a href="#contact" className="btn btn-warning mt-3">Contactez-nous</a>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Précédent</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Suivant</span>
        </button>
      </div>
    </div>
  );
};

export default Exemple;
