import React from 'react';
import image1 from '../../assets/galeria de fotos team black/image1.jpeg';
import image2 from '../../assets/galeria de fotos team black/image2.jpeg';
import image3 from '../../assets/galeria de fotos team black/image3.jpeg';
import image4 from '../../assets/galeria de fotos team black/image4.jpeg';
import image5 from '../../assets/galeria de fotos team black/image5.jpeg';
import image6 from '../../assets/galeria de fotos team black/image6.jpeg';
import image7 from '../../assets/galeria de fotos team black/image7.jpeg';
import image8 from '../../assets/galeria de fotos team black/image8.jpeg';
import './Galeria.css';

export function Galeria() {
  const photos = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <section id="galeria" className="container-galeria">
      <h2>Nossa Galeria de Fotos</h2>
      <div className="container-photos">
        {photos.map((photo, index) => (
          <div key={index} className="photo-container">
            <img
              src={photo}
              alt={`Imagem ${index + 1} da galeria de fotos team black`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
