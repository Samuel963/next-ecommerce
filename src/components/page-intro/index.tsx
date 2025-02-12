import SwiperCore, { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const PageIntro = () => {
  SwiperCore.use([EffectFade, Navigation]);

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/products/IMG_0335.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Tudo em Apliques e Sublimaçoes</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/products/IMG_0336.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Novos Modelos</h2>
                <a href="/products" className="btn-shop">
                  <i className="icon-right" />
                  Compre agora!
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li style={{ width: "33%" }}>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>Entrega rápida</h4>
                <p>Mais praticidade</p>
              </div>
            </li>

            <li style={{ width: "33%" }}>
              <i className="icon-shipping" />
              <div className="data-item__content">
                <h4>Disponibilidade</h4>
                <p>Consulta de Disponibilidade</p>
              </div>
            </li>

            <li style={{ width: "33%" }}>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Segurança na hora de pedir</h4>
                <p>Garantia para seu pedido</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
