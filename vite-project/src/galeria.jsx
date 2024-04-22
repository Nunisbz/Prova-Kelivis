import React from 'react';
import './Gallery.css';

const Galeria = () => {
  const images = [
    { src: 'imagem1.png', alt: 'Descrição da imagem 1' },
    { src: 'imagem2.png', alt: 'Descrição da imagem 2' },
    { src: 'imagem3.png', alt: 'Descrição da imagem 3' },
    { src: 'imagem4.png', alt: 'Descrição da imagem 4' },
    { src: 'imagem5.png', alt: 'Descrição da imagem 5' },
    { src: 'imagem6.png', alt: 'Descrição da imagem 6' },
    { src: 'imagem7.png', alt: 'Descrição da imagem 7' },
    { src: 'imagem8.png', alt: 'Descrição da imagem 8' },
    { src: 'imagem9.png', alt: 'Descrição da imagem 9' },
  ];

  return (
    <div className="container">
      <h2>Fotos do aniversário do Rogérinho</h2>
      <p>A parada é boa</p>
      <div className="galeria">
        {images.map((image, index) => (
          <div className="galeria-item" key={index}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;