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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            facere veniam, quia suscipit non porro fugit repellat pariatur
            exercitationem, accusamus nobis quod laudantium autem rem dolor quae
            quas aperiam maiores.
          </p>
          <div className="container-icon">
            <a href="" target="blank">
              <FaSquareWhatsapp className="card-icon" />
            </a>
            <a href="" target="blank">
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
