import img from '../../assets/img-home.png';
import './Home.css';

export function Home() {
  return (
    <section
      aria-label="container que contém a página Home."
      className="container-home">
      <article
        aria-label="Caixa de Textos da página Home."
        id="home"
        className="container-texts">
        <h1 aria-label="Título da página Home.">Team Black</h1>
        <p aria-label="Parágrafo da página Home.">
          Meu trabalho não é facilitar seu treino. É mostrar que você é capaz!
          Explore seus limites.
        </p>
        <div className="container-button">
          <a
            aria-label="Botão para contato com o professor Black para agendamento de aula experimental grátis."
            className="contact-button"
            href="#"
            target="blank">
            Aula Experimental grátis.
          </a>
        </div>
      </article>
      <div className="container-img">
        <img src={img} alt="Imagem do professor Black olhando para cima." />
      </div>
    </section>
  );
}
