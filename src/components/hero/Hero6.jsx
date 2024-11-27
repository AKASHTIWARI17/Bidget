import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

import { useMemo } from "react";
import Link from "next/link";

function Hero6() {
  const slider = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 0,
      loop: true,
      effect: "fade",
      centeredSlides: true,
      roundLengths: true,
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 7000,
      },
      // navigation: {
      //   nextEl: '.hero-next2',
      //   prevEl: '.hero-prev2',
      // },
      pagination: {
        clickable: true,
        el: ".hero-pagination",
      },
    };
  }, []);
  return (
    <div className="hero-area hero-style-dark position-relative">
      <Swiper {...slider} className="swiper hero-slider-dark">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide hero-item hero-item-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7">
                  <div className="hero-content-wrap">
                    <h1>
                      Discover Best <span> Digital Art </span> Design.
                    </h1>
                    <p>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nam at iaculis felis.
                      Etiam quis velit ac augue pretium vulputate ut et mi.
                      Vivamus posuere ut ante non euismod. Phasellus ullamcorper
                      justo tortor, at porta nulla tempor at. Fusce sed ipsum
                      ligula. Praesent tincidunt tortor quis dignissim cursus.
                    </p>
                    <div className="hero-btns">
                      <Link legacyBehavior href="/auction">
                        <a className="gamma-btn-fill">Explore Now</a>
                      </Link>
                      <Link legacyBehavior href="/auction">
                        <a className="gamma-btn-outlined">See More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide hero-item hero-item-two">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7">
                  <div className="hero-content-wrap">
                    <h1>
                      Discover Best <span> Painting Art </span> Design.
                    </h1>
                    <p>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nam at iaculis felis.
                      Etiam quis velit ac augue pretium vulputate ut et mi.
                      Vivamus posuere ut ante non euismod. Phasellus ullamcorper
                      justo tortor, at porta nulla tempor at. Fusce sed ipsum
                      ligula. Praesent tincidunt tortor quis dignissim cursus.
                    </p>
                    <div className="hero-btns">
                      <Link legacyBehavior href="/auction">
                        <a className="gamma-btn-fill">Explore Now</a>
                      </Link>
                      <Link legacyBehavior href="/auction">
                        <a className="gamma-btn-outlined">See More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide hero-item hero-item-one">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7">
                  <div className="hero-content-wrap">
                    <h1>
                      Discover Best <span> Creative Art </span> Design.
                    </h1>
                    <p>
                      Orci varius natoque penatibus et magnis dis parturient
                      montes, nascetur ridiculus mus. Nam at iaculis felis.
                      Etiam quis velit ac augue pretium vulputate ut et mi.
                      Vivamus posuere ut ante non euismod. Phasellus ullamcorper
                      justo tortor, at porta nulla tempor at. Fusce sed ipsum
                      ligula. Praesent tincidunt tortor quis dignissim cursus.
                    </p>
                    <div className="hero-btns">
                      <Link legacyBehavior href="/auction">
                        <a className="gamma-btn-fill">Explore Now</a>
                      </Link>
                      <Link legacyBehavior href="/auction">
                        <a className="gamma-btn-outlined">See More</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="hero-pagination d-lg-flex  flex-column  align-items-center gap-4 d-none position-absolute w-auto" />
    </div>
  );
}

export default Hero6;
