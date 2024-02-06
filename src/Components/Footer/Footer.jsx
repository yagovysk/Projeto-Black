import './Footer.css';

export function Footer() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container">
      <h3 aria-label="Título do rodapé da página">
        <span>Team</span>Black
      </h3>
      <nav className="footer-menu" aria-label="Menu de navegação do rodapé.">
        <ul className="footer-list">
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página inicial."
            onClick={() => handleScrollToSection('home')}>
            Início
          </li>
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página Sobre Mim."
            onClick={() => handleScrollToSection('sobre-mim')}>
            Sobre Mim
          </li>
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página de Serviços."
            onClick={() => handleScrollToSection('servicos')}>
            Serviços
          </li>
          <li
            aria-label="item clicável do menu de navegação do rodapé da página, rolagem para a página de Galeria de fotos."
            onClick={() => handleScrollToSection('galeria')}>
            Galeria
          </li>
        </ul>
      </nav>
      <article
        className="footer-article"
        aria-label="container com botões onde o Professor Black atua.">
        <h3>
          <span>Lugares onde Trabalho</span>
        </h3>
        <a
          aria-label="Botão Instagram Hammer fit Vicente Pires."
          href="https://www.instagram.com/hammerbsb/?igshid=YmMyMTA2M2Y%3D"
          target="blank">
          Hammer Fit
        </a>
        <a
          aria-label="Botão Website Engenharia do Corpo vicente Pires"
          href="https://engenhariadocorpo.com.br/unidade/vicente-pires/"
          target="blank">
          Engenharia do Corpo
        </a>
      </article>
      <a
        className="tgv-button"
        aria-label="botão que redireciona para o portfolio da empresa que desenvolveu o site, Empresa Togyro Group Victory."
        href="https://togyrogroupvictory.com/"
        target="blank">
        Desenvolvido por Togyro <span>Group</span> Victory{' '}
      </a>
    </footer>
  );
}
