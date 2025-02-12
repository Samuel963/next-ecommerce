import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />
            </h6>
            <p>
              Rayssa corte a laser cria peças únicas para os ousados, os criativos e todos que se
              atrevem a se destacar – mas, acima de tudo, para aqueles que valorizam a arte do detalhe e da inovação.
            </p>
            <ul className="site-footer__social-networks">
              {/* 
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play" />
                </a>
              </li>
                */}
              <li>
                <a href="https://www.instagram.com/rayssa_cortealaser/">
                  <i className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Serviços personalizados</li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5581982286330&text=Mais%20informações%20sobre%20apliques">Apliques</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5581982286330&text=Mais%20informações%20sobre%20core%20a%20laser">Corte a laser</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5581982286330&text=Mais%20informações%20sobre%20MDF">MDF</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5581982286330&text=Mais%20informações%20sobre%20sublimados">Sublimados</a>
              </li>
            </ul>
            <ul>
              <li>Endereço</li>
              <li>
                <a href="https://maps.app.goo.gl/mp6W3CtfWfZHZKUe7">Rua São João da Escócia - 285 - Salgado - Caruaru - PE</a>
              </li>
            </ul>
            <ul>
              <li>Contato</li>
              <li>
                <a href="mailto:rayssacortealaser@gmail.com">rayssacortealaser@gmail.com</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=5581982286330">(81) 98228-6330</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>DESENVOLVIDOR POR ES.CO - © 2025.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
