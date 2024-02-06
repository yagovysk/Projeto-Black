import { MdArrowForwardIos } from 'react-icons/md';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/service-img1.jpeg';
import img2 from '../../assets/service-img2.jpeg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css';

export function Services() {
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
      style={{ ...customArrowStyles, left: '20px' }}
      onClick={onClick}
      title="Previous">
      <MdOutlineArrowBackIosNew className="icon-left" />
    </div>
  );

  const CustomArrowNext = ({ onClick }) => (
    <div
      style={{ ...customArrowStyles, right: '20px' }}
      onClick={onClick}
      title="Next">
      <MdArrowForwardIos className="icon-right" />
    </div>
  );
  return (
    <section id="servicos" className="container-services">
      <h3>Serviços</h3>
      <Carousel
        className="container-carousel"
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
        <div className="service-card">
          <div className="container-img">
            <img
              className="img"
              src={img2}
              alt="Primeira imagem do carrosel de serviços."
            />
          </div>
          <article className="services-texts">
            <h2>Aulas de Boxe</h2>
            <p>
              Desafie-se, aprenda técnicas de boxe e faça parte de uma
              comunidade apaixonada. O Professor Black adapta as aulas para
              todos os níveis, desde iniciantes até experientes. Melhore sua
              forma física e desenvolva habilidades de defesa pessoal de uma
              maneira divertida e acolhedora.
            </p>
          </article>
        </div>
        <div className="service-card">
          <div className="container-img">
            <img
              className="img-2"
              src={img1}
              alt="Segunda imagem do carrosel de serviços."
            />
          </div>
          <article className="services-texts">
            <h2>Personal Trainer</h2>
            <p>
              Com planos personalizados, o Professor Black ajuda você a atingir
              suas metas de forma segura. Seja para perda de peso, ganho de
              massa muscular ou uma vida mais saudável, receba orientação
              especializada e um plano adaptado às suas necessidades.
            </p>
          </article>
        </div>
      </Carousel>
    </section>
  );
}
