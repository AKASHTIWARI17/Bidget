import winnerData from "../../data/winnerData.json";
import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Navigation, Autoplay, EffectFade]);

function TopWinner2() {
  const slide = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1000,
      spaceBetween: 24,
      loop: true,
      roundLengths: true,
      autoplay: {
        delay: 9000,
      },
      navigation: {
        nextEl: ".winner-next",
        prevEl: ".winner-prev",
      },

      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
        1600: {
          slidesPerView: 6,
        },
      },
    };
  }, []);
  return (
    <div className="top-winner-area top-winnner-style-two mt-110">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-header-two">
              <h3>Top winner</h3>
            </div>
          </div>
        </div>
        <Swiper {...slide} className="swiper winner-slider position-relative">
          <div className="swiper-wrapper ">
            {winnerData.map((item) => {
              const { id, img, name, winnerId } = item;
              return (
                <SwiperSlide key={id} className="swiper-slide">
                  <div className="winner-gamma">
                    <div className="winner-image">
                      <img src={img} alt="" />
                    </div>
                    <div className="winner-info">
                      <h5 className="winner-name">
                        <Link legacyBehavior href="/winner">
                          <a>{name}</a>
                        </Link>
                      </h5>
                      <p className="id">{winnerId}</p>
                      <Link legacyBehavior href="/winner">
                        <a className="meta">
                          <i className="bi bi-bag-plus" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        {/* arrows */}
        <div className="slider-arrows text-center d-lg-flex d-none ">
          <div
            className="winner-prev swiper-prev-arrow"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          >
            {" "}
            <i className="bi bi-arrow-left" />{" "}
          </div>
          <div
            className="winner-next swiper-next-arrow"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          >
            <i className="bi bi-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopWinner2;
