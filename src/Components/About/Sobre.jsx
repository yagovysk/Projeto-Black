import img from '../../assets/img-about.jpeg';
import { FaSquareWhatsapp } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import './Sobre.css';

export function Sobre() {
  return (
    <section className="container-sobre">
      <div className="container-article">
        <article className="container-card">
          <h2>Um pouco sobre mim</h2>
          <p>
              Meu nome é Antônio Sousa, tenho 37 anos, conhecido como
              Treinador Sousa Black. Pós-Graduado em Gerontologia, foco em
              treinos adaptados para idosos, obesidade, ganho de massa, perda
              de peso. Leciono Aula de Boxe, para iniciantes e competidores.
              Busco promover bem-estar e superação em cada treino.
              Comprometido com a saúde e condicionamento dos meus alunos.
          </p>
          <div className="container-icon">
            <a
              href="https://wa.me/556199725414?text=Olá, vim pelo site, gostaria de saber os planos Sousa Black."
              target="blank">
              <FaSquareWhatsapp className="card-icon" />
            </a>
            <a
              href="https://www.instagram.com/sousablackoficial/"
              target="blank">
              <FaInstagramSquare className="card-icon" />
            </a>
          </div>
        </article>
      </div>
      <div className="container-sobre-img">
        <img id="sobre-mim" src={img} alt="" />
      </div>
    </section>
  );
}

