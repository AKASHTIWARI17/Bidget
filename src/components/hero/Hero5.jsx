import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);

import "swiper/css/pagination";
import React, { useMemo } from "react";
import Link from "next/link";
import Timer from "../common/Timer";

const  MemoizedTimer = React.memo(Timer)
function Hero5() {
  const slider = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 0,
      loop: false,
      effect: "fade",
      centeredSlides: true,
      roundLengths: true,
      fadeEffect: {
        crossFade: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' +0 + (index + 1) + "</span>";
        },
      },
      // autoplay: {
      //   delay: 7000,
      // },
    };
  }, []);
  return (
    <div className="hero-area hero-style-three position-relative">
      <img
        src="assets/images/banner/bannr-left-btm.png"
        className="left-btm"
        alt=""
      />
      <img
        src="assets/images/banner/bannr-left-top.png"
        className="left-top"
        alt=""
      />
      <img
        src="assets/images/banner/bannr-art.png"
        className="text-art"
        alt=""
      />
      <img
        src="assets/images/banner//bannr-mid-top.png"
        className="mid-top"
        alt=""
      />
      <Swiper {...slider} className="swiper hero-slider-three">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid banner-bg-color">
              <div className="row g-0 d-flex align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="banner-left-area">
                    <div className="text-center">
                      <a
                        href="#"
                        className="banner-badge d-inline-block text-center"
                      >
                        Start In
                      </a>
                    </div>
                    <div className="banner-countdwn mb-3" id="timer">
                      <ul className="d-flex justify-content-center gap-3">
                        <MemoizedTimer formate="counter6" />
                      </ul>
                    </div>
                    <div className="banner3-title text-lg-start text-center">
                      <h1>
                        Discover Best <span>Digital Art</span> Design.
                      </h1>
                    </div>
                    <div className="design-info">
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/images/banner/info-img.png" alt="" />
                        </div>
                        <p className="author-name">By Mason Michael</p>
                      </div>
                      <div className="price">
                        <p>
                          Form <span>$100</span>
                        </p>
                      </div>
                    </div>
                    <div className="btn-group gap-4">
                      <Link legacyBehavior href="/auction-details">
                        <a className="eg-btn btn-fil">Bid Now</a>
                      </Link>
                      <Link legacyBehavior href="/auction">
                        <a className="eg-btn btn-outline">Explore</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-lg-block for-hight d-none">
                  <div className="banner-right-image">
                    <img
                      src="assets/images/banner/hone3-bannerbg.jpg"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid banner-bg-color">
              <div className="row g-0 d-flex align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="banner-left-area">
                    <div className="text-center">
                      <a
                        href="#"
                        className="banner-badge d-inline-block text-center"
                      >
                        Start In
                      </a>
                    </div>
                    <div className="banner-countdwn mb-3" id="timer1">
                      <ul className="d-flex justify-content-center gap-3">
                        <MemoizedTimer formate="counter6" />
                      </ul>
                    </div>
                    <div className="banner3-title text-lg-start text-center">
                      <h1>
                        Discover Best <span>Painting Art</span> Design.
                      </h1>
                    </div>
                    <div className="design-info">
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/images/banner/info-img.png" alt="" />
                        </div>
                        <p className="author-name">By Mason Michael</p>
                      </div>
                      <div className="price">
                        <p>
                          Form <span>$100</span>
                        </p>
                      </div>
                    </div>
                    <div className="btn-group gap-4">
                      <Link legacyBehavior href="/auction-details">
                        <a className="eg-btn btn-fil">Bid Now</a>
                      </Link>
                      <Link legacyBehavior href="/auction">
                        <a className="eg-btn btn-outline">Explore</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                  <div className="banner-right-image">
                    <img
                      src="assets/images/banner/home3b2.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="container-fluid banner-bg-color">
              <div className="row g-0 d-flex align-items-center">
                <div className="col-xl-6 col-lg-6">
                  <div className="banner-left-area">
                    <div className="text-center">
                      <a
                        href="#"
                        className="banner-badge d-inline-block text-center"
                      >
                        Start In
                      </a>
                    </div>
                    <div className="banner-countdwn mb-3" id="timer3">
                      <ul className="d-flex justify-content-center gap-3">
                        <MemoizedTimer formate="counter6" />
                      </ul>
                    </div>
                    <div className="banner3-title text-lg-start text-center">
                      <h1>
                        Discover Best <span>Creative Art</span> Design.
                      </h1>
                    </div>
                    <div className="design-info">
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/images/banner/info-img.png" alt="" />
                        </div>
                        <p className="author-name">By Mason Michael</p>
                      </div>
                      <div className="price">
                        <p>
                          Form <span>$100</span>
                        </p>
                      </div>
                    </div>
                    <div className="btn-group gap-4">
                      <Link legacyBehavior href="/auction-details">
                        <a className="eg-btn btn-fil">Bid Now</a>
                      </Link>
                      <Link legacyBehavior href="/auction">
                        <a className="eg-btn btn-outline">Explore</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 d-lg-block d-none">
                  <div className="banner-right-image">
                    <img
                      src="assets/images/banner/home3b3.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="swiper-pagination number-pagination" />
    </div>
  );
}

export default Hero5;
