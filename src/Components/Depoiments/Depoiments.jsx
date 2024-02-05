import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { MdArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import img1 from '../../assets/img-depoiments1.jpeg';
import img2 from '../../assets/img-depoiments2.jpeg';
import img3 from '../../assets/img-depoiments3.jpeg';
import stars from '../../assets/stars.png';
import './Depoiments.css';

export function Depoiments() {
  const customArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    fontSize: '24px',
    zIndex: 1,
  };

  const CustomArrowPrev = ({ onClick }) => (
    <div
      style={{ ...customArrowStyles, left: '20px', color: '#b10e0e' }}
      onClick={onClick}
      title="Previous">
      <MdOutlineArrowBackIosNew className="icon-left" />
    </div>
  );

  const CustomArrowNext = ({ onClick }) => (
    <div
      style={{ ...customArrowStyles, right: '20px', color: '#b10e0e' }}
      onClick={onClick}
      title="Next">
      <MdArrowForwardIos className="icon-right" />
    </div>
  );
  return (
    <section id="depoiments" className="depoiments-container">
      <Carousel
        className="carousel-depoiments"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CustomArrowPrev onClick={() => onClickHandler()} />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CustomArrowNext onClick={() => onClickHandler()} />
        }>
        <div className="card-depoiments">
          <img
            className="perfil"
            src={img1}
            alt="imagem do aluno Will, com uniforme vermelho desferindo um soco direto de direita na cara do oponente de uniforme azul."
          />
          <article className="depoiments-texts">
            <img
              className="stars-icon"
              src={stars}
              alt="icone dos depoimentos, estrelas douradas"
            />
            <h2>
              <span>Aluno:</span> Will
            </h2>
            <p>
              Não consigo expressar a gratidão que tenho por ter começado a
              treinar com o Professor Black. Ele é um mentor dedicado e
              talentoso, e com a sua ajuda, consegui superar meus desafios na
              minha primeira luta, alcançando a minha primeira vitória.
            </p>
          </article>
        </div>
        <div className="card-depoiments">
          <img
            className="perfil"
            src={img2}
            alt="foto de perfil da aluna, foto indica transição, em uma ela está gordinha e na outra está magra e bem de saúde."
          />
          <article className="depoiments-texts">
            <img className="stars-icon" src={stars} alt="icones de estrelas" />
            <h2>
              <span>Aluna:</span> Jéssica
            </h2>
            <p>
              Há três meses, iniciei uma jornada incrível de transformação ao
              lado do Professor Black como meu personal trainer. Hoje, estou
              emocionada ao refletir sobre o progresso que alcancei,
              especialmente em minha saúde e bem-estar.
            </p>
          </article>
        </div>
        <div className="card-depoiments">
          <img className="perfil" src={img3} alt="" />
          <article className="depoiments-texts">
            <img className="stars-icon" src={stars} alt="icones de estrelas" />
            <h2>
              <span>Aluno:</span> Luiz Felipe
            </h2>
            <p>
              Foi muito divertido ter a ajuda do professor Black. Me ensinou
              muito sobre o boxe, no início o medo de lutar era algo que me
              segurava, com sua orientação eu consegui superar meu medo, não
              apenas aprendi técnicas sólidas de luta, mas também descobri uma
              força interior que nem sabia que possuía.
            </p>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
