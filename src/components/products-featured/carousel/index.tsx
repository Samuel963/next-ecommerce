// import Swiper core and required components
import { Swiper, SwiperSlide } from "swiper/react";

import { getId } from "@/utils/getID";

import ProductItem from "../../product-item";

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const ProductsCarousel = ({ products }: any) => {
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        loop
        centeredSlides={centeredSlides}
        watchOverflow
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {products.map((item: any, index: any) => (
          <SwiperSlide key={item.id}>
            <ProductItem
              id={item.id}
              name={getId(item.id)}
              price={item.price}
              color={item.color}
              discount={item.discount}
              currentPrice={item.currentPrice}
              key={index}
              thumb={item.thumb}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
